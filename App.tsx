import React, { useState, useEffect, useRef } from 'react';
import { ViewState, ModalState, Track } from './types';
import { Sidebar } from './components/Sidebar';
import { BottomPlayer } from './components/BottomPlayer';
import { HomeView } from './views/HomeView';
import { LocalMusicView } from './views/LocalMusicView';
import { CinemaView } from './views/CinemaView';
import { EqualizerModal } from './components/EqualizerModal';
import { SettingsModal } from './components/SettingsModal';
import { IMAGES } from './constants'; 

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [modal, setModal] = useState<ModalState>(null);
  
  // Audio Engine State
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // PWA Install Prompt State
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    // Fixed: Removed unused 'choiceResult' parameter
    installPrompt.userChoice.then(() => {
      setInstallPrompt(null);
    });
  };

  // Audio Logic
  useEffect(() => {
    if (currentTrack && audioRef.current) {
        audioRef.current.src = currentTrack.fileUrl;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error("Playback failed", e));
    }
  }, [currentTrack]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
        const newTracks: Track[] = Array.from(event.target.files).map((file) => ({
            id: crypto.randomUUID(),
            title: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
            artist: 'Local File',
            album: 'Unknown Album',
            duration: '--:--',
            coverUrl: IMAGES.profile, // Default icon
            fileUrl: URL.createObjectURL(file)
        }));

        setPlaylist(prev => [...prev, ...newTracks]);
        setCurrentView('library');
        
        // Auto play first added song if nothing is playing
        if (!currentTrack && newTracks.length > 0) {
            setCurrentTrack(newTracks[0]);
        }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
  };

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
  };

  const nextTrack = () => {
    if (!currentTrack || playlist.length === 0) return;
    const currentIndex = playlist.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentTrack(playlist[nextIndex]);
  };

  const prevTrack = () => {
    if (!currentTrack || playlist.length === 0) return;
    const currentIndex = playlist.findIndex(t => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrack(playlist[prevIndex]);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
        setProgress(audioRef.current.currentTime);
        setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (time: number) => {
    if (audioRef.current) {
        audioRef.current.currentTime = time;
        setProgress(time);
    }
  };

  const triggerFileUpload = () => {
      fileInputRef.current?.click();
  };

  return (
    <div className="relative flex min-h-screen w-full bg-charcoal text-slate-200 font-sans selection:bg-primary/30 overflow-hidden">
      
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextTrack}
        onLoadedMetadata={handleTimeUpdate}
      />

      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileSelect} 
        multiple 
        accept="audio/*" 
        className="hidden" 
      />

      {/* Desktop Sidebar */}
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView} 
        installPrompt={installPrompt}
        onInstall={handleInstallClick}
        onAddFiles={triggerFileUpload}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Header */}
        <header className="sticky top-0 z-40 flex items-center bg-charcoal/80 backdrop-blur-md px-4 py-3 justify-between border-b border-white/5 shrink-0">
          <div className="flex items-center gap-3 md:hidden">
            <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-white">menu</span>
            </button>
            <h1 className="text-white text-lg font-bold tracking-tight">Godo</h1>
          </div>
          <div className="hidden md:flex items-center gap-3">
             <h2 className="text-xl font-bold text-white tracking-tight">
                {currentView === 'home' ? 'Dashboard' : currentView === 'cinema' ? 'Now Playing' : 'Local Library'}
             </h2>
          </div>

          <div className="flex items-center gap-2">
            {installPrompt && (
               <button 
                  onClick={handleInstallClick}
                  className="md:hidden flex items-center gap-1 px-3 py-1.5 bg-primary/20 text-primary rounded-full text-xs font-bold mr-2"
               >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Install
               </button>
            )}

            <div className="flex items-center bg-white/5 rounded-full p-1 gap-1 border border-white/5">
                <button 
                    onClick={() => setCurrentView('library')}
                    className={`size-8 flex items-center justify-center rounded-full transition-colors ${currentView === 'library' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                    <span className="material-symbols-outlined text-lg">view_list</span>
                </button>
                <button 
                    onClick={() => setCurrentView('home')}
                    className={`size-8 flex items-center justify-center rounded-full transition-colors ${currentView === 'home' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                    <span className="material-symbols-outlined text-lg">grid_view</span>
                </button>
                <button 
                    onClick={() => setCurrentView('cinema')}
                    className={`size-8 flex items-center justify-center rounded-full transition-colors ${currentView === 'cinema' ? 'bg-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                    <span className="material-symbols-outlined text-lg">movie</span>
                </button>
            </div>
            <button 
                onClick={() => setModal('settings')}
                className="size-9 ml-2 rounded-full overflow-hidden border border-white/10 active:scale-95 transition-transform"
            >
                <img src={IMAGES.profile} alt="Profile" className="size-full object-cover" />
            </button>
          </div>
        </header>

        {/* Scrollable View Area */}
        <div className="flex-1 overflow-y-auto hide-scrollbar scroll-smooth">
            {currentView === 'home' && (
              <HomeView 
                onChangeView={setCurrentView} 
                playingAlbumId={null}
                onPlayAlbum={() => {}}
              />
            )}
            {currentView === 'library' && (
                <LocalMusicView 
                    tracks={playlist} 
                    currentTrack={currentTrack}
                    onPlay={playTrack}
                    onAddFiles={triggerFileUpload}
                />
            )}
            {currentView === 'cinema' && <CinemaView onChangeView={setCurrentView} />}
        </div>
      </div>

      {/* Persistent Player */}
      <BottomPlayer 
        onOpenEqualizer={() => setModal('equalizer')} 
        currentModal={modal}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onNext={nextTrack}
        onPrev={prevTrack}
        progress={progress}
        duration={duration}
        onSeek={handleSeek}
      />

      {/* Modals */}
      <EqualizerModal isOpen={modal === 'equalizer'} onClose={() => setModal(null)} />
      <SettingsModal isOpen={modal === 'settings'} onClose={() => setModal(null)} />

    </div>
  );
};

export default App;

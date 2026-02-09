import React from 'react';
import { IMAGES } from '../constants';
import { ModalState, Track } from '../types';

interface BottomPlayerProps {
    onOpenEqualizer: () => void;
    currentModal: ModalState;
    currentTrack: Track | null;
    isPlaying: boolean;
    onTogglePlay: () => void;
    onNext: () => void;
    onPrev: () => void;
    progress: number;
    duration: number;
    onSeek: (time: number) => void;
}

const formatTime = (seconds: number) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const BottomPlayer: React.FC<BottomPlayerProps> = ({ 
    onOpenEqualizer, 
    currentModal,
    currentTrack,
    isPlaying,
    onTogglePlay,
    onNext,
    onPrev,
    progress,
    duration,
    onSeek
}) => {
    // If no track is loaded, you might want to show a placeholder state
    const displayTitle = currentTrack ? currentTrack.title : "Ready to Play";
    const displayArtist = currentTrack ? currentTrack.artist : "Select a local file";
    const displayCover = currentTrack ? currentTrack.coverUrl : IMAGES.profile;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] glass border-t border-white/10 pt-2 pb-6 px-4 flex flex-col gap-2 shadow-2xl">
            {/* Progress Bar */}
            <div className="flex items-center gap-3 w-full group cursor-pointer">
                <span className="text-[10px] font-medium text-slate-500 w-8 text-right font-mono">{formatTime(progress)}</span>
                <div className="relative flex-1 h-1 bg-white/10 rounded-full overflow-visible group/bar">
                    <input 
                        type="range" 
                        min="0" 
                        max={duration || 100} 
                        value={progress}
                        onChange={(e) => onSeek(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                    />
                    <div 
                        className="absolute inset-y-0 left-0 bg-primary rounded-full pointer-events-none" 
                        style={{ width: `${duration ? (progress / duration) * 100 : 0}%` }}
                    >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 size-3 bg-white rounded-full shadow-lg opacity-0 group-hover/bar:opacity-100 transition-opacity scale-0 group-hover/bar:scale-100"></div>
                    </div>
                </div>
                <span className="text-[10px] font-medium text-slate-500 w-8 font-mono">{formatTime(duration)}</span>
            </div>

            <div className="flex items-center justify-between gap-4">
                {/* Track Info */}
                <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="size-12 rounded-lg bg-surface border border-white/10 overflow-hidden shrink-0 shadow-lg shadow-black/40 group relative">
                        <img src={displayCover} alt="Active track" className="size-full object-cover" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <p className="text-white text-sm font-bold truncate">{displayTitle}</p>
                        <p className="text-slate-500 text-[11px] font-medium truncate">{displayArtist}</p>
                    </div>
                </div>

                {/* Main Controls */}
                <div className="flex items-center gap-2 sm:gap-6 shrink-0">
                    <button onClick={onPrev} className="material-symbols-outlined text-slate-400 text-2xl hover:text-white transition-colors">skip_previous</button>
                    <button 
                        onClick={onTogglePlay}
                        className="flex size-12 items-center justify-center bg-white text-charcoal rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
                    >
                        <span className="material-symbols-outlined text-3xl fill-1 ml-0.5">
                            {isPlaying ? 'pause' : 'play_arrow'}
                        </span>
                    </button>
                    <button onClick={onNext} className="material-symbols-outlined text-slate-400 text-2xl hover:text-white transition-colors">skip_next</button>
                </div>

                {/* Secondary Controls */}
                <div className="flex items-center gap-3 flex-1 justify-end">
                    <button 
                        onClick={onOpenEqualizer}
                        className={`material-symbols-outlined text-xl transition-colors ${currentModal === 'equalizer' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
                    >
                        graphic_eq
                    </button>
                    <div className="hidden sm:flex items-center gap-2 group w-24">
                        <span className="material-symbols-outlined text-slate-500 text-lg">volume_up</span>
                        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-slate-500 group-hover:bg-primary transition-colors rounded-full"></div>
                        </div>
                    </div>
                    <button className="material-symbols-outlined text-slate-400 text-xl hover:text-white hidden sm:block">fullscreen</button>
                </div>
            </div>
        </div>
    );
};
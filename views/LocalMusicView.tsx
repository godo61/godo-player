import React from 'react';
import { Track } from '../types';

interface LocalMusicViewProps {
    tracks: Track[];
    currentTrack: Track | null;
    onPlay: (track: Track) => void;
    onAddFiles: () => void;
}

export const LocalMusicView: React.FC<LocalMusicViewProps> = ({ tracks, currentTrack, onPlay, onAddFiles }) => {
    
    // Stats calculation removed as it was unused and causing build errors

    return (
        <main className="flex-1 overflow-y-auto pb-32 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Stats Header */}
            <div className="px-4 pt-6">
                <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[140px] flex flex-col gap-1 rounded-2xl p-5 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                             <span className="material-symbols-outlined text-primary text-lg">music_note</span>
                        </div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Songs</p>
                        <p className="text-white text-2xl font-black leading-tight">{tracks.length}</p>
                    </div>
                    <div 
                        onClick={onAddFiles}
                        className="flex-1 min-w-[140px] flex flex-col gap-1 rounded-2xl p-5 bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer active:scale-95 group"
                    >
                        <div className="size-8 rounded-full bg-primary flex items-center justify-center mb-2 shadow-lg shadow-primary/30">
                             <span className="material-symbols-outlined text-white text-lg">add</span>
                        </div>
                        <p className="text-primary text-xs font-bold uppercase tracking-wider">Add Music</p>
                        <p className="text-white text-sm font-medium leading-tight opacity-80 group-hover:opacity-100">Import from Device</p>
                    </div>
                </div>
            </div>

            {/* List Header */}
            <div className="flex items-center justify-between px-6 pb-2 pt-8">
                <h3 className="text-white text-xl font-bold tracking-tight">Your Files</h3>
                {tracks.length > 0 && (
                    <button className="flex items-center gap-1 text-primary font-bold text-sm hover:text-blue-400 transition-colors active:scale-95">
                        <span className="material-symbols-outlined text-lg">shuffle</span>
                        Shuffle
                    </button>
                )}
            </div>

            {/* Empty State */}
            {tracks.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 px-4 text-center opacity-50">
                    <span className="material-symbols-outlined text-6xl text-slate-600 mb-4">folder_off</span>
                    <p className="text-white font-bold text-lg">No Music Found</p>
                    <p className="text-slate-400 text-sm max-w-xs mt-2">Tap "Add Music" to select audio files from your device storage.</p>
                </div>
            )}

            {/* Table Header */}
            {tracks.length > 0 && (
                <div className="flex items-center px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 sticky top-0 bg-charcoal/95 backdrop-blur-sm z-10">
                    <div className="w-10 text-center">#</div>
                    <div className="flex-1 pl-4">Title</div>
                    <div className="w-16 text-right pr-2">Format</div>
                </div>
            )}

            {/* List */}
            <div className="flex flex-col divide-y divide-white/5 px-2">
                {tracks.map((track, idx) => {
                    const isActive = currentTrack?.id === track.id;
                    return (
                        <div 
                            key={track.id} 
                            onClick={() => onPlay(track)}
                            className={`flex items-center p-3 rounded-xl transition-all duration-200 group cursor-pointer ${isActive ? 'bg-primary/10 border border-primary/20' : 'hover:bg-white/5 border border-transparent'}`}
                        >
                            <div className={`w-10 text-center font-bold text-sm ${isActive ? 'text-primary' : 'text-slate-500'}`}>
                                {isActive ? <span className="material-symbols-outlined text-base animate-pulse">bar_chart</span> : idx + 1}
                            </div>
                            <div className="flex flex-1 items-center gap-3 pl-2">
                                <div className="relative size-10 rounded-md overflow-hidden shrink-0 bg-surface">
                                    <img src={track.coverUrl} alt={track.album} className="size-full object-cover" />
                                    <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                        <span className="material-symbols-outlined text-white text-sm">{isActive ? 'volume_up' : 'play_arrow'}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <p className={`font-bold truncate text-sm ${isActive ? 'text-primary' : 'text-white'}`}>{track.title}</p>
                                    <p className="text-slate-400 text-xs truncate">{track.artist}</p>
                                </div>
                            </div>
                            <div className="w-16 text-right text-slate-500 text-[10px] font-medium font-mono pr-2 uppercase">Local</div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

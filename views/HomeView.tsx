import React from 'react';
import { IMAGES, ALBUMS } from '../constants';
import { ViewState } from '../types';

interface HomeViewProps {
    onChangeView: (view: ViewState) => void;
    playingAlbumId: number | null;
    onPlayAlbum: (id: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onChangeView, playingAlbumId, onPlayAlbum }) => {
    return (
        <main className="flex flex-col gap-6 p-4 pb-32 animate-in fade-in duration-500">
            {/* Featured Video */}
            <section className="w-full">
                <div 
                    onClick={() => onChangeView('cinema')}
                    className="aspect-video relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl group cursor-pointer border border-white/5"
                >
                    <img 
                        src={IMAGES.midnightCityVideo} 
                        alt="Music video playback frame" 
                        className="size-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="size-16 flex items-center justify-center rounded-full bg-primary/90 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-4xl fill-1 ml-1">play_arrow</span>
                        </button>
                    </div>
                    {/* Fake Progress */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                        <div className="h-full bg-primary w-1/3"></div>
                    </div>
                    {/* Live Badge */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg">Live</span>
                    </div>
                </div>
                <div className="mt-3 px-1">
                    <h2 className="text-white font-bold text-lg leading-tight">Midnight City (Official Video)</h2>
                    <p className="text-slate-400 text-sm font-medium">M83 • Electronic • 2.4M Views</p>
                </div>
            </section>

            {/* Local Library Grid */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold text-lg">Local Library</h3>
                    <button className="flex items-center gap-1.5 py-1.5 px-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-xs font-semibold text-primary transition-all active:scale-95">
                        <span className="material-symbols-outlined text-sm">add_circle</span>
                        Add Folder
                    </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {ALBUMS.map((album) => {
                        const isPlaying = playingAlbumId === album.id;
                        return (
                            <div 
                                key={album.id} 
                                className="flex flex-col gap-2 group cursor-pointer" 
                                onClick={() => onPlayAlbum(album.id)}
                            >
                                <div className={`relative aspect-square rounded-xl overflow-hidden bg-surface shadow-lg transition-all duration-300 ${isPlaying ? 'border-2 border-primary shadow-primary/20' : 'border border-white/5'}`}>
                                    <img 
                                        src={album.coverUrl} 
                                        alt={album.title} 
                                        className={`size-full object-cover transition-transform duration-500 ${isPlaying ? 'scale-105 opacity-60' : 'group-hover:scale-105'}`}
                                    />
                                    
                                    {/* Hover Play Button (shown when not playing) */}
                                    {!isPlaying && (
                                        <div className="absolute bottom-2 right-2 size-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <span className="material-symbols-outlined text-white text-lg fill-1">play_arrow</span>
                                        </div>
                                    )}

                                    {/* Playing State Overlay */}
                                    {isPlaying && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                                            <div className="size-10 rounded-full bg-primary flex items-center justify-center shadow-xl animate-in zoom-in duration-300">
                                                <span className="material-symbols-outlined text-white text-xl">equalizer</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <p className={`text-sm font-bold truncate transition-colors ${isPlaying ? 'text-primary' : 'text-white group-hover:text-primary'}`}>{album.title}</p>
                                    <p className="text-slate-400 text-xs truncate">{album.artist}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};
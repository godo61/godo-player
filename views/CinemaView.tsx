import React from 'react';
import { IMAGES, ALBUMS } from '../constants';
import { ViewState } from '../types';

interface CinemaViewProps {
    onChangeView: (view: ViewState) => void;
}

export const CinemaView: React.FC<CinemaViewProps> = ({ onChangeView }) => {
    return (
        <div className="flex-1 overflow-y-auto bg-charcoal animate-in zoom-in-95 duration-300 pb-32">
            <div className="w-full px-4 pt-4">
                <button onClick={() => onChangeView('home')} className="mb-4 flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span className="text-sm font-bold">Back to Dashboard</span>
                </button>

                <div className="aspect-video relative group w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <img 
                        src={IMAGES.midnightCityVideo} 
                        alt="Video Player Poster" 
                        className="size-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="size-20 bg-primary/90 rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 backdrop-blur-sm hover:scale-110 transition-transform cursor-pointer">
                            <span className="material-symbols-outlined text-5xl fill-1 ml-1 text-white">play_arrow</span>
                        </div>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 text-white">4K Ultra HD</span>
                        <span className="bg-red-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-red-500/20">Live</span>
                    </div>
                    
                    {/* Fake Controls Overlay on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-full h-1 bg-white/20 rounded-full mb-4">
                             <div className="w-1/3 h-full bg-primary rounded-full relative">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 size-3 bg-white rounded-full"></div>
                             </div>
                        </div>
                        <div className="flex justify-between items-center text-white">
                             <div className="flex gap-4">
                                <span className="material-symbols-outlined">play_arrow</span>
                                <span className="material-symbols-outlined">volume_up</span>
                             </div>
                             <span className="material-symbols-outlined">fullscreen</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Midnight City (Official Music Video)</h2>
                    <p className="text-slate-400 text-sm font-medium">M83 • Electronic / Synthwave • 2011</p>
                </div>
            </div>

            <div className="px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">More from M83</h3>
                    <button className="text-primary text-sm font-bold hover:text-white transition-colors">View All</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {ALBUMS.slice(0, 4).map((album) => (
                        <div key={album.id} className="flex flex-col gap-2 group cursor-pointer">
                            <div className="aspect-square rounded-2xl overflow-hidden relative border border-white/5 bg-surface">
                                <img src={album.coverUrl} alt="Album Cover" className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 justify-end">
                                    <button className="size-10 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-xl fill-1">play_arrow</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-sm truncate text-white">{album.title}</p>
                                <p className="text-xs text-slate-500 truncate">{album.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

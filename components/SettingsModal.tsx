import React from 'react';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-charcoal border border-white/10 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
                <div className="flex items-center justify-between p-5 border-b border-white/5">
                    <h2 className="text-xl font-bold text-white">Advanced Settings</h2>
                    <button onClick={onClose} className="size-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-5 space-y-8 hide-scrollbar">
                    {/* Audio Engine */}
                    <section>
                        <div className="flex items-center gap-2 mb-4 text-primary">
                            <span className="material-symbols-outlined">graphic_eq</span>
                            <h3 className="text-xs font-bold uppercase tracking-wider">Audio Engine</h3>
                        </div>
                        <div className="space-y-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-200 text-sm font-medium">Normalize Volume</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-200 text-sm font-medium">Gapless Playback</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Equalizer Quick Select */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined">equalizer</span>
                                <h3 className="text-xs font-bold uppercase tracking-wider">Equalizer</h3>
                            </div>
                            <button className="text-xs font-bold text-primary hover:text-blue-400">Edit All</button>
                        </div>
                        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                            {['Bass Boost', 'Flat', 'Rock', 'Pop', 'Jazz', 'Electronic'].map((preset, idx) => (
                                <button 
                                    key={preset}
                                    className={`flex-shrink-0 px-4 py-2 text-xs font-bold rounded-full border transition-all ${idx === 0 ? 'bg-primary border-primary text-white' : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'}`}
                                >
                                    {preset}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Library */}
                    <section>
                        <div className="flex items-center gap-2 mb-4 text-primary">
                            <span className="material-symbols-outlined">folder_open</span>
                            <h3 className="text-xs font-bold uppercase tracking-wider">Library & Folders</h3>
                        </div>
                        <div className="space-y-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">File Extensions to Scan</label>
                                <input 
                                    type="text" 
                                    defaultValue=".wav; .mp3; .flac"
                                    className="bg-charcoal border border-white/10 rounded-xl text-sm text-white px-3 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                                />
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-white font-bold transition-all border border-white/5 active:scale-95">
                                <span className="material-symbols-outlined">add</span>
                                Add Folder
                            </button>
                        </div>
                    </section>
                </div>

                <div className="p-5 border-t border-white/5 flex gap-3 bg-charcoal rounded-b-3xl">
                    <button className="flex-1 py-3 px-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-transform hover:bg-blue-600">
                        <span className="material-symbols-outlined text-xl">refresh</span>
                        Scan Now
                    </button>
                </div>
            </div>
        </div>
    );
};
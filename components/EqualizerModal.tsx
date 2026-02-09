import React from 'react';

interface EqualizerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const EqualizerModal: React.FC<EqualizerModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const bands = [
        { freq: '32', val: 75 },
        { freq: '64', val: 60 },
        { freq: '125', val: 50 },
        { freq: '250', val: 40 },
        { freq: '500', val: 50 },
        { freq: '1k', val: 55 },
        { freq: '2k', val: 65 },
        { freq: '4k', val: 75 },
        { freq: '8k', val: 60 },
        { freq: '16k', val: 50 },
    ];

    return (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-md bg-[#111422] sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden border border-white/10 animate-in slide-in-from-bottom-10 duration-300">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                    <div>
                        <h2 className="text-white text-xl font-bold tracking-tight">Equalizer</h2>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-0.5">Local Audio Engine</p>
                    </div>
                    <button onClick={onClose} className="size-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </div>

                {/* Preset Config */}
                <div className="px-6 py-4">
                    <div className="relative">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Preset Configuration</label>
                        <div className="relative">
                            <select className="appearance-none w-full bg-[#191e33] border border-white/5 text-white py-3 px-4 pr-10 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary font-medium text-sm">
                                <option>Flat</option>
                                <option selected>Bass Boost</option>
                                <option>Electronic</option>
                                <option>Rock</option>
                                <option>Vocal Enhancer</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                <span className="material-symbols-outlined text-sm">unfold_more</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visualizer Area */}
                <div className="px-4 py-6 relative h-64">
                    {/* dB Markers */}
                    <div className="absolute left-4 top-6 bottom-14 flex flex-col justify-between text-[10px] font-bold text-slate-600 pointer-events-none select-none">
                        <span>+12</span>
                        <span>+6</span>
                        <span>0</span>
                        <span>-6</span>
                        <span>-12</span>
                    </div>

                    {/* Bands */}
                    <div className="flex justify-between items-end h-full px-8 pb-8 gap-2">
                        {bands.map((band, idx) => (
                            <div key={idx} className="flex flex-col items-center h-full group w-full">
                                <div className="relative w-1.5 h-full bg-[#1e2439] rounded-full mb-3 flex flex-col justify-end overflow-hidden">
                                    <div 
                                        className="w-full bg-primary transition-all duration-300 ease-out" 
                                        style={{ height: `${band.val}%` }}
                                    ></div>
                                    {/* Thumb Handle Simulation */}
                                    <div 
                                        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full shadow-lg shadow-primary/40 cursor-grab active:cursor-grabbing transition-all hover:scale-110" 
                                        style={{ bottom: `calc(${band.val}% - 8px)` }}
                                    ></div>
                                </div>
                                <span className="text-[9px] font-bold text-slate-500">{band.freq}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Controls */}
                <div className="px-6 pb-8 pt-4 flex items-center justify-between border-t border-white/5 bg-[#111422]">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-400 hover:bg-white/5 transition-colors uppercase tracking-wide">
                        <span className="material-symbols-outlined text-base">restart_alt</span>
                        Reset
                    </button>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-white">Enabled</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-[#232948] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { ViewState } from '../types';

interface SidebarProps {
    currentView: ViewState;
    onChangeView: (view: ViewState) => void;
    className?: string;
    installPrompt?: any;
    onInstall?: () => void;
    onAddFiles?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, className = '', installPrompt, onInstall, onAddFiles }) => {
    const navItems = [
        { id: 'home', icon: 'home', label: 'Home' },
        { id: 'library', icon: 'library_music', label: 'Library' },
        { id: 'files', icon: 'folder_open', label: 'Local Files' },
    ];

    return (
        <aside className={`bg-charcoal border-r border-white/5 p-6 flex-col h-full hidden md:flex ${className}`}>
            <div className="mb-10 text-primary text-2xl font-black italic tracking-tighter">GODO</div>
            
            <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                    const isActive = currentView === (item.id === 'files' ? 'library' : item.id);
                    return (
                        <button 
                            key={item.id}
                            onClick={() => onChangeView(item.id === 'files' ? 'library' : item.id as ViewState)}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${isActive ? 'bg-white/5 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <span className={`material-symbols-outlined transition-colors ${isActive ? 'text-primary' : 'group-hover:text-white'}`}>{item.icon}</span>
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            <div className="mt-auto space-y-3">
                {installPrompt && (
                    <button 
                        onClick={onInstall}
                        className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/5 animate-in fade-in slide-in-from-bottom-2"
                    >
                        <span className="material-symbols-outlined text-primary">download</span>
                        <span className="font-bold text-sm">Install App</span>
                    </button>
                )}
                <button 
                    onClick={onAddFiles}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-primary rounded-xl text-white font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 transition-colors active:scale-95"
                >
                    <span className="material-symbols-outlined">add</span>
                    Add Files
                </button>
            </div>
        </aside>
    );
};
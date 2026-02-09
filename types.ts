export interface Track {
    id: string; // Changed to string for UUIDs
    title: string;
    artist: string;
    album: string;
    duration: string;
    coverUrl: string;
    fileUrl: string; // URL.createObjectURL blob
}

export interface Album {
    id: number;
    title: string;
    artist: string;
    coverUrl: string;
}

export type ViewState = 'home' | 'library' | 'cinema';
export type ModalState = null | 'equalizer' | 'settings';
import create from 'zustand';

interface IAppState {
    isOnProjects: boolean;
    setIsOnProjects: (isOnProjects: boolean) => void;
    isexpandedInfo: boolean;
    setExpandedInfo: (expandedInfo: boolean) => void;
    selectedProject: number;
    setSelectedProject: (selectedProject: number) => void;
}

export const useAppStore = create<IAppState>((set) => ({
    isOnProjects: true,
    setIsOnProjects: (isOnProjects: boolean) => set((state) => ({ ...state, isOnProjects })),
    isexpandedInfo: false,
    setExpandedInfo: (isexpandedInfo: boolean) => set((state) => ({ ...state, isexpandedInfo })),
    selectedProject: -1,
    setSelectedProject: (selectedProject: number) => set((state) => ({ ...state, selectedProject })),
}));


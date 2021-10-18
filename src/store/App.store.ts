import create from 'zustand';

interface IAppState {
    isOnProjects: boolean;
    setIsOnProjects: (isOnProjects: boolean) => void;
    isExpanded: boolean;
    setIsExpanded: (expandedInfo: boolean) => void;
    selectedProject: number;
    setSelectedProject: (selectedProject: number) => void;
}

export const useAppStore = create<IAppState>((set) => ({
    isOnProjects: false,
    setIsOnProjects: (isOnProjects: boolean) => set((state) => ({ ...state, isOnProjects })),
    isExpanded: false,
    setIsExpanded: (isExpanded: boolean) => set((state) => ({ ...state, isExpanded})),
    selectedProject: -1,
    setSelectedProject: (selectedProject: number) => set((state) => ({ ...state, selectedProject })),
}));


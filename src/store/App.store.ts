import create from 'zustand';

import { IProject } from 'api/IProject';
import { Services } from 'api/Services';

interface IAppState {
    isOnProjects: boolean;
    isExpanded: boolean;
    selectedProject: number;
    projects: IProject[];
    isLoadingProjects: boolean;
    fetchProjects: () => Promise<number>;
    setIsOnProjects: (isOnProjects: boolean) => void;
    setIsExpanded: (expandedInfo: boolean) => void;
    setSelectedProject: (selectedProject: number) => void;
}

export const useAppStore = create<IAppState>((set) => ({
    isOnProjects: false,
    isExpanded: false,
    selectedProject: -1,
    projects: [],
    isLoadingProjects: true,
    fetchProjects: async ():Promise<number> => {
        const projects:IProject[] = await Services.fetchProjects();
        set({ projects, isLoadingProjects: false });
        return projects.length;
    },
    setIsOnProjects: (isOnProjects: boolean) => set((state) => ({ ...state, isOnProjects })),
    setIsExpanded: (isExpanded: boolean) => set((state) => ({ ...state, isExpanded})),
    setSelectedProject: (selectedProject: number) => set((state) => ({ ...state, selectedProject })),
}));


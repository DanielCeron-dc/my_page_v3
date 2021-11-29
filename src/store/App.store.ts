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
    setSelectedProject: (selectedProjectId: string) => void;
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
    setSelectedProject: (selectedProjectId: string) => {
        set((state) => {
            if (!state.isOnProjects) {
                return { ...state, selectedProject: -1, isExpanded: false };
            }
            console.log(state.isOnProjects);
            const selectedProject = state.projects.findIndex(project => {
                return project._id === selectedProjectId;
            });
            return { ...state, selectedProject };
        })
    },
}));


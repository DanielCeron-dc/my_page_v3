import { subscribeWithSelector } from 'zustand/middleware'
import create from 'zustand';

import { IProject } from 'api/IProject';
import { Services } from 'api/Services';
import colors, { shadeColor } from 'tools/colors';



interface IAppState {
    isOnProjects: boolean;
    theme: {
        primary: string;
        secondary: string;
    };
    isExpanded: boolean;
    selectedProject: number;
    projects: IProject[];
    isLoadingProjects: boolean;
    fetchProjects: () => Promise<number>;
    setIsOnProjects: (isOnProjects: boolean) => void;
    setIsExpanded: (expandedInfo: boolean) => void;
    setSelectedProject: (selectedProjectId: string) => void;
    changeTheme: (theme: string) => void;
}

export const useAppStore = create<IAppState>()(subscribeWithSelector((set) => ({
    isOnProjects: false,
    isExpanded: false,
    selectedProject: -1,
    projects: [],
    isLoadingProjects: true,
    theme: {
        primary: colors.blue,
        secondary: shadeColor(colors.blue, -20)
    },
    fetchProjects: async (): Promise<number> => {
        const projects: IProject[] = await Services.fetchProjects();
        set({ projects, isLoadingProjects: false });
        return projects.length;
    },
    setIsOnProjects: (isOnProjects: boolean) => set((state) => ({ ...state, isOnProjects })),
    setIsExpanded: (isExpanded: boolean) => set((state) => ({ ...state, isExpanded })),
    setSelectedProject: (selectedProjectId: string) => {
        set((state: IAppState) => {
            if (!state.isOnProjects) {
                return { ...state, selectedProject: -1, isExpanded: false };
            }
            const selectedProject = state.projects.findIndex(project => {
                return project._id === selectedProjectId;
            });
            return { ...state, selectedProject };
        })
    },
    changeTheme: (theme: string) => set((state) => {

        document.documentElement.style.setProperty('--theme', colors[theme as keyof typeof colors]);
        document.documentElement.style.setProperty('--theme-dark', shadeColor(colors[theme as keyof typeof colors], -20));

        return ({
            ...state,
            theme: {
                primary: colors[theme as keyof typeof colors],
                secondary: shadeColor(colors[theme as keyof typeof colors], -20)
            }
        })
    }),
})));


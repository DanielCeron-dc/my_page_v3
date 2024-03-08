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
        primary: colors.green,
        secondary: shadeColor(colors.green, -20)
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

        let color = colors[theme as keyof typeof colors]
        if (!color) {
            color = colors.green;
        }

        document.documentElement.style.setProperty('--theme', color);
        document.documentElement.style.setProperty('--theme-dark', shadeColor(color, -20));

        localStorage.setItem('theme', theme);

        return ({
            ...state,
            theme: {
                primary: color,
                secondary: shadeColor(color, -20)
            }
        })
    }),
})));


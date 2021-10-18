import create from "zustand";
import {projects} from "../tools/informationProjects";

interface IState {
    boxesNumber: number;
    positions: [number, number, number][];
    dragging: number;
    setPosition: (id: number, positions: [number, number, number]) => void;
    setDragging: (id: number, dragging: boolean) => void;
}

const projectsLength: number = projects.length;

export const usePhysicsBoxesStore = create<IState>((set) => ({
    boxesNumber: projectsLength,
    positions: new Array(projectsLength).fill([Math.random() * 100, 30, Math.random() * 100]),
    dragging: -1,
    setPosition: (id: number, newpositions: [number, number, number]) => {
        set((state) => {
            let positionsCopy = [...state.positions];
            positionsCopy[id] = newpositions;
            return { ...state, positions: positionsCopy } as IState;
        });
    },
    setDragging: (id: number, prmDragging: boolean) => {
        set((state) => {
            let dragging = prmDragging ? id : -1;
            return { ...state, dragging } as IState;
        });
    }
}));

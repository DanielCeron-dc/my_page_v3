import { subscribeWithSelector } from 'zustand/middleware';
import create from "zustand";

interface IState {
    boxesNumber: number;
    positions: [number, number, number][];
    dragging: number;
    initializePositions: () => void;
    setPosition: (id: number, positions: [number, number, number]) => void;
    setDragging: (id: number, dragging: boolean) => void;
}

export const usePhysicsBoxesStore = create<IState>()(subscribeWithSelector(((set) => ({
    boxesNumber: 0,
    positions: [],
    dragging: -1,
    initializePositions: () => {
        set((state) => ({
            ...state,
            boxesNumber: 4,
            positions: new Array(4).fill([Math.random() * 100, 30, Math.random() * 100]),
        }));
    }, 
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
}))));

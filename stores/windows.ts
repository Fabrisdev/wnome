import { create } from "zustand";

type App = "settings";
export type Position = {
  x: number;
  y: number;
};
type Window = {
  id: string;
  app: App;
  position: Position;
};

type WindowsState = {
  windows: Window[];
  spawn: (app: App) => void;
  kill: (id: string) => void;
};

export const useWindowsStore = create<WindowsState>((set) => ({
  windows: [],
  spawn: (app) =>
    set((state) => ({
      windows: [
        ...state.windows,
        {
          id: crypto.randomUUID(),
          app,
          position: {
            x: 0,
            y: 0,
          },
        },
      ],
    })),
  kill: (id) =>
    set((state) => ({
      windows: state.windows.filter((window) => window.id !== id),
    })),
}));

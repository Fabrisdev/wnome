import { create } from "zustand";
import type { Panel } from "@/settings/Settings";

type App = "settings";
export type Position = {
  x: number;
  y: number;
};
type Window = {
  id: string;
  app: App;
  position: Position;
  options: SpawnOptions[App];
};

type SpawnOptions = {
  settings?: {
    initialPanel: Panel;
  };
};

type WindowsState = {
  windows: Window[];
  spawn: <T extends App>(app: T, options?: SpawnOptions[T]) => void;
  kill: (id: string) => void;
  move: (id: string, position: Position) => void;
};

export const useWindowsStore = create<WindowsState>((set) => ({
  windows: [],
  spawn: (app, options) =>
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
          options,
        },
      ],
    })),
  kill: (id) =>
    set((state) => ({
      windows: state.windows.filter((window) => window.id !== id),
    })),
  move: (id, position) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id ? { ...window, position } : window,
      ),
    })),
}));

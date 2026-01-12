import { create } from "zustand";
import type { Panel } from "@/settings/Settings";

const apps = ["settings", "terminal", "run"] as const;
type App = (typeof apps)[number];

export function isAppName(name: string): name is App {
  for (const app of apps) {
    if (app === name) return true;
  }
  return false;
}

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
  terminal?: never;
  run?: never;
};

type WindowsState = {
  windows: Window[];
  spawn: <T extends App>(app: T, options?: SpawnOptions[T]) => void;
  kill: (id: string) => void;
  move: (id: string, position: Position) => void;
  focus: (id: string) => void;
};

export const useWindowsStore = create<WindowsState>((set) => ({
  windows: [],
  spawn: (app, options) =>
    set((state) => {
      if (app === "run") {
        const window = state.windows.find((window) => window.app === "run");
        if (window !== undefined) return state;
      }
      return {
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
      };
    }),
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
  focus: (id) =>
    set((state) => {
      const window = state.windows.find((window) => window.id === id);
      if (window === undefined) return state;
      const filteredWindows = state.windows.filter(
        (window) => window.id !== id,
      );
      return { windows: [...filteredWindows, window] };
    }),
}));

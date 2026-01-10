import { create } from "zustand";

type Theme = "dark" | "light";
export type Background = "blobs" | "drool" | "map" | "morphogenesis";

type BackgroundState = {
  background: Background;
  theme: Theme;
  setBackground: (background: Background) => void;
  setTheme: (theme: Theme) => void;
};

export const useBackgroundStore = create<BackgroundState>((set) => ({
  background: "blobs",
  theme: "dark",
  setBackground: (background) => set(() => ({ background })),
  setTheme: (theme) => set(() => ({ theme })),
}));

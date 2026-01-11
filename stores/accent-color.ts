import { create } from "zustand";
import { persist } from "zustand/middleware";

type AccentColorState = {
  color: string;
  setColor: (color: string) => void;
};

export const useAccentColorStore = create<AccentColorState>()(
  persist(
    (set) => ({
      color: "#3584e4",
      setColor: (color) => set(() => ({ color })),
    }),
    {
      name: "accent-color-store",
      partialize: (state) => ({
        color: state.color,
      }),
    },
  ),
);

import { type Background, useBackgroundStore } from "@/stores/background";

const BG_FOLDER = "backgrounds";

export function useBackground() {
  const state = useBackgroundStore();
  const theme = state.theme === "dark" ? "d" : "l";
  const background: `/${typeof BG_FOLDER}/${Background}-${typeof theme}.svg` = `/${BG_FOLDER}/${state.background}-${theme}.svg`;
  return { ...state, background };
}

import { useBackgroundStore } from "@/stores/background";

const BG_FOLDER = "backgrounds";

export function useBackground() {
  const state = useBackgroundStore();
  const theme = state.theme === "dark" ? "d" : "l";
  const background = `/${BG_FOLDER}/${state.background}-${theme}.svg`;
  return { ...state, background };
}

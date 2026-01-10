import { useBackgroundStore } from "@/stores/background";

export function useColors() {
  const theme = useBackgroundStore((state) => state.theme);
  return {
    sidebar: {
      bg: theme === "dark" ? "#2e2e32" : "#ebebed",
    },
    panel: {
      bg: theme === "dark" ? "#222226" : "#fafafb",
    },
    text: theme === "dark" ? "#fff" : "#000",
  };
}

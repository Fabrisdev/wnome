import { useBackgroundStore } from "@/stores/background";

export function useColors() {
  const theme = useBackgroundStore((state) => state.theme);
  return {
    sidebar: {
      bg: theme === "dark" ? "#2e2e32" : "#ebebed",
      divider: theme === "dark" ? "#424247" : "#d2d2d4",
      button: {
        hover: theme === "dark" ? "#434347" : "#d8d8db",
      },
    },
    panel: {
      bg: theme === "dark" ? "#222226" : "#fafafb",
      container: theme === "dark" ? "#343437" : "#ffffff",
      button: {
        hover: theme === "dark" ? "#313135" : "#ececed",
      },
    },
    text: theme === "dark" ? "#fff" : "#000",
  };
}

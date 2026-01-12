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
    terminal: {
      header: theme === "dark" ? "#2e2e32" : "#fff",
      headerBorder: theme === "dark" ? "#141418" : "#e5e5e5",
      bg: theme === "dark" ? "#1c1c1f" : "#fff",
      text: theme === "dark" ? "#fff" : "#000",
    },
    window: {
      border: theme === "dark" ? "#424247" : "#c4c4c5",
    },
  };
}

import { useBackgroundStore } from "@/stores/background";

export function useColors() {
  const theme = useBackgroundStore((state) => state.theme);
  return {
    sidebar: theme === "dark" ? "#2e2e32" : "#ebebed",
    text: theme === "dark" ? "#fff" : "#000",
  };
}

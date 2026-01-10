import { Settings } from "@/settings/Settings";
import { useWindowsStore } from "@/stores/windows";

export function WindowManager() {
  const windows = useWindowsStore((state) => state.windows);
  console.log(windows);
  return windows.map((window) => {
    if (window.app === "settings")
      return <Settings initialPanel="wi-fi" key={window.id} />;
    return null;
  });
}

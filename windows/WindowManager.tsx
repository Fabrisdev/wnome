import { Settings } from "@/settings/Settings";
import { useWindowsStore } from "@/stores/windows";

export function WindowManager() {
  const windows = useWindowsStore((state) => state.windows);

  return windows.map((window) => {
    if (window.app === "settings")
      return (
        <Settings
          initialPanel="wi-fi"
          key={window.id}
          id={window.id}
          position={window.position}
        />
      );
    return null;
  });
}

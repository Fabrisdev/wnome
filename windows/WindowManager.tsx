import { useShallow } from "zustand/shallow";
import { Browser } from "@/browser/Browser";
import { Run } from "@/run/Run";
import { Settings } from "@/settings/Settings";
import { useWindowsStore } from "@/stores/windows";
import { Terminal } from "@/terminal/Terminal";

export function WindowManager() {
  const windows = useWindowsStore(useShallow((state) => state.windows));

  return windows.map((window) => {
    if (window.app === "settings")
      return (
        <Settings
          zPos={window.zPos}
          initialPanel={window.options?.initialPanel ?? "wi-fi"}
          key={window.id}
          id={window.id}
          position={window.position}
        />
      );
    if (window.app === "run") {
      return (
        <Run
          key={window.id}
          id={window.id}
          position={window.position}
          zPos={window.zPos}
        />
      );
    }
    if (window.app === "terminal") {
      return (
        <Terminal
          key={window.id}
          id={window.id}
          position={window.position}
          zPos={window.zPos}
        />
      );
    }
    if (window.app === "browser") {
      window.app;
      return (
        <Browser
          key={window.id}
          id={window.id}
          position={window.position}
          initialUrl={window.options?.initialUrl ?? "https://google.com"}
          zPos={window.zPos}
        />
      );
    }
    return null;
  });
}

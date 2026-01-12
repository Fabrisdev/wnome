import { useShallow } from "zustand/shallow";
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
          initialPanel={window.options?.initialPanel ?? "wi-fi"}
          key={window.id}
          id={window.id}
          position={window.position}
        />
      );
    if (window.app === "run") {
      return <Run key={window.id} id={window.id} position={window.position} />;
    }
    if (window.app === "terminal") {
      return (
        <Terminal key={window.id} id={window.id} position={window.position} />
      );
    }
    return null;
  });
}

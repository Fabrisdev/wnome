import { useEffect, useState } from "react";
import { useAccentColorStore } from "@/stores/accent-color";
import { isAppName, useWindowsStore } from "@/stores/windows";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";

export function Run({ id, position }: WindowProps) {
  const colors = { bg: "#36363a", input: "#4b4d54", hint: "#c1c1c1" };
  const accent = useAccentColorStore((state) => state.color);
  const kill = useWindowsStore((state) => state.kill);
  const spawn = useWindowsStore((state) => state.spawn);
  const [command, setCommand] = useState("");
  const [hint, setHint] = useState("Press ESC to close");

  useEffect(() => {
    function handleKeypress(event: KeyboardEvent) {
      setHint("Press ESC to close");
      if (event.key === "Escape") kill(id);
      if (event.key === "Enter") {
        if (isAppName(command)) {
          spawn(command);
          kill(id);
          return;
        }
        setHint("Command not found");
      }
    }
    document.addEventListener("keyup", handleKeypress);
    return () => document.removeEventListener("keyup", handleKeypress);
  }, [id, command, kill, spawn]);

  return (
    <Window
      id={id}
      position={position}
      header={null}
      className="fixed top-1/2! left-1/2! -translate-x-1/2! -translate-y-1/2! p-7.5 min-w-100 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]"
    >
      <p className="font-bold text-center text-[20px] p-4">Run a Command</p>

      <input
        type="text"
        className="rounded-xl p-2 w-full outline-none"
        value={command}
        onChange={(event) => setCommand(event.target.value)}
        // biome-ignore lint/a11y/noAutofocus: This is how GNOME does it.
        autoFocus
        style={{
          border: `2px solid ${accent}`,
          backgroundColor: colors.input,
        }}
      />
      <p style={{ color: colors.hint }} className="text-xs pt-2">
        {hint}
      </p>
    </Window>
  );
}

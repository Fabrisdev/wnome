import { useEffect } from "react";
import { useAccentColorStore } from "@/stores/accent-color";
import { useWindowsStore } from "@/stores/windows";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";

export function Run({ id, position }: WindowProps) {
  const colors = { bg: "#36363a", input: "#4b4d54", hint: "#c1c1c1" };
  const accent = useAccentColorStore((state) => state.color);
  const kill = useWindowsStore((state) => state.kill);

  useEffect(() => {
    function handleKeypress(event: KeyboardEvent) {
      if (event.key === "Escape") kill(id);
    }
    document.addEventListener("keyup", handleKeypress);
    return () => document.removeEventListener("keyup", handleKeypress);
  }, [id, kill]);

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
        style={{
          border: `2px solid ${accent}`,
          backgroundColor: colors.input,
        }}
      />
      <p style={{ color: colors.hint }} className="text-xs pt-2">
        Press ESC to close
      </p>
    </Window>
  );
}

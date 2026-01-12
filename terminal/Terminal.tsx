import { Terminal as OneTerminal } from "one-terminal";
import { useColors } from "@/settings/hooks/useColors";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { Header } from "./Header";

export function Terminal({ id, position }: WindowProps) {
  const colors = useColors();
  return (
    <Window
      id={id}
      position={position}
      className="p-0!"
      header={<Header id={id} />}
    >
      <OneTerminal
        prompt="[user@linux-pc {cwd}]$"
        fileStructure={{ kind: "directory", entries: {} }}
        windowChrome={{ style: "none" }}
        theme={{ backgroundColor: colors.terminal.bg }}
        className="min-w-200 min-h-150 one-terminal"
      />
    </Window>
  );
}

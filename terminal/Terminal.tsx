import { type ExtraCommands, Terminal as OneTerminal } from "one-terminal";
import { useColors } from "@/settings/hooks/useColors";
import { useFileSystemStore } from "@/stores/file-system";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { Header } from "./Header";

export function Terminal({ id, position }: WindowProps) {
  const colors = useColors();
  const fs = useFileSystemStore((state) => state.fs);
  const add = useFileSystemStore((state) => state.add);

  const commands: ExtraCommands = {
    touch: {
      run: (args) => {
        const path = args[0];
        add(path, "file");
        return "";
      },
    },
    mkdir: {
      run: (args) => {
        const path = args[0];
        add(path, "directory");
        return "";
      },
    },
  };

  return (
    <Window
      id={id}
      position={position}
      className="p-0!"
      header={<Header id={id} />}
      style={{ backgroundColor: colors.terminal.header }}
    >
      <OneTerminal
        prompt="[user@linux-pc {cwd}]$"
        fileStructure={fs}
        extraCommands={commands}
        windowChrome={{ style: "none" }}
        theme={{
          backgroundColor: colors.terminal.bg,
          textColor: colors.terminal.text,
          promptColor: colors.terminal.text,
        }}
        className="min-w-200 min-h-150 one-terminal"
      />
    </Window>
  );
}

import { type ExtraCommands, Terminal as OneTerminal } from "one-terminal";
import { useColors } from "@/settings/hooks/useColors";
import { useFileSystemStore } from "@/stores/file-system";
import { useWindowsStore } from "@/stores/windows";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { fakeNeofetch } from "./commands/neofetch";
import { Header } from "./Header";

export function Terminal({ id, position }: WindowProps) {
  const colors = useColors();
  const fs = useFileSystemStore((state) => state.fs);
  const add = useFileSystemStore((state) => state.add);
  const windows = useWindowsStore((state) => state.windows);
  const kill = useWindowsStore((state) => state.kill);

  const commands: ExtraCommands = {
    touch: {
      run: (args) => {
        const path = args[0];
        add(path, "file");
        return "";
      },
      completion: {
        fileScope: "directories",
        mode: "paths",
      },
    },
    mkdir: {
      run: (args) => {
        const path = args[0];
        add(path, "directory");
        return "";
      },
      completion: {
        fileScope: "directories",
        mode: "paths",
      },
    },
    neofetch: {
      run: (_) => {
        return fakeNeofetch();
      },
    },
    ps: {
      run: (_) => {
        const output = [];
        const PID_WIDTH = 36;
        const SPACING = 2;
        const totalPadding = PID_WIDTH + SPACING;
        output.push(`${"PID".padEnd(totalPadding)}TYPE`);
        windows.forEach((window) => {
          output.push(`${window.id.padEnd(totalPadding)}${window.app}`);
        });
        return output.join("\n");
      },
    },
    killall: {
      run: (args) => {
        const type = args[0];
        console.log(type);
        const windowsToKill = windows.filter((window) => window.app === type);
        windowsToKill.forEach((window) => {
          kill(window.id);
        });
        return windowsToKill.map((window) => window.id).join("\n");
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

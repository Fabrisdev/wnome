import { Terminal as OneTerminal } from "one-terminal";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";

export function Terminal({ id, position }: WindowProps) {
  const vfs = {
    kind: "directory",

    entries: {
      "readme.txt": {
        kind: "file",

        fileType: "text",

        content: "Welcome to One Terminal 👋",
      },
    },
  } as const;
  return (
    <Window id={id} position={position} header={<p>Terminal</p>}>
      <OneTerminal fileStructure={vfs} className="min-w-200 min-h-150" />
    </Window>
  );
}

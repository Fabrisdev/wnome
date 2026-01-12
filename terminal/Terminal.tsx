import { Terminal as OneTerminal } from "one-terminal";
import { Button } from "@/app/components/Button";
import { useWindowsStore } from "@/stores/windows";
import { Icon } from "@/ui/Icon";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";

export function Terminal({ id, position }: WindowProps) {
  const kill = useWindowsStore((state) => state.kill);
  return (
    <Window
      id={id}
      position={position}
      className="p-0!"
      header={
        <div className="flex justify-center items-center h-10 relative">
          <Button noDrag onClick={() => {}} className="absolute left-2">
            <Icon name="system-search-symbolic" />
          </Button>
          <p className="font-bold">user@linux-pc</p>
          <div className="flex justify-center items-center gap-2 absolute right-2">
            <Button noDrag onClick={() => {}}>
              <Icon name="tab-new-symbolic" />
            </Button>
            <Button noDrag onClick={() => {}}>
              <Icon name="open-menu-symbolic" />
            </Button>
            <Button
              noDrag
              onClick={() => kill(id)}
              className="rounded-full! p-1! bg-(--button-hover)"
            >
              <Icon name="window-close-symbolic" />
            </Button>
          </div>
        </div>
      }
    >
      <OneTerminal
        fileStructure={{ kind: "directory", entries: {} }}
        windowChrome={{ style: "none" }}
        theme={{ backgroundColor: "#1c1c1f" }}
        className="min-w-200 min-h-150 one-terminal"
      />
    </Window>
  );
}

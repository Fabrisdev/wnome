import { Button } from "@/app/components/Button";
import { useColors } from "@/settings/hooks/useColors";
import { useWindowsStore } from "@/stores/windows";
import { Icon } from "@/ui/Icon";

type Props = {
  id: string;
  url: string;
  changeUrl: (url: string) => void;
};

export function Header({ id, changeUrl, url }: Props) {
  const kill = useWindowsStore((state) => state.kill);
  const colors = useColors();
  return (
    <div
      className="flex justify-center items-center h-10 relative rounded-2xl border rounded-b-none shadow-xs p-6"
      style={{
        backgroundColor: colors.terminal.header,
        borderColor: colors.terminal.headerBorder,
      }}
    >
      <Button noDrag onClick={() => {}} className="absolute left-2">
        <Icon name="system-search-symbolic" />
      </Button>
      <input
        value={url}
        onChange={(event) => changeUrl(event.target.value)}
        className="bg-[#434347] p-2 rounded-xl text-center min-w-[50%]"
      />
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
  );
}

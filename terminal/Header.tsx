import { Button } from "@/app/components/Button";
import { useColors } from "@/settings/hooks/useColors";
import { useWindowsStore } from "@/stores/windows";
import { Icon } from "@/ui/Icon";

type Props = {
  id: string;
};

export function Header({ id }: Props) {
  const kill = useWindowsStore((state) => state.kill);
  const colors = useColors();
  return (
    <div
      className="flex justify-center items-center h-10 relative rounded-2xl"
      style={{ backgroundColor: colors.terminal.header }}
    >
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
  );
}

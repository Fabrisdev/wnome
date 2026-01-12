import { Button } from "@/app/components/Button";
import { useWindowsStore } from "@/stores/windows";
import { Icon } from "@/ui/Icon";
import { useColors } from "./hooks/useColors";

type Props = {
  id: string;
  panel: string;
};

export function Header({ panel, id }: Props) {
  const colors = useColors();
  const close = useWindowsStore((state) => state.kill);
  return (
    <div className="flex">
      <div
        className="min-w-50 h-10 rounded-tl-xl flex justify-around items-center duration-700"
        style={{ backgroundColor: colors.sidebar.bg }}
      >
        <Button onClick={() => {}}>
          <Icon name="system-search-symbolic" />
        </Button>
        <p className="font-bold" style={{ color: colors.text }}>
          Settings
        </p>
        <Button onClick={() => {}}>
          <Icon name="open-menu-symbolic" />
        </Button>
      </div>
      <div
        className="w-full rounded-tr-xl flex justify-center items-center relative duration-700"
        style={{ background: colors.panel.bg }}
      >
        <p className="font-bold" style={{ color: colors.text }}>
          {capitalize(panel)}
        </p>
        <Button
          noDrag
          onClick={() => close(id)}
          className="rounded-full! p-1! bg-(--button-hover) absolute right-2"
        >
          <Icon name="window-close-symbolic" />
        </Button>
      </div>
    </div>
  );
}

function capitalize(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

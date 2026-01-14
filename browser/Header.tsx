import { useEffect, useState } from "react";
import { Button } from "@/app/components/Button";
import { useColors } from "@/settings/hooks/useColors";
import { useWindowsStore } from "@/stores/windows";
import { Icon } from "@/ui/Icon";

type Props = {
  id: string;
  url: string;
  changeUrl: (url: string) => void;
  goBack: () => void;
  goNext: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
};

export function Header({
  id,
  changeUrl,
  url,
  canGoBack,
  canGoNext,
  goBack,
  goNext,
}: Props) {
  const kill = useWindowsStore((state) => state.kill);
  const colors = useColors();
  const [inputValue, setInputValue] = useState(url);

  useEffect(() => {
    setInputValue(url);
  }, [url]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    changeUrl(inputValue);
  }

  return (
    <div
      className="flex justify-center items-center h-10 relative rounded-2xl border rounded-b-none shadow-xs p-6"
      style={{
        backgroundColor: colors.terminal.header,
        borderColor: colors.terminal.headerBorder,
      }}
    >
      <div className="absolute left-2 flex justify-center items-center gap-2">
        <Button noDrag onClick={goBack}>
          <Icon name="go-previous-symbolic" />
        </Button>
        <Button noDrag onClick={goNext}>
          <Icon name="go-next-symbolic" />
        </Button>
        <Button noDrag onClick={() => {}}>
          <Icon name="tab-new-symbolic" />
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="min-w-[50%]">
        <input
          data-no-drag
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="p-2 rounded-xl text-center w-full"
          style={{
            backgroundColor: colors.browser.input.bg,
            color: colors.text,
          }}
        />
      </form>

      <div className="flex justify-center items-center gap-2 absolute right-2">
        <Button noDrag onClick={() => {}}>
          <Icon name="view-grid-symbolic" />
        </Button>
        <Button noDrag onClick={() => {}}>
          <Icon name="ephy-library-symbolic" />
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

import { useColors } from "@/settings/hooks/useColors";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { Header } from "./Header";
import { useUrl } from "./hooks/useUrl";
import { WebFrame } from "./WebFrame";

type Props = {
  initialUrl: string;
} & WindowProps;

export function Browser({ id, position, initialUrl, zPos }: Props) {
  const colors = useColors();
  const { url, updateUrl, goBack, goNext, canGoBack, canGoNext } =
    useUrl(initialUrl);

  return (
    <Window
      zPos={zPos}
      id={id}
      position={position}
      className="p-0!"
      header={
        <Header
          id={id}
          changeUrl={updateUrl}
          url={url}
          goNext={goNext}
          goBack={goBack}
          canGoBack={canGoBack}
          canGoNext={canGoNext}
        />
      }
      style={{ backgroundColor: colors.terminal.header }}
    >
      <WebFrame url={url} />
    </Window>
  );
}

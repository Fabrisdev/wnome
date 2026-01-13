import { useState } from "react";
import { useColors } from "@/settings/hooks/useColors";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { Header } from "./Header";

type Props = {
  initialUrl: string;
} & WindowProps;

export function Browser({ id, position, initialUrl }: Props) {
  const colors = useColors();
  const [url, setUrl] = useState(initialUrl);

  return (
    <Window
      id={id}
      position={position}
      className="p-0!"
      header={<Header id={id} changeUrl={setUrl} url={url} />}
      style={{ backgroundColor: colors.terminal.header }}
    >
      <iframe
        src={url}
        className="min-w-250 min-h-150"
        title="Embedded Browser"
      />
    </Window>
  );
}

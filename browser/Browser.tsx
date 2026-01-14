import { useState } from "react";
import { useColors } from "@/settings/hooks/useColors";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { Header } from "./Header";
import { WebFrame } from "./WebFrame";

type Props = {
  initialUrl: string;
} & WindowProps;

export function Browser({ id, position, initialUrl, zPos }: Props) {
  const colors = useColors();
  const [url, setUrl] = useState(initialUrl);

  return (
    <Window
      zPos={zPos}
      id={id}
      position={position}
      className="p-0!"
      header={<Header id={id} changeUrl={setUrl} url={url} />}
      style={{ backgroundColor: colors.terminal.header }}
    >
      <WebFrame url={url} />
    </Window>
  );
}

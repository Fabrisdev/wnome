import { useColors } from "@/settings/hooks/useColors";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { Header } from "./Header";

type Props = {
  initialUrl: string;
} & WindowProps;

export function Browser({ id, position, initialUrl }: Props) {
  const colors = useColors();
  const url = initialUrl;

  return (
    <Window
      id={id}
      position={position}
      className="p-0!"
      header={<Header id={id} />}
      style={{ backgroundColor: colors.terminal.header }}
    >
      <iframe src={url} className="w-full" title="Embedded Browser" />
    </Window>
  );
}

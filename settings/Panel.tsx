import { useColors } from "./hooks/useColors";
import { Appearance } from "./panels/appearance/Appearance";
import type { Panel as TPanel } from "./Settings";

type Props = {
  panel: TPanel;
};

export function Panel({ panel }: Props) {
  const colors = useColors();
  return (
    <div
      className="rounded-br-2xl duration-700"
      style={{ backgroundColor: colors.panel.bg }}
    >
      {panel === "appearance" && <Appearance />}
    </div>
  );
}

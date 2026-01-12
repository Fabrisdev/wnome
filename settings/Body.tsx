import { useColors } from "./hooks/useColors";
import { Panel } from "./Panel";
import type { Panel as TPanel } from "./Settings";
import { Sidebar } from "./Sidebar";

type Props = {
  displayPanel: (panel: TPanel) => void;
  panel: TPanel;
};

export function Body({ displayPanel, panel }: Props) {
  const colors = useColors();
  return (
    <div
      className="flex duration-700"
      style={{
        color: colors.text,
      }}
    >
      <Sidebar displayPanel={displayPanel} />
      <Panel panel={panel} />
    </div>
  );
}

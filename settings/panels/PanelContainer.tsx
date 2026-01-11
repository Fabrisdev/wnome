import type { PropsWithChildren } from "react";
import { useColors } from "../hooks/useColors";

type Props = {
  className?: string;
};

export function PanelContainer({
  children,
  className,
}: PropsWithChildren<Props>) {
  const colors = useColors();

  return (
    <div
      className={`p-4 rounded-xl ${className} shadow`}
      style={{ backgroundColor: colors.panel.container }}
    >
      {children}
    </div>
  );
}

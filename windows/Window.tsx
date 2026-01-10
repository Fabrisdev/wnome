import type { PropsWithChildren } from "react";
import type { WindowProps } from "./types";

type Props = {
  className?: string;
} & WindowProps;

export function Window({
  children,
  className,
  position,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={`fixed bg-[#36363a] p-1.5 rounded-2xl border border-[#424247] text-[15px] ${className}`}
      style={{
        x: position.x,
        y: position.y,
      }}
    >
      {children}
    </div>
  );
}

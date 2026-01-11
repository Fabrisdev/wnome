import type { CSSProperties, PropsWithChildren } from "react";
import { useColors } from "@/settings/hooks/useColors";

type Props = {
  onClick: () => void;
  className?: string;
  noDrag?: boolean;
};

export function Button({
  children,
  onClick,
  className,
  noDrag,
}: PropsWithChildren<Props>) {
  const colors = useColors();

  return (
    <button
      data-no-drag={noDrag}
      type="button"
      onClick={onClick}
      className={`hover:bg-(--button-hover) p-2 rounded-xl text-left flex gap-3 ${className}`}
      style={{ "--button-hover": colors.sidebar.button.hover } as CSSProperties}
    >
      {children}
    </button>
  );
}

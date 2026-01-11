import type { CSSProperties, PropsWithChildren } from "react";
import { useColors } from "@/settings/hooks/useColors";

type Props = {
  onClick: () => void;
  className?: string;
};

export function Button({
  children,
  onClick,
  className,
}: PropsWithChildren<Props>) {
  const colors = useColors();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`hover:bg-(--button-hover) p-2 rounded-xl text-left flex gap-3 ${className}`}
      style={{ "--button-hover": colors.panel.button.hover } as CSSProperties}
    >
      {children}
    </button>
  );
}

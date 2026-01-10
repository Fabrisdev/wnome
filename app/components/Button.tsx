import type { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
  className?: string;
};

export function Button({
  children,
  onClick,
  className,
}: PropsWithChildren<Props>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`hover:bg-[#535359] p-2 rounded-xl text-left flex gap-3 ${className}`}
    >
      {children}
    </button>
  );
}

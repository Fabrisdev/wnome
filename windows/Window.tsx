import type { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

export function Window({ children, className }: PropsWithChildren<Props>) {
  return (
    <div className={`fixed bg-[#36363a] p-1.5 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

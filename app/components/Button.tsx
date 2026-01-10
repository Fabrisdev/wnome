import type { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
};

export function Button({ children, onClick }: PropsWithChildren<Props>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer hover:bg-[#535359] p-2 rounded-2xl"
    >
      {children}
    </button>
  );
}

import type { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
};

export function Button({ children, onClick }: PropsWithChildren<Props>) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

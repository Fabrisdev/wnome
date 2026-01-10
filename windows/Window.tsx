import { type PropsWithChildren, useRef } from "react";
import { useWindowsStore } from "@/stores/windows";
import type { WindowProps } from "./types";

type Props = {
  className?: string;
  title: string;
} & WindowProps;

export function Window({
  title,
  children,
  className,
  position,
  id,
}: PropsWithChildren<Props>) {
  const move = useWindowsStore((state) => state.move);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  function handlePointerDown(event: React.PointerEvent) {
    dragging.current = true;
    last.current = {
      x: event.clientX,
      y: event.clientY,
    };
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event: React.PointerEvent) {
    dragging.current = false;
    (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent) {
    if (!dragging.current) return;
    const dx = event.clientX - last.current.x;
    const dy = event.clientY - last.current.y;
    move(id, {
      x: position.x + dx,
      y: position.y + dy,
    });
    last.current = {
      x: event.clientX,
      y: event.clientY,
    };
  }

  return (
    <div
      className={`fixed bg-[#36363a] p-1.5 rounded-2xl border border-[#424247] text-[15px] ${className}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <p
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

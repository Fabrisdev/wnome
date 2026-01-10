"use client";

import { useState } from "react";

export function ContextMenu() {
  const [menu, setMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  function open(event: React.MouseEvent) {
    event.preventDefault();
    setMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
    });
  }

  function close() {
    setMenu({
      ...menu,
      visible: false,
    });
  }

  if (!menu.visible) return null;

  return (
    <div
      className="fixed bg-[#36363a] p-4 rounded-2xl flex flex-col gap-3"
      style={{ left: menu.x, top: menu.y }}
    >
      <button>Change background...</button>
      <button>Display settings</button>
      <button>Settings</button>
    </div>
  );
}

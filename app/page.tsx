"use client";

import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  function handleContextMenu(event: React.MouseEvent) {
    event.preventDefault();
    setMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
    });
  }

  function handleCloseContextMenu() {
    setMenu({
      ...menu,
      visible: false,
    });
  }

  return (
    <main
      className="bg-[url(/backgrounds/blobs-d.svg)] h-svh bg-cover bg-center"
      onContextMenu={handleContextMenu}
      onClick={handleCloseContextMenu}
      onKeyUp={() => {}}
    >
      {menu.visible && (
        <div
          className="fixed bg-[#36363a] p-4 rounded-2xl flex flex-col gap-3"
          style={{ left: menu.x, top: menu.y }}
        >
          <button>Change background...</button>
          <button>Display settings</button>
          <button>Settings</button>
        </div>
      )}
    </main>
  );
}

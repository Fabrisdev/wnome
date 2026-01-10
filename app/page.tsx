"use client";

import { ContextMenu } from "./components/ContextMenu";
import { useContextMenu } from "./hooks/useContextMenu";

export default function Home() {
  const { menu, open, close } = useContextMenu();

  return (
    <main
      className="bg-[url(/backgrounds/blobs-d.svg)] h-svh bg-cover bg-center"
      onContextMenu={open}
      onClick={close}
      onKeyUp={() => {}}
    >
      <ContextMenu visible={menu.visible} x={menu.x} y={menu.y} />
    </main>
  );
}

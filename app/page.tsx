"use client";

import { useBackground } from "@/hooks/useBackground";
import { ContextMenu } from "./components/ContextMenu";
import { useContextMenu } from "./hooks/useContextMenu";

export default function Home() {
  const { background } = useBackground();
  const { menu, open, close } = useContextMenu();

  return (
    <main
      className="h-svh bg-cover bg-center"
      onContextMenu={open}
      onClick={close}
      onKeyUp={() => {}}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <ContextMenu visible={menu.visible} x={menu.x} y={menu.y} />
    </main>
  );
}

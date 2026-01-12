"use client";

import { useEffect } from "react";
import { useBackground } from "@/hooks/useBackground";
import { useWindowsStore } from "@/stores/windows";
import { WindowManager } from "@/windows/WindowManager";
import { ContextMenu } from "./components/ContextMenu";
import { useContextMenu } from "./hooks/useContextMenu";

export default function Home() {
  const { background } = useBackground();
  const { menu, open, close } = useContextMenu();
  const spawn = useWindowsStore((state) => state.spawn);

  useEffect(() => {
    const keysPressed: Record<string, true> = {};

    function handleKeypress(event: KeyboardEvent) {
      keysPressed[event.key] = true;
      if (keysPressed.Alt && keysPressed.F1) {
        spawn("run");
      }
    }

    function releaseKey(event: KeyboardEvent) {
      delete keysPressed[event.key];
    }

    document.addEventListener("keydown", handleKeypress);
    document.addEventListener("keyup", releaseKey);
    return () => {
      document.removeEventListener("keydown", handleKeypress);
      document.removeEventListener("keyup", releaseKey);
    };
  }, [spawn]);

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
      <WindowManager />
      <ContextMenu visible={menu.visible} x={menu.x} y={menu.y} />
    </main>
  );
}

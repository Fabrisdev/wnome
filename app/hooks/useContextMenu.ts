import { useState } from "react";

export function useContextMenu() {
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

  return { menu, open, close };
}

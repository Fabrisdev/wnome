import { useState } from "react";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { Body } from "./Body";
import { Header } from "./Header";

export type Panel =
  | "wi-fi"
  | "network"
  | "bluetooth"
  | "displays"
  | "sound"
  | "power"
  | "multitasking"
  | "appearance"
  | "apps"
  | "notifications"
  | "search"
  | "online-accounts"
  | "sharing"
  | "wellbeing"
  | "mouse-&-touchpad"
  | "keyboard"
  | "color-management"
  | "printers"
  | "accessibility"
  | "privacy-&-security"
  | "system";

type Props = {
  initialPanel: Panel;
} & WindowProps;

export function Settings({ initialPanel, id, position, zPos }: Props) {
  const [panel, setPanel] = useState(initialPanel);
  return (
    <Window
      zPos={zPos}
      id={id}
      position={position}
      header={<Header id={id} panel={panel} />}
      className="p-0!"
    >
      <Body displayPanel={setPanel} panel={panel} />
    </Window>
  );
}

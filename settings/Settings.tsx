import { useState } from "react";
import { Button } from "@/app/components/Button";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { Appearance } from "./panels/Appearance";

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
  | "prints"
  | "accessibility"
  | "privacy-&-security"
  | "system";

type Props = {
  initialPanel: Panel;
} & WindowProps;

export function Settings({ initialPanel, id, position }: Props) {
  const [panel, setPanel] = useState(initialPanel);
  return (
    <Window
      id={id}
      position={position}
      title={`Settings - ${panel}`}
      className="p-0!"
    >
      <div className="flex">
        <div className="flex flex-col bg-[#2e2e32] min-w-50">
          <Button onClick={() => setPanel("wi-fi")}>Wi-Fi</Button>
          <Button onClick={() => setPanel("network")}>Network</Button>
          <Button onClick={() => setPanel("bluetooth")}>Bluetooth</Button>
          <Button onClick={() => setPanel("appearance")}>Appearance</Button>
        </div>
        <div className="bg-[#222226]">
          {panel === "appearance" && <Appearance />}
        </div>
      </div>
    </Window>
  );
}

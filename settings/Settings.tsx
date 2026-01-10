import { useState } from "react";
import { Button } from "@/app/components/Button";
import { Icon } from "@/ui/Icon";
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
  | "printers"
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
        <div className="flex flex-col bg-[#2e2e32] min-w-50 rounded-bl-2xl">
          <Button onClick={() => setPanel("wi-fi")}>
            <Icon name="network-wireless-symbolic" />
            Wi-Fi
          </Button>

          <Button onClick={() => setPanel("network")}>
            <Icon name="network-server-symbolic" />
            Network
          </Button>

          <Button onClick={() => setPanel("bluetooth")}>
            <Icon name="bluetooth-symbolic" />
            Bluetooth
          </Button>
          <hr className="border-[#424247]" />
          <Button onClick={() => setPanel("displays")}>
            <Icon name="video-display-symbolic" />
            Displays
          </Button>
          <Button onClick={() => setPanel("sound")}>
            <Icon name="settings-sound-symbolic" />
            Sound
          </Button>
          <Button onClick={() => setPanel("power")}>
            <Icon name="settings-power-symbolic" />
            Power
          </Button>
          <Button onClick={() => setPanel("multitasking")}>
            <Icon name="settings-multitasking-symbolic" />
            Multitasking
          </Button>
          <Button onClick={() => setPanel("appearance")}>
            <Icon name="settings-appearance-symbolic" />
            Appearance
          </Button>
          <hr className="border-[#424247]" />
          <Button onClick={() => setPanel("apps")}>
            <Icon name="settings-applications-symbolic" />
            Apps
          </Button>
          <Button onClick={() => setPanel("notifications")}>
            <Icon name="settings-notifications-symbolic" />
            Notifications
          </Button>
          <Button onClick={() => setPanel("search")}>
            <Icon name="system-search-symbolic" />
            Search
          </Button>
          <Button onClick={() => setPanel("online-accounts")}>
            <Icon name="settings-online-accounts-symbolic" />
            Online Accounts
          </Button>
          <Button onClick={() => setPanel("sharing")}>
            <Icon name="settings-sharing-symbolic" />
            Sharing
          </Button>
          <Button onClick={() => setPanel("wellbeing")}>
            <Icon name="settings-wellbeing-symbolic" />
            Wellbeing
          </Button>
          <hr className="border-[#424247]" />
          <Button onClick={() => setPanel("mouse-&-touchpad")}>
            <Icon name="settings-mouse-symbolic" />
            Mouse & Touchpad
          </Button>
          <Button onClick={() => setPanel("keyboard")}>
            <Icon name="settings-keyboard-symbolic" />
            Keyboard
          </Button>
          <Button onClick={() => setPanel("color-management")}>
            <Icon name="settings-color-symbolic" />
            Color Management
          </Button>
          <Button onClick={() => setPanel("printers")}>
            <Icon name="settings-printers-symbolic" />
            Printers
          </Button>
          <hr className="border-[#424247]" />
          <Button onClick={() => setPanel("accessibility")}>
            <Icon name="settings-accessibility-symbolic" />
            Accessibility
          </Button>
          <Button onClick={() => setPanel("privacy-&-security")}>
            <Icon name="settings-privacy-symbolic" />
            Privacy & Security
          </Button>
          <Button onClick={() => setPanel("system")}>
            <Icon name="settings-system-symbolic" />
            System
          </Button>
        </div>
        <div className="bg-[#222226] rounded-br-2xl">
          {panel === "appearance" && <Appearance />}
        </div>
      </div>
    </Window>
  );
}

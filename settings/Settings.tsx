import { useState } from "react";
import { Button } from "@/app/components/Button";
import { useWindowsStore } from "@/stores/windows";
import { Icon } from "@/ui/Icon";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { useColors } from "./hooks/useColors";
import { Appearance } from "./panels/appearance/Appearance";
import { Divider } from "./panels/Divider";

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
  const colors = useColors();
  const close = useWindowsStore((state) => state.kill);
  return (
    <Window
      id={id}
      position={position}
      header={
        <div className="flex">
          <div
            className="min-w-50 h-10 rounded-tl-xl flex justify-around items-center duration-700"
            style={{ backgroundColor: colors.sidebar.bg }}
          >
            <Button onClick={() => {}}>
              <Icon name="system-search-symbolic" />
            </Button>
            <p className="font-bold" style={{ color: colors.text }}>
              Settings
            </p>
            <Button onClick={() => {}}>
              <Icon name="open-menu-symbolic" />
            </Button>
          </div>
          <div
            className="w-full rounded-tr-xl flex justify-center items-center relative duration-700"
            style={{ background: colors.panel.bg }}
          >
            <p className="font-bold" style={{ color: colors.text }}>
              {capitalize(panel)}
            </p>
            <Button
              noDrag
              onClick={() => close(id)}
              className="rounded-full! p-1! bg-(--button-hover) absolute right-2"
            >
              <Icon name="window-close-symbolic" />
            </Button>
          </div>
        </div>
      }
      className="p-0!"
    >
      <div
        className="flex duration-700"
        style={{
          color: colors.text,
        }}
      >
        <div
          className="flex flex-col min-w-50 rounded-bl-2xl duration-700 p-2"
          style={{ backgroundColor: colors.sidebar.bg }}
        >
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
          <Divider />
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
          <Divider />
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
          <Divider />
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
          <Divider />
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
        <div
          className="rounded-br-2xl duration-700"
          style={{ backgroundColor: colors.panel.bg }}
        >
          {panel === "appearance" && <Appearance />}
        </div>
      </div>
    </Window>
  );
}

function capitalize(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

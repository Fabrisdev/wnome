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
          <Button onClick={() => setPanel("sound")}>Sound</Button>
          <Button onClick={() => setPanel("power")}>Power</Button>
          <Button onClick={() => setPanel("multitasking")}>Multitasking</Button>
          <Button onClick={() => setPanel("appearance")}>Appearance</Button>
          <hr className="border-[#424247]" />
          <Button onClick={() => setPanel("apps")}>Apps</Button>
          <Button onClick={() => setPanel("notifications")}>
            Notifications
          </Button>
          <Button onClick={() => setPanel("search")}>Search</Button>
          <Button onClick={() => setPanel("online-accounts")}>
            Online Accounts
          </Button>
          <Button onClick={() => setPanel("sharing")}>Sharing</Button>
          <Button onClick={() => setPanel("wellbeing")}>Wellbeing</Button>
          <hr className="border-[#424247]" />
          <Button onClick={() => setPanel("mouse-&-touchpad")}>
            Mouse & Touchpad
          </Button>
          <Button onClick={() => setPanel("keyboard")}>Keyboard</Button>
          <Button onClick={() => setPanel("color-management")}>
            Color Management
          </Button>
          <Button onClick={() => setPanel("printers")}>Printers</Button>
          <hr className="border-[#424247]" />
          <Button onClick={() => setPanel("accessibility")}>
            Accessibility
          </Button>
          <Button onClick={() => setPanel("privacy-&-security")}>
            Privacy & Security
          </Button>
          <Button onClick={() => setPanel("system")}>System</Button>
        </div>
        <div className="bg-[#222226] rounded-br-2xl">
          {panel === "appearance" && <Appearance />}
        </div>
      </div>
    </Window>
  );
}

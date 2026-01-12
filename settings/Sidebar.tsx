import { Button } from "@/app/components/Button";
import { Icon } from "@/ui/Icon";
import { useColors } from "./hooks/useColors";
import { Divider } from "./panels/Divider";
import type { Panel } from "./Settings";

type Props = {
  displayPanel: (panel: Panel) => void;
};

export function Sidebar({ displayPanel }: Props) {
  const colors = useColors();

  return (
    <div
      className="flex flex-col min-w-50 rounded-bl-2xl duration-700 p-2"
      style={{ backgroundColor: colors.sidebar.bg }}
    >
      <Button onClick={() => displayPanel("wi-fi")}>
        <Icon name="network-wireless-symbolic" />
        Wi-Fi
      </Button>

      <Button onClick={() => displayPanel("network")}>
        <Icon name="network-server-symbolic" />
        Network
      </Button>

      <Button onClick={() => displayPanel("bluetooth")}>
        <Icon name="bluetooth-symbolic" />
        Bluetooth
      </Button>
      <Divider />
      <Button onClick={() => displayPanel("displays")}>
        <Icon name="video-display-symbolic" />
        Displays
      </Button>
      <Button onClick={() => displayPanel("sound")}>
        <Icon name="settings-sound-symbolic" />
        Sound
      </Button>
      <Button onClick={() => displayPanel("power")}>
        <Icon name="settings-power-symbolic" />
        Power
      </Button>
      <Button onClick={() => displayPanel("multitasking")}>
        <Icon name="settings-multitasking-symbolic" />
        Multitasking
      </Button>
      <Button onClick={() => displayPanel("appearance")}>
        <Icon name="settings-appearance-symbolic" />
        Appearance
      </Button>
      <Divider />
      <Button onClick={() => displayPanel("apps")}>
        <Icon name="settings-applications-symbolic" />
        Apps
      </Button>
      <Button onClick={() => displayPanel("notifications")}>
        <Icon name="settings-notifications-symbolic" />
        Notifications
      </Button>
      <Button onClick={() => displayPanel("search")}>
        <Icon name="system-search-symbolic" />
        Search
      </Button>
      <Button onClick={() => displayPanel("online-accounts")}>
        <Icon name="settings-online-accounts-symbolic" />
        Online Accounts
      </Button>
      <Button onClick={() => displayPanel("sharing")}>
        <Icon name="settings-sharing-symbolic" />
        Sharing
      </Button>
      <Button onClick={() => displayPanel("wellbeing")}>
        <Icon name="settings-wellbeing-symbolic" />
        Wellbeing
      </Button>
      <Divider />
      <Button onClick={() => displayPanel("mouse-&-touchpad")}>
        <Icon name="settings-mouse-symbolic" />
        Mouse & Touchpad
      </Button>
      <Button onClick={() => displayPanel("keyboard")}>
        <Icon name="settings-keyboard-symbolic" />
        Keyboard
      </Button>
      <Button onClick={() => displayPanel("color-management")}>
        <Icon name="settings-color-symbolic" />
        Color Management
      </Button>
      <Button onClick={() => displayPanel("printers")}>
        <Icon name="settings-printers-symbolic" />
        Printers
      </Button>
      <Divider />
      <Button onClick={() => displayPanel("accessibility")}>
        <Icon name="settings-accessibility-symbolic" />
        Accessibility
      </Button>
      <Button onClick={() => displayPanel("privacy-&-security")}>
        <Icon name="settings-privacy-symbolic" />
        Privacy & Security
      </Button>
      <Button onClick={() => displayPanel("system")}>
        <Icon name="settings-system-symbolic" />
        System
      </Button>
    </div>
  );
}

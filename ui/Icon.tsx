import Image from "next/image";

type Props = {
  name:
    | "network-server-symbolic"
    | "bluetooth-symbolic"
    | "video-display-symbolic"
    | "network-wireless-symbolic"
    | "settings-appearance-symbolic"
    | "settings-multitasking-symbolic"
    | "settings-power-symbolic"
    | "settings-sound-symbolic"
    | "settings-applications-symbolic"
    | "settings-notifications-symbolic"
    | "system-search-symbolic"
    | "settings-online-accounts-symbolic"
    | "settings-sharing-symbolic"
    | "settings-wellbeing-symbolic"
    | "settings-accessibility-symbolic"
    | "settings-color-symbolic"
    | "settings-keyboard-symbolic"
    | "settings-mouse-symbolic"
    | "settings-printers-symbolic"
    | "settings-privacy-symbolic"
    | "settings-system-symbolic"
    | "list-add-symbolic";
  theme?: "dark" | "light";
};

export function Icon({ name, theme }: Props) {
  return (
    <Image
      className={theme === "light" ? "" : "invert"}
      src={`/icons/${name}.svg`}
      alt={`${name} icon`}
      width={16}
      height={16}
    />
  );
}

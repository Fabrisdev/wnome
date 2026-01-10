import Image from "next/image";

type Props = {
  name: "network-server-symbolic";
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

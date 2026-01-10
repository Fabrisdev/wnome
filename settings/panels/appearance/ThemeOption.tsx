import Image from "next/image";
import { type Theme, useBackgroundStore } from "@/stores/background";

type Props = {
  theme: Theme;
};

export function ThemeOption({ theme }: Props) {
  const setTheme = useBackgroundStore((state) => state.setTheme);

  return (
    <button type="button" onClick={() => setTheme(theme)}>
      <Image
        src={`/settings/appearance/style-${theme}.png`}
        alt="Default style"
        width={170}
        height={127}
      />
    </button>
  );
}

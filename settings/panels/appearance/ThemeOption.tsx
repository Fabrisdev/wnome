import Image from "next/image";
import { useAccentColorStore } from "@/stores/accent-color";
import { type Theme, useBackgroundStore } from "@/stores/background";

type Props = {
  theme: Theme;
  name: string;
};

export function ThemeOption({ theme, name }: Props) {
  const setTheme = useBackgroundStore((state) => state.setTheme);
  const currentTheme = useBackgroundStore((state) => state.theme);
  const color = useAccentColorStore((state) => state.color);

  return (
    <div>
      <button
        type="button"
        onClick={() => setTheme(theme)}
        style={
          currentTheme === theme
            ? {
                border: currentTheme === theme ? `3px solid ${color}` : "",
                padding: "3px",
                borderRadius: "12px",
              }
            : {}
        }
      >
        <Image
          src={`/settings/appearance/style-${theme}.png`}
          alt="Default style"
          width={170}
          height={127}
        />
      </button>
      <p className="text-center">{name}</p>
    </div>
  );
}

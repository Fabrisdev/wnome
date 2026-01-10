import Image from "next/image";
import { type Background, useBackgroundStore } from "@/stores/background";

type Props = {
  background: Background;
};

export function BackgroundOption({ background }: Props) {
  const setBackground = useBackgroundStore((state) => state.setBackground);

  return (
    <button type="button" onClick={() => setBackground(background)}>
      <Image
        src="/settings/appearance/bg-option-drool.png"
        alt="Drool option background"
        width={144}
        height={108}
      />
    </button>
  );
}

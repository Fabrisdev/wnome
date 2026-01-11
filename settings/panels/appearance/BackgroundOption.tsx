import Image from "next/image";
import { type Background, useBackgroundStore } from "@/stores/background";
import { Icon } from "@/ui/Icon";

type Props = {
  background: Background;
};

export function BackgroundOption({ background }: Props) {
  const setBackground = useBackgroundStore((state) => state.setBackground);
  const currentBackground = useBackgroundStore((state) => state.background);

  return (
    <button
      type="button"
      onClick={() => setBackground(background)}
      className="relative"
    >
      {currentBackground === background && (
        <div className="absolute bottom-2 right-2 size-6 rounded-full flex justify-center items-center bg-[#e62d42]">
          <Icon name="check-plain-symbolic" />
        </div>
      )}
      <Image
        src={`/settings/appearance/bg-option-${background}.png`}
        alt={`${background} option background`}
        width={144}
        height={108}
      />
    </button>
  );
}

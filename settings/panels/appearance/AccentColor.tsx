import { useAccentColorStore } from "@/stores/accent-color";

type Props = {
  color: string;
};

export function AccentColor({ color }: Props) {
  const setColor = useAccentColorStore((state) => state.setColor);
  const currentColor = useAccentColorStore((state) => state.color);

  return (
    <div
      className="border-3 flex rounded-full justify-center items-center p-0.75"
      style={{
        borderColor: currentColor === color ? currentColor : "transparent",
      }}
    >
      <button
        type="button"
        onClick={() => setColor(color)}
        className="rounded-full size-6"
        style={{ backgroundColor: color }}
      ></button>
    </div>
  );
}

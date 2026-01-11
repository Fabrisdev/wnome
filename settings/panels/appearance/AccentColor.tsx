import { useAccentColorStore } from "@/stores/accent-color";

type Props = {
  color: string;
};

export function AccentColor({ color }: Props) {
  const setColor = useAccentColorStore((state) => state.setColor);

  return (
    <button type="button" onClick={() => setColor(color)}>
      <div
        className="rounded-full size-6"
        style={{ backgroundColor: color }}
      ></div>
    </button>
  );
}

type Props = {
  color: string;
};

export function AccentColor({ color }: Props) {
  return (
    <div
      className="rounded-full size-6"
      style={{ backgroundColor: color }}
    ></div>
  );
}

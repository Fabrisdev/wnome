type Props = {
  x: number;
  y: number;
  visible: boolean;
};

export function ContextMenu({ x, y, visible }: Props) {
  if (!visible) return null;

  return (
    <div
      className="fixed bg-[#36363a] p-4 rounded-2xl flex flex-col gap-3"
      style={{ left: x, top: y }}
    >
      <button>Change background...</button>
      <button>Display settings</button>
      <button>Settings</button>
    </div>
  );
}

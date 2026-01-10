import { Button } from "./Button";

type Props = {
  x: number;
  y: number;
  visible: boolean;
};

export function ContextMenu({ x, y, visible }: Props) {
  if (!visible) return null;

  return (
    <div
      className="fixed bg-[#36363a] p-1.5 rounded-2xl flex flex-col gap-1 min-w-55 border border-[#424247] text-[15px]"
      style={{ left: x, top: y }}
    >
      <Button onClick={() => {}}>Change background...</Button>
      <hr className="border-[#424247]" />
      <Button onClick={() => {}}>Display settings</Button>
      <Button onClick={() => {}}>Settings</Button>
    </div>
  );
}

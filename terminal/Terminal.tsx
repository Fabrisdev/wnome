import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";

export function Terminal({ id, position }: WindowProps) {
  return (
    <Window id={id} position={position} header={<p>Terminal</p>}>
      <p>Body</p>
    </Window>
  );
}

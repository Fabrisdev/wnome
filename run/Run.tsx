import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";

export function Run({ id, position }: WindowProps) {
  return (
    <Window id={id} position={position} header={<p>Run</p>}>
      <p>Body</p>
    </Window>
  );
}

import { useState } from "react";
import { Button } from "@/app/components/Button";
import type { WindowProps } from "@/windows/types";
import { Window } from "@/windows/Window";
import { Appearance } from "./panels/Appearance";

type Panel = "wi-fi" | "network" | "bluetooth" | "appearance";

type Props = {
  initialPanel: Panel;
} & WindowProps;

export function Settings({ initialPanel, id, position }: Props) {
  const [panel, setPanel] = useState(initialPanel);
  return (
    <Window id={id} position={position}>
      <p>Settings - {panel}</p>
      <div className="flex">
        <div className="flex flex-col">
          <Button onClick={() => setPanel("wi-fi")}>Wi-Fi</Button>
          <Button onClick={() => setPanel("network")}>Network</Button>
          <Button onClick={() => setPanel("bluetooth")}>Bluetooth</Button>
          <Button onClick={() => setPanel("appearance")}>Appearance</Button>
        </div>
        {panel === "appearance" && <Appearance />}
      </div>
    </Window>
  );
}

import { useState } from "react";
import { Button } from "@/app/components/Button";
import { Window } from "@/windows/Window";
import { Appearance } from "./panels/Appearance";

type Panel = "wi-fi" | "network" | "bluetooth" | "appearance";

type Props = {
  initialPanel: Panel;
};

export function Settings({ initialPanel }: Props) {
  const [panel, setPanel] = useState(initialPanel);
  return (
    <Window>
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

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
    <Window className="flex">
      <div>
        <p>Settings - {panel}</p>
        <ul>
          <li>
            <Button onClick={() => setPanel("wi-fi")}>Wi-Fi</Button>
            <Button onClick={() => setPanel("network")}>Network</Button>
            <Button onClick={() => setPanel("bluetooth")}>Bluetooth</Button>
            <Button onClick={() => setPanel("appearance")}>Appearance</Button>
          </li>
        </ul>
      </div>

      {panel === "appearance" && <Appearance />}
    </Window>
  );
}

import { useState } from "react";
import { Appearance } from "./panels/Appearance";

type Panel = "wi-fi" | "network" | "bluetooth" | "appearance";

type Props = {
  initialPanel: Panel;
};

export function Settings({ initialPanel }: Props) {
  const [panel, setPanel] = useState(initialPanel);
  return (
    <div>
      <p>Settings - {panel}</p>
      {panel === "appearance" && <Appearance />}
    </div>
  );
}

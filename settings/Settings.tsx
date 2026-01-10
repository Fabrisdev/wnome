import { useState } from "react";
import { Appearance } from "./windows/Appearance";

type Window = "wi-fi" | "network" | "bluetooth" | "appearance";

type Props = {
  initialWindow: Window;
};

export function Settings({ initialWindow }: Props) {
  const [window, setWindow] = useState(initialWindow);
  return (
    <div>
      <p>Settings - {window}</p>
      {window === "appearance" && <Appearance />}
    </div>
  );
}

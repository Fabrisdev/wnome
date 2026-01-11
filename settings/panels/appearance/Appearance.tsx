import { Button } from "@/app/components/Button";
import { Icon } from "@/ui/Icon";
import { PanelContainer } from "../PanelContainer";
import { AccentColor } from "./AccentColor";
import { BackgroundOption } from "./BackgroundOption";
import { ThemeOption } from "./ThemeOption";

export function Appearance() {
  return (
    <div className="flex flex-col p-20 gap-3">
      <p className="font-bold">Style</p>
      <PanelContainer className="p-5! flex gap-5 justify-center">
        <ThemeOption theme="light" name="Default" />
        <ThemeOption theme="dark" name="Dark" />
      </PanelContainer>
      <div></div>
      <p className="font-bold">Accent Color</p>
      <PanelContainer className="flex justify-center gap-1.5 items-center">
        <AccentColor color="#3584e4" />
        <AccentColor color="#2190a4" />
        <AccentColor color="#3a944a" />
        <AccentColor color="#c88800" />
        <AccentColor color="#ed5b00" />
        <AccentColor color="#e62d42" />
        <AccentColor color="#d56199" />
        <AccentColor color="#9141ac" />
        <AccentColor color="#6f8396" />
      </PanelContainer>
      <div></div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Background</p>
        <Button onClick={() => {}} className="hover:bg-[#313135]!">
          <Icon name="list-add-symbolic" />
          <p className="font-bold">Add Picture...</p>
        </Button>
      </div>
      <PanelContainer className="grid grid-cols-3 place-items-center gap-4">
        <BackgroundOption background="blobs" />
        <BackgroundOption background="drool" />
      </PanelContainer>
    </div>
  );
}

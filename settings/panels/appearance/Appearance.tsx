import { Button } from "@/app/components/Button";
import { Icon } from "@/ui/Icon";
import { PanelContainer } from "../PanelContainer";
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
      <PanelContainer className="flex justify-center gap-4.5">
        <div className="rounded-full size-6 bg-[#3584e4]"></div>
        <div className="rounded-full size-6 bg-[#2190a4]"></div>
        <div className="rounded-full size-6 bg-[#3a944a]"></div>
        <div className="rounded-full size-6 bg-[#c88800]"></div>
        <div className="rounded-full size-6 bg-[#ed5b00]"></div>
        <div className="rounded-full size-6 bg-[#e62d42]"></div>
        <div className="rounded-full size-6 bg-[#d56199]"></div>
        <div className="rounded-full size-6 bg-[#9141ac]"></div>
        <div className="rounded-full size-6 bg-[#6f8396]"></div>
      </PanelContainer>
      <div></div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Background</p>
        <Button onClick={() => {}} className="hover:bg-[#313135]! transition">
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

import Image from "next/image";

export function Appearance() {
  return (
    <div className="flex flex-col p-20 gap-3">
      <p className="font-bold">Style</p>
      <div className="bg-[#343437] flex p-5 gap-5 min-w-138 justify-center rounded-xl">
        <div>
          <Image
            src="/settings/appearance/style-default.png"
            alt="Default style"
            width={170}
            height={127}
          />
          <p>Default</p>
        </div>
        <div>
          <Image
            src="/settings/appearance/style-dark.png"
            alt="Dark style"
            width={170}
            height={127}
          />
          <p>Dark</p>
        </div>
      </div>
      <div></div>
      <p className="font-bold">Accent Color</p>
      <div className="bg-[#343437] p-4 flex justify-center gap-4.5 rounded-xl">
        <div className="rounded-full size-6 bg-[#3584e4]"></div>
        <div className="rounded-full size-6 bg-[#2190a4]"></div>
        <div className="rounded-full size-6 bg-[#3a944a]"></div>
        <div className="rounded-full size-6 bg-[#c88800]"></div>
        <div className="rounded-full size-6 bg-[#ed5b00]"></div>
        <div className="rounded-full size-6 bg-[#e62d42]"></div>
        <div className="rounded-full size-6 bg-[#d56199]"></div>
        <div className="rounded-full size-6 bg-[#9141ac]"></div>
        <div className="rounded-full size-6 bg-[#6f8396]"></div>
      </div>
      <div></div>
      <p className="font-bold">Background</p>
    </div>
  );
}

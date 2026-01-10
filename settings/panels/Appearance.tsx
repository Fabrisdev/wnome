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
    </div>
  );
}

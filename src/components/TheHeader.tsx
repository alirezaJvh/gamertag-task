import Image from "next/image";
import Logo from "@/assets/logo.svg";

const BASE_FOOTER_CLASSES =
  "w-full h-12 bg-white border-t border-gray-300 border-b border-solid border-gray-300";

export function TheHeader() {
  return (
    <div className={BASE_FOOTER_CLASSES}>
      <div className="flex justify-center items-center h-full font-normal">
        <Image src={Logo} width={100} alt="logo" />
      </div>
    </div>
  );
}

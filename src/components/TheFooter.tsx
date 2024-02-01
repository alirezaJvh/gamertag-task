"use client";

const BASE_FOOTER_CLASSES =
  "w-full h-12 bg-white border-t border-gray-300 lg:fixed bottom-0";
const YEAR = new Date().getFullYear();

export function TheFooter() {
  return (
    <div className={BASE_FOOTER_CLASSES}>
      <div className="flex justify-center items-center h-full font-normal">
        ©{YEAR} GamerTag.
      </div>
    </div>
  );
}

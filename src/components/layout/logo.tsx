import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-center h-full py-4 lg:py-0">
      <Image
        src="/samanvaya-logo-horizontal.svg"
        alt="Samanvaya Veterinary Hospital"
        width={0}
        height={0}
        className="!h-full !w-auto object-contain lg:hidden"
        priority
        unoptimized
      />
      <Image
        src="/samanvaya-logo.svg"
        alt="Samanvaya Veterinary Hospital"
        width={0}
        height={0}
        className="!h-full !w-auto object-contain hidden lg:block"
        priority
        unoptimized
      />
    </div>
  );
}

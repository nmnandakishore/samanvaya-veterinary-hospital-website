import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        src="/samanvaya-logo.svg"
        alt="Samanvaya Veterinary Hospital"
        width={0}
        height={0}
        className="!h-full !w-auto object-contain"
        priority
        unoptimized
      />
    </div>
  );
}

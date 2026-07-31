import Image from "next/image";

export default function LocaleLoading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#2b2122]">
      <Image
        src="/images/branka-loading-logo.png"
        alt="Branka — Ibrahim Almusabi"
        width={1278}
        height={1536}
        priority
        unoptimized
        sizes="(max-width: 640px) 82vw, 420px"
        className="h-auto w-[min(82vw,420px)]"
      />
    </div>
  );
}

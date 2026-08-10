import Image from "next/image";

export default function LocaleLoading() {
  return (
    <div
      className="relative flex h-[100dvh] items-center justify-center overflow-hidden bg-[#2b2022]"
      role="status"
      aria-label="Branka — Ibrahim Almusabi"
    >
      <Image
        src="/images/branka-loader-pattern.png"
        alt=""
        width={960}
        height={1637}
        priority
        unoptimized
        sizes="(max-width: 640px) 48vh, (max-width: 1024px) 58vh, 70vh"
        className="pointer-events-none absolute -left-[33vw] top-1/2 h-[48dvh] w-auto min-h-[430px] max-w-none -translate-y-1/2 object-contain opacity-40 sm:-left-[18vw] sm:h-[58dvh] lg:-left-[9vw] lg:h-[70dvh] lg:max-h-[760px]"
      />
      <Image
        src="/images/branka-loader-pattern.png"
        alt=""
        width={960}
        height={1637}
        priority
        unoptimized
        sizes="(max-width: 640px) 48vh, (max-width: 1024px) 58vh, 70vh"
        className="pointer-events-none absolute -right-[33vw] top-1/2 h-[48dvh] w-auto min-h-[430px] max-w-none -translate-y-1/2 -scale-x-100 object-contain opacity-40 sm:-right-[18vw] sm:h-[58dvh] lg:-right-[9vw] lg:h-[70dvh] lg:max-h-[760px]"
      />

      <div className="relative z-10 flex -translate-y-[1.5dvh] flex-col items-center">
        <Image
          src="/images/branka-loading-logo.png"
          alt="برانكا — إبراهيم المصعبي"
          width={1278}
          height={1536}
          priority
          unoptimized
          sizes="(max-width: 640px) 58vw, 460px"
          className="h-auto w-[58vw] max-w-[460px] object-contain sm:w-[48vw]"
        />
        <span className="-mt-[5.5dvh] h-[2px] w-32 animate-pulse rounded-full bg-[#ffdf9a] shadow-[0_0_16px_rgba(255,223,154,0.7)] sm:-mt-10 sm:w-44 lg:w-52" />
      </div>
    </div>
  );
}

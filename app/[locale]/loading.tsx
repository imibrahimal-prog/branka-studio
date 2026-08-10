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
        sizes="(max-width: 640px) 62vh, (max-width: 1024px) 74vh, 88vh"
        className="pointer-events-none absolute -left-[34vw] top-1/2 h-[62dvh] w-auto min-h-[500px] max-w-none -translate-y-1/2 object-contain opacity-40 sm:-left-[16vw] sm:h-[74dvh] lg:-left-[7vw] lg:h-[88dvh] lg:max-h-[940px]"
      />
      <Image
        src="/images/branka-loader-pattern.png"
        alt=""
        width={960}
        height={1637}
        priority
        unoptimized
        sizes="(max-width: 640px) 62vh, (max-width: 1024px) 74vh, 88vh"
        className="pointer-events-none absolute -right-[34vw] top-1/2 h-[62dvh] w-auto min-h-[500px] max-w-none -translate-y-1/2 -scale-x-100 object-contain opacity-40 sm:-right-[16vw] sm:h-[74dvh] lg:-right-[7vw] lg:h-[88dvh] lg:max-h-[940px]"
      />

      <div className="relative z-10 flex -translate-y-[1.5dvh] flex-col items-center">
        <div className="relative w-[58vw] max-w-[460px] sm:w-[48vw]">
          <Image
            src="/images/branka-loading-logo.png"
            alt="برانكا — إبراهيم المصعبي"
            width={1278}
            height={1536}
            priority
            unoptimized
            sizes="(max-width: 640px) 58vw, 460px"
            className="h-auto w-full object-contain"
          />
          <span
            aria-hidden="true"
            className="branka-loader-logo-shine absolute inset-0"
          />
        </div>
        <span className="-mt-[5.5dvh] h-[2px] w-32 animate-pulse rounded-full bg-[#ffdf9a] shadow-[0_0_16px_rgba(255,223,154,0.7)] sm:-mt-10 sm:w-44 lg:w-52" />
      </div>
    </div>
  );
}

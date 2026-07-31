import Image from "next/image";

export default function LocaleLoading() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2b2022]"
      role="status"
      aria-label="Branka — Ibrahim Almusabi"
    >
      <Image
        src="/images/branka-loader-pattern.png"
        alt=""
        width={1234}
        height={2048}
        unoptimized
        className="pointer-events-none absolute -left-[34vw] top-1/2 h-[108vh] w-auto -translate-y-1/2 object-contain opacity-30 sm:-left-[19vw] lg:-left-[10vw]"
      />
      <Image
        src="/images/branka-loader-pattern.png"
        alt=""
        width={1234}
        height={2048}
        unoptimized
        className="pointer-events-none absolute -right-[34vw] top-1/2 h-[108vh] w-auto -translate-y-1/2 -scale-x-100 object-contain opacity-30 sm:-right-[19vw] lg:-right-[10vw]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/branka-loading-logo.png"
          alt="برانكا — إبراهيم المصعبي"
          width={1278}
          height={1536}
          priority
          unoptimized
          className="h-auto w-[82vw] max-w-[470px] object-contain"
        />
        <span className="mt-4 h-[2px] w-44 animate-pulse rounded-full bg-[#ffdf9a] shadow-[0_0_16px_rgba(255,223,154,0.7)] sm:mt-5 sm:w-56" />
      </div>
    </div>
  );
}

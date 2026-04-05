import hero from "~/images/HeroNew.svg";
import DownloadButtons from "./downloadButtons";

export function Hero() {
  return (
    <section className="relative w-full h-screen text-black">
      <img src={hero} alt="Hero image" className="w-full absolute" />

      <div className="max-w-360 w-full mx-auto h-full relative">
        <div className="absolute z-10 top-[14%]  w-[33%] left-37.5">
          <div className="w-[90%]">
            <p className="font-sans font-bold text-[16px] whitespace-nowrap">
              НАЙБІЛЬША БАЗА УКРАЇНСЬКИХ СТРАВ!
            </p>

            <h1 className="mt-2 text-[54px] leading-16 font-bold font-sans whitespace-nowrap">
              Перший трекер
              <br />
              української їжі
            </h1>

            <p className="mt-4 text-[18px] leading-6 whitespace-nowrap font-sans font-medium">
              Голубці, банош та ще 20 000+ позицій
              <br className="hidden sm:block" />з перевіреними даними про
              калорійність.
            </p>
          </div>
          <DownloadButtons />
        </div>
      </div>
    </section>
  );
}

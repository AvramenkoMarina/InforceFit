import DownloadButtons from "./downloadButtons";

export function Hero() {
  return (
    <section className="relative bg-[url('/HeroMob.png')] md:bg-[url('/HeroNew.svg')] bg-cover bg-right md:bg-top bg-no-repeat w-full h-[80vh] md:h-screen text-black">
      <div className="max-w-360 w-full mx-auto h-full relative">
        <div className="absolute z-10 md:top-[14%]  md:w-[33%] md:left-37.5 w-full px-8 pt-8">
          <div className="w-[90%]">
            <p className="font-sans font-bold text-[14px] md:text-[16px] whitespace-nowrap">
              НАЙБІЛЬША БАЗА УКРАЇНСЬКИХ СТРАВ!
            </p>

            <h1 className="mt-2 text-[38px] leading-12 md:text-[54px] md:leading-16 font-bold font-sans whitespace-nowrap">
              Перший трекер
              <br />
              української їжі
            </h1>

            <p className="mt-4 text-4 leading-5 md:text-[18px] md:leading-6 whitespace-nowrap font-sans font-medium">
              Голубці, банош та ще 20 000+ позицій
              <br />з перевіреними даними про
              <br className="md:hidden" /> калорійність.
            </p>
          </div>
          <DownloadButtons />
        </div>
      </div>
    </section>
  );
}

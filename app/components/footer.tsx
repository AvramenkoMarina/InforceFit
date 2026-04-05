import DownloadButtons from "./downloadButtons";
import logo from "~/images/Logo.svg";
const Footer = () => {
  return (
    <div
      className="w-full relative bg-cover bg-top bg-no-repeat mt-[136px]"
      style={{ backgroundImage: "url('/footerBg.svg')" }}
    >
      <div className="max-w-360 mx-auto px-37.5 pt-[272px] pb-[120px]">
        <div className="text-black flex flex-col items-center justify-center text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <img src={logo} alt="Logo" className="h-9" />
            <span className="text-sm font-semibold text-neutral-700">
              InforceFit
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Почніть розуміти своє
            <br />
            тіло краще
          </h2>
          <p className="mt-6 text-sm text-neutral-600 sm:text-base">
            Завантажте безкоштовно і переконайтеся самі.
            <br />
            Борщ вже в базі.
          </p>
          <DownloadButtons justifyCenter />
        </div>
      </div>
    </div>
  );
};

export default Footer;

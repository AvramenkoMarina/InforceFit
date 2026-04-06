import { Link } from "react-router";
import DownloadButtons from "./downloadButtons";
import logo from "~/images/Logo.svg";
import { InstagramIcon } from "./icons/Instagram";
import { LinkedinIcon } from "./icons/linkedin";
import { FacebookIcon } from "./icons/facebook";
const Footer = () => {
  return (
    <footer>
      <div
        className="w-full relative bg-cover bg-top bg-no-repeat mt-[136px]"
        style={{ backgroundImage: "url('/footerBg.svg')" }}
      >
        <div className="max-w-360 mx-auto px-37.5 pt-[272px] pb-[200px]">
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
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="py-15  border-t border-gray-200 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-8 items-center">
              <div className="flex items-center gap-2 font-semibold text-lg">
                <img src={logo} alt="Logo" className="h-9" />
                <span className="text-black">InforceFit</span>
              </div>
              <div className="w-px h-6 bg-gray-300" />
              <p className="text-sm text-gray-500">
                Найбільша база українських страв
              </p>
            </div>
            <div className="flex gap-12">
              <nav className="flex items-center gap-12 text-sm font-medium text-black">
                <Link to="#">Про нас</Link>
                <Link to="#">Переваги</Link>
                <Link to="#">Як це працює</Link>
                <Link to="#">Блог</Link>
              </nav>
              <div>
                <Link
                  to="#"
                  className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition"
                >
                  Завантажити
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="mx-auto max-w-7xl py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <p className="text-sm text-gray-500">
                  Copyright © 2026 UI8 LLC. All rights reserved
                </p>
                <Link to="#" className="hover:text-black transition">
                  Privacy Policy
                </Link>
                <Link to="#" className="hover:text-black transition">
                  Terms of Use
                </Link>
              </div>

              {/* Right: Socials */}
              <div className="flex items-center gap-5 text-gray-700">
                <Link to="#">
                  <InstagramIcon />
                </Link>
                <Link to="#">
                  <LinkedinIcon />
                </Link>
                <Link to="#">
                  <FacebookIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

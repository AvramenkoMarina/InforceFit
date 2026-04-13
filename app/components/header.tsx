import { useState } from "react";
import { Link } from "react-router";
import logo from "~/images/Logo.svg";

const navItems = [
  { label: "Як це працює", to: "#how-it-works" },
  { label: "Про нас", to: "#about" },
  { label: "Переваги", to: "#advantages" },
  { label: "Блог", to: "#blog" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white text-black">
        <nav className="mx-auto flex h-[107px] md:h-24 lg:h-30 max-w-[1440px] items-center justify-between px-6 md:px-10 xl:px-[150px]">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-9" />
            <span className="font-heading text-2xl font-semibold">
              InforceFit
            </span>
          </Link>

          <div className="hidden items-center font-sans text-[14px] font-bold lg:flex">
            <ul className="mr-12 flex items-center gap-12">
              <li>
                <Link to="#about">Про нас</Link>
              </li>
              <li>
                <Link to="#advantages">Переваги</Link>
              </li>
              <li>
                <Link to="#how-it-works">Як це працює</Link>
              </li>
              <li>
                <Link to="#blog">Блог</Link>
              </li>
            </ul>

            <Link
              to="#"
              className="rounded-full bg-black px-4 py-3 text-white transition hover:bg-neutral-800"
            >
              Завантажити
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-black" />
              <span className="block h-0.5 w-5 bg-black" />
            </div>
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-white text-black transition-all duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-6 pb-8">
          <div className="flex justify-between items-center h-[107px]">
            <Link
              to="/"
              className="flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <img src={logo} alt="Logo" className="h-9" />
              <span className="font-heading text-2xl font-semibold">
                InforceFit
              </span>
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <ul className="mb-9">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-neutral-200">
                <Link
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block py-5 text-[18px] font-bold leading-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="#"
            onClick={() => setIsOpen(false)}
            className="flex h-12 items-center justify-center rounded-full bg-[#1A1C1E] text-[18px] font-bold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
          >
            Завантажити
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

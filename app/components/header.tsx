import { Link } from "react-router";
import logo from "~/images/Logo.svg";
const Header = () => {
  return (
    <header className="h-30 bg-white text-black">
      <nav className="flex items-center justify-between max-w-360 mx-auto px-37.5  h-full">
        <Link to="/" className="flex gap-2">
          <img src={logo} alt="Logo" className="h-9" />
          <span className="text-2xl font-semibold font-heading">
            InforceFit
          </span>
        </Link>
        <div className="flex font-sans font-bold text-[14px]">
          <ul className="md:flex items-center gap-12 mr-12">
            <li>
              <Link to="#">Про нас</Link>
            </li>
            <li>
              <Link to="#">Переваги</Link>
            </li>
            <li>
              <Link to="#">Як це працює</Link>
            </li>
            <li>
              <Link to="#">Блог</Link>
            </li>
          </ul>

          <Link to="#" className="bg-black text-white px-4 py-3 rounded-full">
            Завантажити
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

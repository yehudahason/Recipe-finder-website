import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
const baseUrl = import.meta.env.BASE_URL;
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="relative max-w-360 header flex flex-row justify-between mx-auto items-center px-5 py-4 border-b border-green-950 xl:px-20">
      <h1 className="logo">
        <a href={baseUrl}>
          <img
            src={baseUrl + "/assets/images/logo.svg"}
            alt="logo"
            className="h-9"
          />
        </a>
        <div className="sr-only">Home</div>
      </h1>
      <nav
        ref={navRef}
        className={`absolute md:static top-[102%] z-20 w-full md:w-fit md:transition-none transition-transform duration-300 ease-in-out
    ${
      isMenuOpen
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 -translate-y-4 invisible md:opacity-100 md:translate-y-0 md:visible"
    }
  `}
      >
        <ul className="nav-list flex flex-col items-start p-3 md:flex-row text-green-950 text-preset-7 md:gap-10 gap-4 bg-white md:bg-transparent w-[90%] md:max-w-fit ">
          <li className=" ">
            <Link
              to="/"
              className=" border-b-4 border-transparent transition hover:border-b-orange-400 py-2"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="/about"
              className="py-2  border-b-4 border-transparent transition hover:border-b-orange-400"
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              to="/recipes"
              className="py-2  border-b-4 border-transparent transition hover:border-b-orange-400"
              onClick={() => {
                setTimeout(() => window.location.reload(), 0);
              }}
            >
              Recipes
            </Link>
          </li>

          <Link
            to="/recipes"
            className="flex justify-center items-center p-2 
            w-full
            bg-green-950 text-white rounded-xl
            text-preset-5 
            
            md:hidden"
            onClick={() => {
              setTimeout(() => window.location.reload(), 0);
            }}
          >
            Browese Recipes
          </Link>
        </ul>
      </nav>
      <Link
        to="/recipes"
        className="hidden md:flex none  items-center justify-center py-3 px-4 bg-green-950 text-white rounded-xl
        text-preset-5 "
        onClick={() => {
          setTimeout(() => window.location.reload(), 0);
        }}
      >
        Browse Recipes
      </Link>
      <button
        ref={buttonRef}
        type="button"
        className="bg-gray-200 
         rounded md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img
          src={baseUrl + "/assets/images/icon-hamburger-menu.svg"}
          alt=""
          className="h-5"
        />
      </button>
    </header>
  );
}

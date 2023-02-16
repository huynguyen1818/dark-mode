import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const NavBar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-3">DarkMode</div>

        {isDarkMode ? (
          <MdWbSunny
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 md:px-20 ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li className="cursor-pointer ">
              <a
                href="/"
                className="block  hover:text-purple-400 transition-all duration-300 py-8"
              >
                Features
              </a>
            </li>
            <li className="cursor-pointer ">
              <a
                href="/"
                className="block  hover:text-purple-400 transition-all duration-300 py-8"
              >
                Menu
              </a>
            </li>
            <li className="cursor-pointer ">
              <a
                href="/"
                className="block  hover:text-purple-400 transition-all duration-300 py-8"
              >
                Out Story
              </a>
            </li>
            <li className="cursor-pointer ">
              <a
                href="/"
                className="block  hover:text-purple-400 transition-all duration-300 py-8"
              >
                Contact
              </a>
            </li>
          </>
        )}

        {openMenu && (
          <div className="absolute right-8  bg-white text-center text-black text-13 rounded-lg overflow-hidden dark:bg-purple-400">
            <li className="cursor-pointer ">
              <a
                href="/"
                className="w-full block  hover:bg-purple-300 transition-all duration-300 py-8 px-[90px]"
              >
                Features
              </a>
            </li>
            <li className="cursor-pointer ">
              <a
                href="/"
                className="w-full block  hover:bg-purple-300 transition-all duration-300 py-8 px-[90px]"
              >
                Menu
              </a>
            </li>
            <li className="cursor-pointer ">
              <a
                href="/"
                className="w-full block  hover:bg-purple-300 transition-all duration-300 py-8 px-[90px]"
              >
                Out Story
              </a>
            </li>
            <li className="cursor-pointer ">
              <a
                href="/"
                className="w-full block  hover:bg-purple-300 transition-all duration-300 py-8 px-[90px]"
              >
                Contact
              </a>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { DarkModeToggle } from "./elements/DarkMode";
import { FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";

export const Header = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative flex justify-between items-center bg-white dark:bg-dark dark:text-white p-2">
      <HiMenuAlt2
        className="w-7 h-7 cursor-pointer"
        onClick={onSidebarToggle} // Memanggil fungsi yang diberikan melalui props
      />
      <div className="relative flex items-center gap-2">
        <img
          src="../../public/image/avatar/avatar.png"
          alt=""
          className="w-6 h-6 border-1 border-gray-500 hover:shadow-lg rounded-full cursor-pointer"
          onClick={handleMenuToggle}
        />
        <DarkModeToggle />
        {/* Dropdown menu */}
        {isMenuOpen && (
          <div className="absolute right-0 top-12 w-40 text-sm font-semibold bg-white dark:bg-dark shadow-lg rounded-lg overflow-hidden transition-all duration-700 ease-in-out z-10">
            <ul className="flex flex-col gap-2 p-2">
              <li
                className="flex items-center gap-2 p-2 rounded-lg text-gray-500 dark:text-white hover:text-white hover:bg-primary dark:hover:bg-primary cursor-pointer"
                onClick={() => alert("Profile clicked")}>
                <FaUser />
                <span>Profile</span>
              </li>
              <li
                className="flex items-center gap-2 p-2 rounded-lg text-gray-500 dark:text-white hover:text-white hover:bg-primary dark:hover:bg-primary cursor-pointer"
                onClick={() => alert("Settings clicked")}>
                <FaCog />
                <span>Settings</span>
              </li>
            </ul>
            <hr />
            <div className="p-2">
              <div
                className="flex items-center gap-2 p-2 rounded-lg text-gray-500 dark:text-white hover:text-white hover:bg-primary dark:hover:bg-primary cursor-pointer"
                onClick={() => alert("Logout clicked")}>
                <FaSignOutAlt />
                <span>Logout</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

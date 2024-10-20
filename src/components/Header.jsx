import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { DarkModeToggle } from "./elements/DarkMode";
import { FaBell, FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsNoticeOpen(false);
    }
  };
  const handleNoticeToggle = () => {
    setIsNoticeOpen(!isNoticeOpen);
    if (!isNoticeOpen) {
      setIsMenuOpen(false);
    }
  };
  return (
    <div className="relative flex justify-between items-center shadow-md bg-white dark:bg-dark dark:text-white py-3 px-2">
      <button className="cursor-pointer" onClick={onSidebarToggle}>
        <HiMenuAlt2 className="w-7 h-7" />
      </button>
      <div className="relative flex items-center gap-3">
        <button className="relative" onClick={handleNoticeToggle}>
          <FaBell className="h-8 w-8 lg:h-6 lg:w-6 scale-[.60] lg:scale-90" />
          <span className="absolute top-3 -right-1 w-[1.1rem] h-[1.1rem] bg-red-500 rounded-full">
            <span className="absolute top-[0.09rem] right-[0.30rem] text-xs font-semibold text-white">
              3
            </span>
          </span>
        </button>
        <img
          src="../../public/image/avatar/avatar.png"
          alt=""
          className="w-6 h-6 border-1 border-gray-500 hover:shadow-lg rounded-full cursor-pointer"
          onClick={handleMenuToggle}
        />
        <DarkModeToggle />
        {/* Dropdown menu */}
        {isMenuOpen && (
          <div className="absolute right-0 top-12 w-40 text-sm font-semibold bg-white dark:bg-dark shadow-md rounded-md overflow-hidden transition-all duration-700 ease-in-out z-10">
            <ul className="flex flex-col gap-2 p-2">
              <li className="flex items-center gap-2 p-2 text-gray-500 dark:text-link hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md cursor-pointer">
                <FaUser />
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li className="flex items-center gap-2 p-2 text-gray-500 dark:text-link hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md cursor-pointer">
                <FaCog />
                <Link to={"/profile-settings"}>Settings</Link>
              </li>
            </ul>
            <hr />
            <div className="p-2">
              <div
                className="flex items-center gap-2 p-2 text-red-600 dark:text-link hover:dark:text-white hover:text-white hover:bg-red-600 hover:rounded-md cursor-pointer"
                onClick={() => alert("Logout clicked")}>
                <FaSignOutAlt />
                <span>Logout</span>
              </div>
            </div>
          </div>
        )}

        {/* Dropdown menu */}
        {isNoticeOpen && (
          <div className="absolute right-0 top-12 w-72 text-xs font-semibold bg-white dark:bg-dark shadow-md rounded-md overflow-hidden transition-all duration-700 ease-in-out z-10">
            <ul className="flex flex-col gap-2 p-2">
              <li className="flex items-center gap-2 p-2 text-gray-500 dark:text-link hover:dark:text-white hover:rounded-md cursor-pointer">
                <p>Ella Mardiah - Merubah Stok Barang Gula Putih</p>
              </li>
              <li className="flex items-center gap-2 p-2 text-gray-500 dark:text-link hover:dark:text-white hover:rounded-md cursor-pointer">
                <p>Mad Karni - Menambahkan stok baru bernama Tepung Segitiga</p>
              </li>
              <li className="flex items-center gap-2 p-2 text-gray-500 dark:text-link hover:dark:text-white hover:rounded-md cursor-pointer">
                <p>Anugrah Prastyo - Menghapus data bernama Kara</p>
              </li>
            </ul>
            <hr />
            <div className="p-2">
              <div className="flex justify-center items-center gap-2 p-2 text-gray-500 dark:text-link hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md cursor-pointer">
                <Link to={"#"}>Show More Notice</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

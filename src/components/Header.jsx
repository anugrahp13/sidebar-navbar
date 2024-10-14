import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { DarkModeToggle } from "./elements/DarkMode";

export const Header = ({ onSidebarToggle }) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-dark dark:text-white p-2">
      <HiMenuAlt2
        className="w-7 h-7 cursor-pointer"
        onClick={onSidebarToggle} // Memanggil fungsi yang diberikan melalui props
      />
      <div className="flex items-center">
        <DarkModeToggle />
      </div>
    </div>
  );
};

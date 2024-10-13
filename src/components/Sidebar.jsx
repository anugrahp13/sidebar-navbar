import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaHome, FaUser } from "react-icons/fa";

export const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="w-64 bg-gray-800 h-screen text-white">
      <div className="p-4 text-xl font-bold">My Sidebar</div>
      <ul className="space-y-2">
        {/* Menu A */}
        <li>
          <div
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-700"
            onClick={() => toggleMenu("menuA")}>
            <div className="flex items-center">
              <FaHome className="mr-3" />
              <span>Menu A</span>
            </div>
            {activeMenu === "menuA" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeMenu === "menuA" && (
            <ul className="pl-8 space-y-1">
              <li className="flex items-center p-2 hover:bg-gray-700">
                <FaUser className="mr-3" />
                <span>Submenu A1</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-700">
                <FaUser className="mr-3" />
                <span>Submenu A2</span>
              </li>
            </ul>
          )}
        </li>

        {/* Menu B */}
        <li>
          <div
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-700"
            onClick={() => toggleMenu("menuB")}>
            <div className="flex items-center">
              <FaHome className="mr-3" />
              <span>Menu B</span>
            </div>
            {activeMenu === "menuB" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeMenu === "menuB" && (
            <ul className="pl-8 space-y-1">
              <li className="flex items-center p-2 hover:bg-gray-700">
                <FaUser className="mr-3" />
                <span>Submenu B1</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-700">
                <FaUser className="mr-3" />
                <span>Submenu B2</span>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

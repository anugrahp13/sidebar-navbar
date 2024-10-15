import React, { useState } from "react";
import { BiCartDownload, BiCategory } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { FaChevronDown, FaChevronUp, FaCog, FaHome } from "react-icons/fa";
import { FaDatabase, FaCartShopping } from "react-icons/fa6";
import { GrDocumentStore } from "react-icons/gr";
import { HiDocument } from "react-icons/hi2";
import { Tooltip } from "react-tooltip";

export const Sidebar = ({ isCollapsed }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-[4.2rem]" : "w-[19rem]"
      } flex flex-col justify-between p-2 bg-gray-800 dark:bg-white h-screen shadow-lg text-white font-semibold dark:text-gray-800 text-sm gap-4 transition-all duration-500 ease-in-out`}>
      {/* Logo and Title */}
      <div className="grid justify-center items-center mb-5">
        {isCollapsed ? (
          <div className="py-2">
            <img
              src="../../public/image/avatar/Logo Anugrah Prastyo.webp"
              alt="Logo"
              className="w-5 h-5 rounded-full"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center text-sm font-bold gap-3">
            <img
              src="../../public/image/avatar/Logo Anugrah Prastyo.webp"
              alt="Logo"
              className="w-[2.1rem] h-[2.1rem] rounded-full"
            />
            <span>Anugrah Prastyo</span>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <ul className="flex-grow flex flex-col items-start gap-4">
        {/* Dashboard */}
        <li className="w-full">
          <div
            className="flex items-center py-2 px-4 cursor-pointer hover:bg-primary hover:text-white hover:rounded-lg gap-3"
            onClick={() => toggleMenu("dasboard")}
            data-tooltip-id="dasboard-tooltip"
            data-tooltip-content="Dashboard">
            <FaHome className="text-lg" />
            {!isCollapsed && (
              <span className="flex-grow text-left">Dashboard</span>
            )}
          </div>
          <Tooltip id="dasboard-tooltip" place="right" />
        </li>

        {/* Managements */}
        <li className="w-full">
          <div
            className="relative flex items-center py-2 px-4 cursor-pointer hover:bg-primary hover:text-white hover:rounded-lg gap-3"
            onClick={() => toggleMenu("managements")}
            data-tooltip-id="managements-tooltip"
            data-tooltip-content="Managements">
            <FaDatabase className="text-lg" />
            {!isCollapsed && (
              <span className="flex-grow text-left">Managements</span>
            )}
            {!isCollapsed && (
              <div className="absolute right-4">
                {activeMenu === "managements" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            )}
          </div>
          <Tooltip id="managements-tooltip" place="right" />
          <div
            className={`pl-9 overflow-hidden transition-all duration-300 ease-in-out ${
              activeMenu === "managements" && !isCollapsed
                ? "max-h-screen"
                : "max-h-0"
            }`}>
            <ul className="flex flex-col gap-2">
              <li
                className="flex items-center p-2 hover:bg-primary hover:text-white hover:rounded-lg cursor-pointer gap-3"
                onClick={() => toggleMenu("items")}
                data-tooltip-id="items-tooltip"
                data-tooltip-content="Items">
                <BsBoxSeam className="text-base" />
                {!isCollapsed && <span>Items</span>}
                <Tooltip id="items-tooltip" place="right" />
              </li>
              <li
                className="flex items-center p-2 hover:bg-primary hover:text-white hover:rounded-lg cursor-pointer gap-3"
                onClick={() => toggleMenu("itemsCategory")}
                data-tooltip-id="itemsCategory-tooltip"
                data-tooltip-content="Items Category">
                <BiCategory className="text-base" />
                {!isCollapsed && <span>Items Category</span>}
                <Tooltip id="itemsCategory-tooltip" place="right" />
              </li>
            </ul>
          </div>
        </li>

        {/* Sales */}
        <li className="w-full">
          <div
            className="flex items-center py-2 px-4 cursor-pointer hover:bg-primary hover:text-white hover:rounded-lg gap-3"
            onClick={() => toggleMenu("sales")}
            data-tooltip-id="sales-tooltip"
            data-tooltip-content="Sales">
            <FaCartShopping className="text-lg" />
            {!isCollapsed && <span className="flex-grow text-left">Sales</span>}
          </div>
          <Tooltip id="sales-tooltip" place="right" />
        </li>

        {/* Report */}
        <li className="w-full">
          <div
            className="relative flex items-center py-2 px-4 cursor-pointer hover:bg-primary hover:text-white hover:rounded-lg gap-3"
            onClick={() => toggleMenu("report")}
            data-tooltip-id="report-tooltip"
            data-tooltip-content="Report">
            <HiDocument className="text-lg" />
            {!isCollapsed && (
              <span className="flex-grow text-left">Report</span>
            )}
            {!isCollapsed && (
              <div className="absolute right-4">
                {activeMenu === "report" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            )}
          </div>
          <Tooltip id="report-tooltip" place="right" />
          <div
            className={`pl-9 overflow-hidden transition-all duration-300 ease-in-out ${
              activeMenu === "report" && !isCollapsed
                ? "max-h-screen"
                : "max-h-0"
            }`}>
            <ul className="flex flex-col gap-2">
              <li
                className="flex items-center p-2 hover:bg-primary hover:text-white hover:rounded-lg cursor-pointer gap-3"
                onClick={() => toggleMenu("salesReport")}
                data-tooltip-id="salesReport-tooltip"
                data-tooltip-content="Sales Report">
                <GrDocumentStore className="text-base" />
                {!isCollapsed && <span>Sales Report</span>}
                <Tooltip id="salesReport-tooltip" place="right" />
              </li>
              <li
                className="flex items-center p-2 hover:bg-primary hover:text-white hover:rounded-lg cursor-pointer gap-3"
                onClick={() => toggleMenu("purchaseReport")}
                data-tooltip-id="purchaseReport-tooltip"
                data-tooltip-content="Purchase Report">
                <BiCartDownload className="text-base" />
                {!isCollapsed && <span>Purchase Report</span>}
                <Tooltip id="purchaseReport-tooltip" place="right" />
              </li>
            </ul>
          </div>
        </li>
      </ul>

      {/* Settings Section */}
      <div
        className="relative py-2 px-4 w-full cursor-pointer hover:bg-primary hover:text-white hover:rounded-lg flex justify-between items-center gap-3"
        onClick={() => toggleMenu("settings")}
        data-tooltip-id="settings-tooltip"
        data-tooltip-content="Settings">
        <FaCog className="text-lg" />
        {!isCollapsed && <span className="flex-grow text-left">Settings</span>}
        <Tooltip id="settings-tooltip" place="right" />
      </div>
    </div>
  );
};

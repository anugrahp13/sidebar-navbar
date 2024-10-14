import React, { useState } from "react";
import { BiCartDownload, BiCategory } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { FaChevronDown, FaChevronUp, FaHome } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { GrDocumentStore } from "react-icons/gr";
import { HiDocument } from "react-icons/hi2";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { Tooltip } from "react-tooltip";

export const Sidebar = ({ isCollapsed }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } flex flex-col justify-between bg-gray-800 dark:bg-white h-screen shadow-lg text-white font-semibold dark:text-gray-800 text-sm transition-all duration-500 ease-in-out overflow-hidden`}>
      <div className="p-4 transition-opacity duration-300 ease-in-out">
        {isCollapsed ? (
          <span className="text-lg font-bold">AP</span>
        ) : (
          <span className="text-lg font-bold">Anugrah Prastyo</span>
        )}
      </div>
      <ul className="flex-grow flex flex-col items-start gap-2 overflow-hidden">
        <li className="w-full">
          <div
            className="flex items-center p-4 cursor-pointer hover:bg-primary hover:text-white gap-3 transition-all duration-500 ease-in-out"
            onClick={() => toggleMenu("home")}
            data-tooltip-id="home-tooltip"
            data-tooltip-content="Home">
            <FaHome
              className={`text-2xl ${isCollapsed ? "text-center" : ""}`}
            />
            {!isCollapsed && <span>Home</span>}
          </div>
          <Tooltip id="home-tooltip" place="right" />
        </li>

        {/* Managements */}
        <li className="w-full">
          <div
            className="relative flex items-center p-4 cursor-pointer hover:bg-primary hover:text-white gap-3 transition-all duration-300 ease-in-out"
            onClick={() => toggleMenu("managements")}
            data-tooltip-id="managements-tooltip"
            data-tooltip-content="Managements">
            <FaDatabase
              className={`text-2xl ${isCollapsed ? "text-center" : ""}`}
            />
            {!isCollapsed && <span>Managements</span>}
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
            className={`pl-7 overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeMenu === "managements" && !isCollapsed
                ? "max-h-screen"
                : "max-h-0"
            }`}>
            <ul className="flex flex-col gap-2">
              <li
                className="flex items-center p-2 hover:bg-primary hover:text-white cursor-pointer gap-3 transition-all duration-300 ease-in-out"
                onClick={() => toggleMenu("items")}
                data-tooltip-id="items-tooltip"
                data-tooltip-content="Items">
                <BsBoxSeam className="text-base" />
                {!isCollapsed && <span>Items</span>}
              </li>
              <Tooltip id="items-tooltip" place="right" />
              <li
                className="flex items-center p-2 hover:bg-primary hover:text-white cursor-pointer gap-3 transition-all duration-300 ease-in-out"
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
            className="flex items-center p-4 cursor-pointer hover:bg-primary hover:text-white gap-3 transition-all duration-300 ease-in-out"
            onClick={() => toggleMenu("sales")}
            data-tooltip-id="sales-tooltip"
            data-tooltip-content="Sales">
            <FaCartShopping
              className={`text-2xl ${isCollapsed ? "text-center" : ""}`}
            />
            {!isCollapsed && <span>Sales</span>}
          </div>
          <Tooltip id="sales-tooltip" place="right" />
        </li>

        {/* Report */}
        <li className="w-full">
          <div
            className="relative flex items-center p-4 cursor-pointer hover:bg-primary hover:text-white gap-3 transition-all duration-300 ease-in-out"
            onClick={() => toggleMenu("report")}
            data-tooltip-id="report-tooltip"
            data-tooltip-content="Report">
            <HiDocument
              className={`text-2xl ${isCollapsed ? "text-center" : ""}`}
            />
            {!isCollapsed && <span>Report</span>}
            {!isCollapsed && (
              <div className="absolute right-4">
                {activeMenu === "report" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            )}
          </div>
          <Tooltip id="report-tooltip" place="right" />
          <div
            className={`pl-7 overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeMenu === "report" && !isCollapsed
                ? "max-h-screen"
                : "max-h-0"
            }`}>
            <ul className="flex flex-col gap-2 ">
              <li
                className="flex items-center p-2 hover:bg-primary hover:text-white cursor-pointer gap-3 transition-all duration-300 ease-in-out"
                onClick={() => toggleMenu("salesReport")}
                data-tooltip-id="salesReport-tooltip"
                data-tooltip-content="Sales Report">
                <GrDocumentStore className="text-base" />
                {!isCollapsed && <span>Sales Report</span>}
              </li>
              <Tooltip id="salesReport-tooltip" place="right" />
              <li
                className="flex items-center p-2 hover:bg-primary hover:text-white cursor-pointer gap-3 transition-all duration-300 ease-in-out"
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
    </div>
  );
};

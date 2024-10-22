import { useState } from "react";
import { BiCartDownload, BiCategory } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { FaChevronDown, FaChevronLeft, FaCog, FaHome } from "react-icons/fa";
import { FaDatabase, FaCartShopping } from "react-icons/fa6";
import { GrCurrency, GrDocumentStore } from "react-icons/gr";
import { HiDocument } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export const Sidebar = ({ isCollapsed }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <div
        className={`sidebar-mobile h-screen hidden lg:block w-80 z-0 ${
          isCollapsed ? "sidebar-collapsed" : "isCollapsed"
        }`}>
        <div className="flex flex-col h-full bg-sidebar dark:bg-white text-white">
          <Link
            to={"/"}
            className={`flex items-center border-b border-gray-700 dark:border-gray-300 py-[9.6px] px-4 ${
              isCollapsed ? "space-x-0" : "space-x-3"
            }`}>
            <img
              src="../../public/image/avatar/Logo.png"
              alt="Logo"
              className="h-9 rounded-full"
            />
            {!isCollapsed && (
              <span className="font-medium text-white dark:text-gray-700">
                Anugrah Prastyo
              </span>
            )}
          </Link>
          <nav className="flex flex-col justify-between h-full bg-sidebar dark:bg-white py-3 px-2">
            {/* Menu Items */}
            <ul className="flex-grow flex flex-col items-start gap-2">
              {/* Dashboard */}
              <li className="w-full">
                <div
                  className="flex items-center py-2 px-4 cursor-pointer font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md gap-3"
                  onClick={() => toggleMenu("dasboard")}
                  data-tooltip-id="dasboard-tooltip"
                  data-tooltip-content="Dashboard">
                  <FaHome className="text-xl" />
                  {!isCollapsed && (
                    <Link to={"/dashboard"} className="flex-grow text-left">
                      Dashboard
                    </Link>
                  )}
                </div>
                <Tooltip id="dasboard-tooltip" place="right" />
              </li>

              {/* Managements */}
              <li className="w-full">
                <div
                  className="relative flex items-center py-2 px-4 cursor-pointer font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md gap-3"
                  onClick={() => toggleMenu("managements")}
                  data-tooltip-id="managements-tooltip"
                  data-tooltip-content="Managements">
                  <FaDatabase className="text-xl" />
                  {!isCollapsed && (
                    <span className="flex-grow text-left">Managements</span>
                  )}
                  {!isCollapsed && (
                    <div className="absolute right-4">
                      {activeMenu === "managements" ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronLeft />
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
                      className="flex items-center p-2 font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md cursor-pointer gap-3"
                      onClick={() => toggleMenu("items")}
                      data-tooltip-id="items-tooltip"
                      data-tooltip-content="Items">
                      <BsBoxSeam className="text-lg" />
                      {!isCollapsed && <Link to={"/items"}>Items</Link>}
                      <Tooltip id="items-tooltip" place="right" />
                    </li>
                    <li
                      className="flex items-center p-2 font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md cursor-pointer gap-3"
                      onClick={() => toggleMenu("itemsCategory")}
                      data-tooltip-id="itemsCategory-tooltip"
                      data-tooltip-content="Items Category">
                      <BiCategory className="text-lg" />
                      {!isCollapsed && <Link to={"#"}>Items Category</Link>}
                      <Tooltip id="itemsCategory-tooltip" place="right" />
                    </li>
                  </ul>
                </div>
              </li>

              {/* Sales */}
              <li className="w-full">
                <div
                  className="flex items-center py-2 px-4 cursor-pointer font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md gap-3"
                  onClick={() => toggleMenu("sales")}
                  data-tooltip-id="sales-tooltip"
                  data-tooltip-content="Sales">
                  <FaCartShopping className="text-xl" />
                  {!isCollapsed && (
                    <Link to={"/sales"} className="flex-grow text-left">
                      Sales
                    </Link>
                  )}
                </div>
                <Tooltip id="sales-tooltip" place="right" />
              </li>

              {/* Finance */}
              <li className="w-full">
                <div
                  className="flex items-center py-2 px-4 cursor-pointer font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md gap-3"
                  onClick={() => toggleMenu("finance")}
                  data-tooltip-id="finance-tooltip"
                  data-tooltip-content="Finance">
                  <GrCurrency className="text-xl" />
                  {!isCollapsed && (
                    <Link to={"/finance"} className="flex-grow text-left">
                      Finance
                    </Link>
                  )}
                </div>
                <Tooltip id="finance-tooltip" place="right" />
              </li>

              {/* Report */}
              <li className="w-full">
                <div
                  className="relative flex items-center py-2 px-4 cursor-pointer font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md gap-3"
                  onClick={() => toggleMenu("report")}
                  data-tooltip-id="report-tooltip"
                  data-tooltip-content="Report">
                  <HiDocument className="text-xl" />
                  {!isCollapsed && (
                    <span className="flex-grow text-left">Report</span>
                  )}
                  {!isCollapsed && (
                    <div className="absolute right-4">
                      {activeMenu === "report" ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronLeft />
                      )}
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
                      className="flex items-center p-2 font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md cursor-pointer gap-3"
                      onClick={() => toggleMenu("salesReport")}
                      data-tooltip-id="salesReport-tooltip"
                      data-tooltip-content="Sales Report">
                      <GrDocumentStore className="text-lg" />
                      {!isCollapsed && (
                        <Link to={"/sales-report"}>Sales Report</Link>
                      )}
                      <Tooltip id="salesReport-tooltip" place="right" />
                    </li>
                    <li
                      className="flex items-center p-2 font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md cursor-pointer gap-3"
                      onClick={() => toggleMenu("purchaseReport")}
                      data-tooltip-id="purchaseReport-tooltip"
                      data-tooltip-content="Purchase Report">
                      <BiCartDownload className="text-lg" />
                      {!isCollapsed && (
                        <Link to={"/purchase-report"}>Purchase Report</Link>
                      )}
                      <Tooltip id="purchaseReport-tooltip" place="right" />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            {/* Settings Section */}
            <div
              className="py-2 px-4 cursor-pointer font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md flex flex-shrink-0 justify-between items-center gap-3"
              onClick={() => toggleMenu("settings")}
              data-tooltip-id="settings-tooltip"
              data-tooltip-content="Settings">
              <FaCog className="text-xl" />
              {!isCollapsed && (
                <Link to={"#"} className="flex-grow text-left">
                  Settings
                </Link>
              )}
              <Tooltip id="settings-tooltip" place="right" />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

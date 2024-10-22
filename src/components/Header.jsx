import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { DarkModeToggle } from "./elements/DarkMode";
import {
  FaBell,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronLeft,
  FaUser,
  FaCog,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { BiCartDownload, BiCategory } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { FaDatabase, FaCartShopping } from "react-icons/fa6";
import { GrCurrency, GrDocumentStore } from "react-icons/gr";
import { HiDocument } from "react-icons/hi2";

export const Header = ({ isCollapsed, onToggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const sidebarRef = useRef(null);
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleSidebarClick = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <header
        className={`lg:top-0 left-0 w-full z-10 lg:z-0 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-80 backdrop-blur-sm shadow-md dark:bg-gray-900 dark:bg-opacity-50"
            : "bg-transparent"
        }`}>
        <div className="flex justify-between mx-auto py-3 px-2">
          <div>
            <HiOutlineMenuAlt2
              className="text-slate-800 dark:text-white text-lg block lg:hidden items-center h-8 w-8 scale-90 cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            />
            <HiOutlineMenuAlt2
              className="text-slate-800 dark:text-white text-lg hidden lg:block items-center h-8 w-8 scale-90 cursor-pointer"
              onClick={onToggleSidebar}
            />
          </div>
          <div className="flex items-center gap-3">
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
              <div className="absolute right-2 top-16 w-40 text-sm rounded-md shadow-md bg-white dark:bg-gray-900 dropdown-menu dropdown-open">
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
              <div className="absolute right-2 top-16 w-72 text-sm rounded-md shadow-md bg-white dark:bg-gray-900 dropdown-menu dropdown-open">
                <ul className="flex flex-col gap-2 p-2">
                  <li className="flex items-center gap-2 p-2 text-gray-500 dark:text-link hover:dark:text-white hover:rounded-md cursor-pointer">
                    <p>Ella Mardiah - Merubah Stok Barang Gula Putih</p>
                  </li>
                  <li className="flex items-center gap-2 p-2 text-gray-500 dark:text-link hover:dark:text-white hover:rounded-md cursor-pointer">
                    <p>
                      Mad Karni - Menambahkan stok baru bernama Tepung Segitiga
                    </p>
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
      </header>
      <aside
        className={`fixed left-0 top-0 h-full w-screen bg-black bg-opacity-30 lg:hidden z-50 transition-transform duration-700 ease-in-out ${
          isSidebarOpen ? "sidebar sidebar-open" : "sidebar"
        }`}>
        <div
          ref={sidebarRef}
          className="w-[250px] flex flex-col h-full bg-sidebar dark:bg-white text-white">
          <Link
            to={"/"}
            onClick={handleSidebarClick}
            className="flex items-center border-b border-gray-700 dark:border-gray-300 py-3 px-2 gap-3">
            <img
              src="../../public/image/avatar/Logo.png"
              alt="Logo"
              className="max-h-8 lg:max-h-7 ml-3 rounded-full"
            />
            <span className="font-medium text-white dark:text-gray-700">
              Anugrah Prastyo
            </span>
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
                    <Link
                      to={"/dashboard"}
                      onClick={handleSidebarClick}
                      className="flex-grow text-left">
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
                      {!isCollapsed && (
                        <Link to={"/items"} onClick={handleSidebarClick}>
                          Items
                        </Link>
                      )}
                      <Tooltip id="items-tooltip" place="right" />
                    </li>
                    <li
                      className="flex items-center p-2 font-semibold text-link dark:text-gray-700 hover:dark:text-white hover:text-white hover:bg-gray-500 hover:rounded-md cursor-pointer gap-3"
                      onClick={() => toggleMenu("itemsCategory")}
                      data-tooltip-id="itemsCategory-tooltip"
                      data-tooltip-content="Items Category">
                      <BiCategory className="text-lg" />
                      {!isCollapsed && (
                        <Link to={"#"} onClick={handleSidebarClick}>
                          Items Category
                        </Link>
                      )}
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
                    <Link
                      to={"/sales"}
                      onClick={handleSidebarClick}
                      className="flex-grow text-left">
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
                    <Link
                      to={"/finance"}
                      onClick={handleSidebarClick}
                      className="flex-grow text-left">
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
                        <Link to={"/sales-report"} onClick={handleSidebarClick}>
                          Sales Report
                        </Link>
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
                        <Link
                          to={"/purchase-report"}
                          onClick={handleSidebarClick}>
                          Purchase Report
                        </Link>
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
              <FaCog className="text-lg" />
              {!isCollapsed && (
                <Link
                  to={"#"}
                  onClick={handleSidebarClick}
                  className="flex-grow text-left">
                  Settings
                </Link>
              )}
              <Tooltip id="settings-tooltip" place="right" />
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

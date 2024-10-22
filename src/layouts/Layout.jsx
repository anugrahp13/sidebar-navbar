import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const Layout = ({ children }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <>
      <div className="flex">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <div className="flex flex-col w-full justify-between">
          <Header onToggleSidebar={toggleSidebar} />
          {children}
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

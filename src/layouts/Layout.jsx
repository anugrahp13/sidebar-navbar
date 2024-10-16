import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <div className="flex">
        <Sidebar
          isCollapsed={isCollapsed}
          toggleCollapse={handleSidebarToggle}
        />
        <div className="w-full grig justify-between">
          <Header onSidebarToggle={handleSidebarToggle} />
          {children}
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

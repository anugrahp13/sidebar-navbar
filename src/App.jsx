import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex">
      <Sidebar isCollapsed={isCollapsed} />
      <div className="w-full">
        <Header onSidebarToggle={handleSidebarToggle} />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 w-full">
        <h1 className="text-3xl">Content Area</h1>
        {/* Konten utama aplikasi di sini */}
      </div>
    </div>
  );
}

export default App;

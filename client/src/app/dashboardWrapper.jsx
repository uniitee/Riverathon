import React from "react";
import Navbar from "./components/Navbar.jsx";
import SideNav from "./components/SideNav.jsx";

const DashboardWrapper = ({ children }) => {
  return (
    
    <div className="flex w-full flex-1 flex-col overflow-hidden rounded-md border border-zinc-200 bg-gray-100 md:flex-row dark:border-zinc-700 dark:bg-zinc-800 h-screen">
      {/* Sidebar */}
      <SideNav />

      {/* Main content area - takes remaining width */}
      <div className="flex flex-1 w-full">
        <div className="flex h-full w-full flex-1 flex-col rounded-tl-2xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-950">
          {/* Navbar */}
          <div className="pt-4 pl-10 pb-0 border-zinc-200 dark:border-zinc-700">
            <Navbar />
          </div>

          {/* Content - full width */}
          <div className="flex-1 overflow-auto p-4 md:p-10 md:pt-4 w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;

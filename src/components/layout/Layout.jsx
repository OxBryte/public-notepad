import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full py-4 mx-auto max-w-[1260px]">
        <Outlet />
      </div>
    </div>
  );
}

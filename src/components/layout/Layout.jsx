import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full mx-auto max-w-[1260px]">
      <Navbar />
      <Outlet />
    </div>
  );
}

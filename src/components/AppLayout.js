import React from "react";
import Header from "./Header";
import "../css/index.css";
import Body from "./Body";
import { Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

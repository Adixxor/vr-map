import React from "react";
import Sidebar from "../Sidebar";

export default function Layout({ children }) {
  return (
    <div style={{ position: "relative " }}>
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: 2000 }}>
        <Sidebar />
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
        {children}
      </div>
    </div>
  );
}

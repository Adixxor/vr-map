import React from "react";
import MenuItem from "./MenuItem";
import "./index.css";
import { IoIosArrowBack } from "react-icons/io";

const data = [
  {
    name: "Wrocław",
    set: [
      { name: "zestaw 1" },
      { name: "zestaw 2" },
      { name: "zestaw 3" },
      { name: "zestaw 4" },
    ],
  },
  {
    name: "Skarżysko",
    set: [{ name: "zestaw 1" }, { name: "zestaw 2" }],
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <IoIosArrowBack />
        <input name="search" />
      </div>
      <div style={{ padding: "16px" }}>
        {data.map((item) => (
          <MenuItem cityname={item.name} cityset={item.set} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import MenuItem from "./MenuItem";

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
    <div>
      {data.map((element) => (
        <MenuItem label={element.name} set={element.set} />
      ))}
    </div>
  );
}

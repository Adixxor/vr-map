const SidebarData = [
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
    name: "Chęciny",
    set: [{ name: "zestaw 1" }, { name: "zestaw 2" }],
  },
  {
    name: "Goplański Park Narodowy",
    set: [{ name: "zestaw 1" }, { name: "zestaw 2" }, { name: "zestaw 3" }],
  },
  {
    name: "Bychawa",
    set: [
      { name: "zestaw 1" },
      { name: "zestaw 2" },
      { name: "zestaw 3" },
      { name: "zestaw 4" },
    ],
  },
  {
    name: "Elgiszewo",
    set: [
      { name: "zestaw 1" },
      { name: "zestaw 2" },
      { name: "zestaw 3" },
      { name: "zestaw 4" },
    ],
  },
  {
    name: "Chorzów",
    set: [
      { name: "zestaw 1" },
      { name: "zestaw 2" },
      { name: "zestaw 3" },
      { name: "zestaw 4" },
    ],
  },
  {
    name: "Karkonosze",
    set: [],
  },
  {
    name: "Jarosław",
    set: [
      { name: "zestaw 1" },
      { name: "zestaw 2" },
      { name: "zestaw 3" },
      { name: "zestaw 4" },
    ],
  },
];

export const SortedSidebarData = SidebarData.sort((a, b) =>
  a.name.localeCompare(b.name)
);

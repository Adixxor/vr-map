const SidebarData = [
  {
    name: "Wrocław",
    set: [
      {
        name: "zestaw 1",
        photos: [
          {
            name: "6599_popr_geom_nowy",
            bounds: [
              [1912809.2949309581890702, 6628279.3838837593793869],
              [1918394.9551420293282717, 6633865.0440948307514191],
            ],
          },
          {
            name: "6598_popr_geom_nowy",
            bounds: [
              [1913886.1934990209992975, 6628254.8853949485346675],
              [1919262.2813250988256186, 6633630.9732210263609886],
            ],
          },
          {
            name: "6564_popr_geom_nowy",
            bounds: [
              [1906739.5922203022055328, 6631308.7029293244704604],
              [1912154.2722879380453378, 6636723.3829969605430961],
            ],
          },
          {
            name: "6563_popr_geom_nowy",
            bounds: [
              [1907790.5524050737731159, 6631379.4815439786761999],
              [1913259.1260530438739806, 6636848.0551919490098953],
            ],
          },
          {
            name: "6562_popr_geom_nowy",
            bounds: [
              [1908821.1212707238737494, 6631396.8802842646837234],
              [1914306.7807698401156813, 6636882.5397833809256554],
            ],
          },
        ],
      },
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

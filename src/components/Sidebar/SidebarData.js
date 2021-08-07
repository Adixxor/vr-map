// TODO: napisz funkcje konwertującą dane z excela

const SidebarData = [
  {
    name: "Wrocław",
    sets: [
      {
        name: "zestaw 1",
        photos: [
          {
            name: "6599_fixed",
            fileName: "6599.jpg",
            bounds: [
              [51.0696512069, 17.1830582524],
              [51.0710147946, 17.2310650382],
              [51.0408395832, 17.2332350902],
              [51.0394751017, 17.1852283061],
            ],
            stereoPair: {
              left: null,
              right: "6598_fixed",
            },
          },
          {
            name: "6598_fixed",
            fileName: "6598_fixed.jpg",
            bounds: [
              [51.0693756891, 17.192732201],
              [51.0696935337, 17.2405262193],
              [51.0396512381, 17.2410264155],
              [51.0393367225, 17.1932380132],
            ],
            stereoPair: {
              left: "6599_fixed",
              right: null,
            },
          },
          {
            name: "6564_fixed",
            fileName: "6564_fixed.jpg",
            bounds: [
              [51.0861717483, 17.1285331858],
              [51.087146231, 17.1756227168],
              [51.0575580666, 17.1771740837],
              [51.0565829601, 17.1300845524],
            ],
            stereoPair: {
              left: null,
              right: "6563_fixed",
            },
          },
          {
            name: "6563_fixed",
            fileName: "6563_fixed.jpg",
            bounds: [
              [51.0865519571, 17.1379741215],
              [51.087849708, 17.1850331222],
              [51.0582812034, 17.1870934641],
              [51.0569863506, 17.1400401568],
            ],
            stereoPair: {
              left: "6564_fixed",
              right: "6562_fixed",
            },
          },
          {
            name: "6562_fixed",
            fileName: "6562_fixed.jpg",
            bounds: [
              [51.0866189737, 17.1472319014],
              [51.0880442894, 17.1942412825],
              [51.0585070622, 17.1965103973],
              [51.0570808406, 17.149500993],
            ],
            stereoPair: {
              left: "6563_fixed",
              right: null,
            },
          },
        ],
      },
      {
        name: "zestaw 2",
        photos: [
          {
            name: "3889_fixed",
            fileName: "3889_fixed.jpg",
            bounds: [
              [51.0606484298, 17.1782477825],
              [51.0614503794, 17.1977577866],
              [51.0491869879, 17.1990337592],
              [51.0483848188, 17.1795237727],
            ],
            stereoPair: {
              left: "3888_fixed",
              right: null,
            },
          },
          {
            name: "3888_fixed",
            fileName: "3888_fixed.jpg",
            bounds: [
              [51.0597571431, 17.1703435152],
              [51.0605809839, 17.190028663],
              [51.0482072481, 17.1913394595],
              [51.0473831873, 17.1716543121],
            ],
            stereoPair: {
              left: "3887_fixed",
              right: "3889_fixed",
            },
          },
          {
            name: "3887_fixed",
            fileName: "3887_fixed.jpg",
            bounds: [
              [51.0601807528, 17.1630708846],
              [51.0609535229, 17.1826766541],
              [51.048623976, 17.183908515],
              [51.0478495468, 17.1642911876],
            ],
            stereoPair: {
              left: "3886_fixed",
              right: "3888_fixed",
            },
          },
          {
            name: "3886_fixed",
            fileName: "3886_fixed.jpg",
            bounds: [
              [51.0602252583, 17.1558936994],
              [51.0608670714, 17.1755249117],
              [51.0485054656, 17.1765460697],
              [51.0478634978, 17.1568824113],
            ],
            stereoPair: {
              left: "3885_fixed",
              right: "3887_fixed",
            },
          },
          {
            name: "3885_fixed",
            fileName: "3885_fixed.jpg",
            bounds: [
              [51.0606701434, 17.1480129816],
              [51.061144916, 17.1677652398],
              [51.0487291473, 17.1685206464],
              [51.0482542428, 17.1487683926],
            ],
            stereoPair: {
              left: null,
              right: "3886_fixed",
            },
          },
        ],
      },
      {
        name: "zestaw 3",
        photos: [
          {
            name: "0040_fixed",
            fileName: "0040_fixed.jpg",
            bounds: [
              [51.0595987455, 17.147311427],
              [51.0589591204, 17.1804542584],
              [51.0381267222, 17.1794245667],
              [51.0387634488, 17.1462937255],
            ],
            stereoPair: {
              left: null,
              right: "0039_fixed",
            },
          },
          {
            name: "0039_fixed",
            fileName: "0039_fixed.jpg",
            bounds: [
              [51.0590501357, 17.1619800231],
              [51.0587453213, 17.194707881],
              [51.0381705307, 17.194222911],
              [51.0384755013, 17.1614950712],
            ],
            stereoPair: {
              left: "0040_fixed",
              right: "0038_fixed",
            },
          },
          {
            name: "0038_fixed",
            fileName: "0038_fixed.jpg",
            bounds: [
              [51.0590826636, 17.1740190098],
              [51.0591407993, 17.2067901606],
              [51.0385389612, 17.2068826477],
              [51.0384808094, 17.1741115055],
            ],
            stereoPair: {
              left: "0039_fixed",
              right: "0037_fixed",
            },
          },
          {
            name: "0037_fixed",
            fileName: "0037_fixed.jpg",
            bounds: [
              [51.0595113688, 17.1875920119],
              [51.0596179896, 17.22037789],
              [51.0390071007, 17.2205475254],
              [51.0389004363, 17.1877616411],
            ],
            stereoPair: {
              left: "0038_fixed",
              right: "0036_fixed",
            },
          },
          {
            name: "0036_fixed",
            fileName: "0036_fixed.jpg",
            bounds: [
              [51.059990927, 17.2001327017],
              [51.0597799313, 17.2329472829],
              [51.0391510712, 17.2326115741],
              [51.039362161, 17.1997969932],
            ],
            stereoPair: {
              left: "0037_fixed",
              right: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "Chęciny",
    sets: [{ name: "zestaw 1" }, { name: "zestaw 2" }],
  },
  {
    name: "Goplański Park Narodowy",
    sets: [{ name: "zestaw 1" }, { name: "zestaw 2" }, { name: "zestaw 3" }],
  },
  {
    name: "Bychawa",
    sets: [
      {
        name: "zestaw 1",
        photos: [
          {
            name: "0001_fixed",
            bounds: [
              [51.1695987455, 17.257311427],
              [51.1689591204, 17.2904542584],
              [51.1481267222, 17.2894245667],
              [51.1487634488, 17.2562937255],
            ],
          },
          {
            name: "0002_fixed",
            bounds: [
              [51.1690501357, 17.2719800231],
              [51.1687453213, 17.304707881],
              [51.1481705307, 17.304222911],
              [51.1484755013, 17.2714950712],
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
    name: "Elgiszewo",
    sets: [
      { name: "zestaw 1" },
      { name: "zestaw 2" },
      { name: "zestaw 3" },
      { name: "zestaw 4" },
    ],
  },
  {
    name: "Chorzów",
    sets: [
      { name: "zestaw 1" },
      { name: "zestaw 2" },
      { name: "zestaw 3" },
      { name: "zestaw 4" },
    ],
  },
  {
    name: "Karkonosze",
    sets: [],
  },
  {
    name: "Jarosław",
    sets: [
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

// const convertJSONtoCSV = () => {
//   const DELIMITER = ',';
//   const END_OF_LINE = '\n';
//   let result = ''

//   SidebarData.forEach(menuItem => {
//     menuItem.sets.forEach(subMenuItem => {
//       subMenuItem.photos?.forEach(photo => {
//         result += menuItem.name + DELIMITER;
//         result += subMenuItem.name + DELIMITER;
//         result += photo.name + DELIMITER;
//         result += (photo.fileName || '') + DELIMITER;
//         result += photo.bounds[0][0] + DELIMITER;
//         result += photo.bounds[0][1] + DELIMITER;
//         result += photo.bounds[1][0] + DELIMITER;
//         result += photo.bounds[1][1] + DELIMITER;
//         result += photo.bounds[2][0] + DELIMITER;
//         result += photo.bounds[2][1] + DELIMITER;
//         result += photo.bounds[3][0] + DELIMITER;
//         result += photo.bounds[3][1] + DELIMITER;
//         result += photo.stereoPair?.left || '' + DELIMITER;
//         result += photo.stereoPair?.right || '';
//         result += END_OF_LINE;
//       })
//     })
//   })

//   return result;
// }

// console.log(convertJSONtoCSV());

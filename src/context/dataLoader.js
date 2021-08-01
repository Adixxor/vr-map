// ścierzka to pliku data.csv
const PUBLIC_DATA_CSV_PATH = `${process.env.PUBLIC_URL}/data/data.csv`;

const Headers = {
  MenuItemName: 'Menu Item Name',
  SubMenuItemName: 'Submenu Item Name',
  PhotoName:'Photo Name',
  PhotoFileName: 'Photo File Name',
  TopLeftLat: 'TopLeft Lat',
  TopLeftLng: 'TopLeft Lng',
  TopRightLat: 'TopRight Lat',
  TopRightLng: 'TopRight Lng',
  BottomRightLat: 'BottomRight Lat',
  BottomRightLng: 'BottomRight Lng',
  BottomLeftLat: 'BottomLeft Lat',
  BottomLeftLng: 'BottomLeft Lng',
  LeftPairPhotoName: 'Left Stereopair Photo Name',
  RightPairPhotoName: 'Right Stereopair Photo Name',
}

// załaduj data.csv z pliku zwracając text
export const loadCSVFile = async () => {
  const response = await fetch(PUBLIC_DATA_CSV_PATH);
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  const result = await reader.read();
  
  return decoder.decode(result.value);
};

// utwórz obiekt zdjęcia
const createPhotoObj = (row) => {
  return {
    name: row[Headers.PhotoName],
    fileName: row[Headers.PhotoFileName],
    bounds: [
      [parseFloat(row[Headers.TopLeftLat]), parseFloat(row[Headers.TopLeftLng])],
      [parseFloat(row[Headers.TopRightLat]), parseFloat(row[Headers.TopRightLng])],
      [parseFloat(row[Headers.BottomRightLat]), parseFloat(row[Headers.BottomRightLng])],
      [parseFloat(row[Headers.BottomLeftLat]), parseFloat(row[Headers.BottomLeftLng])],
    ],
    stereoPair: {
      left: row[Headers.LeftPairPhotoName] || null,
      right: row[Headers.RightPairPhotoName] || null,
    }
  }
}

// utwórz object submenu ze zdjęciem
const createSetItemObj = (row) => {
  return {
    name: row[Headers.SubMenuItemName],
    photos: [createPhotoObj(row)],
  };
};

const processTextToRows = (str) => {
  const END_OF_LINE = '\n';
  const DELIMITER = ',';
  // pobierz rząd nagłówków
  const headers = str.slice(0,str.indexOf(END_OF_LINE)).split(DELIMITER).map(header => header.trim());
  // podziel tabelę na rzędy
  const rows = str.slice(str.indexOf(END_OF_LINE)+1).split(END_OF_LINE);

  return rows.map(row => {
    // podziel komórki w rzędzie
    const values = row.split(DELIMITER);
    const eachObject = headers.reduce((obj, header, i) => {
          // dla rzędów zamień kolumny z wartościami na parę { 'nazwa kolumny': 'wartość kolumny' }
          obj[header] = values[i];
          return obj;
      }, {})
      return eachObject;
  });
};

// wyrażenie regularne sprawdzające czy liczba jest zmiennoprzecinkowa
const isFloatRegex = /^[+-]?\d+(\.\d+)?$/;

const validateRows = (rows) => {
  const errors = [];

  // sprawdź czy plik .csv posiada wszystkie wymagane kolumny (Headers)
  const missingColumns = [];
  const keys = Object.keys(rows[0]);
  Object.values(Headers).forEach(header => {
    if (!keys.includes(header)) {
      missingColumns.push(header);
    }
  })
  if (missingColumns.length) {
    errors.push({ index: 0, message: `brak następujących kolumn: "${missingColumns.join('", "')}"` })
  }

  // dla każdego rzędu sprawdź czy wymagane pola nie są puste lub w niepoprawnym formacie
  rows.forEach((row, i) => {
    const index = i + 1; // indeks rzędu w data.csv
    if (!row[Headers.MenuItemName]) {
      errors.push({ index, message: `[${Headers.MenuItemName}]: pole nie może być puste.` })
    }
    if (!row[Headers.SubMenuItemName]) {
      errors.push({ index, message: `[${Headers.SubMenuItemName}]: pole nie może być puste.` })
    }
    if (!row[Headers.PhotoName]) {
      errors.push({ index, message: `[${Headers.PhotoName}]: pole nie może być puste.` })
    }
    if (!row[Headers.PhotoFileName]) {
      errors.push({ index, message: `[${Headers.PhotoFileName}]: pole nie może być puste.` })
    }
    if (!row[Headers.TopLeftLat]) {
      errors.push({ index, message: `[${Headers.TopLeftLat}]: pole nie może być puste.` })
    } else if (!isFloatRegex.test(row[Headers.TopLeftLat])) {
      errors.push({ index, message: `[${Headers.TopLeftLat}]: pole musi być liczbą zmiennoprzecinkową np. '51.00'` })
    }

    if (!row[Headers.TopLeftLng]) {
      errors.push({ index, message: `[${Headers.TopLeftLng}]: pole nie może być puste.` })
    } else if (!isFloatRegex.test(row[Headers.TopLeftLng])) {
      errors.push({ index, message: `[${Headers.TopLeftLng}]: pole musi być liczbą zmiennoprzecinkową np. '51.00'` })
    }

    if (!row[Headers.TopRightLat]) {
      errors.push({ index, message: `[${Headers.TopRightLat}]: pole nie może być puste.` })
    } else if (!isFloatRegex.test(row[Headers.TopRightLat])) {
      errors.push({ index, message: `[${Headers.TopRightLat}]: pole musi być liczbą zmiennoprzecinkową np. '51.00'` })
    }

    if (!row[Headers.TopRightLng]) {
      errors.push({ index, message: `[${Headers.TopRightLng}]: pole nie może być puste.` })
    } else if (!isFloatRegex.test(row[Headers.TopRightLng])) {
      errors.push({ index, message: `[${Headers.TopRightLng}]: pole musi być liczbą zmiennoprzecinkową np. '51.00'` })
    }

    if (!row[Headers.BottomRightLat]) {
      errors.push({ index, message: `[${Headers.BottomRightLat}]: pole nie może być puste.` })
    } else if (!isFloatRegex.test(row[Headers.BottomRightLat])) {
      errors.push({ index, message: `[${Headers.BottomRightLat}]: pole musi być liczbą zmiennoprzecinkową np. '51.00'` })
    }

    if (!row[Headers.BottomRightLng]) {
      errors.push({ index, message: `[${Headers.BottomRightLng}]: pole nie może być puste.` })
    } else if (!isFloatRegex.test(row[Headers.BottomRightLng])) {
      errors.push({ index, message: `[${Headers.BottomRightLng}]: pole musi być liczbą zmiennoprzecinkową np. '51.00'` })
    }

    if (!row[Headers.BottomLeftLat]) {
      errors.push({ index, message: `[${Headers.BottomLeftLat}]: pole nie może być puste.` })
    } else if (!isFloatRegex.test(row[Headers.BottomLeftLat])) {
      errors.push({ index, message: `[${Headers.BottomLeftLat}]: pole musi być liczbą zmiennoprzecinkową np. '51.00'` })
    }

    if (!row[Headers.BottomLeftLng]) {
      errors.push({ index, message: `[${Headers.BottomLeftLng}]: pole nie może być puste.` })
    } else if (!isFloatRegex.test(row[Headers.BottomLeftLng])) {
      errors.push({ index, message: `[${Headers.BottomLeftLng}]: pole musi być liczbą zmiennoprzecinkową np. '51.00'` })
    }
  });

  // zwróc listę błędów
  return errors;
}

export const processCSV = (str) => {
  const rows = processTextToRows(str);

  // walidacja danych
  const errors = validateRows(rows);

  // jeśli znaleziono błędy zwróć je i zakończ funkcję
  if (errors.length) {
    return { data: null, errors };
  }

  
  const menuItems = new Map();
  // dla każdego rzędu w csv dodaj zdjęcie do menuItems
  rows.forEach((row) => {
    const menuItemName = row[Headers.MenuItemName];
    const subMenuItemName = row[Headers.SubMenuItemName];

    if (menuItems.has(menuItemName)) {
      // jeśli w menuItems już jest obieck z kluczem menuItemName (np. 'Wrocław')
      const menuItem = menuItems.get(menuItemName);

      if (menuItem.sets.has(subMenuItemName)) {
        // jeśli w sets jest już item z kluczem subMenuItemName (np. 'Zestaw 1')
        const subMenuItem = menuItem.sets.get(subMenuItemName);

        // utwórz obiekt zdjęcia
        const photoObj = createPhotoObj(row);
        // dodaj obiekt zdjęcia do zestawu
        subMenuItem.photos.push(photoObj);
      } else {
        // jeśli w sets nie ma jeszcze itemu z kluczem subMenuItemName (np. 'Zestaw 1')
        // to utwórz obiekt submenu z dodanym pierwszym zdjęciem
        const subMenuItemObj = createSetItemObj(row);

        // dodaj obiekt submenu do menuItems
        menuItem.sets.set(subMenuItemName, subMenuItemObj);
      }
    } else {
      // jeśli w menuItems nie ma jeszcze obiektu z menuItemName (np. 'Wrocław')
      // to utwórz pusty obiekt menuItem
      const menuItemObj = {
        name: menuItemName,
        sets: new Map(),
      };
      // utwórz obiekt submenu z dodanym pierwszym zdjęciem
      const subMenuItemObj = createSetItemObj(row);
      // dodaj obiekt submenu do zestawów w obiekcie menuItem
      menuItemObj.sets.set(subMenuItemName, subMenuItemObj)
      // dodaj obiekt menuItem do menuItems
      menuItems.set(menuItemName, menuItemObj);
    }
  });

  // zamień struktury danych Map() na Array() wszędzie tam gdzie była wykorzystywana
  const data = Array.from(menuItems.values()).map(menuItem => ({ ...menuItem, sets: Array.from(menuItem.sets.values()) }));

  // zwróc przetworzony csv do struktury danych aplikacji
  return { data, errors };
}

import React, { useEffect, useState } from "react";
import { loadCSVFile, processCSV } from "./dataLoader";

export const AppContext = React.createContext("AppContext");

const ErrorMessage = ({ errors }) => {
  return (
    <div style={{ padding: '24px '}}>
      <h4>{'Wystąpiły błędy podczas wczytywania pliku data.csv:'}</h4>
      <h5>{'(Wiersz: [Nazwa kolumny]: Powód)'}</h5>
      {errors.map(error => {
        return <div>{error.index}: {error.message}</div>
      })}
    </div>
  )
};

export const AppContextProvider = ({ children }) => {
  const [sidebarData, setSidebarData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [checkedSets, setCheckedSets] = useState([]);
  const [openedSidebarElements, setOpenedSidebarElements] = useState([]);
  const [chosenStereopair, setChosenStereopair] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const csv = await loadCSVFile();
      const { data, errors } = processCSV(csv);

      setErrors(errors);
      setSidebarData(data);
      setIsLoading(false);
    }

    setIsLoading(true);
    fetchData()
  }, []);

  if (isLoading) {
    return 'Loading data...';
  }

  if (errors.length) {
    return <ErrorMessage errors={errors} />;
  }

  const value = {
    sidebarData: sidebarData,
    checkedSets: checkedSets,
    setCheckedSets: setCheckedSets,
    openedSidebarElements: openedSidebarElements,
    setOpenedSidebarElements: setOpenedSidebarElements,
    chosenStereopair: chosenStereopair,
    setChosenStereopair: setChosenStereopair,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

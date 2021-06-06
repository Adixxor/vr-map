import React, { useState } from "react";

export const AppContext = React.createContext("AppContext");

export const AppContextProvider = ({ children }) => {
  const [checkedSets, setCheckedSets] = useState([]);
  const [openedSidebarElements, setOpenedSidebarElements] = useState([]);
  const [chosenStereopair, setChosenStereopair] = useState();

  const value = {
    checkedSets: checkedSets,
    setCheckedSets: setCheckedSets,
    openedSidebarElements: openedSidebarElements,
    setOpenedSidebarElements: setOpenedSidebarElements,
    chosenStereopair: chosenStereopair,
    setChosenStereopair: setChosenStereopair,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

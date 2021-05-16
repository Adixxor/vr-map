import React, { useState } from "react";

export const AppContext = React.createContext("AppContext");

export const AppContextProvider = ({ children }) => {
  const [checkedSets, setCheckedSets] = useState([]);

  const value = {
    checkedSets: checkedSets,
    setCheckedSets: setCheckedSets,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

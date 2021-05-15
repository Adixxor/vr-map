import React, { useState } from "react";

export const AppContext = React.createContext("AppContext");

export const AppContextProvider = ({ children }) => {
  const [selectedSet, setSelectedSet] = useState();

  const value = {
    selectedSet: selectedSet,
    setSelectedSet: setSelectedSet,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

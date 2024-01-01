import { createContext, useContext, useState } from "react";
import useFetchData from "../hooks/useFetchData";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(false);
  const { data, loading, error } = useFetchData("/data.json");

  return (
    <AppContext.Provider
      value={{ data, loading, error, isLoading, setIsloading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalData = () => {
  return useContext(AppContext);
};

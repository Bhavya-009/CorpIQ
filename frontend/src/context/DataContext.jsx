import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataset, setDataset] = useState([]);
  const [fileName, setFileName] = useState("");

  return (
    <DataContext.Provider
      value={{
        dataset,
        setDataset,
        fileName,
        setFileName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
import { createStore, Store } from "./store";
import React, { ReactNode } from "react";
import { useLocalObservable } from "mobx-react";

const StoreContext = React.createContext<Store | null>(null);
export const DataStoreProvider = ({ children }: { children: ReactNode }) => {
  const store = useLocalObservable(createStore);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDataStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error("useStore mus be used within a StoreProvider");
  }
  return store;
};

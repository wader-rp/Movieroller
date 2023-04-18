import React from "react";
import { AppContent } from "./AppContent";

import { FilterContextProvider } from "./Contexts/FilterContext";
import {
  LocalStorageContext,
  LocalStorageContextProvider,
} from "./Contexts/LocalStorageContext";

export const App = () => {
  return (
    <FilterContextProvider>
      <LocalStorageContextProvider>
        <AppContent />
      </LocalStorageContextProvider>
    </FilterContextProvider>
  );
};

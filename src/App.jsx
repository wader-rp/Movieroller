import React from "react";
import { AppContent } from "./AppContent";

import { FilterContextProvider } from "./Contexts/FilterContext";

export const App = () => {
  return (
    <FilterContextProvider>
      <AppContent />
    </FilterContextProvider>
  );
};

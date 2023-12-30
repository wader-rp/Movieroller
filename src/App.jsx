import { AppContent } from "./AppContent";

import { FilterContextProvider } from "./Contexts/FilterContext";

export const App = () => (
  <FilterContextProvider>
    <AppContent />
  </FilterContextProvider>
);

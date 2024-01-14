import { AppContent } from "./AppContent";

import { FilterContextProvider } from "./Contexts/FilterContext";
import { MovieResultContextProvider } from "./Contexts/ToWatchDisplayContext";

export const App = () => (
  <FilterContextProvider>
    <MovieResultContextProvider>
      <AppContent />
    </MovieResultContextProvider>
  </FilterContextProvider>
);

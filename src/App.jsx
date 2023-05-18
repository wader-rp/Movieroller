import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom/dist";
import FilterScreen from "./components/FilterScreen/FilterScreen";
import { MovieResult, movieLoader } from "./components/MovieResult/MovieResult";
import { FilterContextProvider } from "./contexts/FilterContext";
import { LocalStorageContextProvider } from "./contexts/LocalStorageContext";
import { RootLayout } from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<FilterScreen />} />
      <Route
        path="/:id"
        element={<MovieResult />}
        loader={movieLoader}
        errorElement={
          <img
            alt="null"
            src={
              "https://i.etsystatic.com/25272370/r/il/699e25/3179215036/il_1140xN.3179215036_rf9g.jpg"
            }
          />
        }
      />
    </Route>
  )
);

export const App = () => {
  return (
    <FilterContextProvider>
      <LocalStorageContextProvider>
        <RouterProvider router={router} />
      </LocalStorageContextProvider>
    </FilterContextProvider>
  );
};

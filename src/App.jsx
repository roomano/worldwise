// import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./context/Cities/CitiesContext";
import { FakeAuthProvider } from "./context/Auth/FakeAuthContex";
import ProtectedRoute from "./pages/ProtectedRoute";
// import SpinnerFullPage from "./components/SpinnerFullPage";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import City from "./components/City";
import CountryList from "./components/CountryList";
import Form from "./components/Form";

// const Product = lazy(() => import("./pages/Product"));
// const Pricing = lazy(() => import("./pages/Pricing"));
// const HomePage = lazy(() => import("./pages/HomePage"));
// const PageNotFound = lazy(() => import("./pages/PageNotFound"));
// const Login = lazy(() => import("./pages/Login"));
// const AppLayout = lazy(() => import("./pages/AppLayout"));
// const CityList = lazy(() => import("./components/CityList"));
// const City = lazy(() => import("./components/City"));
// const CountryList = lazy(() => import("./components/CountryList"));
// const Form = lazy(() => import("./components/Form"));

function App() {
  return (
    <FakeAuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          {/* <Suspense fallback={<SpinnerFullPage />}> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />

              <Route path="cities/:id" element={<City />} />

              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {/* </Suspense> */}
        </BrowserRouter>
      </CitiesProvider>
    </FakeAuthProvider>
  );
}
export default App;

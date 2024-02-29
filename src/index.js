import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { AppProvider } from "./context/productcontex";

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);

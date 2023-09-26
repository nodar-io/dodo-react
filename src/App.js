import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./scss/app.scss";

import Home from "./pages/Home";
import PizzaOrder from "./pages/PizzaOrder";
import CartOrder from "./pages/CartOrder";
import SnackOrder from "./pages/SnackOrder";



function App() {
  
  
  return (
    
    <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="pizza/:id" element={<PizzaOrder />} />
            <Route path="snack/:id" element={<SnackOrder />} />
            <Route path="cart" element={<CartOrder />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
    
      </BrowserRouter>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import World from "./pages/World";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import Sports from "./pages/Sports";
import "./index.css"; // Tailwind styles
import Country from "./pages/Country";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/world" element={<World />} />
          <Route path="/business" element={<Business />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/country" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

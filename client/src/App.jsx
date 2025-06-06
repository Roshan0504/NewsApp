import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import World from "./pages/World";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import Sports from "./pages/Sports";
import Country from "./pages/Country";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world" element={<World />} />
        <Route path="/business" element={<Business />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/country" element={<Country />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

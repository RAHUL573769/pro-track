import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about_us" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

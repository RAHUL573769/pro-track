import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import Issues from "./Components/Dashboard/Issues";
import Meetings from "./Components/Dashboard/Meetings";
import MyTasks from "./Components/Dashboard/MyTasks";
import Teams from "./Components/Dashboard/Teams";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard">
          <Route index elementelement={<DashboardHome />} />
          <Route path="mytask" element={<MyTasks></MyTasks>}></Route>
          <Route path="teams" element={<Teams></Teams>}></Route>
          <Route path="meetings" element={<Meetings></Meetings>}></Route>
          <Route path="issues" element={<Issues></Issues>}></Route>
        </Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

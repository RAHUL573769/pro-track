import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import DashWelcome from "./Components/Dashboard/DashWelcome";
import Issues from "./Components/Dashboard/Issues";
import MyTasks from "./Components/Dashboard/MyTasks";
import Projects from "./Components/Dashboard/Projects";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dashboard" element={<DashboardHome></DashboardHome>}>
            <Route index element={<DashWelcome></DashWelcome>}></Route>
            <Route path="projects" element={<Projects></Projects>}></Route>
            <Route path="tasks" element={<MyTasks></MyTasks>}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="issues" element={<Issues />}></Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

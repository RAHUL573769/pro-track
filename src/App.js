import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import DashWelcome from "./Components/Dashboard/DashWelcome";
import MyTasks from "./Components/Dashboard/MyTasks";
import Projects from "./Components/Dashboard/Projects";

import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";

import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/dashboard" element={<DashboardHome></DashboardHome>}>
          <Route index element={<DashWelcome></DashWelcome>}></Route>
          <Route path="projects" element={<Projects></Projects>}></Route>
          <Route path="tasks" element={<MyTasks></MyTasks>}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

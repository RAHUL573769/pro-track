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
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<DashboardHome />} />

          <Route path="mytask" element={<MyTasks></MyTasks>}></Route>

          <Route path="teams" element={<Teams></Teams>}></Route>
          <Route path="meetings" element={<Meetings></Meetings>}></Route>
          <Route path="issues" element={<Issues></Issues>}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

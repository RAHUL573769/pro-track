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
<<<<<<< HEAD
import Dashboard from "./Pages/Dashboard";
=======
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
>>>>>>> 3167a453ef7dd9cb9c17088a304efdf2b14120b2
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
<<<<<<< HEAD
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<DashboardHome />} />

          <Route path="mytask" element={<MyTasks></MyTasks>}></Route>

          <Route path="teams" element={<Teams></Teams>}></Route>
          <Route path="meetings" element={<Meetings></Meetings>}></Route>
          <Route path="issues" element={<Issues></Issues>}></Route>
        </Route>
=======
        <Route path="/about_us" element={<AboutUs />}></Route>
        <Route path="/contact_us" element={<Contact />}></Route>
>>>>>>> 3167a453ef7dd9cb9c17088a304efdf2b14120b2
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

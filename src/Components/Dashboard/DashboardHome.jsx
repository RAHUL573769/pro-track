import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const DashboardHome = () => {
  return (
    <div className="flex">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Page content here --> */}
          <div className="bg-seaBlue">
            <Navbar />
          </div>
          <Outlet />
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard/projects">Projects</Link>
            </li>

            <li>
              <Link to="/dashboard/tasks">My Tasks</Link>
            </li>
            <li>
              <Link to="/dashboard/calender">Calender</Link>
            </li>
            <li>
              <Link to="/dashboard/meetings">Meetings</Link>
            </li>
            {/* <li>
              <Link to="/dashboard/issues">Issues</Link>
            </li>
            <li>
              <Link to="/dashboard/feedbacks">Feedbacks</Link>
            </li>
            <li>
              <Link to="/dashboard/files">Company's Files</Link>
            </li> */}
            {/* <li>
              <Link>Tasks</Link>
            </li> */}
            {/* <li>
              <Link>Celender</Link>
            </li> */}
            {/* <li>
              <Link>My Meetings</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

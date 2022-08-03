import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}

          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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

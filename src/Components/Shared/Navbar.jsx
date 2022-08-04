import { FiMoreVertical } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Product</Link>
      </li>
      <li>
        <Link to="/">Customers</Link>
      </li>
      <li>
        <Link to="/">Support</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>

      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-blue fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            {" "}
          </ul>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="text-white cursor-pointer text-3xl font-extrabold ml-2">
          ProTrack
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold text-white">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          <div className="mr-5 text-2xl">
            <GrNotification />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex="0"
            className="btn btn-ghost btn-circle avatar online"
          >
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Admin console</a>
            </li>
            <li>
              <a href="/">My Settings</a>
            </li>
            <li>
              <a href="/">Privacy policy</a>
            </li>
            <li>
              <a href="/">
                More{" "}
                <span className="ml-24">
                  <FiMoreVertical />
                </span>
              </a>
            </li>
            <hr />
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

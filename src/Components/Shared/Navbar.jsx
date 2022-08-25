import { FiMoreVertical } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'
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
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start ">
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
        <Link
          to="/"
          className="text-red-500 cursor-pointer text-3xl font-extrabold ml-2"
        >
         <img width={200} src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold text-white">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

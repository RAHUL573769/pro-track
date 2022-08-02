import { FiMoreVertical } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";
const Navbar = () => {
<<<<<<< HEAD
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
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
=======
  const navItems = <>

    <li><Link to='/'>Product</Link></li>
    <li><Link to='/'>Customers</Link></li>
    <li><Link to='/'>Support</Link></li>
    <li><Link to='/'>Blog</Link></li>
    <li><Link to='/about_us'>About Us</Link></li>
    <li><Link to='/contact_us'>Contact Us</Link></li>

  </>
>>>>>>> 3167a453ef7dd9cb9c17088a304efdf2b14120b2
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
<<<<<<< HEAD
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
=======
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
>>>>>>> 3167a453ef7dd9cb9c17088a304efdf2b14120b2
            {navItems}
          </ul>
        </div>
        <Link to='/' class="btn btn-ghost normal-case text-xl">ProTrack</Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <div class="navbar-end">
        <div class="flex-none">
          <div class="mr-5 text-2xl">
            <GrNotification />
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar online">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52"
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

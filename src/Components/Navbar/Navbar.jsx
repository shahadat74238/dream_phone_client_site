import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-rose-400 underline uppercase font-medium"
              : " uppercase font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/phones"
          className={({ isActive }) =>
            isActive
              ? "text-rose-400 underline uppercase font-medium"
              : " uppercase font-medium"
          }
        >
          Phones
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-rose-400 underline uppercase font-medium"
              : " uppercase font-medium"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-300 navbar px-5 md:px-10">
      <div className="navbar-start">
        <Link to="/" className="uppercase text-2xl font-semibold">
          Dram Phones
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-10 menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link>
          <button className="font-medium hidden lg:flex uppercase px-5 py-2 bg-gray-800 text-white">
            Login
          </button>
        </Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-32"
          >
            {navLinks}
            <li>
              <Link>
                <button className="font-medium  uppercase px-5 py-2 bg-gray-800 text-white">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

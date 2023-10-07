import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-500 underline font-extrabold px-4 py-2 outline rounded-2xl outline-blue-700" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourServices"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-500 underline px-4 py-2 outline rounded-2xl outline-blue-700 font-extrabold" : ""
          }
        >
          Our Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-500 underline px-4 py-2 outline rounded-2xl outline-blue-700 font-extrabold" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-slate-200">
      <div className="navbar  container mx-auto px-8 py-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-medium text-slate-950"
            >
              {navLinks}
            </ul>
          </div>
          <a className="font-bold text-xl md:text-3xl text-lime-600"><span className="text-2xl md:text-3xl lg:text-4xl text-red-600">E</span>-Management</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-6 menu-horizontal px-1 text-xl font-medium text-slate-950">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-500 underline font-extrabold" : ""
            }
          >
            <a className=" text-xl font-medium text-slate-950">Login</a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;

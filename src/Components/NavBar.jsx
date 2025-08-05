// Navbar Component
import { FaAmazonPay } from "react-icons/fa";
import { useContext } from "react";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

import { Navigate, NavLink } from "react-router";
import { AuthContext } from "./Context/AuthContext";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { user, logoutUser, newBalance } = useContext(AuthContext);
  console.log(newBalance);

  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>

      <>
        <NavLink to={"/bills"}>Bills</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </>

      {!user && (
        <>
          <NavLink to={"/register"}>Register</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </>
      )}
    </>
  );
  function handleLogout() {
    logoutUser().then(() => console.log("user logged out"));
  }

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white"
            aria-label="Toggle Mobile Menu" // Add accessibility label
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu Content */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-80 z-50 flex justify-start w-5/12">
              <div className="bg-gray-900 text-white w-64 h-full pt-10 bg-opacity-25">
                <div className=" flex-none">
                  {user && (
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL}
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                      >
                        <li>
                          <a className="justify-between">
                            {user.displayName}
                            <span className="badge">New</span>
                          </a>
                        </li>
                        <li>
                          <a>Current Balance :{newBalance}</a>
                        </li>
                        <li>
                          {user ? (
                            <a onClick={handleLogout}>Logout</a>
                          ) : (
                            <>
                              <Navigate to={"/"}></Navigate>
                              <NavLink to={"/login"}>LogIn</NavLink>
                            </>
                          )}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                  <div className="">
                    <a className="btn btn-ghost text-xl">{user.displayName}</a>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white"
                    aria-label="Close Mobile Menu"
                  >
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex flex-col space-y-4 mt-8 px-4">
                  <>{links}</>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="">
          <NavLink
            className="btn btn-ghost text-xl font-3xl bg-gray-800
          "
            to={"/"}
          >
            Zed <FaAmazonPay />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="r flex gap-8">{links}</div>
        </div>
        {user && (
          <div className=" flex-none ">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    {user.displayName}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Current Balance:{newBalance} </a>
                </li>
                <li>
                  {user ? (
                    <a onClick={handleLogout}>Logout</a>
                  ) : (
                    <>
                      <Navigate to={"/"}></Navigate>
                      <NavLink to={"/login"}>LogIn</NavLink>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default NavBar;

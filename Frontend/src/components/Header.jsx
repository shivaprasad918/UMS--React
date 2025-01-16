import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    fetch("/api/auth/signout", { method: "POST" });

    dispatch({ type: "user/signout" }); // Clear user state on logout
    navigate("/");
  };

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-slate-700 hover:text-slate-900"
        >
          User Management System
        </Link>

        {/* Hamburger menu for smaller screens */}
        <button
          className="block md:hidden text-slate-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:relative top-14 left-0 w-full md:w-auto bg-slate-200 md:bg-transparent md:top-auto md:left-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-6 p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="text-slate-700 hover:text-slate-900 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-slate-700 hover:text-slate-900 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </li>
            {user ? (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="text-slate-700 hover:text-slate-900 transition duration-200"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/sign-in"
                  className="text-slate-700 hover:text-slate-900 transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



import { useState } from "react";
import logo from "../assets/awslogo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  const location = useLocation();

useEffect(() => {
  setCourseOpen(false);
  setMenuOpen(false);
}, [location]);


  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AWS Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <span className="text-2xl font-bold text-white">
            Cloud Learning
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg items-center gap-8 text-yellow-500 font-medium">

          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>

          {/* Courses Dropdown */}
          <li className="relative">
            <button
              onClick={() => setCourseOpen(!courseOpen)}
              className="hover:text-blue-500"
            >
              Courses
            </button>

            {courseOpen && (
              <div className="absolute top-8 left-0 bg-white text-black rounded shadow-lg w-48">
                <Link
                  to="/courses"
                  onClick={() => setCourseOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-500"
                >
                  Our Courses
                </Link>
                <hr />
                <Link
                  to="/free-courses"
                  onClick={() => setCourseOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-500"
                >
                  Free Course Content
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/Selflearning" className="hover:text-blue-500">
              Self Learning
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-500">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-white rounded hover:bg-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to="/contact"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Ask Query
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white shadow-lg">
          <ul className="flex flex-col gap-5 px-6 py-6 text-lg">

            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

            {/* Mobile Courses Dropdown */}
            <div>
              <button
                onClick={() => setCourseOpen(!courseOpen)}
                className="w-full text-left"
              >
                Courses
              </button>

              {courseOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2 text-yellow-400">
                  <Link to="/courses" onClick={() => setMenuOpen(false)}>
                    Paid Courses
                  </Link>
                  <Link to="/free-courses" onClick={() => setMenuOpen(false)}>
                    Free Course Content
                  </Link>
                </div>
              )}
            </div>

            <Link to="/Selflearning" onClick={() => setMenuOpen(false)}>
              Self Learning
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>

            <div className="flex flex-col gap-3 pt-4">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="w-full px-4 py-2 border border-blue-600 text-center rounded"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="w-full px-4 py-2 bg-blue-600 text-center rounded"
              >
                Sign Up
              </Link>
            </div>

          </ul>
        </div>
      )}
    </nav>
  );
}

// import { useState } from "react";
// import logo from '../assets/aws-logo.png';
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-black shadow z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//            <img
//             src={logo}
//             alt="AWS Logo"
//             className="h-14 md:h-16 w-auto object-contain" />
//           <span className="text-2xl font-bold text-white">
//                      Cloud Learning
//           </span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex  text-xl items-center gap-8 text-yellow-500 font-medium">
//           <li className="hover:text-blue-600 cursor-pointer">Home</li>
//           <li className="hover:text-blue-600 cursor-pointer">Courses</li>
//           <li className="hover:text-blue-600 cursor-pointer">About-us</li>
//           <li className="hover:text-blue-600 cursor-pointer">Contact-us</li>
//         </ul>

//         {/* Auth Buttons (Desktop) */}
//         <div className="hidden md:flex gap-4">
//           <button className="px-4 py-2 border border-blue-600 text-white rounded hover:bg-blue-50">
//             <Link to="/Login">Login</Link>

//           </button>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//             <Link to="/signup">Sign Up</Link>
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <ul className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium">
//             <li className="hover:text-blue-600 cursor-pointer">Home</li>
//             <li className="hover:text-blue-600 cursor-pointer">Courses</li>
//             <li className="hover:text-blue-600 cursor-pointer">About-us</li>
//             <li className="hover:text-blue-600 cursor-pointer">Contact-us</li>

//             <div className="flex flex-col gap-3 pt-4">
//               <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded">
//                 Login
//               </button>
//               <button className="w-full px-4 py-2 bg-blue-600 text-white rounded">
//                 Sign Up
//               </button>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }






import { useState } from "react";
import logo from "../assets/awslogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/courses" className="hover:text-blue-500">Courses</Link>
          <Link to="/Selflearning" className="hover:text-blue-500">Self Learning</Link>
          <Link to="/about" className="hover:text-blue-500">About Us</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-white rounded
                       hover:bg-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded
                       hover:bg-blue-700 transition"
          >
            Sign Up
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
            <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <Link to="/Selflearning" onClick={() => setMenuOpen(false)}>Self Learning</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

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

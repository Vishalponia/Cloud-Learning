import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaTelegramPlane,
  FaGooglePlay,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ================= BRAND ================= */}
        <div>
          <h3 className="text-3xl font-extrabold text-yellow-400 tracking-wide">
            Cloud Learning
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Learn AWS. Build Cloud Careers.  
            Premium cloud training with real-world projects.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
  {[
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/groups/9262556/",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/AWSLearnings4Cloud/",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@CloudLearning",
    },
    {
      icon: <FaGooglePlay />,
      link: "https://edumartin.page.link/9pMY",
    },
    {
      icon: <FaTelegramPlane />,
      link: "https://t.me/cloudlearnings",
    },
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#12182a] text-gray-300 hover:bg-yellow-400 hover:text-black transition-all duration-300"
    >
      {item.icon}
    </a>
  ))}
</div>
</div>


        {/* ================= CONTACT ================= */}
        <div className="space-y-5 text-sm text-gray-300">
          <h4 className="text-white font-semibold text-lg">Contact Info</h4>

          <p className="flex gap-3">
            <MapPin className="text-yellow-400 shrink-0" />
            Cloud Learning Institute, Park Town Complex, Aditya World City,
            NH-24, Ghaziabad, UP – 201002
          </p>

          <p className="flex gap-3 items-center">
  <a
    href="tel:+918287546108"
    className="flex gap-3 items-center hover:text-yellow-400 transition"
  >
    <Phone className="text-yellow-400" />
    <span>+91 8287546108</span>
  </a>
</p>

<p className="flex gap-3 items-center">
  <a
    href="mailto:awslearnings@gmail.com"
    className="flex gap-3 items-center hover:text-yellow-400 transition"
  >
    <Mail className="text-yellow-400" />
    <span>awslearnings@gmail.com</span>
  </a>
</p>

        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
  <h4 className="text-white font-semibold text-lg">Quick Links</h4>
  <ul className="mt-5 space-y-3 text-white">
    {[
      { name: "Home", path: "/" },
      { name: "Courses", path: "/courses" },
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
    ].map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


        {/* ================= COURSES ================= */}
        <div>
          <h4 className="text-white font-semibold text-lg">Top Courses</h4>
          <ul className="mt-5 space-y-3 text-white">
            {[
              "AWS Solution Architect – Associate",
              "AWS Solution Architect – Professional",
              "Google Cloud Platform",
              "AZURE AZ-104",
              "AZURE AZ-900",
            ].map((course) => (
              <li key={course}>
                <Link
                  to="/courses"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  {course}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      

      {/* ================= BOTTOM BAR ================= */}
      {/* ================= BOTTOM BAR ================= */}
<div className="border-t border-gray-800 py-6">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

    <p className="text-gray-400 text-center md:text-left">
      © {new Date().getFullYear()}{" "}
      <span className="text-yellow-400 font-semibold">
        Cloud Learning
      </span>{" "}
      — Crafted for Future Cloud Engineers
    </p>

    <div className="flex gap-6">
      <Link
        to="/privacy-policy"
        className="text-gray-400 hover:text-yellow-400 transition"
      >
        Privacy Policy
      </Link>

      <Link
        to="/terms-conditions"
        className="text-gray-400 hover:text-yellow-400 transition"
      >
        Terms & Conditions
      </Link>
    </div>

  </div>
</div>

    </footer>
    
  );
}

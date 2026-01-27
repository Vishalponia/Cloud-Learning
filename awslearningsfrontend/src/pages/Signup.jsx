import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 pt-28">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 border">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Create Account
        </h2>
        <p className="text-center text-md text-gray-600 mt-1 mb-6">
          Join <span className="text-yellow-500 font-semibold">AWSLearnings</span>
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-3 py-2 text-sm rounded-md border
                       focus:ring-2 focus:ring-[#f5c26b] focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 py-2 text-sm rounded-md border
                       focus:ring-2 focus:ring-[#f5c26b] focus:outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 text-sm rounded-md border
                       focus:ring-2 focus:ring-[#f5c26b] focus:outline-none"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 text-sm rounded-md border
                       focus:ring-2 focus:ring-[#f5c26b] focus:outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-md text-sm font-semibold
                       bg-yellow-500 text-black
                       hover:bg-[#e6ad4e] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-lg text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

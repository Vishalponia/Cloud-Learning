import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center
                        bg-gradient-to-br from-[#f9fafb] via-white to-[#fdf6e3]
                        px-4 pt-28">

      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6
                      border border-gray-200
                      animate-fadeIn">

        {/* Heading */}
        <h2 className="text-2xl font-extrabold text-center text-gray-900">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-600 mt-1 mb-6">
          Login to <span className="text-yellow-500 font-bold">Cloud Learning</span>
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 py-2.5 text-sm rounded-md border
                       border-gray-300
                       focus:ring-2 focus:ring-[#f5c26b]
                       focus:outline-none transition"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2.5 text-sm rounded-md border
                       border-gray-300
                       focus:ring-2 focus:ring-[#f5c26b]
                       focus:outline-none transition"
          />

          {/* Forgot */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-xs text-[#c89c3c] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-md text-sm font-semibold
                       bg-yellow-500 text-black
                       hover:bg-yellow-600
                       transition-all duration-200
                       hover:shadow-lg hover:-translate-y-[1px]"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Signup */}
        <p className="text-center text-xs text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#c89c3c] font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
}

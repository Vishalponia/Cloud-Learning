import logo from "../assets/aws-logo.png";

export default function AboutUs() {
  return (
    <section className="pt-32 pb-28 bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6">
            About <span className="text-[#f5c26b]">Cloud Learning</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Empowering learners to master AWS & modern cloud technologies
            through hands-on training, real-world projects, and
            industry-driven education.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Cloud Learning is a premium cloud education platform dedicated
              to AWS certifications and real-world cloud engineering skills.
              We help learners transition from theory to production-level
              cloud environments.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              Every course is designed by experienced cloud professionals
              with a strong focus on architecture, security, scalability,
              and career readiness.
            </p>

            {/* Accent Line */}
            <div className="mt-8 h-1 w-24 bg-[#f5c26b] rounded-full"></div>
          </div>

          {/* Right Card */}
          <div className="relative bg-[#111827] border border-gray-700 rounded-3xl p-10 shadow-2xl">
            
            {/* Glow */}
            <div className="absolute -top-6 -right-6 h-28 w-28 bg-[#f5c26b]/20 blur-3xl rounded-full"></div>

            <img
              src={logo}
              alt="Cloud Learning"
              className="h-24 mb-8"
            />

            <ul className="space-y-5 text-gray-200 text-lg">
              <li>✔ AWS-Focused Learning Paths</li>
              <li>✔ Hands-on Labs & Real Projects</li>
              <li>✔ Secure Premium Content Access</li>
              <li>✔ Career-Oriented Cloud Training</li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-10 mt-28 text-center">
          {[
            { value: "10+", label: "AWS Courses" },
            { value: "5K+", label: "Students Trained" },
            { value: "95%", label: "Success Rate" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#111827] to-[#0b0f19]
                         border border-gray-700 rounded-2xl p-10
                         hover:-translate-y-2 transition shadow-xl"
            >
              <h3 className="text-4xl font-extrabold text-[#f5c26b]">
                {item.value}
              </h3>
              <p className="text-gray-300 mt-3 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

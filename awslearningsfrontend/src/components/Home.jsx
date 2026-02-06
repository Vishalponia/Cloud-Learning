import {Link} from "react-router-dom";
import image from "../assets/heroimg.jpg";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import CourseCard2 from "../components/CourseCard2";
import expertImg from "../assets/expert.jpg";
import projectImg from "../assets/projects.jpg";
import secureImg from "../assets/secure.jpg";



export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="pt-22 ">

      {/* ================= HERO SECTION ================= */}
      

<section
  className="relative min-h-[90vh] flex items-center text-white"
  style={{
    backgroundImage:
      "url('https://www.encodedots.com/blog/wp-content/uploads/2025/02/AWS-Cloud-Computing-1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

  <div className="relative max-w-7xl mx-auto px-6 w-full">
    <div className="grid md:grid-cols-2 items-center">
      
      {/* Empty left space */}
      <div></div>

      {/* Content Right */}
      <div className="py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Learn Cloud Courses <br /> The Smart Way
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-xl">
          Cloud Learning helps you master AWS with structured courses,
          real-world projects, and expert guidance.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/courses"
            className="bg-yellow-400 text-black px-7 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Explore Courses
          </Link>

          <Link
            to="/contact"
            className="border border-white px-7 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Get Started
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>

      




<section className="relative py-24 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/bgimage.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-white mb-4">
            Why Choose <span className="text-[#f5c26b]">Cloud Learning</span>?
          </h2>

          <p className="text-center text-gray-300 font-semibold max-w-2xl mx-auto mb-16">
            Learn cloud the right way with industry-driven training,
            real projects, and secure premium content.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Industry Experts",
                desc: "Learn AWS from certified cloud engineers with real production experience.",
                img: expertImg,
              },
              {
                title: "Hands-on Projects",
                desc: "Work on real AWS projects that prepare you for cloud jobs.",
                img: projectImg,
              },
              {
                title: "Secure Learning",
                desc: "Premium, secure content access only for enrolled students.",
                img: secureImg,
              },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => navigate("/courses")}
                className="group relative rounded-2xl p-10
                           bg-gradient-to-br from-[#0b0f19] to-[#111827]
                           border border-[#f5c26b]/30
                           cursor-pointer
                           transition-all duration-500 ease-out
                           hover:-translate-y-3
                           hover:border-[#f5c26b]
                           hover:shadow-[0_25px_60px_rgba(245,194,107,0.35)]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl
                                bg-gradient-to-br from-[#f5c26b]/10 to-transparent
                                opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10 w-24 h-24 mx-auto mb-8 rounded-full
                                bg-gradient-to-br from-[#f5c26b] to-[#fde68a]
                                flex items-center justify-center
                                shadow-[0_10px_25px_rgba(245,194,107,0.5)]">
                  <img src={item.img} alt={item.title} className="h-16 w-16" />
                </div>

                <h3 className="relative z-10 text-xl font-semibold text-white text-center mb-4">
                  {item.title}
                </h3>

                <p className="relative z-10 text-gray-300 text-center">
                  {item.desc}
                </p>

                <div className="relative z-10 mt-8 mx-auto h-[3px] w-14
                                bg-gradient-to-r from-[#f5c26b] to-[#fde68a]
                                rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ================= POPULAR COURSES =================*/}
      
      <section className="relative py-20 overflow-hidden">
  
  {/* ================= Background Video ================= */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/bgimage.mp4" type="video/mp4" />
  </video>

  {/* ================= Dark Overlay ================= */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

  {/* ================= Content ================= */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-extrabold text-center mb-12">
      <span className="bg-gradient-to-r from-[#f5c26b] to-[#fde68a] bg-clip-text text-transparent">
        Popular AWS Courses
      </span>
    </h2>

    <div className="grid md:grid-cols-3 gap-20">
      <CourseCard />
      <CourseCard2 />
     
    </div>

  </div>
</section>


      {/* ================= HOW IT WORKS =================*/}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How AWSLearnings Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              "Choose Your Course",
              "Purchase & Enroll",
              "Learn & Get Certified",
            ].map((step, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="relative py-24 overflow-hidden">

  {/* ================= Background Video ================= */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/bgvideo2.mp4" type="video/mp4" />
  </video>

  {/* ================= Dark Overlay ================= */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>

  {/* ================= Content ================= */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl font-extrabold text-center text-white mb-4">
      How <span className="text-[#f5c26b]">AWSLearnings</span> Works
    </h2>

    <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
      Start your cloud journey in three simple and effective steps.
    </p>

    {/* ================= Steps ================= */}
    <div className="grid md:grid-cols-3 gap-10 text-center">
      {[
        {
          step: "01",
          title: "Choose Your Course",
          text: "Browse and select the AWS course that fits your goals.",
        },
        {
          step: "02",
          title: "Purchase & Enroll",
          text: "Enroll securely and get instant access to the course.",
        },
        {
          step: "03",
          title: "Learn & Get Certified",
          text: "Complete training and earn your AWS certification.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative rounded-2xl p-10
                     bg-gradient-to-br from-[#0b0f19] to-[#111827]
                     border border-[#f5c26b]/30
                     transition-all duration-500 ease-out
                     hover:-translate-y-3
                     hover:border-[#f5c26b]
                     hover:shadow-[0_25px_60px_rgba(245,194,107,0.35)]"
        >
          {/* Golden Hover Glow */}
          <div className="absolute inset-0 rounded-2xl
                          bg-gradient-to-br from-[#f5c26b]/10 to-transparent
                          opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Step Circle */}
          <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full
                          bg-gradient-to-br from-[#f5c26b] to-[#fde68a]
                          flex items-center justify-center
                          shadow-[0_10px_25px_rgba(245,194,107,0.45)]">
            <span className="text-xl font-bold text-black">
              {item.step}
            </span>
          </div>

          {/* Content */}
          <h3 className="relative z-10 text-xl font-semibold text-white mb-3">
            {item.title}
          </h3>

          <p className="relative z-10 text-gray-300 text-sm leading-relaxed">
            {item.text}
          </p>

          {/* Golden Divider */}
          <div className="relative z-10 mt-6 mx-auto h-[3px] w-12
                          bg-gradient-to-r from-[#f5c26b] to-[#fde68a]
                          rounded-full
                          group-hover:w-20 transition-all duration-500">
          </div>
        </div>
      ))}
    </div>

  </div>
</section>



      {/* ================= TESTIMONIALS ================= */}
      <section className="relative py-24 overflow-hidden">

  {/* ================= Background Video ================= */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/bgvideo2.mp4" type="video/mp4" />
  </video>

  {/* ================= Dark Overlay ================= */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>

  {/* ================= Content ================= */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl font-extrabold text-center text-white mb-4">
      What Our <span className="text-[#f5c26b]">Students Say</span>
    </h2>

    <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto mb-16">
      Trusted by learners who have successfully started their cloud careers.
    </p>

    {/* ================= Testimonials ================= */}
    <div className="grid md:grid-cols-2 gap-10">
      {[
        {
          name: "Rohit Sharma",
          role: "AWS Solutions Architect – Associate",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          feedback:
            "AWSLearnings helped me crack my first AWS certification. The hands-on labs and real-world examples made learning very practical.",
          rating: 5,
        },
        {
          name: "Neha Verma",
          role: "Cloud Engineer",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          feedback:
            "The course structure is very clear and beginner friendly. Projects gave me the confidence to work on AWS in real environments.",
          rating: 4,
        },
      ].map((t, index) => (
        <div
          key={index}
          className="group relative rounded-2xl p-8
                     bg-gradient-to-br from-[#0b0f19] to-[#111827]
                     border border-[#f5c26b]/30
                     transition-all duration-500 ease-out
                     hover:-translate-y-3
                     hover:border-[#f5c26b]
                     hover:shadow-[0_25px_60px_rgba(245,194,107,0.35)]"
        >
          {/* Golden Hover Glow */}
          <div className="absolute inset-0 rounded-2xl
                          bg-gradient-to-br from-[#f5c26b]/10 to-transparent
                          opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Profile */}
          <div className="relative z-10 flex items-center gap-4 mb-6">
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover
                         border-2 border-[#f5c26b]/60"
            />
            <div>
              <h4 className="font-semibold text-white">
                {t.name}
              </h4>
              <p className="text-sm text-gray-400">
                {t.role}
              </p>
            </div>
          </div>

          {/* Feedback */}
          <p className="relative z-10 text-gray-300 leading-relaxed mb-6 italic">
            “{t.feedback}”
          </p>

          {/* Rating */}
          <div className="relative z-10 flex items-center gap-1">
            {[...Array(t.rating)].map((_, i) => (
              <span key={i} className="text-[#f5c26b] text-lg">★</span>
            ))}
            {[...Array(5 - t.rating)].map((_, i) => (
              <span key={i} className="text-gray-600 text-lg">★</span>
            ))}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>



      

    </div>
  );
}

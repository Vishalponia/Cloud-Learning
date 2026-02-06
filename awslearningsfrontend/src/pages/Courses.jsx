
import { useState } from "react";
import { courses } from "../data/courseData";

export default function Courses() {
  const [activeCourse, setActiveCourse] = useState(null);

  return (
    <section className="relative pt-22 pb-20 overflow-hidden">

      {/* ================= Background Video ================= */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/bgvideo2.mp4" type="video/mp4" />
      </video> */}
       <div className="min-h-screen bg-gradient-to-br from-blue-600 via-white to-indigo-50">
      {/* ================= Overlay ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>

      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white">
            Our <span className="text-[#f5c26b]">Courses</span>
          </h1>
          <p className="text-white text-lg mt-3"> 
            Industry-ready cloud courses with complete syllabus
          </p>
        </div>

        {/* ================= Course Cards ================= */}
        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-2xl p-8
                         bg-gray-100
                         border border-green-600
                         transition-all duration-500 ease-out
                         hover:-translate-y-3
                         hover:border-[#f5c26b]
                         hover:shadow-[0_25px_60px_rgba(245,194,107,0.35)]"
            >
              {/* Golden Hover Glow */}
              <div className="absolute inset-0 rounded-2xl
                              bg-gradient-to-br from-[#f5c26b]/10 to-transparent
                              opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <h2 className="relative z-10 text-2xl font-bold text-black">
                {course.title}
              </h2>

              <p className="relative z-10 text-black mt-3 text-2xl">
                {course.description}
              </p>

              <div className="relative z-10 flex gap-6 text-lg text-black  mt-4">
                <span>📘 {course.level}</span>
                <span>⏱ {course.duration}</span>
              </div>

              <button
                onClick={() => setActiveCourse(course)}
                className="relative z-10 mt-6 px-6 py-3
                           bg-gradient-to-r from-yellow-500  to bg-yellow-400
                           text-black font-semibold rounded-lg
                           hover:scale-105 transition"
              >
                View Course Content
              </button>
            </div>
          ))}
        </div>
      </div >

      {/* ================= Modal ================= */}
      {activeCourse && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="relative bg-black/90
                          max-w-3xl w-full rounded-2xl
                          border border-[#f5c26b]/40
                          shadow-[0_30px_80px_rgba(245,194,107,0.4)]
                          p-8 overflow-y-auto max-h-[85vh]">

            {/* Close */}
            <button
              onClick={() => setActiveCourse(null)}
              className="absolute top-4 right-4 text-xl font-bold text-white hover:text-[#f5c26b]"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-3xl font-extrabold mb-6 text-white">
              {activeCourse.title}
            </h2>

            {/* Download */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = `${window.location.origin}${activeCourse.pdf}`;
                  link.download = "";
                  link.click();
                }}
                className="px-6 py-3
                           bg-gradient-to-r from-[#f5c26b] to-[#fde68a]
                           text-black font-semibold rounded-lg
                           hover:scale-105 transition"
              >
                ⬇ Download PDF
              </button>
            </div>

            {/* Content */}
            <ul className="space-y-4">
              {activeCourse.content.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-[#f5c26b] font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      </div>
    </section>

    
  );
}

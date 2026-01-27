// import { motion } from "framer-motion";

// const courses = [
//   {
//     title: "AWS Solutions Architect – Associate",
//     desc: "Learn core AWS services and design secure, scalable architectures.",
//     level: "Beginner – Intermediate",
//   },
//   {
//     title: "AWS Solutions Architect – Professional",
//     desc: "Advanced AWS architecture, migration, and enterprise solutions.",
//     level: "Advanced",
//   },
//   {
//     title: "Google Cloud Associate Engineer",
//     desc: "Deploy, manage, and operate applications on Google Cloud.",
//     level: "Beginner – Intermediate",
//   },
//   {
//     title: "Microsoft Azure AZ-400",
//     desc: "Manage Azure identities, compute, storage, and networks.",
//     level: "Intermediate",
//   },
//   {
//     title: "Microsoft Azure AZ-900",
//     desc: "Manage Azure identities, compute, storage, and networks.",
//     level: "Intermediate",
//   },
// ];

// export default function Courses() {
//   return (
//     <section className="pt-28 pb-20 bg-gradient-to-br from-slate-50 to-slate-100">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
//             Our <span className="text-blue-600">Courses</span>
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Industry-focused cloud certification programs with real-world projects.
//           </p>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -8 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-3">
//                 {course.title}
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 {course.desc}
//               </p>

//               <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-6">
//                 {course.level}
//               </span>

//               <button className="w-full mt-4 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
//                 View Course Content
//               </button>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }








// import { useState } from "react";
// import { courses } from "../data/courseData";

// export default function Courses() {
//   const [activeCourse, setActiveCourse] = useState(null);

//   return (
//     <section className="pt-28 pb-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h1 className="text-4xl font-extrabold text-gray-900">
//             Our <span className="text-blue-600">Courses</span>
//           </h1>
//           <p className="text-gray-600 mt-3">
//             Industry-ready cloud courses with complete syllabus
//           </p>
//         </div>

//         {/* Course Cards */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white rounded-2xl shadow-lg border p-8 hover:shadow-xl transition"
//             >
//               <h2 className="text-2xl font-bold text-gray-900">
//                 {course.title}
//               </h2>

//               <p className="text-gray-600 mt-3">
//                 {course.description}
//               </p>

//               <div className="flex gap-6 text-sm text-gray-500 mt-4">
//                 <span>📘 {course.level}</span>
//                 <span>⏱ {course.duration}</span>
//               </div>

//               <button
//                 onClick={() => setActiveCourse(course)}
//                 className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//               >
//                 View Course Content
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {activeCourse && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
//           <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl p-8 relative overflow-y-auto max-h-[85vh]">

//             <button
//               onClick={() => setActiveCourse(null)}
//               className="absolute top-4 right-4 text-xl font-bold"
//             >
//               ✕
//             </button>
//                    <div className="flex gap-4 mt-8">
  
//   <button
//     onClick={() => {
//       const link = document.createElement("a");
//       link.href = `${window.location.origin}${activeCourse.pdf}`;
//       link.download = "";
//       link.click();
//     }}
//     className="px-6 py-3 bg-blue-600 text-white rounded-lg"
//   >
//     ⬇ Download PDF
//   </button>
// </div>



//             <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
//               {activeCourse.title}
//             </h2>
//             <ul className="space-y-3 mt-6">
//               {activeCourse.content.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-start gap-3 text-gray-700"
//                 >
//                   <span className="text-blue-600 font-bold">✔</span>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }




import { useState } from "react";
import { courses } from "../data/courseData";

export default function Courses() {
  const [activeCourse, setActiveCourse] = useState(null);

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">

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

      {/* ================= Overlay ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>

      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white">
            Our <span className="text-[#f5c26b]">Courses</span>
          </h1>
          <p className="text-gray-300 mt-3">
            Industry-ready cloud courses with complete syllabus
          </p>
        </div>

        {/* ================= Course Cards ================= */}
        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
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

              <h2 className="relative z-10 text-2xl font-bold text-white">
                {course.title}
              </h2>

              <p className="relative z-10 text-gray-300 mt-3">
                {course.description}
              </p>

              <div className="relative z-10 flex gap-6 text-sm text-gray-400 mt-4">
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
      </div>

      {/* ================= Modal ================= */}
      {activeCourse && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="relative bg-gradient-to-br from-[#0b0f19] to-[#111827]
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
    </section>
  );
}

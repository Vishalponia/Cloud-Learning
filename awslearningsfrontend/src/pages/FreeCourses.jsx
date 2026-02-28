import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const freeCourses = [
  {
    title: "AWS Solution Architect Associate (SAA)",
    file: "/pdfs/SAA-03.pdf",
  },
  {
    title: "AWS Solution Architect Professional",
    file: "/pdfs/aws-professional.pdf",
  },
  
  {
    title: "GCP Cloud Course",
    file: "/pdfs/GCP.pdf",
  },
];

const FreeCourses = () => {

const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    navigate("/login");
  }
}, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Free Course Content (PDF)
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {freeCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold mb-4">
              {course.title}
            </h2>

            <div className="flex gap-4">
              <a
                href={course.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-center hover:bg-blue-700"
              >
                View
              </a>

              <a
                href={course.file}
                download
                className="flex-1 bg-green-600 text-white py-2 rounded-xl text-center hover:bg-green-700"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeCourses;
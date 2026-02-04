const courses = [
  {
    id: 1,
    title: "AWS SAA03 Self Learning Course (Hindi) + 5 Practice Exam for Aws Certification.",
    image: "https://ali-cdn-wl-assets.classplus.co/production/single/zqkfn/e56ed29f-0356-4d17-8551-8107e0aa74f9.jpg",
    link: "https://www.awslearnings.in/courses/144044" // external link
  },
  {
    id: 2,
    title: "DevOps with AWS part 1",
    image: "https://ali-cdn-wl-assets.classplus.co/production/single/zqkfn/800bd640-38c4-4506-9f72-b90076b395ca.jpg",
    link: "https://www.awslearnings.in/courses/222742"
  },
  {
    id: 3,
    title: "DevOps with AWS part 2",
    image: "https://ali-cdn-wl-assets.classplus.co/production/single/zqkfn/800bd640-38c4-4506-9f72-b90076b395ca.jpg",
    link: "https://www.awslearnings.in/courses/224747"
  },
  {
    id: 4,
    title: "Docker Master Class for Beginners ",
    image: "https://ali-cdn-wl-assets.classplus.co/production/single/zqkfn/ab6538ba-3bf0-439a-ac99-e01c09cbc52e.jpg",
    link: "https://www.awslearnings.in/courses/134883"
  }
];

export default function SelfLearning() {
  return (
    <section className="pt-28 pb-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-white">
            Self Learning Courses
          </h1>
          <p className="mt-4 text-white max-w-2xl text-2xl mx-auto">
            Learn at your own pace with industry-focused self learning courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <a
              key={course.id}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* Course Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {course.title}
                </h3>
                <p className="mt-3 text-lg text-gray-600">
                  Click to open course on learning platform
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

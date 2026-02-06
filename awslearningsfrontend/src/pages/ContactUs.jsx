

// import { Mail, Phone, MapPin } from "lucide-react";
// import emailjs from "emailjs-com";

// export default function ContactUs() {

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       "service_h18s8zv",   // 🔹 service_xxx
//       "template_yc0vcpg",  // 🔹 template_xxx
//       e.target,
//       "rFqBdaPEWEMPHDc1Z"    // 🔹 public_xxx
//     )
//     .then(
//       (result) => {
//         alert("✅ Message sent successfully!");
//         e.target.reset();
//       },
//       (error) => {
//         alert("❌ Failed to send message");
//         console.error(error);
//       }
//     );
//   };

//   return (
//     <section className="pt-28 pb-20 bg-[#0b0f19] text-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h1 className="text-4xl font-extrabold mb-3">
//             Contact <span className="text-[#f5c26b]">Us</span>
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Have questions or need guidance? Reach out to Cloud Learning —
//             we’re here to help you build your cloud career.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10">

//           {/* Map */}
//           <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
//             <iframe
//               title="Cloud Learning Location"
//               src="https://www.google.com/maps?q=Cloud%20Learning%20Classes,%20Vivekanand%20Nagar,%20Aditya%20World%20City,%20Park%20Town%20Complex,%20NH-24,%20Ghaziabad%20201002&output=embed"
//               className="w-full h-full"
//               loading="lazy"
//             ></iframe>
//           </div>

//           {/* Form */}
//           <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 shadow-lg">

//             {/* Info */}
//             <div className="space-y-4 mb-8 text-gray-300 text-sm">
//               <p className="flex gap-3">
//                 <MapPin className="text-[#f5c26b]" />
//                 Cloud Learning Institute, Park Town Complex,
//                 NH-24, Ghaziabad – 201002
//               </p>
//               <p className="flex gap-3">
//                 <Phone className="text-[#f5c26b]" />
//                 +91 8287546108
//               </p>
//               <p className="flex gap-3">
//                 <Mail className="text-[#f5c26b]" />
//                 awslearnings@gmail.com
//               </p>
//             </div>

//             {/* EmailJS Form */}
//             <form onSubmit={sendEmail} className="space-y-4">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full px-4 py-2.5 rounded-md bg-[#0b0f19]
//                 border border-gray-700 text-sm focus:ring-2
//                 focus:ring-[#f5c26b] focus:outline-none"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//                 className="w-full px-4 py-2.5 rounded-md bg-[#0b0f19]
//                 border border-gray-700 text-sm focus:ring-2
//                 focus:ring-[#f5c26b] focus:outline-none"
//               />

//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Your Message / Query"
//                 required
//                 className="w-full px-4 py-2.5 rounded-md bg-[#0b0f19]
//                 border border-gray-700 text-sm focus:ring-2
//                 focus:ring-[#f5c26b] focus:outline-none resize-none"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="w-full py-2.5 rounded-md font-semibold
//                 bg-yellow-500 text-black hover:bg-yellow-600 transition"
//               >
//                 Send Message
//               </button>

//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {

  const sendFormData = async (e) => {
    e.preventDefault();

    const formData = {
  name: e.target.name.value,
  email: e.target.email.value,
  phone: e.target.phone.value,
  message: e.target.message.value,
};

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        console.log("Form Data:", formData);
        e.target.reset();
      } else {
        alert("❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server error. Try again later.");
    }
  };

  return (
    <section className="pt-28 pb-20 bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold mb-3">
            Contact <span className="text-[#f5c26b]">Us</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto">
            Have questions or need guidance? Reach out to Cloud Learning —
            we’re here to help you build your cloud career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
            <iframe
              title="Cloud Learning Location"
              src="https://www.google.com/maps?q=Cloud%20Learning%20Classes,%20Vivekanand%20Nagar,%20Aditya%20World%20City,%20Park%20Town%20Complex,%20NH-24,%20Ghaziabad%20201002&output=embed"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>

          {/* Form */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 shadow-lg">

            {/* Contact Info */}
            <div className="space-y-4 mb-8 text-gray-300 text-sm">
              <p className="flex gap-3">
                <MapPin className="text-[#f5c26b]" />
                Cloud Learning Institute, Park Town Complex,
                NH-24, Ghaziabad – 201002
              </p>
              <p className="flex gap-3">
                <Phone className="text-[#f5c26b]" />
                +91 8287546108
              </p>
              <p className="flex gap-3">
                <Mail className="text-[#f5c26b]" />
                awslearnings@gmail.com
              </p>
            </div>

            {/* Backend Connected Form */}
            <form onSubmit={sendFormData} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2.5 rounded-md bg-[#0b0f19]
                border border-gray-700 text-sm focus:ring-2
                focus:ring-[#f5c26b] focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2.5 rounded-md bg-[#0b0f19]
                border border-gray-700 text-sm focus:ring-2
                focus:ring-[#f5c26b] focus:outline-none"
              />  


              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
                className="w-full px-4 py-2.5 rounded-md bg-[#0b0f19]
                border border-gray-700 text-sm focus:ring-2
                focus:ring-[#f5c26b] focus:outline-none"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message / Query"
                required
                className="w-full px-4 py-2.5 rounded-md bg-[#0b0f19]
                border border-gray-700 text-sm focus:ring-2
                focus:ring-[#f5c26b] focus:outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-2.5 rounded-md font-semibold
                bg-yellow-500 text-black hover:bg-yellow-600 transition"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

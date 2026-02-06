const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-4">
          At <strong>AWSLearnings</strong>, we respect your privacy and are
          committed to protecting your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Name, email address, phone number</li>
          <li>Login and account details</li>
          <li>Payment and transaction information</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Provide access to courses and services</li>
          <li>Process payments and enrollments</li>
          <li>Send important updates and notifications</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Data Security
        </h2>
        <p className="text-gray-600">
          We use industry-standard security measures to protect your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600">
          Email: <strong>awslearnings@gmail.com</strong>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

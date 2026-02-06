const TermsConditions = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-4">
          By using <strong>AWSLearnings</strong>, you agree to the following
          terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Course Access
        </h2>
        <p className="text-gray-600">
          Course access is provided only to enrolled users and is
          non-transferable.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Payments
        </h2>
        <p className="text-gray-600">
          All payments must be completed before accessing paid content.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          User Responsibilities
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Do not share login credentials</li>
          <li>No redistribution of course content</li>
          <li>Follow ethical usage guidelines</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Changes to Terms
        </h2>
        <p className="text-gray-600">
          We reserve the right to update these terms at any time.
        </p>
      </div>
    </section>
  );
};

export default TermsConditions;

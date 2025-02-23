import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-gray-900">
            Our Pricing Plans
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose a plan that fits your needs. No hidden fees, no surprises.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="border rounded-lg bg-white shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900">Basic</h2>
            <p className="text-gray-600 mt-2">For individuals starting out</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">$2</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔️ Document upload</li>
              <li>✔️ Basic text recovery</li>
              <li>✔️ Email support</li>
            </ul>
            <Link
              href="/join"
              className="mt-6 bg-black text-white font-medium py-3 px-6 rounded-full hover:bg-gray-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="border rounded-lg bg-white shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900">Pro</h2>
            <p className="text-gray-600 mt-2">For small teams and projects</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">$9</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔️ Everything in Basic</li>
              <li>✔️ Advanced text recovery</li>
              <li>✔️ Priority support</li>
            </ul>
            <Link
              href="/join"
              className="mt-6 bg-black text-white font-medium py-3 px-6 rounded-full hover:bg-gray-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-lg bg-white shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900">Enterprise</h2>
            <p className="text-gray-600 mt-2">For large teams and businesses</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">$15</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔️ Everything in Pro</li>
              <li>✔️ Custom integrations</li>
              <li>✔️ Dedicated account manager</li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 bg-black text-white font-medium py-3 px-6 rounded-full hover:bg-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

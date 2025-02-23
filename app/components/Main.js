import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // Right arrow icon
export default function Main() {
  return (
    <section className="min-h-screen flex items-center justify-center py-8">
      <div className="text-center px-6 max-w-4xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Unlock the Power of Your Documents
        </h1>

        {/* Subheading or Description */}
        <p className="mt-4 text-xl text-gray-700">
          Upload your documents and get the insights you need in seconds.
          Enhance and recover important information effortlessly.
        </p>

        {/* Button Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-center space-x-4">
          {/* Upload Document Button */}
          <label
            htmlFor="fileInput"
            className=" rounded-e-full bg-gray-100  pt-5 px-20 text-xl cursor-pointer font-normal text-gray-900 hover:bg-gray-300 "
          >
            Select Your Doc
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
          />

          {/* See Our Plans Button with Right Arrow */}
          <button className="bg-transparent border-2 border-gray-600 text-gray-600 font-semibold py-3 px-6 rounded-full flex items-center hover:bg-gray-600 hover:text-white transition my-3 text-center">
            <Link href="/pricing">Lumino Pro</Link>
            <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Trusted by Section */}
        <div className="mt-12">
          <p className="text-gray-600">Trusted by leading companies:</p>
          <div className="flex justify-center space-x-8 mt-4">
            {/* Example: Replace these with actual logos */}
            <Image
              src="/gpt.png"
              alt="Company 1"
              width={40}
              height={60}
              className="h-10"
            />
            <Image
              src="/gemini.png"
              alt="Company 2"
              width={40}
              height={60}
              className="h-10"
            />
            <Image
              src="/copilot.jpg"
              alt="Company 3"
              width={40}
              height={60}
              className="h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

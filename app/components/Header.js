"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Using useRouter from next/navigation
import { auth } from "@/firebase/firebase"; // Assuming Firebase authentication is set up
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Tracks if the component is mounted
  const [user, setUser] = useState(null); // State to track logged-in user
  const [isClient, setIsClient] = useState(false); // Flag to indicate client-side rendering

  const router = useRouter(); // Initialize the router from next/navigation

  // Ensure this component is only rendered on the client side
  useEffect(() => {
    setIsMounted(true);
    setIsClient(true); // Set the flag after mounting on the client side
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleProfileClick = () => {
    if (user) {
      router.push("/profile"); // Go to profile page if logged in
    } else {
      router.push("/login"); // Redirect to login page if not logged in
    }
  };

  if (!isMounted || !isClient) {
    return null; // Avoid rendering until the component is mounted on the client side
  }

  return (
    <div className="flex justify-center relative">
      <header className="border mx-auto flex items-center justify-between py-4 rounded-full bg-gray-100 mt-10 w-fit">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-4xl font-extrabold text-gray-900 px-6">
            Lumino
          </Link>
          <nav
            className={`${
              menuOpen ? "flex-row" : "hidden"
            } md:flex md:flex-row md:space-x-6`}
          >
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 text-lg"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-gray-900 text-lg"
            >
              Login
            </Link>
          </nav>
        </div>

        {/* Join for Free button */}
        <div className="hidden md:block">
          <Link
            href="/signUp"
            className="bg-black text-white font-medium text-lg py-4 px-6 rounded-full hover:bg-slate-800 transition mx-3"
          >
            Join for Free
          </Link>
        </div>

        {/* Burger Icon for small screens */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-gray-900 text-3xl m-3 " />
          ) : (
            <FaBars className="text-gray-900 text-3xl m-3" />
          )}
        </div>
      </header>

      {/* Profile Circle - Positioned to the right of the navbar */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 mt-5">
        <button
          onClick={handleProfileClick}
          className="rounded-full w-12 h-12 bg-gray-300 flex items-center justify-center text-white text-xl"
        >
          {user ? (
            user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="Profile"
                className="rounded-full w-12 h-12"
                height={40}
                width={40}
              />
            ) : (
              <span className="text-gray-700">{user.displayName?.[0]}</span> // Display first letter of name if no photo
            )
          ) : (
            <span className="text-gray-700">👤</span> // Default icon when not logged in
          )}
        </button>
      </div>
    </div>
  );
}

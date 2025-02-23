"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { auth } from "@/firebase/firebase"; // Assuming Firebase authentication is used
import { FaEdit } from "react-icons/fa"; // Optional icon for editing profile

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // If no user, redirect to login page
        router.push("/login");
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return <div>Loading...</div>; // Show loading state while checking auth
  }

  return (
    <div className="min-h-screen flex items-center justify-center  py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Profile Header */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-xl text-white">
            {/* Placeholder for profile image */}
            <span className="font-bold">{user.displayName?.[0]}</span>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">{user.displayName}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Optional: Button for editing the profile */}
        <div className="flex justify-center mb-6">
          <button className="bg-gray-300 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition">
            <FaEdit className="inline mr-2" /> Edit Profile
          </button>
        </div>

        {/* Additional Info (if needed) */}
        <div className="space-y-4 text-gray-700">
          <p><strong>Username:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more details as necessary */}
        </div>

        {/* Logout button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => auth.signOut()}
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

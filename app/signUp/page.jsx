"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for the latest Next.js versions
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/firebase"; // Adjust path to your Firebase config

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted
  const router = useRouter();

  // Ensures that router is only used on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Create a user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update the user's profile with the username
      await updateProfile(user, {
        displayName: username,
      });

      if (isMounted) {
        router.push("/"); // Navigate to the home page after successful signup
      }
    } catch (err) {
      setError(err.message); // Handle any Firebase error
    }
  };

  // Wait until the component has mounted to render
  if (!isMounted) {
    return null; // Do not render the component on the server
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-sm w-96">
        <h1 className="text-4xl font-extrabold mb-4 text-center">Sign Up with Lumino</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded hover:bg-black hover:text-white transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

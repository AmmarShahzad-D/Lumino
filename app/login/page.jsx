"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase"; // Import Firebase config
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"; // Import Firebase Auth methods
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Navigate to home page after successful login
    } catch (err) {
      setError(err.message); // Handle any Firebase error
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      router.push("/"); // Redirect to home page after Google login
    } catch (err) {
      setError(err.message); // Handle Google login error
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-sm w-96"
      >
        <h1 className="text-4xl font-extrabold mb-4 text-center">
          Login with Lumino
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded hover:bg-black hover:text-white transition"
        >
          Login
        </button>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-white text-gray-700 py-2 mt-4 rounded-lg border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          {/* Google Icon */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="none"
            stroke="none"
          >
            <path
              fill="#4285F4"
              d="M23.49 12.3c0-.73-.07-1.42-.2-2.07h-4.07v4.08h2.34c-1.02 2.05-3.02 3.4-5.64 3.4-3.43 0-6.24-2.91-6.24-6.5s2.81-6.5 6.24-6.5c1.84 0 3.5.68 4.68 1.82l3.47-3.47C20.43 1.78 17.56 0 14 0 7.16 0 2 5.03 2 10.5S7.16 21 14 21c5.51 0 10-4.48 10-8.7z"
            />
          </svg>

          {/* Button Text */}
          <span>Login with Google</span>
        </button>
      </form>
    </div>
  );
}

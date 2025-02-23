"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use the new router
import { AuthContext } from "@/firebase/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null; // Avoid rendering until user is checked

  return children;
};

export default ProtectedRoute;

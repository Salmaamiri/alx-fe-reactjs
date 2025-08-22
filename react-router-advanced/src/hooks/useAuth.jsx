// src/hooks/useAuth.jsx
import { useState } from "react";

// Fake authentication hook
export const useAuth = () => {
  const [user] = useState(null); // set to {} or null to simulate login
  return { user, isAuthenticated: !!user };
};

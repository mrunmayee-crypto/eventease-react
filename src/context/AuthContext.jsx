import { createContext, useContext, useState } from "react";

/* ==========================================================
   DEMO / LOCAL AUTHENTICATION ONLY
   ----------------------------------------------------------
   This is NOT real authentication. Everything is saved in the
   browser's localStorage, which anyone can read and edit.
   Never use a real password. Real apps verify users on a
   server and store only hashed passwords in a database.
   ========================================================== */

const DEMO_USER_KEY = "eventease_demo_user";       // the registered demo account
const SESSION_KEY = "eventease_demo_session";      // the "logged in" demo session

// Safely read and parse JSON from localStorage
function readJSON(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Start with the saved session (if any) so a page refresh keeps you logged in
  const [user, setUser] = useState(() => readJSON(SESSION_KEY));

  // REGISTER: save the demo user in localStorage
  function registerUser({ name, email, password }) {
    const demoUser = {
      name: name,
      email: email.trim().toLowerCase(),
      password: password // demo only - plain text, never do this in a real app
    };
    localStorage.setItem(DEMO_USER_KEY, JSON.stringify(demoUser));

    // A new demo account replaces the old one, so clear any old session
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  // LOGIN: compare the entered values with the stored demo user
  function loginUser(email, password) {
    const savedUser = readJSON(DEMO_USER_KEY);

    if (!savedUser) {
      return { ok: false, message: "No demo account found. Please register first." };
    }

    const emailMatches = savedUser.email === email.trim().toLowerCase();
    const passwordMatches = savedUser.password === password;

    if (!emailMatches || !passwordMatches) {
      return { ok: false, message: "Invalid email or password." };
    }

    // Save the session WITHOUT the password
    const session = { name: savedUser.name, email: savedUser.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true };
  }

  // LOGOUT: clear the login state
  function logoutUser() {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  const value = { user, registerUser, loginUser, logoutUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook so components can write: const { user } = useAuth();
export function useAuth() {
  return useContext(AuthContext);
}

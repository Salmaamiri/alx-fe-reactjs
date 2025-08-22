// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";

// Simple Home Page
function Home() {
  return <h1 className="p-4 text-2xl">Welcome to React Router Advanced Demo</h1>;
}

// Blog Post (dynamic route)
function BlogPost({ id }) {
  return <h2 className="p-4">Showing Blog Post with ID: {id}</h2>;
}

// Wrapper to extract params
import { useParams } from "react-router-dom";
function BlogWrapper() {
  const { id } = useParams();
  return <BlogPost id={id} />;
}

// ProtectedRoute Component (basic)
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // change to true to simulate login
  return isAuthenticated ? children : <h2 className="p-4">Access Denied! Please log in.</h2>;
};

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 space-x-4 bg-gray-100">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog 1</Link>
        <Link to="/blog/2">Blog 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Dynamic Route for Blog */}
        <Route path="/blog/:id" element={<BlogWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

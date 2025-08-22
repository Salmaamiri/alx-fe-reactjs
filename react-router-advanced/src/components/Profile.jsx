// src/components/Profile.jsx
import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function ProfileDetails() {
  return <h2 className="p-4">Profile Details Section</h2>;
}

function ProfileSettings() {
  return <h2 className="p-4">Profile Settings Section</h2>;
}

const Profile = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Profile Page</h1>

      {/* Navigation for nested routes */}
      <nav className="space-x-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;

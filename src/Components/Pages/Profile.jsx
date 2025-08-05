import React, { useContext } from "react";
import { Edit } from "lucide-react"; // Import icons
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate } from "react-router";

/**
 * @typedef {object} currentUserProfile
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} address
 * @property {string} [profilePicture] - Optional profile picture URL
 */

const Profile = () => {
  const { user } = useContext(AuthContext);
  // Mock currentUser data (replace with actual data from your application)
  const currentUser = {
    // Removed the currentUserProfile type annotation here
    name: user.displayName,
    email: user.email,
    address: "123 Main St, Anytown, USA",
    profilePicture: user.photoURL, // Example URL
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-lg shadow-lg border border-white/10">
        <div className="p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-white">
            My Profile
          </h2>
          <p className="text-gray-400 mb-4">
            View and manage your profile information.
          </p>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20">
              {currentUser.profilePicture ? (
                <img
                  src={currentUser.profilePicture}
                  alt={currentUser.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    {/* Get initials. */}
                    {currentUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-medium text-white">
              {currentUser.name}
            </div>
            <div className="text-gray-400">Email: {currentUser.email}</div>
            <div className="text-gray-400">Phone: {currentUser.phone}</div>
            <div className="text-gray-400">Address: {currentUser.address}</div>
          </div>

          <Link to={"/updateProfile"}>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 flex items-center gap-2 transition-colors duration-200">
              <Edit className="w-4 h-4" />
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

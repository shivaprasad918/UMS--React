import React, { useState } from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
  const user = useSelector((state) => state.user); // Access user data from Redux

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-5 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-5">User Profile</h1>
        <div className="flex justify-center mb-5">
          {user?.user?.profilePicture ? (
            <img
              src={`${user.user.profilePicture}`}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-3"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-3">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-100 rounded-lg shadow mb-5">
          {user ? (
            <>
              <p className="text-lg font-medium">
                <span className="font-bold">Name:</span> {user.user.userName}
              </p>
              <p className="text-lg font-medium">
                <span className="font-bold">Email:</span> {user.user.email}
              </p>
            </>
          ) : (
            <p className="text-lg font-medium text-center text-gray-500">
              User information not available.
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </div>

        {isModalOpen && <UpdateProfile toggleModal={toggleModal} user={user} />}
      </div>
    </div>
  );
};

export default Profile;

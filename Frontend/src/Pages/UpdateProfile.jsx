import React, { useState } from "react";
import { signinSuccess } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const UpdateProfile = ({ toggleModal, user }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: user?.user?.userName || "",
    email: user?.user?.email || "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      setFormData({ ...formData, image: files[0] });
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("userName", formData.userName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("_id", user?.user?._id);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }
  console.log(formData.image);
  
    try {
      const response = await axios.put(
        "http://localhost:3000/api/auth/user/update",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("ghis is resss",response);
      
  
      const updatedUser = response.data;
      dispatch(signinSuccess(updatedUser.user));
  
      console.log("Profile Updated:", updatedUser);
      toggleModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Profile Picture
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            {imagePreview && (
              <div className="mt-3">
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
              </div>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={toggleModal}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
        <button
          type="button"
          onClick={toggleModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;

import User from "../models/userModel.js";

export const updateProfile = async (req, res) => {
  try {
    console.log("Updating profile...");
    const { userName, email, _id } = req.body;
    const data = {};

    // Update fields if they exist in the request body
    if (userName) {
      data.userName = userName;
    }
    if (email) {
      data.email = email;
    }

    // If the file is uploaded, store the Cloudinary file path
    if (req.file) {
      data.profilePicture = req.file.path; 
    }

    console.log("cloudname", process.env.CLOUD_NAME);
    console.log("key", process.env.CLOUDINARY_KEY);
    console.log("secret", process.env.CLOUDINARY_SECRET);

    // Update the user document in the database
    const updatedUser = await User.findOneAndUpdate({ _id: _id }, data, { new: true });

    res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.log("Error occurred while updating profile", error);
    res.status(500).json({ error, message: "Failed to update profile" });
  }
};

import User from "../models/userModel.js";

export const updateProfile = async (req, res) => {
  try {
    console.log("Updating profile...");
    const { userName, email, _id } = req.body;
    const data = {};

    if (userName) {
      data.userName = userName;
    }
    if (email) {
      data.email = email;
    }

    console.log("file", req.file);


    if (req.file) {
      data.profilePicture = req.file.path;
    }

    console.log("cloudname", process.env.CLOUD_NAME);
    console.log("key", process.env.CLOUDINARY_KEY);
    console.log("secret", process.env.CLOUDINARY_SECRET);

    const updatedUser = await User.findOneAndUpdate({ _id: _id }, data, {
      new: true,
    });

    res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
  
    console.log("this is erroorrrrr",error);
    
    res.status(500).json({error, message: "Failed to update profile" });
  }
};

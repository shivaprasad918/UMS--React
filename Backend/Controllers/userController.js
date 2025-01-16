import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Signup
export const signup = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ userName, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ user: { userName: newUser.userName, email: newUser.email }, token });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Error signing up", error });
  }
};

// Signin
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Error signing in", error });
  }
};

// logout
export const signout = async (req, res) => {
  try {
    res.status(200).json({ message: "Signout successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error signing out", error });
  }
};

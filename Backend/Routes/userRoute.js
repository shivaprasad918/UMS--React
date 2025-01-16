import express from 'express';
const userRoute = express.Router();
import { storage } from '../Controllers/cloudinaryStorage.js';
import { signin, signup, signout } from '../Controllers/userController.js';
import { updateProfile } from '../Controllers/profileController.js';
import multer from 'multer';

// Setup Multer for image uploads
const upload = multer({ storage: storage })

// Define routes
userRoute.post('/signup', signup);
userRoute.post('/signin', signin);
userRoute.post('/signout', signout);

// Profile update route with image upload
userRoute.put("/user/update", upload.single('image'), updateProfile);

export default userRoute;

import express from 'express';
const userRoute = express.Router();
import {storage} from '../Controllers/cloudinaryStorage.js'

import multer from 'multer';

const upload = multer({ storage });

import {signin, signup, signout} from '../Controllers/userController.js';
import {updateProfile} from '../Controllers/profileController.js';



userRoute.post('/signup', signup);
userRoute.post('/signin', signin);


userRoute.post('/signout', signout);

userRoute.put("/user/update",upload.single('image') ,updateProfile);


export default userRoute;
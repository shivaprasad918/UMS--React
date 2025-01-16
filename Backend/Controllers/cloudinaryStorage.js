import dotenv from 'dotenv';
dotenv.config();

import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'CloudinaryDemo', // The folder in Cloudinary where images will be stored
    allowedFormats: ['jpeg', 'png', 'jpg'], // Allowed file formats
  },
});

import express from "express";
import { addPhotoController, getPhotoController } from "../controllers/photoController.js";
import  formidableMiddleware from 'express-formidable'
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });


const route = express.Router();
route.post("/add-photo", upload.single('photo'),addPhotoController);
route.get("/get-photo/:pid", getPhotoController);

export default route;

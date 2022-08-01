import express from "express";
import {watch, getEdit, postEdit, getUpload, postUpload} from "../controllers/videoController.js"

const videoRouter = express.Router();

/*upload를 가장 top에 두지 않으면 express가 'upload'라는 text를 id로 인식함*/

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
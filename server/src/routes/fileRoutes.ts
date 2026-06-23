import { Router } from "express";

import { protect } from "../middleware/authMiddleware";
import { upload } from "../middleware/uploadMiddleware";
import { uploadFile } from "../controllers/fileController";

const router = Router();

router.post("/upload", protect, upload.single("file"), uploadFile);

export default router;

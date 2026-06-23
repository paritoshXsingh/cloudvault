import { Router } from "express";

import { protect } from "../middleware/authMiddleware";
import { upload } from "../middleware/uploadMiddleware";
import {
  uploadFile,
  getMyFiles,
  deleteFile,
  downloadFile,
} from "../controllers/fileController";

const router = Router();

router.get("/", protect, getMyFiles);
router.post("/upload", protect, upload.single("file"), uploadFile);
router.delete("/:id", protect, deleteFile);
router.get("/:id/download", protect, downloadFile);

export default router;

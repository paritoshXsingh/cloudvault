import { Response } from "express";

import File from "../models/File";
import { AuthRequest } from "../types/auth.types";
import { uploadFileToS3 } from "../services/s3.service";

export const uploadFile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const s3Key = await uploadFileToS3(req.file, req.user._id.toString());

    const file = await File.create({
      owner: req.user._id,

      originalName: req.file.originalname,

      fileName: s3Key.split("/").pop(),

      mimeType: req.file.mimetype,

      fileSize: req.file.size,

      s3Key,

      isShared: false,

      shareToken: null,
    });

    return res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

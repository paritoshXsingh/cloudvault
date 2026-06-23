import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import fileRoutes from "./routes/fileRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "CloudVault API Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

export default app;

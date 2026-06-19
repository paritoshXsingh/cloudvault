import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./config/db";
import { testS3Connection } from "./services/s3.service";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  await testS3Connection();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

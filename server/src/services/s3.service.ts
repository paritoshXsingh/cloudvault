import { ListBucketsCommand } from "@aws-sdk/client-s3";
import { s3 } from "../config/s3";

export const testS3Connection = async () => {
  const response = await s3.send(new ListBucketsCommand({}));

  console.log(
    "Buckets:",
    response.Buckets?.map((bucket) => bucket.Name),
  );
};

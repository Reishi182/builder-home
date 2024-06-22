import { generateUploadButton } from "@uploadthing/react";

export const UploadButton = generateUploadButton();

export function UploadThing() {
  <UploadButton endpoint="imageUploader" />;
}

import { UploadButton } from "@bytescale/upload-widget-react";
import { IoClose } from "react-icons/io5";

export default function ProjectUpload({ previews, setPreviews, user, error }) {
  function handleFileChange(files) {
    const newFiles = files.map((file) => file.fileUrl);
    setPreviews((prev) => [...prev, ...newFiles]);
  }

  function handleRemove(ind) {
    setPreviews((prev) => prev.filter((_, i) => i !== ind));
  }

  const options = {
    apiKey: import.meta.env.VITE_PUBLIC_APIKEY,
    maxFileCount: 20,
    mimeTypes: ["image/*"],
    path: { folderPath: `/Project-img/${user}/` },
    locale: {
      addAnoterImageBtn: "Add another Image",
      cancelBtn: "cancel",
      uploadImageMultiBtn: "Upload Images",
      maxImagesReachedPrefix: "Maximum number of images:",
      removeBtn: "remove",
    },
  };

  return (
    <>
      <span className="block text-[1.5rem] font-semibold">
        Input Project Portfolio
      </span>
      <div className="flex w-full flex-col gap-1 ">
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-slate-300 bg-[#F8F8FF] p-12  text-slate-700 dark:border-slate-700 dark:text-slate-300">
          <UploadButton
            options={options}
            onComplete={(files) => handleFileChange(files)}
          >
            {({ onClick }) => (
              <button
                onClick={onClick}
                className="cursor-pointer rounded-2xl bg-[#6C63BF] px-8 py-4 text-xl  text-white group-focus-within:underline"
              >
                Upload File
              </button>
            )}
          </UploadButton>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          {previews.map((src, index) => (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`preview-${index}`}
                className="h-24 w-24 rounded-md border-1 object-cover"
              />
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white"
              >
                <IoClose />
              </button>
            </div>
          ))}
        </div>
        {error && <p className="text-lg italic text-red-500">{error}</p>}
      </div>
    </>
  );
}

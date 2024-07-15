import { UploadButton } from "@bytescale/upload-widget-react";
import { BiSolidImageAdd } from "react-icons/bi";

export default function ImageUploader({ user, setImage, image, error }) {
  const handleImageChange = (file) => {
    if (!file) return;
    setImage(file[0].fileUrl);
  };

  const options = {
    apiKey: import.meta.env.VITE_PUBLIC_APIKEY,
    maxFileCount: 1,
    mimeTypes: ["image/jpeg"],
    path: { folderPath: `/Project-img/${user}/cover` },
    locale: {
      cancelBtn: "cancel",
      removeBtn: "remove",
    },
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col space-y-1">
        <img
          src={image}
          className="w-[50rem] rounded-md object-contain"
          alt="Uploaded Preview"
        />
        <div className="flex justify-end">
          <UploadButton
            options={options}
            onComplete={(files) => handleImageChange(files)}
          >
            {({ onClick }) => (
              <button
                onClick={onClick}
                className="flex w-20 cursor-pointer items-center justify-center rounded-xl bg-[#6C63BF] p-3 font-medium text-white"
              >
                <span className="block text-[2.4rem]">
                  <BiSolidImageAdd color="white" />
                </span>
              </button>
            )}
          </UploadButton>
        </div>
        {error && <p className="text-lg italic text-red-500">{error}</p>}
      </div>
    </div>
  );
}

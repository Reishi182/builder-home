import { UploadButton } from "@bytescale/upload-widget-react";

export default function UploadAvatar({ setAvatar }) {
  function handleImage(file) {
    if (!file) return;
    setAvatar(file[0].fileUrl);
  }

  const options = {
    apiKey: import.meta.env.VITE_PUBLIC_APIKEY,
    maxFileCount: 1,
    mimeTypes: ["image/jpeg"],
    path: { folderPath: "/Avatar" },
  };

  return (
    <div className="flex flex-col space-y-4">
      <UploadButton
        options={options}
        onComplete={(files) => handleImage(files)}
      >
        {({ onClick }) => (
          <button
            className="cursor-pointer rounded-lg bg-[#95B26F] px-5 py-3 text-lg font-semibold text-white"
            onClick={onClick}
          >
            Ganti Foto Profile
          </button>
        )}
      </UploadButton>
      <button
        className="text-lg font-semibold text-red-600"
        onClick={() => setAvatar(null)}
      >
        Hapus Foto Profile
      </button>
    </div>
  );
}

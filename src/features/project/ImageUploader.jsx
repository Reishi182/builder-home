import { useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";

export default function ImageUploader({ register }) {
  const [image, setImage] = useState("/img/imagePlace.png");

  const handleImageChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setImage(file);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col space-y-1">
        <img src={image} width={400} alt="Uploaded Preview" />
        <div className="flex justify-end">
          <label className="flex w-20 cursor-pointer items-center justify-center rounded-xl bg-[#6C63BF] p-3 font-medium text-white">
            <span className="block text-[2.4rem]">
              <BiSolidImageAdd color="white" />
            </span>
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              {...register}
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

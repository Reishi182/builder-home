import { Avatar, Spinner } from "@nextui-org/react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import CustomSelect from "../../components/CustomSelect";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "../Auth/useUpdateUser";
import { useCurrentUser } from "../Auth/useCurrentUser";

export default function PersonalInfo() {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const { user } = useCurrentUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user.username || "",
      description: user.description || "",
      phone: user.phone || "",
      email: user.email || "",
      gender: user.gender || "Male",
    },
  });
  const { isLoading, update } = useUpdateUser();

  const onSubmit = (data) => {
    update({ data, id: user?.id });
  };

  return (
    <div className="flex w-full flex-col items-center space-y-10 px-24 py-12">
      <h1 className="text-[3rem] font-semibold">Ubah Profil Pribadi</h1>
      <div className="flex items-center space-x-12">
        <Avatar
          name={user.name}
          className="h-36 w-36 text-large"
          isBordered
          color="default"
        />
        <div className="flex flex-col space-y-4">
          <button className="rounded-lg bg-[#95B26F] px-5 py-3 text-lg font-semibold text-white">
            Ganti Foto Profile
          </button>
          <button className="text-lg font-semibold text-red-600">
            Hapus Foto Profile
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4 sm:w-[70%]"
      >
        <Input py="py-4" label="Your Name" register={register("username")} />
        {errors.name && <p className="text-red-600">Name is required</p>}
        <TextArea label="Description" register={register("description")} />
        <Input py="py-4" label="Phone Number" register={register("phone")} />
        {errors.phone && (
          <p className="text-red-600">Phone Number is required</p>
        )}
        <Input py="py-4" label="Email" register={register("email")} />
        {errors.email && <p className="text-red-600">Email is required</p>}
        <CustomSelect
          options={options}
          label="Choose an option"
          register={register}
          name="gender"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-[#95B26F] px-4 py-4 text-2xl font-semibold text-white"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Simpan"}
        </button>
      </form>
    </div>
  );
}

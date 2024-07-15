import { useEffect, useState } from "react";
import { Avatar, Spinner } from "@nextui-org/react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import CustomSelect from "../../components/CustomSelect";
import Loading from "../../components/Loading";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "../Auth/useUpdateUser";
import { useCurrentUser } from "../Auth/useCurrentUser";
import UploadAvatar from "./UploadAvatar";

const PersonalInfo = () => {
  const { user, isLoading, error } = useCurrentUser();
  const { update, isLoading: isUpdating } = useUpdateUser();
  const [avatar, setAvatar] = useState(null);
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: "",
      description: "",
      phone: "",
      email: "",
      gender: "Male",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        username: user.username || "",
        description: user.description || "",
        phone: user.phone || "-",
        email: user.email || "",
        gender: user.gender || "Male",
      });
      setAvatar(user.avatar);
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    update({ data: { ...data, avatar }, id: user.id });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex w-full flex-col items-center space-y-10 px-24 py-12">
      <h1 className="text-[3rem] font-semibold">Ubah Profil Pribadi</h1>
      <div className="flex items-center space-x-12">
        <Avatar
          className="h-36 w-36 text-large"
          isBordered
          src={avatar}
          color="default"
        />
        <UploadAvatar setAvatar={setAvatar} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4 sm:w-[70%]"
      >
        <Input py="py-4" label="Your Name" register={register("username")} />
        <TextArea label="Description" register={register("description")} />
        <Input py="py-4" label="Phone Number" register={register("phone")} />
        <Input py="py-4" label="Email" register={register("email")} />
        <CustomSelect
          options={options}
          label="Choose an option"
          register={register}
          name="gender"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-[#95B26F] px-4 py-4 text-2xl font-semibold text-white"
          disabled={isUpdating}
        >
          {isUpdating ? <Spinner /> : "Simpan"}
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;

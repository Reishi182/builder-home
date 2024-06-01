import Input from "../../components/Input";

export default function ResetPassword() {
  return (
    <div className="flex w-full flex-col items-center space-y-10 px-24 py-12 ">
      <h1 className="text-start text-[3rem] font-semibold">Reset Password</h1>

      <form className="w-full space-y-4 sm:w-[70%]">
        <Input py="py-4" label="Old Password" type="password" />
        <Input py="py-4" label="New Password" type="password" />
        <Input py="py-4" label="Password Confirmation" type="password" />
        <button
          type="submit"
          className="w-full rounded-xl bg-[#95B26F] px-4 py-4 text-2xl font-semibold text-white"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

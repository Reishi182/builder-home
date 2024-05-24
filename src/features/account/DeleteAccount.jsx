export default function DeleteAccount() {
  return (
    <div className="flex flex-col py-12 px-24 w-full space-y-10 items-center">
      <div className="space-y-14">
        <div className=" flex flex-col items-center justify-center space-y-36">
          <h1 className="text-[3rem] font-bold">Delete Account</h1>
          <h1 className="text-center">
            <span className="block text-[1.4rem] font-semibold">
              You are going to delete your account
            </span>
            <span className="block text-[1rem] font-medium">
              You wan’t be able to restore your data{" "}
            </span>
          </h1>
        </div>
        <div className="flex text-white *:rounded-lg *:py-3 *:px-12 space-x justify-between items-center">
          <button className=" bg-[#95B26F]">Cancel</button>
          <button className=" bg-[#E30000]">Delete</button>
        </div>
      </div>
    </div>
  );
}

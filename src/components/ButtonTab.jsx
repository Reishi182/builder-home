export default function ButtonTab({ onClick, children, active }) {
  return (
    <button
      onClick={onClick}
      className={`block px-8 font-bold text-[#7D7D7D] ${
        active
          ? "border-b-2 border-[#5E8451] bg-[#E9F2EC]"
          : " border-1 border-gray-200 bg-[#FAFAFA]"
      }  rounded-lg  py-2 text-lg`}
    >
      {children}
    </button>
  );
}

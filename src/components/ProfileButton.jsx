export default function ProfileButton({ icon, children }) {
  return (
    <button className="py-4 px-10 rounded-3xl active:bg-[#5E8451] bg-[#ECDEF5] flex items-center space-x-5">
      <span className="block text-xl active:text-white">{icon}</span>
      <span className="inline-block text-lg active:text-white font-bold">
        {children}
      </span>
    </button>
  );
}

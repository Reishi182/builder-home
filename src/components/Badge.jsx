export default function Badge({ children, onClick }) {
  return (
    <span
      onClick={onClick}
      className="block text-gray-500 border-[0.19rem] border-gray-400  text-xl rounded-full py-1 px-5 "
    >
      {children}
    </span>
  );
}

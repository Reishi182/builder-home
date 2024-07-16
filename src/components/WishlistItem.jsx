import { useNavigate } from "react-router-dom";

export default function WishlistItem({ item, setIsOpen }) {
  const { image, designer, projectName } = item;
  const navigate = useNavigate();
  function navigateTo() {
    navigate("/account/transaction");
    setIsOpen(false);
  }
  return (
    <div
      className="flex w-full border-1 border-gray-100 bg-[#FCFCFC] px-5 py-2"
      onClick={navigateTo}
    >
      <div className="flex w-full flex-col items-center justify-between min-[323px]:flex-row">
        <div className="flex flex-col space-x-0 min-[393px]:flex-row min-[393px]:space-x-10">
          <img src={image} className="w-24" />
          <div className="flex flex-col items-center space-y-2 py-3 min-[323px]:items-start">
            <h1 className="text-xl font-bold">{projectName}</h1>
            <h1 className="text-medium">design by {designer}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

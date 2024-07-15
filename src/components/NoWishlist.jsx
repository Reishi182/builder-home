import { Link } from "react-router-dom";

export default function NoWishlist({ setIsOpen }) {
  return (
    <div className="w-full flex items-center h-[35rem] justify-center flex-col space-y-5">
      <img src="/img/icon/noWishlist.png" className="w-[10rem]" />
      <h1 className="flex flex-col items-center space-y-4 text-[#4B4544]">
        <span className="block text-2xl font-bold">
          There are no items in your Wishlist{" "}
        </span>
        <Link
          to="/service/desain"
          onClick={() => setIsOpen(false)}
          className="block text-lg"
        >
          Choose your wishlist
        </Link>
      </h1>
    </div>
  );
}

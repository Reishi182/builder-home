import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";

export default function PageNotFound() {
  return (
    <div className="bg-[url(/img/pageNotFound.png)] flex min-h-screen bg-center bg-cover w-full items-center justify-center">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between">
        <img src="/img/notFound.png" className="w-[50rem]" />
        <div className="flex items-center flex-col space-y-9">
          <h1 className=" text-[#C0702E] text-center space-y-7">
            <span className="block text-[12rem] font-extrabold">404</span>
            <span className="block text-[3rem] font-semibold">
              Page Not Found
            </span>
            <span className="block text-[1.5rem] font-medium">
              Sorry, we can’t find the page you’re looking for
            </span>
          </h1>
          <Link
            to="/"
            className="px-7 w-[13rem] flex items-center text-xl justify-center gap-3 py-3 bg-[#5E8451] text-white rounded-2xl"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

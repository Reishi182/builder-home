import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[url(/img/pageNotFound.png)] bg-cover bg-center">
      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        <img src="/img/icon/notFound.png" className="w-[50rem]" />
        <div className="flex flex-col items-center space-y-9">
          <h1 className=" space-y-7 text-center text-[#C0702E]">
            <span className="block text-[12rem] font-extrabold">404</span>
            <span className="block text-[3rem] font-semibold">
              Page Not Found
            </span>
            <span className="block text-[1.5rem] font-medium">
              Sorry, we can’t find the page you’re looking for
            </span>
          </h1>
          <button
            onClick={() => navigate("/")}
            className="flex w-[13rem] items-center justify-center gap-3 rounded-2xl bg-[#5E8451] px-7 py-3 text-xl text-white"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

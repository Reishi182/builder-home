import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import { useEffect } from "react";
import { useCurrentUser } from "../Auth/useCurrentUser";
import Loading from "../../components/Loading";

export default function UploadProject() {
  const navigate = useNavigate();
  const { user, isLoading } = useCurrentUser();
useEffect(() => {
  if (user && user.role && user.role !== "Arsitek") {
    navigate(-1, { replace: true });
    }
  }, [user, navigate]);
    
  if (isLoading) return <Loading />;
  return (
    <>
      <section className=" flex h-[50vh] flex-col bg-gradient-to-l from-[#e9fad2af] to-[#95b26f67] px-20 py-20 ">
        <div className="h-screen">
          <div className="flex items-center space-x-3 text-center text-2xl font-bold">
            <span>
              <FaArrowLeftLong />
            </span>
            <button onClick={() => navigate(-1)}>Kembali</button>
          </div>
          <div className="flex h-full items-center justify-center">
            <h1 className="text-[2rem] font-semibold text-[#C0702E]">
              Upload Desain/Proyek Kamu
            </h1>
          </div>
        </div>
      </section>
      <section className="px-10 py-20 min-[450px]:px-40">
        <div className=" flex items-center justify-center">
          <div className=" w-full bg-white shadow-custom">
            <ProjectForm />
          </div>
        </div>
      </section>
    </>
  );
}

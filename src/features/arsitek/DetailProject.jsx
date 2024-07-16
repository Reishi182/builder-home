import { Spinner } from "@nextui-org/react";
import { useProject } from "../project/useProject";

export default function DetailProject() {
  const { project, isLoading } = useProject();
  if (isLoading) return <Spinner />;
  return (
    <section className="w-full px-10 py-10 sm:px-20">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-5">
          {" "}
          <h1 className="text-4xl font-bold text-[#C0702E]">Project</h1>
          <img src={project.image_cover} />
        </div>
        <div className="flex flex-col space-y-2">
          {" "}
          <h1 className="text-4xl font-bold text-[#C0702E]">
            {project.projectName}
          </h1>
          <h1 className="text-xl text-[#726C6C]">
            Indonesia, {project.location}
          </h1>
          <div className="grid grid-cols-1 gap-14 pb-20 min-[200px]:grid-cols-2 md:grid-cols-3">
            {project.images.map((image, i) => (
              <img src={image} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

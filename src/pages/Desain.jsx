import ItemDesignCard from "./../components/ItemDesignCard";
import { useProjects } from "./../features/project/useProjects";
import NoItems from "./../features/desain/NoItems";
import { Spinner } from "@nextui-org/react";
import { useQuerySlice } from "../slices/QuerySlice";
export default function Arsitek() {
  const { projects, isLoading } = useProjects();
  const { query } = useQuerySlice((state) => state);
  console.log(projects);
  const filteredProject = query
    ? projects.filter((project) =>
        project.projectName.toLowerCase().includes(query.toLowerCase()),
      )
    : projects;
  if (isLoading) return <Spinner />;
  return (
    <div className="flex w-full flex-col">
      <h1 className="text-center text-[3rem] font-semibold text-[#C0702E] md:text-start">
        Desain
      </h1>
      {filteredProject.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-10 ">
          {filteredProject.map((item, index) => (
            <ItemDesignCard project={item} key={index} />
          ))}
        </div>
      ) : (
        <NoItems />
      )}
    </div>
  );
}

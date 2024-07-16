import ItemCard from "./../components/ItemCard";
import { useProjects } from "./../features/project/useProjects";
import NoItems from "./../features/desain/NoItems";
import { Spinner } from "@nextui-org/react";
import { useQuerySlice } from "../slices/QuerySlice";
export default function Arsitek() {
  const { projects, isLoading } = useProjects();
  const { query } = useQuerySlice((state) => state);

  const filteredProject = query
    ? projects.filter((user) =>
        user.username.toLowerCase().includes(query.toLowerCase()),
      )
    : projects;
  if (isLoading) return <Spinner />;
  return (
    <div className="flex w-full flex-col">
      <h1 className="text-center text-[3rem] font-semibold text-[#C0702E] md:text-start">
        Desain
      </h1>
      {filteredProject.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProject.map((item, index) => (
            <ItemCard project={item} key={index} />
          ))}
        </div>
      ) : (
        <NoItems />
      )}
    </div>
  );
}

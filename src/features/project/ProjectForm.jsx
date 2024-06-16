import { useForm } from "react-hook-form";
import ImageUploader from "./ImageUploader";
import ProjectUpload from "./ProjectUpload";
import Input from "../../components/Input";
import LeftInput from "../../components/LeftInput";
import TextArea from "../../components/TextArea";
import { useParams } from "react-router-dom";

export default function ProjectForm() {
  const project = useParams();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});
  function onSubmit() {}

  return (
    <form
      className="px-10 py-20 min-[314px]:px-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ImageUploader register={register("cover")} />
      <div className="space-y-5">
        <Input
          py="py-5"
          label="Project Name"
          placeholder="Your Project Price ...."
        />
        <Input
          py="py-5"
          label="Project Price"
          placeholder="Your Project Name ...."
        />
        <h1 className="text-2xl font-medium text-black">Project Detail</h1>
        <LeftInput label="Owner" placeholder="Owner Name ...." />
        <LeftInput label="Room Area" placeholder="Your Room Area ...." />
        <LeftInput label="Condition" placeholder="Condition" />
        <TextArea
          label="Project Description"
          placeholder="Your Project Description ...."
        />
        <ProjectUpload register={register("projectImg")} />
        <h1 className="text-2xl font-medium text-black">Social Media Detail</h1>
        <LeftInput label="LinkedIn" placeholder="Your Linkedin ...." />
        <LeftInput label="Handphone" placeholder="Your Phone Number  ...." />
        <LeftInput label="Instagram" placeholder="Your Instagram ...." />
        <div className="flex justify-between space-x-3 pt-20 *:w-44 *:rounded-2xl *:px-5 *:py-5 *:text-xl *:text-white">
          <button type="reset" className="bg-[#C5D282]">
            Cancel
          </button>
          <button type="submit" className="bg-[#74916B]">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

import { useForm } from "react-hook-form";
import ImageUploader from "./ImageUploader";
import ProjectUpload from "./ProjectUpload";
import Input from "../../components/Input";
import LeftInput from "../../components/LeftInput";
import TextArea from "../../components/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import { useDisclosure } from "@nextui-org/react";

export default function ProjectForm() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});
  function onSubmit(data) {
    navigate("/service/proyek");
    onOpen();
  }

  return (
    <>
      <form
        className="px-10 py-20 min-[314px]:px-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ImageUploader register={register("cover")} />
        <div className="space-y-5">
          <Input
            py="py-5"
            label="Project Name"
            placeholder="Your Project Name ...."
            register={register("projectName", {
              required: "Project Name is required",
            })}
            error={errors.projectName}
          />
          <Input
            py="py-5"
            label="Project Price"
            type="number"
            placeholder="Your Project Price ...."
            register={register("projectPrice", {
              required: "Project Price is required",
            })}
            error={errors.projectPrice}
          />
          <h1 className="text-2xl font-medium text-black">Project Detail</h1>
          <LeftInput
            label="Owner"
            placeholder="Owner Name ...."
            register={register("owner", { required: "Owner Name is required" })}
            error={errors.owner}
          />
          <LeftInput
            label="Room Area"
            placeholder="Your Room Area ...."
            register={register("roomArea", {
              required: "Room Area is required",
            })}
            error={errors.roomArea}
          />
          <LeftInput
            label="Condition"
            placeholder="Condition"
            register={register("condition", {
              required: "Condition is required",
            })}
            error={errors.condition}
          />
          <TextArea
            label="Project Description"
            placeholder="Your Project Description ...."
            register={register("projectDescription", {
              required: "Project Description is required",
            })}
            error={errors.projectDescription}
          />
          <ProjectUpload register={register("projectImg")} />
          <h1 className="text-2xl font-medium text-black">
            Social Media Detail
          </h1>
          <LeftInput
            label="LinkedIn"
            placeholder="Your LinkedIn ...."
            register={register("linkedin")}
          />
          <LeftInput
            label="Handphone"
            placeholder="Your Phone Number ...."
            type="number"
            register={register("handphone", {
              required: "Phone Number is required",
            })}
            error={errors.handphone}
          />
          <LeftInput
            label="Instagram"
            placeholder="Your Instagram ...."
            register={register("instagram")}
          />
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
      <Modal
        icon={<img src="/img/success.png" className="w-80" />}
        title="Done!"
        onClose={onClose}
        isOpen={isOpen}
      >
        Your project has been successfully added
        <button
          onClick={onClose}
          className="w-44 rounded-2xl bg-[#74916B] px-10 py-5 text-white"
        >
          Done
        </button>
      </Modal>
    </>
  );
}

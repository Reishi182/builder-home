import { useForm } from "react-hook-form";
import ImageUploader from "./ImageUploader";
import ProjectUpload from "./ProjectUpload";
import Input from "../../components/Input";
import LeftInput from "../../components/LeftInput";
import TextArea from "../../components/TextArea";
import { useParams } from "react-router-dom";
import { useProject } from "./useProject";
import Modal from "../../components/Modal";
import { Spinner, useDisclosure } from "@nextui-org/react";
import { useRef, useState, useEffect } from "react";
import { useCreateProject } from "./useCreateProject";
import { useEditProject } from "./useEditProject";
import Loading from "../../components/Loading";
import { useCurrentUser } from "../Auth/useCurrentUser";

export default function ProjectForm() {
  const { isOpen, onClose } = useDisclosure();

  const { itemId } = useParams();
  const isEditing = Boolean(itemId);
  const { project, isLoading } = useProject(itemId);
  const { user, isLoading: isUserLoading } = useCurrentUser();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {},
  });

  const [image, setImage] = useState("/img/imagePlace.png");
  const [previews, setPreviews] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    if (isEditing && project) {
      reset({
        projectName: project.projectName,
        price: project.price,
        year_built: project.year_built,
        location: project.location,
        description: project.description,
        handphone: project.handphone,
        linkedin: project.linkedin,
        instagram: project.instagram,
      });
      setImage(project.image_cover);
      setPreviews(project.images || []);
    }
  }, [isEditing, project, reset]);

  const { createProject } = useCreateProject();
  const { update } = useEditProject();

  function onSubmit(data) {
    if (!image || image === "/img/imagePlace.png") {
      setError("image", { type: "manual", message: "Image cover is required" });
      return;
    }
    if (previews.length === 0) {
      setError("previews", {
        type: "manual",
        message: "Project Portfolio is required",
      });
      return;
    }
    clearErrors("image");
    clearErrors("previews");

    if (isEditing) {
      return update({
        data: {
          ...data,
          images: previews,
          image_cover: image,
          user_id: user.id,
        },
        id: itemId,
      });
    }
    createProject({
      ...data,
      images: previews,
      image_cover: image,
      user_id: user.user_id,
    });
  }

  if (isLoading || isUserLoading) return <Loading />;

  return (
    <>
      <form
        className="px-10 py-20 min-[314px]:px-20"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <ImageUploader
          user={user.user_id}
          image={image}
          setImage={setImage}
          error={errors.image?.message}
        />
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
            register={register("price", {
              required: "Project Price is required",
            })}
            error={errors.price}
          />
          <h1 className="text-2xl font-medium text-black">Project Detail</h1>

          <LeftInput
            label="Location"
            placeholder="Your Location ...."
            register={register("location", {
              required: "Location is required",
            })}
            error={errors.location}
          />

          <TextArea
            label="Project Description"
            placeholder="Your Project Description ...."
            register={register("description", {
              required: "Project Description is required",
            })}
            error={errors.description}
          />
          <ProjectUpload
            previews={previews}
            setPreviews={setPreviews}
            user={user.user_id}
            error={errors.previews?.message}
          />
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
            register={register("handphone")}
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
            <button type="submit" disabled={isLoading} className="bg-[#74916B]">
              {isLoading ? <Spinner /> : "Save"}
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

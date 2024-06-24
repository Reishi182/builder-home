import { projectApi } from "../utils/axios";

export async function createProject(data) {
  try {
    const res = await projectApi.post("", data);
    return res.data;
  } catch (err) {
    const errorMessage =
      err.response?.data?.message || "Failed to create a project";
    throw new Error(errorMessage);
  }
}

export async function getProject(id) {
  try {
    const res = await projectApi.get(`/${id}`);
    return res.data.data.project;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getAllProject() {
  try {
    const res = await projectApi.get(``);
    return res.data.data.projects;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateProject(id, data) {
  try {
    const res = await projectApi.patch(`${id}`, data);
    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteProject(id) {
  try {
    const res = await projectApi.delete(`${id}`);
    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

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
  if (!id) return;
  try {
    const res = await projectApi.get(`/${id}`);
    return res.data.data.project;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}

export async function getAllProject() {
  try {
    const res = await projectApi.get(``);
    return res.data.data.projects;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}
export async function getAllUserProject(id) {
  try {
    const res = await projectApi.get(`/userProjects/${id}`);
    return res.data.data.projects;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}

export async function updateProject(data, id) {
  try {
    const res = await projectApi.patch(`${id}`, data);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}

export async function deleteProject(id) {
  try {
    const res = await projectApi.delete(`${id}`);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}

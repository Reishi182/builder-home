import { userApi } from "../utils/axios";

export async function getUsers() {
  const res = await userApi.get("");
  return res.data.data.users;
}
export async function deleteUser(id) {
  try {
    const res = await userApi.delete(`/${id}`);

    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}
export async function getUser(id) {
  try {
    const res = await userApi.get(`/${id}`);

    return res.data.data.user;
  } catch (err) {
    if (err) return;
    throw new Error(err.response.data.message);
  }
}
export async function updateUser(data, id) {
  try {
    const res = await userApi.patch(`/${id}`, data);
    return res.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Update Failed";
    throw new Error(errorMessage);
  }
}

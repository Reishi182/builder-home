import axios from "axios";
import apiClient from "../utils/axios";

export async function deleteUser(id) {
  const res = await apiClient.delete(`/users/${id}`);

  return res.data;
}
export async function getUser(id) {
  const res = await apiClient.get(`/users/${id}`);

  return res.data.data.user;
}
export async function updateUser(data, id) {
  try {
    const res = await apiClient.patch(`/users/${id}`, data);
    return res.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Update Failed";
    throw new Error(errorMessage);
  }
}
export async function uploadAvatar(cloudName, formData) {
  try {
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData,
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

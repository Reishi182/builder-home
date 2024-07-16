import { wishApi } from "../utils/axios";

export async function addWishlist(data) {
  try {
    const res = await wishApi.post(`/`, data);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}
export async function deleteWishlist(data) {
  try {
    const res = await wishApi.delete(`/${data}`);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}
export async function getWishlist(data) {
  const res = await wishApi.get(`/${data}`);
  return res.data;
}

import apiClient from "../utils/axios";

export async function getUsers() {
  const res = await apiClient.get("/users");
  return res.data;
}

export async function signup({
  username,
  email,
  password,
  passwordConfirmation,
  role,
}) {
  try {
    const response = await apiClient.post("/users/signup", {
      username,
      email,
      password,
      passwordConfirmation,
      role,
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.errors?.msg || "Signup failed";
    throw new Error(errorMessage);
  }
}

export async function login({ email, password }) {
  const response = await apiClient.post("/users/login", {
    email,
    password,
  });
  return response.data;
}

export async function forgetPassword({ email }) {
  const response = await apiClient.post("/users/forgotPassword", { email });
  return response.data;
}
export async function resetPassword({ token, password, passwordConfirmation }) {
  const response = await apiClient.patch(`/users/resetPassword/${token}`, {
    password,
    passwordConfirmation,
  });
  return response.data;
}
export async function validateToken(token) {
  try {
    const response = await apiClient.get(`/users/resetPassword/${token}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { status: "error", message: "Network Error" };
    }
  }
}

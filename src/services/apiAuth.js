import { userApi } from "../utils/axios";

export async function signup({
  username,
  email,
  password,
  passwordConfirmation,
  role,
}) {
  try {
    const response = await userApi.post("/signup", {
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
  const response = await userApi.post("/login", {
    email,
    password,
  });
  return response.data;
}

export async function forgetPassword({ email }) {
  const response = await userApi.post("/forgotPassword", { email });
  return response.data;
}
export async function resetPassword({ token, password, passwordConfirmation }) {
  const response = await userApi.patch(`/resetPassword/${token}`, {
    password,
    passwordConfirmation,
  });
  return response.data;
}
export async function validateToken(token) {
  try {
    const response = await userApi.get(`/resetPassword/${token}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { status: "error", message: "Network Error" };
    }
  }
}

export async function changePassword(id, data) {
  try {
    const response = await userApi.patch(`/changePassword/${id}`, {
      oldPassword: data.oldPassword,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation,
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response.data.message || "Failed to changed password";
    throw new Error(errorMessage);
  }
}

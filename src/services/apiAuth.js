import axios from "axios";

export async function getUsers() {
  const res = await axios.get("http://localhost:3000/app/v1/users");
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
    const response = await axios.post(
      "http://localhost:3000/app/v1/users/signup",
      {
        username,
        email,
        password,
        passwordConfirmation,
        role,
      },
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.errors?.msg || "Signup failed";
    throw new Error(errorMessage);
  }
}
export async function login({ email, password }) {
  const response = await axios.post(
    "http://localhost:3000/app/v1/users/login",
    {
      email,
      password,
    },
  );
  return response.data;
}

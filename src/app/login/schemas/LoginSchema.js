import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Username or Email cannot be empty"),
  password: Yup.string()
    .required("You must enter a password")
    .min(6, "Password must be at least 8 characters"),
});

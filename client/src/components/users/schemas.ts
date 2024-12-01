import * as Yup from "yup";
import { LoginRequest, RegisterRequest } from "./types";

export const loginValidationSchema: Yup.Schema<LoginRequest> = Yup.object().shape({
  email: Yup.string().email("Email is not valid. Please check format").required("Email is required"),
  password: Yup.string().required("Password is required")
});

export const registerValidationSchema: Yup.Schema<RegisterRequest> = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is not valid. Please check format").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be at most 16 characters")
    .matches(/[a-zžųšįėęčą]+/, "Password must contain at least one lowercase letter")
    .matches(/[A-ZŽŪŲŠĮĖĘČĄ]+/, "Password must contain at least one uppercase letter")
});

export const loginInitialValues: LoginRequest = {
  email: "",
  password: ""
};

export const registerInitialValues: RegisterRequest = {
  name: "",
  email: "",
  password: ""
};

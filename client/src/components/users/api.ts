import { LoginRequest, LoginResponse, RegisterRequest } from "./types";
import AxiosInstance from "../../config/axios";

export async function loginUser(user: LoginRequest): Promise<LoginResponse> {
  const response = await AxiosInstance.post(`/api/auth/login`, user);
  return await response.data;
}

export async function registerUser(user: RegisterRequest): Promise<void> {
  const response = await AxiosInstance.post(`/api/auth/register`, user);
  return await response.data;
}

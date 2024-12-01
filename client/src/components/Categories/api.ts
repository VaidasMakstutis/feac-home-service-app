import axiosInstance from "../../config/axios";
import { Category } from "./types";

export async function getCategories(): Promise<Category[]> {
  const response = await axiosInstance("/api/categories");
  return await response.data;
}

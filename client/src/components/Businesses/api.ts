import axiosInstance from "../../config/axios";
import { Business } from "./types";

export async function getBusinesses(): Promise<Business[]> {
  const response = await axiosInstance("/api/businesses");
  return await response.data;
}

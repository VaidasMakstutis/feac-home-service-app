import { useQuery } from "@tanstack/react-query";
import { getBusinesses } from "./api";

export const BUSINESS_KEY = "BUSINESS";

export function useBusinesses() {
  return useQuery({
    queryKey: [BUSINESS_KEY],
    queryFn: getBusinesses
  });
}

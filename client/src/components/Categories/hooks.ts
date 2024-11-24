import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./api";

export const CATEGORY_KEY = "CATEGORY";

export function useCategories() {
  return useQuery({
    queryKey: [CATEGORY_KEY],
    queryFn: getCategories
  });
}

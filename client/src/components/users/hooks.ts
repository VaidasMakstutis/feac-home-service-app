import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser, registerUser } from "./api";
import { RegisterRequest } from "./types";
import { AxiosError } from "axios";

export const USERS_KEY = "USERS";

export function useLoginUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["USERS_KEY"] })
  });
}

export function useRegisterUser(): UseMutationResult<void, AxiosError, RegisterRequest, unknown> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["USERS_KEY"] })
  });
}

import { ILoginRequest } from "@/interfaces/ILoginRquest";
import { api } from "@/utils/api";
import { useMutation } from "react-query";

const logiUser = async (data: ILoginRequest) => {
  const response = await api.post("/login", data, {
    method: "POST",
  });
  return response.data;
};

export const useLoginUser = () => {
  return useMutation((data: ILoginRequest) => logiUser(data));
};

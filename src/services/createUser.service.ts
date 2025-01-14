import { IRegisterFormValues } from "@/interfaces/IRegisterFormValues";
import { api } from "@/utils/api";
import { useMutation } from "react-query";

const createUser = async (data: IRegisterFormValues) => {
  const response = await api.post("/createClient", data, {
    method: "POST",
  });
  return response.data;
};

export const useCreateUser = () => {
  return useMutation((data: IRegisterFormValues) => createUser(data));
};

import axios from "axios";
import { IRegisterFormValues } from "@/interfaces/IRegisterFormValues";
import { API_BASE_URL } from "@/utils/api";

import { useMutation } from "react-query";

const createUser = async (data: IRegisterFormValues) => {
  const response = await axios.post(`${API_BASE_URL}/createClient`, data, {
    method: "POST",
  });
  return response.data;
};

export const useCreateUser = () => {
  return useMutation((data: IRegisterFormValues) => createUser(data));
};

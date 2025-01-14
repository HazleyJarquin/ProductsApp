import axios from "axios";
import { ILoginRequest } from "@/interfaces/ILoginRquest";
import { API_BASE_URL } from "@/utils/api";

import { useMutation } from "react-query";

const logiUser = async (data: ILoginRequest) => {
  const response = await axios.post(`${API_BASE_URL}/login`, data, {
    method: "POST",
  });
  return response.data;
};

export const useLoginUser = () => {
  return useMutation((data: ILoginRequest) => logiUser(data));
};

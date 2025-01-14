import axios from "axios";
import { IVerifyCode } from "@/interfaces/IVerifyCode";
import { API_BASE_URL } from "@/utils/api";
import { useMutation } from "react-query";

const verifyClient = async (data: IVerifyCode) => {
  const response = await axios.post(`${API_BASE_URL}/verifyClient`, data, {
    method: "POST",
  });
  return response.data;
};

export const useVerifyClient = () => {
  return useMutation((data: IVerifyCode) => verifyClient(data));
};

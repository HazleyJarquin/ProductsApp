import { api } from "@/utils/api";
import { useMutation } from "react-query";

interface IVerifyCode {
  email: string;
  verificationCode: string;
}

const verifyClient = async (data: IVerifyCode) => {
  const response = await api.post("/verifyClient", data, {
    method: "POST",
  });
  return response.data;
};

export const useVerifyClient = () => {
  return useMutation((data: IVerifyCode) => verifyClient(data));
};

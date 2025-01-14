import axios, { AxiosRequestConfig } from "axios";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const tokenInterceptor = async (config: AxiosRequestConfig) => {
  const newConfig = { ...config };
  const user = JSON.parse(localStorage.getItem("user-storage") || "{}");
  const token = user.state.user.token;
  if (token) {
    newConfig.headers = {
      ...newConfig.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return newConfig;
};

export const axiosTokenInterceptor = async (
  url: string,
  config: AxiosRequestConfig = {}
) => {
  const newConfig = await tokenInterceptor(config);

  try {
    const response = await axios(url, newConfig);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
  }
};

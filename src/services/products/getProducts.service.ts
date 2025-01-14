/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProductsResponse } from "@/interfaces/IProductsResponse";
import { API_BASE_URL, axiosTokenInterceptor } from "@/utils/api";
import { useQuery } from "react-query";

const getProducts = async (): Promise<IProductsResponse> => {
  const response = await axiosTokenInterceptor(`${API_BASE_URL}/getProducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const useGetProducts = () => {
  return useQuery("getProducts", getProducts, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    retry: 3,
    onError: (error: any) => {
      console.error("Error fetching products:", error.message);
    },
  });
};

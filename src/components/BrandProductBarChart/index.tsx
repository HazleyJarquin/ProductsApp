"use client";

import { useGetProducts } from "@/services/products/getProducts.service";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const BrandProductBarChart = () => {
  const { data: productsData, isLoading, error } = useGetProducts();
  const [categoryProductToFilter, setCategoryProductToFilter] = useState<
    "brand" | "master_brand" | "desc"
  >("brand");

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  const brands = productsData?.result.map(
    (product) => product[categoryProductToFilter]
  );
  const brandCounts = brands?.reduce(
    (acc: { [key: string]: number }, brand: string) => {
      acc[brand] = (acc[brand] || 0) + 1;
      return acc;
    },
    {}
  );

  const chartData = brandCounts
    ? Object.entries(brandCounts).map(([brand, count]) => ({
        name: brand,
        value: count,
      }))
    : [];

  const filterOptions = [
    {
      key: "brand",
      label: "Brand",
    },
    {
      key: "master_brand",
      label: "Master Brand",
    },
    {
      key: "desc",
      label: "Description",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 w-full">
      <h2 className="text-xl font-semibold mb-4">
        Product Distribution by {categoryProductToFilter.replace("_", " ")}
      </h2>
      {productsData ? (
        <div className="mb-6 space-x-4">
          <div className="w-full flex gap-2 items-center">
            {filterOptions.map((option) => (
              <Button
                key={option.key}
                onClick={() =>
                  setCategoryProductToFilter(
                    option.key as "brand" | "master_brand" | "desc"
                  )
                }
              >
                {option.label}
              </Button>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

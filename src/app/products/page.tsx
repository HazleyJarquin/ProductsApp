import { BrandProductBarChart } from "@/components/BrandProductBarChart";

import { ClientRedirect } from "@/components/ClientRedirect";

export default function ProductsPage() {
  return (
    <ClientRedirect fallbackPath="/auth/login">
      <div className="w-full h-full">
        <BrandProductBarChart />
      </div>
    </ClientRedirect>
  );
}

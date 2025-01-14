import { ClientRedirect } from "@/components/ClientRedirect";
import { Navbar } from "@/components/Navbar";

export default function DashboardPage() {
  return (
    <ClientRedirect fallbackPath="/login">
      <div>
        <Navbar />
        <h1>Hello Page</h1>
      </div>
    </ClientRedirect>
  );
}

import { Navbar } from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-[100vh] flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-1 w-full px-2 overflow-auto">{children}</div>
    </main>
  );
}

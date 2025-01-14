export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="w-full h-[100vh] bg-gray-100">{children}</main>;
}

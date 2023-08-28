import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-8 px-8 container">
      <Navbar />
      <main className="mt-10">{children}</main>
    </div>
  );
}

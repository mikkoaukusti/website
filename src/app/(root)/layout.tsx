import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-8 container">
      <Navbar />
      <main className="my-10">{children}</main>
      <Footer />
    </div>
  );
}

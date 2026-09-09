import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "NexChain — Next-Gen Network",
  description: "The high-performance blockchain for building decentralized applications at scale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#000000] text-[#F5F5F5]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

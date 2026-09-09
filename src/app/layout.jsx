import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "The Capital Market For Every Asset on Earth",
  description:
    "Solana is the high performance network powering internet capital markets, payments, and crypto applications. Fast. Decentralized. Scalable. Energy efficient. Solana can power thousands of transactions per second.",
  openGraph: {
    title: "The Capital Market For Every Asset on Earth",
    description:
      "Solana is the high performance network powering internet capital markets, payments, and crypto applications. Fast. Decentralized. Scalable. Energy efficient.",
    locale: "en",
    type: "website",
    images: [
      {
        url: "https://solana.com/social/solana.png",
        width: 1200,
        height: 630,
        alt: "Solana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@solana",
    title: "The Capital Market For Every Asset on Earth",
    description:
      "Solana is the high performance network powering internet capital markets, payments, and crypto applications.",
    images: ["https://solana.com/social/solana.png"],
  },
  robots: "index, follow",
  language: "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

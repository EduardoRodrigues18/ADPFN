import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/Components/navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

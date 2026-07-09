import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Promotora CVA | Bienes & Raíces en Mérida, Yucatán",
  description:
    "Promotora CVA Bienes & Raíces, Mérida, Yucatán.",
  icons: {
    icon: "/logo-cva.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

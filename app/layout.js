import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Aviso de Privacidad | Promotora CVA Bienes & Raíces",
  description:
    "Aviso de Privacidad de Promotora CVA Bienes & Raíces, Mérida, Yucatán.",
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

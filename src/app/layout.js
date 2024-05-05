import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "charlee.io",
  description: "charlee.io",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-5X5N4Z27' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

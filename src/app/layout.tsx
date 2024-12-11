import type { Metadata } from "next";
import "./globals.css";
import HomePage from "./pages/homepage/index";
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  subsets: ['latin'], // Adjust subsets based on your requirements
  weight: ['400', '700'], // Include specific weights
  variable: '--font-montserrat', // CSS variable for the font
});

export const metadata: Metadata = {
  title: "Airbash - London's Premier Multi-Sports Arena",
  description: "Experience the excitement of multiple sports at Airbash",
};

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body
        className="font-montserrat"
      >
        <HomePage />
      </body>
    </html>
  );
}
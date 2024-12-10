import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HomePage from "./pages/homepage/index";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HomePage />
      </body>
    </html>
  );
}
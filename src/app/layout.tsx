import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/provider/session-provider";
import { Header } from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FindDevs Pair",
  description:
    "FindDevs Pair application will help to pair programming with random devs online",
  creator: "Sabbir Hossain Shuvo",
  publisher: "Sabbir Hossain Shuvo",
  icons: "/favicon/favicon.ico",
  authors: {
    name: "Sabbir Hossain Shuvo",
    url: "https://github.com/devlopersabbir",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

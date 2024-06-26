import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/uikit.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newfake - fique por dentro",
  description: "newfake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

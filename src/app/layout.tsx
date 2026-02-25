import type { Metadata } from "next";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";
import LenisProvider from "@/components/LenisProvider";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "HOUSEN | Modern Premium Living",
  description: "Discover luxury properties with HOUSEN. Smarter living starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <LoadingScreen />
        <CustomCursor />
        <LenisProvider>
          {children}
        </LenisProvider>
        <FloatingCTA />
      </body>
    </html>
  );
}

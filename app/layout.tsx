"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footerdemo } from "@/components/ui/footer-section";
import { Header1 } from "@/components/ui/header";
import { useEffect, useState } from "react";
import Image from "next/image";
import Social from "@/components/social";
import Whatsapp from "@/components/whatsapp";

const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <body className={`${bodyFont.className} antialiased`}>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Image
              className="w-56"
              src="/images/parsloading.gif"
              height={720}
              width={720}
              unoptimized
              alt="Loading Animation"
            />
          </div>
        ) : (
          <>
            <Header1 />

            {/* Sayfanın içerikleri */}
            <div className="min-h-screen pt-20">{children}</div>

            <Footerdemo />
            <Social />
            <Whatsapp />
          </>
        )}
      </body>
    </html>
  );
}

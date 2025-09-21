"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import SmoothScroll from "./components/SmoothScroll";
import localFont from "next/font/local";
import "./globals.css";

const TDF = localFont({
  src: "./fonts/TDF.ttf",
  variable: "--font-tdf",
});

const Luxnoleg = localFont({
  src: "./fonts/Luxnoleg.ttf",
  variable: "--font-luxnoleg",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${TDF.variable} ${Luxnoleg.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ParallaxProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ParallaxProvider>
      </body>
    </html>
  );
}

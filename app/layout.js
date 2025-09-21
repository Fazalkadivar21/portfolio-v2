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

        {/* Basic Meta */}
        <title>Fazal Kadivar | MERN & Backend Developer</title>
        <meta
          name="description"
          content="Fazal Kadivar is a skilled MERN and backend developer specializing in JavaScript, TypeScript, WebSockets, WebRTC, Express, and MongoDB. Explore projects, expertise, and more."
        />
        <meta
          name="keywords"
          content="Fazal Kadivar, Fazal, Kadivar, FazalKadivar, MERN Developer, Backend Developer, JavaScript Developer, TypeScript Developer, WebSockets Developer, WebRTC Developer, Express Developer, MongoDB Developer"
        />
        <meta name="author" content="Fazal Kadivar" />
        <link rel="canonical" href="https://yourdomain.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fazal Kadivar | MERN & Backend Developer" />
        <meta
          property="og:description"
          content="Fazal Kadivar is a skilled MERN and backend developer specializing in JavaScript, TypeScript, WebSockets, WebRTC, Express, and MongoDB."
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:site_name" content="Fazal Kadivar | MERN & Backend Developer" />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/fazal-kadivar.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fazal Kadivar | MERN & Backend Developer" />
        <meta
          name="twitter:description"
          content="Fazal Kadivar is a MERN and backend developer skilled in JS, TS, WebSockets, WebRTC, Express, and MongoDB."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/images/fazal-kadivar.jpg"
        />
        <meta name="twitter:creator" content="@YourTwitterHandle" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Fazal Kadivar",
              "jobTitle": "MERN & Backend Developer",
              "url": "https://yourdomain.com",
              "sameAs": [
                "https://github.com/yourgithub",
                "https://linkedin.com/in/yourlinkedin"
              ],
              "skills": [
                "JavaScript",
                "TypeScript",
                "WebSockets",
                "WebRTC",
                "Express",
                "MongoDB"
              ]
            }),
          }}
        />
      </head>
      <body>
        <ParallaxProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ParallaxProvider>
      </body>
    </html>
  );
}

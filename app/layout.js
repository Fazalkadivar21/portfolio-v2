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
        <title>Fazal Kadivar | MERN Developer, Full Stack & Backend Expert</title>
        <meta
          name="description"
          content="Hire Fazal Kadivar - MERN full stack developer, backend expert & freelancer. Specializing in React, Node.js, Express, MongoDB, WebSockets, WebRTC, TypeScript. View portfolio and projects."
        />
        <meta
          name="keywords"
          content="Fazal Kadivar, web developer, MERN developer, full stack developer, backend developer, frontend developer, freelancer, React developer, Node.js developer, Express, MongoDB, JavaScript, TypeScript"
        />
        <meta name="author" content="Fazal Kadivar" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://fazalkadivar.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fazal Kadivar | MERN Developer & Full Stack Expert" />
        <meta
          property="og:description"
          content="Full stack MERN developer & freelancer. Specializing in React, Node.js, Express, MongoDB, WebSockets, WebRTC. Check out my projects and expertise."
        />
        <meta property="og:url" content="https://fazalkadivar.com" />
        <meta property="og:site_name" content="Fazal Kadivar - Web Developer" />
        <meta
          property="og:image"
          content="https://fazalkadivar.com/images/fazal-kadivar.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fazal Kadivar | MERN Developer & Full Stack Expert" />
        <meta
          name="twitter:description"
          content="Full stack MERN developer specializing in React, Node.js, Express, MongoDB, WebSockets, WebRTC. View my portfolio and projects."
        />
        <meta
          name="twitter:image"
          content="https://fazalkadivar.com/images/fazal-kadivar.jpg"
        />
        <meta name="twitter:creator" content="@fazalkadivar21" />
        <meta name="yandex-verification" content="569446ceaaeb7de7" />

        {/* JSON-LD Schema - Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Fazal Kadivar",
              "jobTitle": "MERN & Full Stack Developer",
              "url": "https://fazalkadivar.com",
              "email": "contact@fazalkadivar.com",
              "sameAs": [
                "https://github.com/fazalkadivar21",
                "https://linkedin.com/in/fazalkadivar21",
                "https://twitter.com/fazalkadivar21"
              ],
              "skills": [
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "WebSockets",
                "WebRTC",
                "Full Stack Development",
                "Backend Development",
                "Frontend Development"
              ],
              "knowsAbout": [
                "Web Development",
                "Full Stack Development",
                "Real-time Communication",
                "API Development"
              ]
            }),
          }}
        />

        {/* JSON-LD Schema - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fazal Kadivar",
              "url": "https://fazalkadivar.com",
              "description": "Full stack MERN developer & freelancer specializing in web development",
              "sameAs": [
                "https://github.com/fazalkadivar21",
                "https://linkedin.com/in/fazalkadivar21",
                "https://twitter.com/fazalkadivar21"
              ]
            }),
          }}
        />

        {/* JSON-LD Schema - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://fazalkadivar.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Projects",
                  "item": "https://fazalkadivar.com/#projects"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "About",
                  "item": "https://fazalkadivar.com/#about"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contact",
                  "item": "https://fazalkadivar.com/#contact"
                }
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

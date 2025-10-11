"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

// ✅ Project Data
const projectsData = [
  {
    id: 1,
    title: "ChatGPT Clone",
    subtitle: "AI Chat Application",
    description:
      "Developed a full-stack AI chat application enabling users to interact with an AI assistant, manage conversations, and save chats. Implemented secure authentication, real-time messaging, and chat management features. Integrated Google Gemini API for AI responses, Pinecone for semantic search, and Redis for caching. Built a responsive, modern UI with React and Tailwind CSS; ensured persistent storage with MongoDB.",
    technologies: [
      "React",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "TypeScript",
      "Socket.IO",
      "MongoDB",
      "Redis",
      "Google Gemini API",
    ],
    year: "2025",
    category: "AI App",
    image : "/images/chatgpt.png",
    link: "https://github.com/fazalkadivar21/chatgpt-clone",
  },
  {
    id: 2,
    title: "Omegle Clone",
    subtitle: "Anonymous Chat Platform",
    description:
      "Developed a secure, anonymous chat platform with video and text support. Integrated WebRTC for real-time media streaming and peer-to-peer connections. Added moderation features to ensure user safety and privacy.",
    technologies: ["React", "NodeJS", "TypeScript", "WebRTC", "Socket.IO"],
    year: "2025",
    category: "Web App",
    image : "/images/omegle.png",
    link: "https://github.com/fazalkadivar21/omegle",
  },
  {
    id: 3,
    title: "Campa",
    subtitle: "Modern Animated Website",
    description:
      "Re-designed and developed a modern, animated website for Campa Beverages. Integrated GSAP and Framer Motion for engaging UI animations. Optimized performance and accessibility for improved user engagement.",
    technologies: ["React", "GSAP", "Framer Motion", "TailwindCSS"],
    year: "2024",
    category: "Web Design",
    image : "/images/campa.png",
    link: "https://github.com/fazalkadivar21/campa",
  },
];

// ✅ ProjectCard (with Intersection Observer)
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.style.opacity = "1";
          card.style.transform = "translateY(0) scale(1)";
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-full h-[50vh] md:h-screen lg:h-screen z-20 gap-4"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative w-full h-full rounded-4xl border-2 overflow-hidden shadow-none flex flex-col items-end justify-end mt-5 p-6 md:p-10">
        {/* Optimized background image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          quality={70}
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-white/40 z-10"></div>
        <div className="z-20">
          <a
            href={project.link}
            target="_blank"
            className="z-[100] relative flex items-center gap-3 md:gap-4 group"
          >
            <Image src="/images/arrow.svg" alt="arrow" width={40} height={40} />
          </a>
        </div>
        <a
          href={project.link}
          target="_blank"
          className="z-[100] relative flex items-center gap-3 md:gap-4 group"
        >
          <h2 className="text-7xl md:text-[10rem] lg:text-[14rem] uppercase font-[TDF] text-black drop-shadow-sm">
            {project.title}
          </h2>
        </a>
      </div>
    </div>
  );
};

export default function Third() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [winSize, setWinSize] = useState({ width: 0, height: 0 });

  // ✅ Get window size after mount (to avoid SSR crash)
  useEffect(() => {
    setWinSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWinSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Track scroll progress (only on client)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / winSize.height));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [winSize.height]);

  // ✅ Title transform logic
  const scale = 1 - scrollProgress * 0.3;
  const x = -(scrollProgress * winSize.width * 0.46);
  const y = -(scrollProgress * winSize.height * 0.46);

  const titleStyle = {
    transform: `scale(${scale}) translate(${x}px, ${y}px)`,
    transition: "transform 0.1s linear",
  };

  return (
    <div ref={containerRef} className="bg-[#f5f5dc] relative">
      {/* Hero Section */}
      <div ref={titleRef} style={titleStyle} className="z-50 flex items-center justify-center h-screen py-[45vh] sticky top-0">
        
          <h1
            className="text-8xl md:text-9xl lg:text-[15rem] font-[TDF] uppercase"
          >
            Projects
          </h1>
      </div>

      {/* Project Content */}
      <div className="p-5">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

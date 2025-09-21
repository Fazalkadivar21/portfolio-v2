"use client";
import React, { useRef, useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

// ✅ Project Data
const projectsData = [
  {
    id: 1,
    title: "Metaverse",
    subtitle: "Real-Time Interactions",
    description:
      "Backend-powered real-time interactions with a simple interface and easy integration.",
    technologies: ["TypeScript", "Node.js", "Express", "Socket.IO"],
    year: "2025",
    category: "Web Development",
    link: "https://github.com/fazalkadivar21/metaverse",
  },
  {
    id: 2,
    title: "Omegle Clone",
    subtitle: "Anonymous Chat Application",
    description:
      "A web application that allows users to have anonymous text and video chats with strangers.",
    technologies: ["React", "Node.js", "TypeScript", "WebRTC", "Socket.IO"],
    year: "2025",
    category: "Web App",
    link: "https://github.com/fazalkadivar21/omegle",
  },
  {
    id: 3,
    title: "Shell-JavaScript",
    subtitle: "Command Line Shell",
    description:
      "JavaScript-based shell able to execute shell commands with features like prompt display, navigation, quoting, redirection, and autocompletion.",
    technologies: ["Node.js"],
    year: "2024",
    category: "CLI Tool",
    link: "https://github.com/fazalkadivar21/shell-javascript",
  },
  {
    id: 4,
    title: "Campa",
    subtitle: "Modern UI/UX Website",
    description:
      "Reimagined website for Campa beverages with modern UI/UX and improved performance.",
    technologies: ["React", "GSAP", "Framer Motion", "TailwindCSS"],
    year: "2024",
    category: "Web Design",
    link: "https://github.com/fazalkadivar21/campa",
  },
  {
    id: 5,
    title: "Uber Clone",
    subtitle: "Ride-Hailing Web Application",
    description:
      "Uber-like ride-hailing web application with real-time tracking, fare estimation, and user authentication.",
    technologies: ["Node.js", "Express", "MongoDB", "Google Maps API"],
    year: "2025",
    category: "Web App",
    link: "https://github.com/fazalkadivar21/uber",
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
      ref={cardRef}
      className="w-full flex justify-end px-4 opacity-0 transform translate-y-12 scale-95 transition-all duration-700 ease-out z-20"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative w-full md:w-2/3 max-w-5xl rounded-2xl overflow-hidden border border-black/10 bg-[#f5f5dc] shadow-lg">
        <div className="relative z-10 w-full h-full p-6 md:p-10 flex flex-col justify-between gap-6">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="px-3 py-1.5 rounded-full text-xs md:text-base uppercase tracking-wider bg-black/10 text-black border border-black/10">
                {project.category}
              </div>
              <div className="text-lg md:text-2xl font-semibold">
                {project.year}
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl uppercase mb-2 leading-tight text-black font-extrabold">
              {project.title}
            </h2>
            <h3 className="text-lg md:text-2xl italic text-black/70">
              {project.subtitle}
            </h3>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-base md:text-xl leading-relaxed text-black/80">
              {project.description}
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs md:text-base border bg-transparent text-black border-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="px-6 py-2.5 rounded-full uppercase tracking-wider text-xs md:text-base flex items-center gap-2 border-2 bg-black text-[#f5f5dc] border-black hover:scale-105 transition-transform self-end md:self-auto"
              >
                <span>View Project</span>
                <svg
                  className="w-4 h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 w-10 h-10 md:w-20 md:h-20 border-2 rounded-full border-black/10">
          <div className="absolute inset-1 border-2 rounded-full border-black/5"></div>
        </div>
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
    <div ref={containerRef} className="bg-[beige] relative">
      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen sticky top-0">
        <Parallax speed={-10}>
          <h1
            ref={titleRef}
            style={titleStyle}
            className="text-7xl md:text-9xl lg:text-[15rem] font-[TDF] uppercase"
          >
            Projects
          </h1>
        </Parallax>
      </div>

      {/* Project Content */}
      <div className="pb-20">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

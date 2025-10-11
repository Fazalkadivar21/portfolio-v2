"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { Parallax } from "react-scroll-parallax";
import { 
  FaReact, 
  FaNode, 
  FaAws, 
  FaJs 
} from "react-icons/fa6";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress 
} from "react-icons/si";

gsap.registerPlugin(SplitText);

const TechIcon = ({ Icon, speed, className, delay = 0 }) => {
  return (
    <Parallax speed={speed} className={`absolute ${className}`}>
      <Icon 
        className="text-black/10 hover:text-black/20 transition-all duration-300" 
        style={{
          animation: `float ${5 + delay}s ease-in-out infinite`,
          animationDelay: `${delay}s`
        }}
      />
    </Parallax>
  );
};

export default function Home() {
  useGSAP(() => {
    const split = new SplitText(".boom", { type: "chars" });

    const tl = gsap.timeline();
    tl.from(split.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.06,
      ease: "back.out(1.7)",
    });

    return () => split.revert();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
      
      <div className="flex relative main bg-[beige] items-center justify-center min-h-screen flex-col overflow-hidden">
        {/* Scattered Icons - Top Section */}
        <TechIcon Icon={FaReact} speed={-15} className="top-[3%] left-[2%] text-3xl md:text-4xl lg:text-5xl" delay={0} />
        <TechIcon Icon={SiNextdotjs} speed={-22} className="top-[8%] left-[12%] text-2xl md:text-3xl lg:text-4xl" delay={1.2} />
        <TechIcon Icon={FaNode} speed={-18} className="top-[2%] left-[28%] text-3xl md:text-4xl lg:text-5xl" delay={2.8} />
        <TechIcon Icon={FaJs} speed={-25} className="top-[11%] left-[42%] text-xl md:text-2xl lg:text-3xl" delay={0.5} />
        <TechIcon Icon={SiTypescript} speed={-12} className="top-[4%] right-[38%] text-3xl md:text-4xl lg:text-6xl" delay={1.8} />
        <TechIcon Icon={FaAws} speed={-20} className="top-[14%] right-[22%] text-2xl md:text-3xl lg:text-4xl" delay={3.2} />
        <TechIcon Icon={SiExpress} speed={-16} className="top-[3%] right-[5%] text-3xl md:text-4xl lg:text-5xl" delay={0.8} />
        <TechIcon Icon={SiTailwindcss} speed={-23} className="top-[16%] right-[48%] text-2xl md:text-3xl lg:text-4xl" delay={2.5} />
        
        {/* Upper-Middle Section */}
        <TechIcon Icon={FaReact} speed={-14} className="top-[22%] left-[1%] text-2xl md:text-3xl lg:text-4xl" delay={1.5} />
        <TechIcon Icon={FaNode} speed={-19} className="top-[28%] left-[18%] text-3xl md:text-4xl lg:text-5xl" delay={3.5} />
        <TechIcon Icon={SiNextdotjs} speed={-17} className="top-[20%] left-[58%] text-xl md:text-2xl lg:text-3xl" delay={0.3} />
        <TechIcon Icon={FaJs} speed={-21} className="top-[32%] right-[32%] text-4xl md:text-5xl lg:text-6xl" delay={2.2} />
        <TechIcon Icon={SiTypescript} speed={-13} className="top-[24%] right-[3%] text-3xl md:text-4xl lg:text-5xl" delay={1.0} />
        <TechIcon Icon={FaAws} speed={-24} className="top-[36%] left-[38%] text-2xl md:text-3xl lg:text-4xl" delay={3.8} />
        
        {/* Middle Section */}
        <TechIcon Icon={SiExpress} speed={-11} className="top-[44%] left-[5%] text-3xl md:text-4xl lg:text-5xl" delay={2.0} />
        <TechIcon Icon={SiTailwindcss} speed={-26} className="top-[42%] right-[2%] text-2xl md:text-3xl lg:text-4xl" delay={0.7} />
        <TechIcon Icon={FaReact} speed={-15} className="top-[50%] right-[42%] text-3xl md:text-4xl lg:text-5xl" delay={3.0} />
        <TechIcon Icon={FaNode} speed={-20} className="top-[54%] right-[18%] text-2xl md:text-3xl lg:text-4xl" delay={1.3} />
        <TechIcon Icon={FaJs} speed={-18} className="top-[56%] left-[22%] text-xl md:text-2xl lg:text-3xl" delay={2.7} />
        
        {/* Lower-Middle Section */}
        <TechIcon Icon={SiTypescript} speed={-22} className="top-[64%] left-[8%] text-3xl md:text-4xl lg:text-5xl" delay={0.2} />
        <TechIcon Icon={FaAws} speed={-14} className="top-[68%] left-[55%] text-4xl md:text-5xl lg:text-6xl" delay={3.3} />
        <TechIcon Icon={SiNextdotjs} speed={-19} className="top-[62%] right-[25%] text-2xl md:text-3xl lg:text-4xl" delay={1.7} />
        <TechIcon Icon={SiExpress} speed={-16} className="top-[72%] right-[52%] text-xl md:text-2xl lg:text-3xl" delay={2.9} />
        <TechIcon Icon={FaReact} speed={-23} className="top-[74%] left-[35%] text-3xl md:text-4xl lg:text-5xl" delay={0.9} />
        
        {/* Bottom Section */}
        <TechIcon Icon={SiTailwindcss} speed={-17} className="bottom-[14%] left-[4%] text-2xl md:text-3xl lg:text-5xl" delay={1.6} />
        <TechIcon Icon={FaNode} speed={-21} className="bottom-[12%] left-[20%] text-4xl md:text-5xl lg:text-6xl" delay={3.6} />
        <TechIcon Icon={FaJs} speed={-13} className="bottom-[18%] left-[48%] text-xl md:text-2xl lg:text-3xl" delay={0.4} />
        <TechIcon Icon={SiTypescript} speed={-24} className="bottom-[8%] right-[38%] text-3xl md:text-4xl lg:text-5xl" delay={2.4} />
        <TechIcon Icon={FaAws} speed={-15} className="bottom-[20%] right-[20%] text-2xl md:text-3xl lg:text-4xl" delay={1.1} />
        <TechIcon Icon={SiExpress} speed={-19} className="bottom-[5%] right-[3%] text-3xl md:text-4xl lg:text-5xl" delay={3.1} />
        <TechIcon Icon={FaReact} speed={-12} className="bottom-[22%] left-[68%] text-3xl md:text-4xl lg:text-6xl" delay={0.6} />
        <TechIcon Icon={SiNextdotjs} speed={-20} className="bottom-[7%] left-[40%] text-2xl md:text-3xl lg:text-4xl" delay={2.6} />
        
        {/* Extra Random Scattered */}
        <TechIcon Icon={FaNode} speed={-16} className="top-[40%] right-[8%] text-xl md:text-2xl lg:text-3xl" delay={1.9} />
        <TechIcon Icon={FaJs} speed={-25} className="top-[78%] right-[68%] text-3xl md:text-4xl lg:text-5xl" delay={3.7} />
        <TechIcon Icon={SiTailwindcss} speed={-11} className="bottom-[28%] left-[28%] text-2xl md:text-3xl lg:text-4xl" delay={0.1} />
        <TechIcon Icon={SiTypescript} speed={-18} className="bottom-[32%] right-[6%] text-4xl md:text-5xl lg:text-6xl" delay={2.1} />
        <TechIcon Icon={FaAws} speed={-22} className="bottom-[2%] right-[28%] text-xl md:text-2xl lg:text-3xl" delay={1.4} />
        <TechIcon Icon={SiExpress} speed={-14} className="top-[82%] left-[12%] text-3xl md:text-4xl lg:text-5xl" delay={3.4} />
        
        {/* Additional Scattered for More Coverage */}
        <TechIcon Icon={FaReact} speed={-19} className="top-[18%] left-[72%] text-2xl md:text-3xl lg:text-4xl" delay={2.3} />
        <TechIcon Icon={SiNextdotjs} speed={-13} className="top-[48%] left-[72%] text-xl md:text-2xl lg:text-3xl" delay={1.8} />
        <TechIcon Icon={FaNode} speed={-21} className="bottom-[38%] left-[15%] text-3xl md:text-4xl lg:text-5xl" delay={3.2} />
        <TechIcon Icon={FaJs} speed={-17} className="top-[60%] right-[65%] text-2xl md:text-3xl lg:text-4xl" delay={0.9} />
        <TechIcon Icon={SiTypescript} speed={-15} className="top-[86%] right-[15%] text-3xl md:text-4xl lg:text-5xl" delay={2.7} />
        <TechIcon Icon={FaAws} speed={-20} className="bottom-[42%] right-[45%] text-2xl md:text-3xl lg:text-4xl" delay={1.5} />

        {/* Main Text */}
        <Parallax speed={-20} className="z-10">
          <div className="text-5xl sm:text-6xl md:text-8xl lg:text-[12rem] xl:text-[15rem] 2xl:text-[20rem] boom text-black font-bold text-center px-4">
            FAZAL KADIVAR
          </div>
        </Parallax>
      </div>
    </>
  );
}
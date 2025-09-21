"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { Parallax } from "react-scroll-parallax";

gsap.registerPlugin(SplitText);

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
      <div className="flex relative main bg-[beige] items-center justify-center h-screen flex-col">
        <Parallax speed={-20}>
          <div className="text-5xl md:text-9xl lg:text-[25rem] boom text-black">FAZAL KADIVAR</div>
        </Parallax>
      </div>
    </>
  );
}

"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";

gsap.registerPlugin(ScrollTrigger);

export default function Second() {
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            leftRef.current,
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: "top 80%",
                    end: "top 30%", // animation happens *while* scrolling
                    scrub: true,    // ties progress to scroll
                },
                ease: "power3.out",
            }
        );

        gsap.fromTo(
            rightRef.current,
            { x: 200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                },
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <div className="flex relative main text-[beige] items-center justify-center h-screen flex-col p-4 md:p-0">
            <Parallax speed={10}>
            <div
                ref={leftRef}
                className="text-lg md:text-2xl flex flex-col items-center justify-center text-center"
            >
                I am a guy with a laptop, head over heels for
            </div>
                <div
                    ref={rightRef}
                    className="text-9xl md:text-[12rem] lg:text-[15rem] font-[TDF] uppercase leading-none m-0 p-0"
                >
                    backend
                </div>
            </Parallax>
        </div>
    );
}

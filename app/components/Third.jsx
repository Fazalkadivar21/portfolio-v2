"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Third() {
    const titleWrapperRef = useRef(null);
    const titleRef = useRef(null);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",          
                    endTrigger: contentRef.current, // end based on content
                    end: "bottom bottom",         // when content finishes
                    scrub: true,
                    pin: titleWrapperRef.current, 
                    pinSpacing: false,
                }
            });

            tl.to(titleRef.current, {
                scale: 0.7,
                x: "-34vw",
                y: "-34vh",
                ease: "power3.out"
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-[beige] relative">
            {/* Hero Section */}
            <div
                ref={titleWrapperRef}
                className="flex main items-center justify-center h-screen relative z-[40]"
            >
                <h1
                    ref={titleRef}
                    className="text-[15rem] font-[TDF] uppercase"
                >
                    Projects
                </h1>
            </div>

            {/* Project Content Wrapper */}
            <div ref={contentRef}>
                <div className="ml-auto w-2/3 p-10 text-xl leading-relaxed">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>Donec sed odio dui...</p>
                    <p>Morbi leo risus...</p>
                </div>
                <div className="ml-auto w-2/3 p-10 text-xl leading-relaxed">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>Donec sed odio dui...</p>
                    <p>Morbi leo risus...</p>
                </div>
                <div className="ml-auto w-2/3 p-10 text-xl leading-relaxed">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>Donec sed odio dui...</p>
                    <p>Morbi leo risus...</p>
                </div>
                <div className="ml-auto w-2/3 p-10 text-xl leading-relaxed">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>Donec sed odio dui...</p>
                    <p>Morbi leo risus...</p>
                </div>
                <div className="ml-auto w-2/3 p-10 text-xl leading-relaxed">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>Donec sed odio dui...</p>
                    <p>Morbi leo risus...</p>
                </div>
            </div>
        </div>
    );
}

"use client"; // Required for Next.js App Router

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/data";



const RecentProjects = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const scroll = scrollRef.current;
        if (!scroll) return;

        let scrollAmount = 0;
        const maxScroll = scroll.scrollWidth - scroll.clientWidth;

        const autoScroll = () => {
            if (isHovered) return; // Stop scrolling when hovered
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0; // Reset scroll when reaching the end
            } else {
                scrollAmount += 1; // Adjust speed here
            }
            scroll.scrollLeft = scrollAmount;
        };

        const interval = setInterval(autoScroll, 40); // Adjust speed here

        return () => clearInterval(interval); // Cleanup on unmount
    }, [isHovered]); // Rerun when hover state changes

    return (
        <section className="w-full bg-gray-900 py-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>

            <div 
                className="relative overflow-hidden px-6 my-6"
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                <div 
                    ref={scrollRef} 
                    className="flex gap-6 overflow-hidden scrollbar-hide"
                >
                    {projects.map((project, index) => (
                        <a 
                            key={index} 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="min-w-[300px] md:min-w-[400px] bg-gray-800 p-4 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="relative w-full h-48 rounded-lg overflow-hidden">
                                <Image 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    layout="fill" 
                                    objectFit="cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                            <p className="text-gray-300 text-sm">{project.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecentProjects;
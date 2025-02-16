"use client"; // Required for Next.js App Router

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data";

const RecentProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalProjects = projects.length;

    // Handle next button click
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
    };

    // Handle previous button click
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects);
    };

    // Determine visible projects based on screen size
    const getVisibleProjects = () => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            // Small screens - show 1 project
            return [projects[currentIndex]];
        } else {
            // Large screens - show 3 projects
            return [
                projects[currentIndex],
                projects[(currentIndex + 1) % totalProjects],
                projects[(currentIndex + 2) % totalProjects],
            ];
        }
    };

    return (
        <section id="projects" className="px-8 w-full bg-gray-900 py-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>

            <div className="relative flex items-center justify-center">
                {/* Left button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 z-10 bg-purple-800 p-3 rounded-full shadow-sm hover:bg-purple-700 hover:shadow-purple-700 transition-all"
                >
                    &#8592;
                </button>

                {/* Projects container */}
                <div className="mx-10 flex gap-8 overflow-hidden">
                    {getVisibleProjects().map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[250px] md:min-w-[300px] h-[350px] bg-slate-800 p-4 rounded-md shadow-lg transform transition-transform hover:scale-90 hover:shadow-xl flex flex-col"
                        >
                            <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                            <p className="text-gray-300 text-sm">{project.description}</p>
                        </a>
                    ))}
                </div>

                {/* Right button */}
                <button
                    onClick={handleNext}
                    className="absolute right-0 z-10 bg-purple-800 p-3 rounded-full shadow-sm hover:bg-purple-700 hover:shadow-purple-700 transition-all"
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
};

export default RecentProjects;

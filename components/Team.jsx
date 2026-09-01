"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const team = [
    {
        name: "Андрій Хмара",
        role: "Co-Founder",
        image: "/assets/team-1.jpg",
    },
    {
        name: "Євгеній Котляревський",
        role: "Co-Founder",
        image: "/assets/team-2.jpg",
    },
    {
        name: "Богдан Бурий",
        role: "Frontend Developer",
        image: "/assets/team-3.jpg",
    },
];

export default function TeamSection() {
    const globeRef = useRef(null);

    useEffect(() => {
        let frame;
        let rotation = 0;

        const animate = () => {
            rotation += 0.15;

            if (globeRef.current) {
                globeRef.current.style.transform = `rotate(${rotation}deg)`;
            }

            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <section className="relative overflow-hidden text-white">
            <div className="relative min-h-195 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-screen lg:px-10 lg:py-8 xl:px-12">

                {/* Heading */}
                <h2 className="text-[52px] font-normal uppercase leading-none tracking-[-0.045em] sm:text-[68px] lg:text-[76px] xl:text-[82px]">
                    Команда
                </h2>

                {/* Team */}
                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:absolute lg:right-10 lg:top-[26%] lg:mt-0 lg:w-[64%] lg:grid-cols-3 lg:gap-5 xl:right-12 xl:w-[63%]">
                    {team.map((member) => (
                        <article key={member.name}>
                            <figure className="relative aspect-[0.72/1] w-full overflow-hidden bg-neutral-900">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
                                    className="object-cover grayscale"
                                />
                            </figure>

                            <div className="pt-3">
                                <h3 className="text-[14px] font-semibold uppercase leading-tight tracking-[-0.01em] sm:text-[15px]">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-[11px] uppercase tracking-[0.02em] text-white/65">
                                    {member.role}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Spinning Globe */}
                <div className="mt-16 lg:absolute lg:bottom-8 lg:left-10 lg:mt-0 xl:left-12">
                    <div ref={globeRef} className="relative h-11 w-11 will-change-transform sm:h-12 sm:w-12">
                        <span className="absolute inset-0 rounded-full border border-white/70" />

                        <span className="absolute left-1/2 top-0 h-full w-[55%] -translate-x-1/2 rounded-[50%] border border-white/55" />

                        <span className="absolute left-1/2 top-0 h-full w-[22%] -translate-x-1/2 rounded-[50%] border border-white/45" />

                        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/60" />

                        <span className="absolute left-[4%] top-[27%] h-px w-[92%] rounded-full bg-white/40" />

                        <span className="absolute left-[4%] bottom-[27%] h-px w-[92%] rounded-full bg-white/40" />
                    </div>
                </div>
            </div>
        </section>
    );
}
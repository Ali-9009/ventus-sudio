"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Meta Lordz",
        category: "Branding",
        year: "2024",
        image: "/assets/branding.jpg",
        href: "/portfolio/meta-lordz",
    },
    {
        title: "Creco",
        category: "Web Development",
        year: "2024",
        image: "/assets/dev.jpg",
        href: "/portfolio/creco",
    },
    {
        title: "6Clicks",
        category: "UI / UX",
        year: "2023",
        image: "/assets/ui.jpg",
        href: "/portfolio/6clicks",
    },
    {
        title: "Nova",
        category: "E-Commerce",
        year: "2023",
        image: "/assets/e-com.jpg",
        href: "/portfolio/nova",
    },
    {
        title: "Aster",
        category: "Branding",
        year: "2023",
        image: "/assets/branding.jpg",
        href: "/portfolio/aster",
    },
    {
        title: "Vertex",
        category: "Web Development",
        year: "2022",
        image: "/assets/dev.jpg",
        href: "/portfolio/vertex",
    },
];

const filters = [
    "All",
    "Branding",
    "Web Development",
    "UI / UX",
    "E-Commerce",
];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projects;

        return projects.filter(
            (project) => project.category === activeFilter
        );
    }, [activeFilter]);

    return (
        <main className="overflow-hidden bg-black text-white">
            {/* HERO */}
            <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-40 xl:px-12">
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                    Selected work
                </p>

                <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
                    <h1 className="text-[clamp(4rem,10vw,11rem)] font-normal uppercase leading-[0.8] tracking-[-0.07em]">
                        Portfolio
                    </h1>

                    <p className="max-w-[620px] text-xl leading-[1.4] tracking-[-0.025em] text-white/70 sm:text-2xl lg:text-[28px]">
                        A selection of digital products, identities, websites, and
                        experiences created with clarity, precision, and purpose.
                    </p>
                </div>
            </section>

            {/* FILTERS */}
            <section className="border-y border-white/15 px-5 sm:px-8 lg:px-10 xl:px-12">
                <div className="flex flex-wrap gap-x-6 gap-y-3 py-5">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                            className={`text-xs uppercase tracking-[0.05em] transition ${activeFilter === filter
                                    ? "text-white"
                                    : "text-white/35 hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            {/* PROJECT GRID */}
            <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
                <div className="grid gap-x-5 gap-y-14 md:grid-cols-2 lg:gap-y-20">
                    {filteredProjects.map((project, index) => (
                        <article
                            key={project.title}
                            className={index % 3 === 2 ? "md:col-span-2 md:w-[70%] md:justify-self-center" : ""}
                        >
                            <Link href="#" className="group block">
                                <figure className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/15" />

                                    <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                                        <ArrowUpRight size={18} strokeWidth={1.4} />
                                    </span>
                                </figure>

                                <div className="mt-4 flex items-start justify-between gap-5 border-b border-white/20 pb-4">
                                    <div>
                                        <h2 className="text-xl font-medium uppercase tracking-[-0.025em] sm:text-2xl">
                                            {project.title}
                                        </h2>

                                        <p className="mt-1 text-xs uppercase tracking-[0.05em] text-white/40">
                                            {project.category}
                                        </p>
                                    </div>

                                    <span className="text-xs text-white/35">
                                        {project.year}
                                    </span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            {/* FEATURED STATEMENT */}
            <section className="border-t border-white/15 px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36 xl:px-12">
                <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                            Our approach
                        </p>

                        <h2 className="mt-5 text-[clamp(3rem,6vw,7rem)] uppercase leading-[0.9] tracking-[-0.055em]">
                            Less noise.
                            <br />
                            More impact.
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[700px] text-[24px] leading-[1.35] tracking-[-0.025em] text-white/80 sm:text-[28px] lg:text-[32px]">
                            Every project is shaped around one idea: create something that
                            looks distinctive, works effortlessly, and stays relevant long
                            after launch.
                        </p>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="border-t border-white/15 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40 xl:px-12">
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                    Have a project in mind?
                </p>

                <Link
                    href="/contact-us"
                    className="group mt-7 block border-b border-white/30 pb-8"
                >
                    <div className="flex items-end justify-between gap-5">
                        <h2 className="text-[clamp(3.5rem,9vw,10rem)] uppercase leading-[0.8] tracking-[-0.065em]">
                            Let&apos;s build
                        </h2>

                        <ArrowUpRight
                            size={60}
                            strokeWidth={1}
                            className="mb-2 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                        />
                    </div>
                </Link>

                <div className="mt-6 flex flex-col gap-2 text-sm text-white/40 sm:flex-row sm:justify-between">
                    <span>Strategy. Design. Development.</span>
                    <span>Start your next project with us.</span>
                </div>
            </section>
        </main>
    );
}
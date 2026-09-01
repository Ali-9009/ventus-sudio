"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const projects = [
    {
        title: "Meta Lordz",
        image: "/assets/project-1.jpg",
        category: "Брендинг, дизайн, розробка, оптимізування, просування",
        year: "2023",
        href: "/projects/meta-lordz",
    },
    {
        title: "Creco",
        image: "/assets/project-2.jpg",
        category: "Брендинг, дизайн, розробка, оптимізування, просування",
        year: "2023",
        href: "/projects/creco",
    },
    {
        title: "6Clicks",
        image: "/assets/project-3.avif",
        category: "Брендинг, дизайн, розробка, оптимізування, просування",
        year: "2023",
        href: "/projects/6clicks",
    },
    {
        title: "Nova",
        image: "/assets/project-4.jpg",
        category: "Брендинг, дизайн, розробка, оптимізування, просування",
        year: "2024",
        href: "/projects/nova",
    },
];

export default function Projects() {
    return (
        <section className="overflow-hidden py-20 text-white sm:py-24 lg:py-32">
            <div className="px-5 sm:px-8 lg:px-10">
                <header className="grid gap-10 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-5">
                        <h2 className="max-w-130 text-[clamp(3rem,6vw,6.5rem)] font-normal uppercase leading-[0.9] tracking-[-0.045em]">
                            Наші
                            <br />
                            проєкти
                        </h2>
                    </div>

                    <div className="lg:col-span-5">
                        <p className="max-w-115 text-sm uppercase leading-[1.4] text-white/75 sm:text-[15px]">
                            Кожен наш проєкт — це справжня подорож з відкриванням нових
                            можливостей. Ми налаштовані на зміцнення вашої позиції у бізнесі,
                            щоб забезпечити кращий результат.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 lg:col-span-2 lg:justify-end">
                        <button
                            className="projects-prev flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-black"
                            aria-label="Previous project"
                        >
                            <ArrowLeft size={17} strokeWidth={1.5} />
                        </button>

                        <button
                            className="projects-next flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-black"
                            aria-label="Next project"
                        >
                            <ArrowRight size={17} strokeWidth={1.5} />
                        </button>
                    </div>
                </header>

                <div className="mt-14 sm:mt-16 lg:mt-20">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".projects-prev",
                            nextEl: ".projects-next",
                        }}
                        spaceBetween={14}
                        slidesPerView={1.08}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.6,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 2.1,
                                spaceBetween: 18,
                            },
                            1024: {
                                slidesPerView: 2.6,
                                spaceBetween: 18,
                            },
                            1280: {
                                slidesPerView: 3.15,
                                spaceBetween: 20,
                            },
                        }}
                        className="overflow-visible"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.title}>
                                <article className="group">
                                    <Link href={project.href} className="block">
                                        <figure className="relative aspect-[1.55/1] overflow-hidden bg-neutral-900">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                                            />

                                            <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-90">
                                                <Plus size={15} strokeWidth={1.5} />
                                            </span>
                                        </figure>

                                        <div className="pt-4">
                                            <h3 className="text-lg font-semibold uppercase tracking-[-0.02em]">
                                                {project.title}
                                            </h3>

                                            <p className="mt-2 text-xs uppercase leading-[1.45] text-white/65">
                                                {project.category}
                                            </p>

                                            <span className="mt-1 block text-xs text-white/50">
                                                {project.year}
                                            </span>

                                            <div className="mt-5 flex items-center justify-between border-b border-white/40 pb-2">
                                                <span className="text-xs font-medium uppercase">
                                                    Переглянути проєкт
                                                </span>

                                                <ArrowUpRight
                                                    size={15}
                                                    strokeWidth={1.5}
                                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
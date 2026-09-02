"use client";

import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const testimonials = [
    {
        quote:
            "Working with the team was effortless from the first conversation. They understood the vision, challenged the right ideas, and delivered a product that felt far beyond what we originally imagined.",
        name: "James Carter",
        role: "Founder, North Studio",
    },
    {
        quote:
            "The balance between design and development was exactly what we needed. Every detail felt considered, communication stayed clear, and the final experience was fast, polished, and genuinely memorable.",
        name: "Olivia Martin",
        role: "Creative Director, Forma",
    },
    {
        quote:
            "They did not simply build what we asked for. They helped us rethink the product, simplify the experience, and create something that actually supports our business goals.",
        name: "Daniel Brooks",
        role: "CEO, Vertex Labs",
    },
];

export default function Testimonials() {
    return (
        <section className="overflow-hidden px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-18 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                        Testimonials
                    </p>

                    <h2 className="mt-5 text-[clamp(3rem,6vw,7rem)] uppercase leading-[0.88] tracking-[-0.055em]">
                        What they
                        <br />
                        say about
                        <br />
                        us
                    </h2>

                    <div className="mt-10 flex gap-3 lg:mt-16">
                        <button
                            className="testimonials-prev flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition hover:bg-white hover:text-black"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft size={17} strokeWidth={1.5} />
                        </button>

                        <button
                            className="testimonials-next flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition hover:bg-white hover:text-black"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight size={17} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                <div className="min-w-0">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".testimonials-prev",
                            nextEl: ".testimonials-next",
                        }}
                        slidesPerView={1}
                        spaceBetween={24}
                        speed={700}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.name}>
                                <article className="flex min-h-[420px] flex-col justify-between border-t border-white/20 pt-6 sm:min-h-[480px] lg:min-h-[520px]">
                                    <Quote size={34} strokeWidth={1} className="text-white/35" />

                                    <blockquote className="my-14 max-w-[900px] text-[clamp(1.8rem,3.4vw,4.3rem)] font-normal leading-[1.08] tracking-[-0.04em]">
                                        “{testimonial.quote}”
                                    </blockquote>

                                    <footer className="flex flex-col gap-2 border-t border-white/15 pt-5 sm:flex-row sm:items-end sm:justify-between">
                                        <div>
                                            <p className="text-sm font-medium uppercase tracking-[0.03em]">
                                                {testimonial.name}
                                            </p>

                                            <p className="mt-1 text-xs uppercase tracking-[0.05em] text-white/40">
                                                {testimonial.role}
                                            </p>
                                        </div>

                                        <span className="text-[11px] uppercase tracking-[0.08em] text-white/30">
                                            Client testimonial
                                        </span>
                                    </footer>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
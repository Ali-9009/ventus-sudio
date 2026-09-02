"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Check,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

const services = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Branding",
    "E-Commerce",
    "Other",
];

const budgets = [
    "$1K – $3K",
    "$3K – $7K",
    "$7K – $15K",
    "$15K+",
];

const steps = [
    {
        number: "01",
        title: "Tell us about it",
        text: "Share your idea, goals, references, and what you want to achieve.",
    },
    {
        number: "02",
        title: "We shape the direction",
        text: "We define the scope, creative direction, technical approach, and timeline.",
    },
    {
        number: "03",
        title: "We build",
        text: "Design, development, testing, refinement, and continuous communication.",
    },
    {
        number: "04",
        title: "We launch",
        text: "Final quality checks, deployment, handover, and post-launch support.",
    },
];

export default function ContactUs() {
    const [selectedService, setSelectedService] = useState("Web Development");
    const [selectedBudget, setSelectedBudget] = useState("$3K – $7K");

    return (
        <main className="overflow-hidden text-white">

            {/* HERO */}
            <section className="relative flex flex-col justify-between px-5 pb-8 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pb-10 lg:pt-40 xl:px-12">
                <div className="grid gap-12 lg:grid-cols-[58%_42%]">
                    <div>
                        <span className="text-[11px] uppercase tracking-[0.12em] text-white/45">
                            Contact / Start a project
                        </span>

                        <h1 className="mt-6 max-w-250 text-[clamp(4rem,9vw,10rem)] font-normal uppercase leading-[0.82] tracking-[-0.065em]">
                            Let&apos;s make
                            <br />
                            something
                            <br />
                            impossible
                        </h1>
                    </div>

                    <div className="flex items-end lg:justify-end">
                        <p className="max-w-117 text-xl leading-[1.35] tracking-tight text-white/80 sm:text-2xl lg:text-[28px]">
                            Have an idea worth building? Tell us what you&apos;re thinking and
                            we&apos;ll help turn it into something real, sharp, and memorable.
                        </p>
                    </div>
                </div>

                <div className="mt-16 flex items-end justify-between border-t border-white/15 pt-5 lg:mt-24">
                    <a
                        href="#contact-form"
                        className="group flex items-center gap-3 text-xs uppercase tracking-[0.05em]-wider"
                    >
                        <span>Start project</span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 transition group-hover:bg-white group-hover:text-black">
                            <ArrowDown size={15} />
                        </span>
                    </a>

                    <span className="hidden text-[11px] uppercase text-white/35 sm:block">
                        Scroll to begin
                    </span>
                </div>
            </section>

            {/* CONTACT STRIP */}
            <section className="border-y border-white/15">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                    <a
                        href="mailto:hello@example.com"
                        className="group border-b border-white/15 p-6 transition hover:bg-white hover:text-black sm:border-r lg:border-b-0"
                    >
                        <Mail size={19} strokeWidth={1.5} />

                        <p className="mt-12 text-[11px] uppercase tracking-[0.08em] opacity-50">
                            Email
                        </p>

                        <div className="mt-2 flex items-end justify-between gap-4">
                            <span className="text-lg sm:text-xl">hello@example.com</span>
                            <ArrowUpRight size={18} />
                        </div>
                    </a>

                    <a
                        href="tel:+1234567890"
                        className="group border-b border-white/15 p-6 transition hover:bg-white hover:text-black lg:border-b-0 lg:border-r"
                    >
                        <Phone size={19} strokeWidth={1.5} />

                        <p className="mt-12 text-[11px] uppercase tracking-[0.08em] opacity-50">
                            Phone
                        </p>

                        <div className="mt-2 flex items-end justify-between">
                            <span className="text-lg sm:text-xl">+1 234 567 890</span>
                            <ArrowUpRight size={18} />
                        </div>
                    </a>

                    <div className="border-b border-white/15 p-6 sm:border-r lg:border-b-0">
                        <MapPin size={19} strokeWidth={1.5} />

                        <p className="mt-12 text-[11px] uppercase tracking-[0.08em] text-white/45">
                            Based in
                        </p>

                        <p className="mt-2 text-lg sm:text-xl">
                            Worldwide / Remote
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-green-400">
                            <span className="h-1.5 w-1.5 rounded-full " />
                        </div>

                        <p className="mt-12 text-[11px] uppercase tracking-[0.08em] text-white/45">
                            Availability
                        </p>

                        <p className="mt-2 text-lg sm:text-xl">
                            Open for projects
                        </p>
                    </div>
                </div>
            </section>

            {/* FORM */}
            <section
                id="contact-form"
                className="overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 xl:px-12"
            >
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="min-w-0">
                        <span className="text-[11px] uppercase tracking-widest text-white/40">
                            Project enquiry
                        </span>

                        <h2 className="mt-5 text-[clamp(3rem,5vw,6rem)] font-normal uppercase leading-[0.9] tracking-tight">
                            Tell us
                            <br />
                            everything
                        </h2>

                        <p className="mt-8 max-w-90 text-base leading-[1.6] text-white/50">
                            Even if your idea is still rough, send it. We&apos;ll help you structure
                            it and figure out what comes next.
                        </p>
                    </div>

                    <form className="min-w-0 space-y-10">
                        <div className="grid gap-8 sm:grid-cols-2">
                            <div className="min-w-0">
                                <label
                                    htmlFor="name"
                                    className="text-[11px] uppercase tracking-[0.08em] text-white/45"
                                >
                                    Your name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="mt-3 w-full min-w-0 border-b border-white/25 bg-transparent pb-4 text-xl outline-none transition placeholder:text-white/20 focus:border-white"
                                />
                            </div>

                            <div className="min-w-0">
                                <label
                                    htmlFor="email"
                                    className="text-[11px] uppercase tracking-[0.08em] text-white/45"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    className="mt-3 w-full min-w-0 border-b border-white/25 bg-transparent pb-4 text-xl outline-none transition placeholder:text-white/20 focus:border-white"
                                />
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] uppercase tracking-[0.08em] text-white/45">
                                What do you need?
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {services.map((service) => (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => setSelectedService(service)}
                                        className={`max-w-full rounded-full border px-5 py-2.5 text-sm transition ${selectedService === service
                                            ? "border-white bg-white text-black"
                                            : "border-white/25 text-white hover:border-white/60"
                                            }`}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] uppercase tracking-[0.08em] text-white/45">
                                Estimated budget
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {budgets.map((budget) => (
                                    <button
                                        key={budget}
                                        type="button"
                                        onClick={() => setSelectedBudget(budget)}
                                        className={`rounded-full border px-5 py-2.5 text-sm transition ${selectedBudget === budget
                                            ? "border-white bg-white text-black"
                                            : "border-white/25 text-white hover:border-white/60"
                                            }`}
                                    >
                                        {budget}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="text-[11px] uppercase tracking-[0.08em] text-white/45"
                            >
                                Tell us about your project
                            </label>

                            <textarea
                                id="message"
                                rows={5}
                                placeholder="What are you building? What should it achieve?"
                                className="mt-3 w-full min-w-0 resize-none border-b border-white/25 bg-transparent pb-4 text-xl leading-[1.5] outline-none transition placeholder:text-white/20 focus:border-white"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group flex w-full min-w-0 items-center justify-between gap-4 border-t border-white/30 py-6 text-left text-xl uppercase tracking-[-0.025em] transition hover:px-3 sm:text-3xl"
                        >
                            <span className="min-w-0">Send project enquiry</span>

                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 transition group-hover:bg-white group-hover:text-black">
                                <ArrowRight size={20} />
                            </span>
                        </button>
                    </form>
                </div>
            </section>

            {/* PROCESS */}
            <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 xl:px-12">
                <div className="grid gap-12 lg:grid-cols-[36%_64%]">
                    <div>
                        <span className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                            The process
                        </span>

                        <h2 className="mt-5 text-[clamp(3rem,5vw,6rem)] font-normal uppercase leading-[0.9] tracking-tight">
                            Simple,
                            <br />
                            clear,
                            <br />
                            focused
                        </h2>
                    </div>

                    <div>
                        {steps.map((step) => (
                            <article
                                key={step.number}
                                className="grid gap-5 border-t border-white/20 py-8 sm:grid-cols-[70px_1fr_1fr]"
                            >
                                <span className="text-sm text-white/35">
                                    {step.number}
                                </span>

                                <h3 className="text-xl uppercase tracking-[-0.02em] sm:text-2xl">
                                    {step.title}
                                </h3>

                                <p className="max-w-90 text-sm leading-[1.65] text-white/50 sm:text-base">
                                    {step.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY WORK WITH US */}
            <section className="border-t border-white/15">
                <div className="grid lg:grid-cols-2">
                    <div className="min-h-[80px] border-b border-white/15 p-5 sm:p-8 lg:min-h-[650px] lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
                        <span className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                            Why us
                        </span>

                        <h2 className="mt-8 max-w-[620px] text-[clamp(3rem,5.5vw,6.5rem)] uppercase leading-[0.88] tracking-[-0.055em]">
                            No templates.
                            <br />
                            No boring.
                            <br />
                            No shortcuts.
                        </h2>
                    </div>

                    <div className="flex flex-col justify-end p-5 sm:p-8 lg:p-10 xl:p-12">
                        <div className="space-y-5">
                            {[
                                "Strategy before design",
                                "Design with purpose",
                                "Development that performs",
                                "Clear communication",
                                "Long-term thinking",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-between border-b border-white/15 pb-5"
                                >
                                    <span className="text-lg uppercase sm:text-xl">
                                        {item}
                                    </span>

                                    <Check size={18} strokeWidth={1.5} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40 xl:px-12">
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                    Still thinking?
                </p>

                <Link
                    href="mailto:hello@example.com"
                    className="group mt-7 block border-b border-white/30 pb-8"
                >
                    <div className="flex items-end justify-between gap-6">
                        <h2 className="text-[clamp(3.5rem,9vw,10rem)] font-normal uppercase leading-[0.8] tracking-[-0.065em]">
                            Say hello
                        </h2>

                        <ArrowUpRight
                            className="mb-2 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                            size={60}
                            strokeWidth={1}
                        />
                    </div>
                </Link>

                <div className="mt-6 flex flex-col gap-3 text-sm text-white/40 sm:flex-row sm:justify-between">
                    <span>Let&apos;s build something worth remembering.</span>
                    <span>hello@example.com</span>
                </div>
            </section>
        </main>
    );
}
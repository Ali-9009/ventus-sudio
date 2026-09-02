import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";

const values = [
    {
        number: "01",
        title: "Clarity",
        text: "We keep ideas, communication, and execution clear from the first conversation to the final launch.",
    },
    {
        number: "02",
        title: "Craft",
        text: "Every detail matters. We care about typography, interaction, performance, structure, and the final experience.",
    },
    {
        number: "03",
        title: "Progress",
        text: "We constantly explore better tools, better workflows, and better ways to solve digital problems.",
    },
];

const capabilities = [
    "Web Development",
    "Mobile Applications",
    "UI / UX Design",
    "Brand Identity",
    "E-Commerce",
    "Product Strategy",
];

const stats = [
    { value: "50+", label: "Projects delivered" },
    { value: "20+", label: "Clients worldwide" },
    { value: "4+", label: "Years of experience" },
    { value: "100%", label: "Built with intent" },
];

export default function AboutPage() {
    return (
        <main className="overflow-hidden  text-white">
            {/* HERO */}
            <section className="relative flex min-h-screen flex-col justify-between px-5 pb-8 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pb-10 lg:pt-40 xl:px-12">
                <div className="grid gap-12 lg:grid-cols-[60%_40%] lg:items-end">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.12em] text-white/40">
                            About us
                        </p>

                        <h1 className="mt-6 text-[clamp(4rem,10vw,11rem)] font-normal uppercase leading-[0.8] tracking-[-0.07em]">
                            We build
                            <br />
                            digital
                            <br />
                            momentum
                        </h1>
                    </div>

                    <div className="lg:pb-3">
                        <p className="max-w-[500px] text-xl leading-[1.35] tracking-[-0.025em] text-white/80 sm:text-2xl lg:text-[28px]">
                            We are a digital studio focused on creating bold, useful, and
                            high-performing experiences for brands that want to move forward.
                        </p>
                    </div>
                </div>

                <div className="mt-16 flex items-end justify-between border-t border-white/15 pt-5 lg:mt-24">
                    <a href="#story" className="group flex items-center gap-3 text-xs uppercase tracking-[0.05em]">
                        <span>Discover our story</span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition group-hover:bg-white group-hover:text-black">
                            <ArrowDown size={15} />
                        </span>
                    </a>

                    <span className="hidden text-[11px] uppercase tracking-[0.06em] text-white/30 sm:block">
                        Independent digital studio
                    </span>
                </div>
            </section>

            {/* STORY */}
            <section id="story" className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 xl:px-12">
                <div className="grid gap-14 lg:grid-cols-[38%_62%]">
                    <div>
                        <h2 className="text-[clamp(3rem,6vw,7rem)] uppercase leading-[0.88] tracking-[-0.055em]">
                            Our
                            <br />
                            story
                        </h2>
                    </div>

                    <div className="max-w-[760px]">
                        <p className="text-[24px] leading-[1.35] tracking-[-0.025em] text-white/90 sm:text-[28px] lg:text-[32px]">
                            We started with one simple idea: digital work should not only look
                            good. It should feel intentional, work flawlessly, and help a
                            business grow.
                        </p>

                        <div className="mt-10 grid gap-8 sm:grid-cols-2">
                            <p className="text-[15px] leading-[1.7] text-white/55">
                                What began as a small team driven by design and technology grew
                                into a studio capable of taking projects from early concept to
                                full production.
                            </p>

                            <p className="text-[15px] leading-[1.7] text-white/55">
                                Today, we combine strategy, design, development, and creative
                                thinking to build digital products with clarity and character.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LARGE IMAGE */}
            <section className="px-5 sm:px-8 lg:px-10 xl:px-12">
                <figure className="relative aspect-[16/9] overflow-hidden bg-neutral-900 sm:aspect-[16/7]">
                    <Image
                        src="/assets/about-main.jpg"
                        alt="Creative digital studio"
                        fill
                        className="object-cover grayscale"
                        sizes="100vw"
                        priority
                    />

                    <div className="absolute inset-0 /20" />
                </figure>
            </section>

            {/* STATISTICS */}
            <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-12">
                <div className="grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <article
                            key={stat.label}
                            className={`border-b border-white/15 py-8 sm:px-6 lg:py-10 ${index !== stats.length - 1 ? "lg:border-r" : ""
                                }`}
                        >
                            <p className="text-[clamp(3rem,5vw,6rem)] font-normal leading-none tracking-[-0.05em]">
                                {stat.value}
                            </p>

                            <p className="mt-4 text-xs uppercase tracking-[0.06em] text-white/45">
                                {stat.label}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 xl:px-12">
                <div className="grid gap-14 lg:grid-cols-[38%_62%]">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                            Philosophy
                        </p>

                        <h2 className="mt-5 text-[clamp(3rem,6vw,7rem)] uppercase leading-[0.88] tracking-[-0.055em]">
                            Built
                            <br />
                            with
                            <br />
                            purpose
                        </h2>
                    </div>

                    <div>
                        {values.map((value) => (
                            <article key={value.number} className="grid gap-5 border-t border-white/20 py-8 sm:grid-cols-[70px_1fr_1fr]">
                                <span className="text-sm text-white/35">{value.number}</span>

                                <h3 className="text-xl uppercase tracking-[-0.025em] sm:text-2xl">
                                    {value.title}
                                </h3>

                                <p className="max-w-[380px] text-[15px] leading-[1.65] text-white/50">
                                    {value.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPROACH */}
            <section className="border-t border-white/15">
                <div className="grid lg:grid-cols-2">
                    <div className="relative min-h-[460px] overflow-hidden border-b border-white/15 lg:min-h-[650px] lg:border-b-0 lg:border-r">
                        <Image
                            src="/assets/about-approach.jpg"
                            alt="Our creative process"
                            fill
                            className="object-cover grayscale"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 /25" />

                        <p className="absolute left-5 top-5 text-[11px] uppercase tracking-[0.1em] sm:left-8 sm:top-8 lg:left-10 lg:top-10">
                            How we think
                        </p>
                    </div>

                    <div className="flex flex-col justify-between p-5 py-16 sm:p-8 sm:py-20 lg:p-10 xl:p-12">
                        <div>
                            <h2 className="text-[clamp(3rem,5vw,6rem)] uppercase leading-[0.9] tracking-[-0.05em]">
                                Design
                                <br />
                                meets
                                <br />
                                technology
                            </h2>

                            <p className="mt-8 max-w-[500px] text-lg leading-[1.55] text-white/55">
                                We do not separate design from development. Both disciplines
                                shape the final product, so they need to evolve together from
                                day one.
                            </p>
                        </div>

                        <Link href="/contact-us" className="group mt-14 flex items-center justify-between border-b border-white/30 pb-3 text-sm uppercase">
                            <span>Start a project with us</span>
                            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className="overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 xl:px-12">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                            Capabilities
                        </p>

                        <h2 className="mt-5 text-[clamp(3rem,6vw,7rem)] uppercase leading-[0.9] tracking-[-0.055em]">
                            What we
                            <br />
                            do best
                        </h2>
                    </div>

                    <div className="min-w-0">
                        {capabilities.map((item, index) => (
                            <div
                                key={item}
                                className="group flex min-w-0 items-center justify-between gap-5 border-t border-white/20 py-5 sm:py-6"
                            >
                                <div className="flex min-w-0 items-center gap-4 sm:gap-6">
                                    <span className="shrink-0 text-xs text-white/30">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="min-w-0 text-lg uppercase tracking-[-0.02em] sm:text-2xl lg:text-3xl">
                                        {item}
                                    </span>
                                </div>

                                <ArrowRight
                                    size={20}
                                    strokeWidth={1.3}
                                    className="shrink-0 transition-transform group-hover:translate-x-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRINCIPLES */}
            <section className="border-y border-white/15">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        "Think before we build",
                        "Keep communication clear",
                        "Design every detail",
                        "Ship work we're proud of",
                    ].map((item) => (
                        <article key={item} className="border-b border-white/15 p-6 sm:border-r sm:p-8 lg:border-b-0">
                            <Check size={19} strokeWidth={1.4} />

                            <p className="mt-20 max-w-[250px] text-xl uppercase leading-[1.2] tracking-[-0.025em]">
                                {item}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40 xl:px-12">
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                    Have something in mind?
                </p>

                <Link href="/contact-us" className="group mt-7 block border-b border-white/30 pb-8">
                    <div className="flex items-end justify-between gap-6">
                        <h2 className="text-[clamp(3.5rem,9vw,10rem)] uppercase leading-[0.8] tracking-[-0.065em]">
                            Let&apos;s talk
                        </h2>

                        <ArrowUpRight
                            size={60}
                            strokeWidth={1}
                            className="mb-2 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                        />
                    </div>
                </Link>

                <div className="mt-6 flex flex-col gap-2 text-sm text-white/40 sm:flex-row sm:justify-between">
                    <span>Ideas become better when we build them together.</span>
                    <span>Start your project today.</span>
                </div>
            </section>
        </main>
    );
}
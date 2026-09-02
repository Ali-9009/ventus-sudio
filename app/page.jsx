import { ArrowDown, ArrowDownLeft, MoveDown, MoveRight } from "lucide-react";

import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 /45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.3)_55%,rgba(0,0,0,0.9)_100%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/70" />

        <div className="relative z-10 flex min-h-screen flex-col px-5 py-6 sm:px-8 lg:px-10">
          <div className="flex flex-1 items-start pt-[14vh] sm:pt-[16vh]">
            <h1 className="max-w-5xl text-[clamp(2.4rem,5.2vw,5rem)] font-normal uppercase leading-[0.95] tracking-[-0.035em]">
              Передові рішення для
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              сучасного бізнесу
            </h1>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <a href="#next-section" className="group flex w-fit items-center gap-4 text-xs uppercase">
              <span>Гортай нижче</span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-y-1"><MoveDown /></span>
            </a>

            <div className="max-w-75 md:justify-self-end">
              <p className="text-sm uppercase">
                Ventus Studio працює над створенням інноваційних рішень у сфері інформаційних технологій.
              </p>

              <a href="#contact" className="group mt-5 flex w-full items-center justify-between border-b border-white/70 pb-2 text-xs uppercase">
                <span>Будьмо на зв&apos;язку</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1"><MoveRight /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section className="text-white">
        <div className="grid px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[44%_56%] lg:px-10 lg:py-20 xl:px-12">

          {/* LEFT */}
          <div className="flex flex-col lg:justify-between">
            <h2 className="text-[52px] font-normal uppercase leading-[0.9] tracking-[-0.045em] sm:text-[70px] lg:text-[86px] xl:text-[94px]">
              Про нас
            </h2>

            <div className="mt-12 hidden lg:block">
              <ArrowDownLeft size={48} strokeWidth={1} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="mt-12 lg:mt-0 lg:pt-1">
            <div>

              <p className="text-[20px] font-normal leading-tight tracking-tight sm:text-[22px] lg:text-[24px] xl:text-[26px]">
                Ventus Studio була заснована в 2020 році двома ентузіастами у сфері
                IT бізнесу, Андрієм і Євгеном. Починаючи з невеличкого офісу, ми
                зосередилися на створенні програмного забезпечення високої якості
                та наданні професіональних послуг для своїх клієнтів.
              </p>

              <p className="mt-8 max-w-142 text-[14px] leading-[1.55] text-white/65 sm:text-[15px]">
                Компанія швидко збільшила свою команду, запрошуючи до співпраці
                талановитих розробників, дизайнерів та інженерів. Завдяки цьому
                розширенню ми змогли розширити свій спектр послуг та вийти на нові
                ринки.
              </p>

              <figure className="relative mt-8 aspect-[3.45/1] w-full overflow-hidden bg-neutral-900">
                <Image
                  src="/assets/about-wave.jpg"
                  alt="Abstract Ventus Studio visual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 660px"
                />
              </figure>

              <div className="mt-5 flex lg:justify-end">
                <p className="max-w-75 text-[13px] leading-[1.55] text-white/60 sm:text-[14px]">
                  З часом Ventus Studio здобула репутацію надійного та професійного
                  партнера у сфері інформаційних технологій.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="py-20 text-white sm:py-14 lg:py-18">
        <div className="grid items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 xl:px-12">
          <div className="flex justify-center">
            <div className="">
              <Image
                src="/assets/services-cube.png"
                alt="Abstract 3D glass cube"
                width={600}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div>
            <p className="text-[24px] font-normal uppercase leading-[1.35] tracking-[-0.02em] sm:text-[28px] lg:text-[30px]">
              Через свою пристрасть до досконалості ми не зупиняємося на
              досягнутому, а тільки нарощуємо оберти. Ми продовжуємо залучати
              талановитих фахівців та працювати над новими проєктами, щоб
              продовжувати зберігати свою вагому позицію в галузі інформаційних
              технологій.
            </p>

            <Link
              href="#"
              className="group mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.04em] text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 transition duration-300 group-hover:bg-white group-hover:text-black">
                <ArrowDown size={14} strokeWidth={1.5} />
              </span>

              <span>Переглянути сервіси</span>
            </Link>
          </div>
        </div>
      </section>

      <Team />

      <Services />

      <Testimonials />
    </>
  );
}



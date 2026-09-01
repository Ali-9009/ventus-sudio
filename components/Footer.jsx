import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <div className="relative min-h-140 px-5 py-8 sm:min-h-105 sm:px-8 lg:min-h-130 lg:px-10 xl:px-12">

        {/* Small left text */}
        <p className="max-w-45 text-[10px] uppercase leading-[1.4] text-white/65 sm:text-[11px]">
          Сподобалося те, що побачили?
          <br />
          Зв&apos;яжіться з нами і ми разом
          <br />
          розпочнемо ваш проєкт
        </p>

        {/* Right CTA */}
        <div className="mt-10 flex justify-end sm:mt-0 sm:absolute sm:right-8 sm:top-8 lg:right-10 xl:right-12">
          <Link
            href="#contact"
            className="group text-right text-[28px] font-normal uppercase leading-[1.15] tracking-[-0.03em] sm:text-[34px] lg:text-[44px]"
          >
            Розпочніть
            <br />
            свій проєкт
            <br />
            <span className="inline-flex items-center border-b border-white pb-1">
              зараз
            </span>
          </Link>
        </div>

        {/* Center visual */}
        <div className="pointer-events-none absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/assets/footer-object.png"
            alt=""
            width={420}
            height={420}
            className="h-auto w-117.5 object-contain sm:w-105 lg:w-140"
          />
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-5 bottom-8 sm:inset-x-8 lg:inset-x-10 xl:inset-x-12">
          <div className="flex flex-col gap-8 border-b border-white/50 pb-4 sm:flex-row sm:items-end sm:justify-between">

            <a
              href="mailto:mail@example.com"
              className="group flex items-end gap-4 text-[34px] font-normal uppercase leading-[0.95] tracking-[-0.04em] sm:text-[48px] lg:text-[62px] xl:text-[72px]"
            >
              <span>
                Ventus Studio
                <br />
                @mail.com
              </span>

              <ArrowRight
                size={54}
                strokeWidth={1}
                className="mb-1 shrink-0 transition-transform duration-300 group-hover:translate-x-2"
              />
            </a>

            <Link
              href="/privacy-policy"
              className="text-[9px] uppercase tracking-wide text-white/50 transition hover:text-white sm:mb-1"
            >
              Політика конфіденційності
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
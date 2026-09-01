"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Веб-розробка",
        description:
            "Розробка та підтримка веб-сайтів, веб-додатків, електронних магазинів і т.д.",
        image: "/assets/service-web.png",
    },
    {
        id: 2,
        title: "Мобільна розробка",
        description:
            "Створюємо сучасні мобільні застосунки для iOS та Android.",
        image: "/assets/service-web.png",
    },
    {
        id: 3,
        title: "UX/UI дизайн",
        description:
            "Проєктуємо зрозумілі інтерфейси та цифровий досвід для сучасних продуктів.",
        image: "/assets/service-web.png",
    },
    {
        id: 4,
        title: "Тестування та QA",
        description:
            "Перевіряємо стабільність, продуктивність та якість цифрових продуктів.",
        image: "/assets/service-web.png",
    },
    {
        id: 5,
        title: "Blockchain",
        description:
            "Розробляємо технологічні рішення на основі blockchain.",
        image: "/assets/service-web.png",
    },
    {
        id: 6,
        title: "AR/VR розробка",
        description:
            "Створюємо інтерактивні AR та VR рішення для бізнесу.",
        image: "/assets/service-web.png",
    },
];

export default function Services() {
    const [active, setActive] = useState(0);

    return (
        <section className="overflow-hidden py-20 text-white sm:py-24 lg:py-28">
            <div className="px-5 sm:px-8 lg:px-10 xl:px-12">

                {/* TOP */}
                <div className="grid gap-8 lg:grid-cols-[38%_62%]">
                    <h2 className="text-[52px] font-normal uppercase leading-none tracking-[-0.04em] sm:text-[68px] lg:text-[76px]">
                        Послуги
                    </h2>

                    <p className="max-w-155 text-[15px] leading-[1.45] text-white/80 sm:text-base lg:text-[17px]">
                        Наша мета — впроваджувати технологічні розробки, які ефективно
                        допомагають нашим клієнтам підвищувати їх технічність,
                        продуктивність та досягати своїх цілей. Ми маємо команду
                        висококваліфікованих розробників, дизайнерів та професіоналів з
                        інших галузей, які працюють разом, щоб втілити великі ідеї
                        реальність.
                    </p>
                </div>

                {/* BOTTOM */}
                <div className="mt-16 grid items-start gap-12 lg:mt-20 lg:grid-cols-[38%_62%]">

                    {/* SERVICES */}
                    <div>
                        <div className="mb-2 flex items-center gap-3 text-xs text-white/55">
                            <span>1</span>
                            <span className="h-px w-5 bg-white/40" />
                            <span>{services.length}</span>
                        </div>

                        <div className="lg:pl-26">
                            {services.map((service, id) => {
                                const isActive = active === id;

                                return (
                                    <button
                                        key={service.title}
                                        type="button"
                                        onClick={() => setActive(id)}
                                        className="w-full border-b border-white/35 py-3 text-left"
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className="text-[16px] font-normal uppercase leading-tight sm:text-[17px]">
                                                {service.title}
                                            </h3>

                                            {isActive ? (
                                                <Minus size={18} strokeWidth={1} />
                                            ) : (
                                                <Plus size={18} strokeWidth={1} />
                                            )}
                                        </div>

                                        <div className={`grid transition-all duration-500 ${isActive ? "grid-rows-[1fr] pt-2" : "grid-rows-[0fr]"}`}>
                                            <div className="overflow-hidden">
                                                <p className="max-w-82 text-[12px] leading-[1.45] text-white/55 sm:text-[13px]">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* VISUAL */}
                    <div className="relative flex min-h-85 items-center justify-center sm:min-h-107 lg:-mt-10 lg:min-h-130">
                        {services.map((service, id) => (
                            <Image
                                key={service.image}
                                src={service.image}
                                alt={service.title}
                                width={700}
                                height={700}
                                className={`absolute h-auto w-[75%] max-w-155 object-contain transition-all duration-700 sm:w-[65%] lg:w-[70%] ${active === id
                                        ? "scale-100 opacity-100"
                                        : "pointer-events-none scale-90 opacity-0"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
export const metadata = {
    title: "Privacy Policy | Ali Portfolio",
    description: "Privacy Policy",
};

const sections = [
    {
        title: "1. Information We Collect",
        text: `We may collect personal information that you voluntarily provide when you contact us, submit a form, request information, or communicate with us. This may include your name, email address, phone number, company details, and any information included in your message.`,
    },
    {
        title: "2. How We Use Your Information",
        text: `We use the information we collect to respond to enquiries, provide requested services, improve our website, communicate with users, maintain website security, and understand how visitors interact with our website.`,
    },
    {
        title: "3. Cookies and Analytics",
        text: `Our website may use cookies and analytics technologies to understand website usage and improve performance. These technologies may collect information such as browser type, device information, visited pages, approximate location, and interaction data.`,
    },
    {
        title: "4. Sharing of Information",
        text: `We do not sell or rent your personal information. Information may only be shared with trusted service providers where necessary to operate the website, provide services, comply with legal obligations, or protect our rights.`,
    },
    {
        title: "5. Data Security",
        text: `We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration, or disclosure. However, no internet-based system can be guaranteed to be completely secure.`,
    },
    {
        title: "6. Third-Party Services",
        text: `Our website may contain links to third-party websites or use third-party services. We are not responsible for the privacy practices or content of those external websites and encourage you to review their privacy policies separately.`,
    },
    {
        title: "7. Data Retention",
        text: `We retain personal information only for as long as necessary to fulfil the purposes described in this policy, comply with legal requirements, resolve disputes, and maintain appropriate business records.`,
    },
    {
        title: "8. Your Rights",
        text: `Depending on your location, you may have rights regarding your personal information, including the right to request access, correction, deletion, restriction, or objection to certain processing activities.`,
    },
    {
        title: "9. Changes to This Policy",
        text: `We may update this Privacy Policy from time to time. Any updates will be published on this page with the revised effective date.`,
    },
    {
        title: "10. Contact",
        text: `If you have any questions about this Privacy Policy or how your information is handled, please contact us using the contact details available on this website.`,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className=" text-white">
            <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40 xl:px-12">
                <div className="grid gap-12 lg:grid-cols-[42%_58%] lg:gap-16">
                    <div>
                        <p className="mb-5 text-[11px] uppercase tracking-[0.08em] text-white/50">
                            Legal
                        </p>

                        <h1 className="max-w-[620px] text-[clamp(3.25rem,7vw,7.5rem)] font-normal uppercase leading-[0.88] tracking-[-0.055em]">
                            Privacy
                            <br />
                            Policy
                        </h1>
                    </div>

                    <div className="max-w-[700px] lg:pt-2">
                        <p className="text-lg leading-[1.5] tracking-[-0.02em] text-white/85 sm:text-xl lg:text-[22px]">
                            This Privacy Policy explains how information is collected, used,
                            stored, and protected when you use this website.
                        </p>

                        <p className="mt-6 text-sm leading-[1.7] text-white/50">
                            Effective date: September 2026
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-white/15 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
                <div className="grid gap-12 lg:grid-cols-[42%_58%] lg:gap-16">
                    <aside className="hidden lg:block">
                        <p className="sticky top-28 max-w-[260px] text-sm uppercase leading-[1.5] text-white/45">
                            Please read this policy carefully to understand how your
                            information is handled.
                        </p>
                    </aside>

                    <div className="max-w-[760px]">
                        {sections.map((section, index) => (
                            <article
                                key={section.title}
                                className={`${index !== 0 ? "border-t border-white/15 pt-8 sm:pt-10" : ""} ${index !== sections.length - 1 ? "mb-8 sm:mb-10" : ""}`}
                            >
                                <h2 className="text-xl font-medium uppercase tracking-[-0.025em] sm:text-2xl">
                                    {section.title}
                                </h2>

                                <p className="mt-4 text-[15px] leading-[1.75] text-white/60 sm:text-base">
                                    {section.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
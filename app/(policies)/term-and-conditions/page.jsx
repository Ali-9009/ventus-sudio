export const metadata = {
    title: "Terms & Conditions | Ali Portfolio",
    description: "Terms and Conditions",
};

const sections = [
    {
        title: "1. Acceptance of Terms",
        text: `By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use this website.`,
    },
    {
        title: "2. Use of the Website",
        text: `You may use this website only for lawful purposes and in a manner that does not infringe the rights of others, restrict their use of the website, or interfere with the website's operation or security.`,
    },
    {
        title: "3. Intellectual Property",
        text: `All content available on this website, including text, graphics, branding, layouts, designs, images, videos, code, and other materials, is protected by applicable intellectual property laws unless otherwise stated. You may not copy, reproduce, distribute, modify, or commercially exploit this content without prior permission.`,
    },
    {
        title: "4. Portfolio and Project Content",
        text: `Project examples, case studies, designs, concepts, and other portfolio materials are provided for informational and presentation purposes. Certain trademarks, product names, or third-party assets may remain the property of their respective owners.`,
    },
    {
        title: "5. Accuracy of Information",
        text: `We make reasonable efforts to keep the information on this website accurate and up to date. However, we do not guarantee that all content will always be complete, current, accurate, or free from errors.`,
    },
    {
        title: "6. Third-Party Links",
        text: `This website may include links to third-party websites or services. These links are provided for convenience only. We do not control or take responsibility for the content, security, availability, or practices of third-party websites.`,
    },
    {
        title: "7. Limitation of Liability",
        text: `To the fullest extent permitted by law, we will not be liable for any direct, indirect, incidental, consequential, or other loss arising from the use of, or inability to use, this website or any information provided through it.`,
    },
    {
        title: "8. Availability",
        text: `We may modify, suspend, restrict, or discontinue any part of this website at any time without prior notice. We do not guarantee that the website will always be available, uninterrupted, secure, or free from technical issues.`,
    },
    {
        title: "9. Privacy",
        text: `Your use of this website is also subject to our Privacy Policy, which explains how personal information may be collected, used, and protected.`,
    },
    {
        title: "10. Changes to These Terms",
        text: `We may update these Terms and Conditions from time to time. Any changes will become effective when the updated terms are published on this page.`,
    },
    {
        title: "11. Governing Law",
        text: `These Terms and Conditions will be governed by and interpreted in accordance with the laws applicable to the website owner, unless otherwise required by applicable law.`,
    },
    {
        title: "12. Contact",
        text: `If you have any questions about these Terms and Conditions, please contact us using the contact information available on this website.`,
    },
];

export default function TermsConditionsPage() {
    return (
        <main className=" text-white">
            <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40 xl:px-12">
                <div className="grid gap-12 lg:grid-cols-[42%_58%] lg:gap-16">
                    <div>
                        <p className="mb-5 text-[11px] uppercase tracking-[0.08em] text-white/50">
                            Legal
                        </p>

                        <h1 className="text-[clamp(3.25rem,7vw,7.5rem)] font-normal uppercase leading-[0.88] tracking-[-0.055em]">
                            Terms &
                            <br />
                            Conditions
                        </h1>
                    </div>

                    <div className="max-w-[700px] lg:pt-2">
                        <p className="text-lg leading-[1.5] tracking-[-0.02em] text-white/85 sm:text-xl lg:text-[22px]">
                            These Terms and Conditions govern your access to and use of this
                            website and its content.
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
                        <p className="sticky top-28 max-w-[280px] text-sm uppercase leading-[1.5] text-white/45">
                            Please review these terms carefully before using this website.
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
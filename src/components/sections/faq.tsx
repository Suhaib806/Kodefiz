import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Kodefiz provide?",
    answer:
      "We offer custom software development, web development, mobile app development, UI/UX design, AI & automation, WordPress development, SEO, digital marketing, and dedicated development teams.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with startups, SMEs, and enterprises across North America, Europe, the Middle East, Australia, and Asia. Our team collaborates seamlessly across different time zones.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Every project is different. Small business websites usually take 2–6 weeks, while custom applications and enterprise platforms typically require 2–6 months depending on complexity.",
  },
  {
    question: "Can you work with our existing development team?",
    answer:
      "Absolutely. Our developers can integrate into your existing team, follow your workflows, participate in daily standups, and collaborate using your preferred project management tools.",
  },
  {
    question: "What technologies do you specialise in?",
    answer:
      "Our expertise includes React, Next.js, Node.js, Laravel, WordPress, Shopify, Flutter, React Native, Python, AI automation, cloud solutions, and modern JavaScript frameworks.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes. We provide long-term maintenance, security updates, performance optimisation, bug fixes, feature enhancements, and dedicated technical support after launch.",
  },
  {
    question: "Can you help us scale our development team?",
    answer:
      "Yes. We provide dedicated developers, designers, QA engineers, project managers, and complete remote teams that work as an extension of your business.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply book a discovery call. We'll understand your business goals, discuss your requirements, recommend the best solution, and provide a detailed proposal with timelines and costs.",
  },
];

export default function HomeFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-xs text-[#F76F01] font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#132F48] leading-tight">
            Everything you need
            <br />
            to know
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-8">
            Find answers to the most common questions about working with
            Kodefiz. If you need more information, our team is always happy
            to help.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={index}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  open
                    ? "border-[#F76F01] shadow-xl"
                    : "border-gray-200 hover:border-[#F76F01]/50"
                }`}
              >
                <button
                  onClick={() => setActive(open ? -1 : index)}
                  className="w-full flex items-center justify-between text-left px-8 py-7"
                >
                  <h3 className="text-lg font-semibold text-[#132F48] pr-6">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-6 h-6 text-[#F76F01] transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 text-gray-600 leading-8">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

const FAQS = [
  {
    question: "What is AutoMate?",
    answer:
      "AutoMate is an offline, AI-powered in-car assistant designed for Vietnamese drivers. It works 100% offline, is activated by a physical mascot robot key, and integrates deeply with your car’s hardware – making driving safer and smarter.",
  },
  {
    question: "How does the robot key work?",
    answer:
      "The robot key is a unique physical mascot that plugs into the system to activate AutoMate, providing both security and personalization. Remove the key, and your system is locked.",
  },
  {
    question: "Do I need the Internet to use AutoMate?",
    answer:
      "No! All features, including voice control and car hardware integration, work completely offline – even with no Wi-Fi or 4G.",
  },
  {
    question: "Which car models are compatible?",
    answer:
      "AutoMate supports most cars using CAN, I2C, or UART protocols. Contact us for specific compatibility.",
  },
  {
    question: "How do I install AutoMate?",
    answer:
      "Installation is simple: plug the main device into your car’s OBD port, connect the robot key, and follow a quick setup. No permanent modifications are needed.",
  },
  {
    question: "What can I control with AutoMate?",
    answer:
      "You can control car lighting, air conditioning, and monitor fuel via voice or the robot key. More features are being added regularly.",
  },
  {
    question: "How is my data protected?",
    answer:
      "All data stays in your car – nothing is sent to the cloud. Only you control your data, and physical key activation ensures security.",
  },
  {
    question: "How can I pre-order or contact the team?",
    answer:
      "Simply click the 'Pre-Order' or 'Contact' button in the menu. We’ll get back to you as soon as possible.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <Header />
      {/* HERO */}
      <section
        className="relative custom-stars-bg py-20 px-4 flex flex-col items-center min-h-[55vh] overflow-x-hidden"
        style={{
          background:
            "radial-gradient(ellipse 120% 70% at 60% 10%, #24305c 0%, #181e2f 80%)",
        }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="mb-4">
            <Image
              src="/images/robot-key-feature.png"
              alt="FAQ mascot"
              width={64}
              height={64}
              className="mx-auto rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow text-center">
            <span className="text-blue-400">Got questions?</span> <br />
            <span className="text-yellow-300">We’ve got answers!</span>
          </h1>
          <p className="text-base md:text-lg text-blue-100 text-center max-w-xl mt-4 font-medium">
            Everything you need to know about <b>AutoMate</b> – features,
            installation, compatibility, security, and more. If you have other
            questions, feel free to{" "}
            <a
              href="/contact"
              className="underline text-yellow-300 hover:text-yellow-400"
            >
              contact us
            </a>
            !
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-16 bg-gradient-to-b from-white via-blue-50/40 to-gray-50 min-h-[50vh]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white/95 rounded-3xl shadow-2xl border border-blue-50 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center tracking-tight">
              Frequently Asked Questions
            </h2>
            <ul className="space-y-4">
              {FAQS.map((faq, idx) => (
                <li
                  key={idx}
                  className="rounded-2xl bg-gradient-to-r from-blue-50/60 to-white/80 border border-blue-100 hover:shadow-xl transition"
                >
                  <button
                    className="w-full text-left flex items-center justify-between gap-2 px-6 py-5 focus:outline-none"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    aria-expanded={openIdx === idx}
                  >
                    <span className="font-semibold text-[1.08rem] text-blue-900">
                      {faq.question}
                    </span>
                    <span
                      className={`text-2xl transition ${
                        openIdx === idx
                          ? "rotate-45 text-yellow-400"
                          : "rotate-0 text-blue-400"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIdx === idx
                        ? "max-h-[240px] opacity-100 px-6 pb-6"
                        : "max-h-0 opacity-0 px-6"
                    }`}
                  >
                    <p className="text-gray-700 text-[1.06rem] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

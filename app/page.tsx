"use client";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  { src: "/images/xmas.png", alt: "AutoMate Robot Halloween" },
  { src: "/images/tet.png", alt: "AutoMate Robot Racing" },
  { src: "/images/F1.png", alt: "AutoMate Robot Tet" },
  { src: "/images/halo.png", alt: "AutoMate Robot Xmas" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Slideshow effect with fade
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        setFade(true);
      }, 300);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative py-16 pt-32 px-4 text-white flex flex-col items-center custom-stars-bg select-none">
        <div className="flex flex-col md:flex-row items-center max-w-7xl w-full">
          <div className="flex-1 text-center md:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-2 font-[Inter] leading-tight drop-shadow-lg">
              AutoMate – Your Offline <br className="hidden md:block" /> In-Car
              Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl font-[Inter] leading-snug">
              Enhance your driving safety and style with{" "}
              <span className="font-bold text-yellow-300">
                100% offline voice control
              </span>
              ,{" "}
              <span className="font-bold text-cyan-200">
                robot-key activation
              </span>
              , and seamless vehicle integration.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="/preorder"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-xl shadow-lg text-lg transition"
              >
                Pre-order Now
              </a>
              <a
                href="/product"
                className="border border-blue-200 text-white hover:bg-blue-600 hover:text-yellow-300 font-semibold py-3 px-8 rounded-xl transition text-lg"
              >
                View Product
              </a>
            </div>
            {/* Slogan signature */}
            <span className="block mt-5 italic text-lg md:text-xl text-blue-200 font-semibold tracking-wide md:text-left text-center drop-shadow">
              Make your drive, make your style.
            </span>
          </div>
          {/* HERO IMAGE SLIDESHOW */}
          <div className="flex-1 flex justify-center mt-10 md:mt-0 relative">
            <div className="w-[420px] h-[280px] md:w-[480px] md:h-[330px] rounded-3xl shadow-2xl bg-white/5 flex items-center justify-center overflow-hidden transition-all duration-500">
              <Image
                src={HERO_IMAGES[index].src}
                alt={HERO_IMAGES[index].alt}
                width={440}
                height={260}
                className={`object-contain transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
            </div>
            {/* Indicator dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {HERO_IMAGES.map((img, i) => (
                <span
                  key={img.src}
                  className={`w-3 h-3 rounded-full ${
                    index === i
                      ? "bg-yellow-400 shadow-lg"
                      : "bg-blue-200 opacity-60"
                  } inline-block transition`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="flex flex-col items-center mb-12">
            <span className="text-7xl md:text-8xl mb-2 text-yellow-400 drop-shadow-lg animate-bounce">
              ⚠️
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-800 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-2">
              Driving Challenges We Solve
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full mb-4 mx-auto" />
            <p className="text-gray-600 text-xl text-center max-w-2xl">
              More than just voice control — AutoMate tackles the real dangers
              and frustrations of modern driving.
            </p>
          </div>
          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-yellow-200/40 hover:border-yellow-400/80 transition p-8 flex flex-col items-center group">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full mb-6 shadow-lg group-hover:scale-105 group-hover:shadow-yellow-200 transition">
                <span className="text-5xl drop-shadow-[0_1px_3px_#ffd70077]">
                  🚗
                </span>
              </div>
              <h3 className="font-extrabold text-2xl mb-3 text-gray-900 text-center drop-shadow-sm">
                Distraction from in-car systems
              </h3>
              <p className="text-gray-700 text-lg text-center mb-3">
                Touchscreens & complex menus overload drivers, raising accident
                risk and stress behind the wheel.
              </p>
              <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 font-bold text-xs tracking-wide shadow-md mt-2">
                #1 cause of distraction
              </span>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-200/40 hover:border-blue-400/80 transition p-8 flex flex-col items-center group">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 rounded-full mb-6 shadow-lg group-hover:scale-105 group-hover:shadow-blue-200 transition">
                <span className="text-5xl drop-shadow-[0_1px_3px_#60a5fa77]">
                  📶
                </span>
              </div>
              <h3 className="font-extrabold text-2xl mb-3 text-gray-900 text-center drop-shadow-sm">
                Unreliable voice assistants in the market
              </h3>
              <p className="text-gray-700 text-lg text-center mb-3">
                Internet drops = no help. Most assistants fail with accents or
                in tunnels, leaving you stranded.
              </p>
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs tracking-wide shadow-md mt-2">
                Offline — Always On
              </span>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-yellow-200/40 hover:border-orange-400/80 transition p-8 flex flex-col items-center group">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full mb-6 shadow-lg group-hover:scale-105 group-hover:shadow-orange-100 transition">
                <span className="text-5xl drop-shadow-[0_1px_3px_#f59e4277]">
                  ⚠️
                </span>
              </div>
              <h3 className="font-extrabold text-2xl mb-3 text-gray-900 text-center drop-shadow-sm">
                Safety & legal risks from phone use
              </h3>
              <p className="text-gray-700 text-lg text-center mb-3">
                Using a phone on the road can mean huge fines — and tragedies no
                tech can undo.
              </p>
              <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 font-bold text-xs tracking-wide shadow-md mt-2">
                Stay Safe & Legal
              </span>
            </div>
          </div>
          {/* Tagline solution dưới cùng */}
          <div className="text-center mt-14">
            <p className="text-2xl md:text-3xl font-extrabold text-blue-800 drop-shadow-sm">
              AutoMate empowers a new era of safe, focused, and intuitive
              driving — no signal required.
            </p>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-800 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-2">
              Key Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-yellow-300 rounded-full mb-4" />
            <p className="text-gray-600 text-xl text-center max-w-2xl">
              AutoMate brings powerful, intuitive technology to every driver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-100/40 hover:border-blue-400/70 transition p-8 flex flex-col items-center group">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 rounded-full mb-6 shadow group-hover:scale-110 transition">
                <span className="text-5xl md:text-6xl">🎤</span>
              </div>
              <h4 className="font-bold text-2xl md:text-2xl mb-2 text-gray-900 text-center">
                100% Offline Voice Control
              </h4>
              <p className="text-gray-700 text-lg text-center">
                No internet needed. Always responsive, anywhere, anytime.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-yellow-100/40 hover:border-yellow-400/70 transition p-8 flex flex-col items-center group">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full mb-6 shadow group-hover:scale-110 transition">
                <span className="text-5xl md:text-6xl">🔑</span>
              </div>
              <h4 className="font-bold text-2xl md:text-2xl mb-2 text-gray-900 text-center">
                Robot Key Activation
              </h4>
              <p className="text-gray-700 text-lg text-center">
                Unique physical robot key for secure, fun, and smart car
                interaction.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-cyan-100/40 hover:border-cyan-400/70 transition p-8 flex flex-col items-center group">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-cyan-100 to-cyan-300 rounded-full mb-6 shadow group-hover:scale-110 transition">
                <span className="text-5xl md:text-6xl">🚙</span>
              </div>
              <h4 className="font-bold text-2xl md:text-2xl mb-2 text-gray-900 text-center">
                Deep Hardware Integration
              </h4>
              <p className="text-gray-700 text-lg text-center">
                Control vehicle lighting, AC, and more with seamless
                integration.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-pink-100/40 hover:border-pink-300/70 transition p-8 flex flex-col items-center group">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-300 rounded-full mb-6 shadow group-hover:scale-110 transition">
                <span className="text-5xl md:text-6xl">⚡️</span>
              </div>
              <h4 className="font-bold text-2xl md:text-2xl mb-2 text-gray-900 text-center">
                Easy Installation
              </h4>
              <p className="text-gray-700 text-lg text-center">
                Works with most vehicles. Plug & play, no tools required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video / Real Product */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
            {/* Video */}
            <div className="flex-1 flex justify-center">
              <div className="rounded-2xl shadow-xl border-2 border-gradient-to-br from-yellow-300 via-blue-300 to-blue-500 bg-gradient-to-br from-gray-50 to-gray-100 p-2 group">
                <video
                  src="/videos/videoaction.mp4"
                  controls
                  poster="/images/m1.jpg"
                  className="rounded-xl w-[320px] sm:w-[360px] md:w-[380px] lg:w-[420px] aspect-video bg-black group-hover:ring-4 group-hover:ring-blue-200 transition-all duration-300"
                />
              </div>
            </div>
            {/* Text */}
            <div className="flex-1 min-w-[240px]">
              <h3 className="text-4xl md:text-4xl font-extrabold mb-4 flex items-center gap-3 text-blue-800 drop-shadow-lg">
                <span className="animate-pulse text-4xl">🎬</span>
                <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                  See AutoMate in Action
                </span>
              </h3>
              <p className="mb-5 text-2xl text-gray-700 font-semibold">
                How does AutoMate help your drive?
              </p>
              <ul className="space-y-2 pl-5">
                <li className="relative text-base text-gray-800 font-semibold before:absolute before:-left-5 before:top-1 before:text-blue-500 before:content-['•']">
                  Live voice command control
                </li>
                <li className="relative text-base text-gray-800 font-semibold before:absolute before:-left-5 before:top-1 before:text-blue-500 before:content-['•']">
                  Instant response, even offline
                </li>
                <li className="relative text-base text-gray-800 font-semibold before:absolute before:-left-5 before:top-1 before:text-blue-500 before:content-['•']">
                  Fun robot-key interaction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
            {/* Ảnh team */}
            <div className="flex-1 flex justify-center">
              <div className="rounded-2xl overflow-hidden border-2 border-gradient-to-br from-blue-300 via-yellow-200 to-blue-600 shadow-xl w-[210px] h-[210px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-50">
                <Image
                  src="/images/team.jpg"
                  alt="AITEK Team"
                  width={200}
                  height={200}
                  className="object-cover w-[200px] h-[200px] rounded-xl"
                />
              </div>
            </div>
            {/* Info team */}
            <div className="flex-1 min-w-[220px]">
              <h3 className="text-3xl md:text-3xl font-extrabold mb-3 flex items-center gap-2 text-blue-800 drop-shadow-lg">
                <span className="animate-pulse text-3xl">🤝</span>
                <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                  Meet the AITEK Team
                </span>
              </h3>
              <p className="text-xl italic text-blue-500 mb-1 font-semibold">
                A passionate group of automotive engineers & innovators from
                HCMUT.
              </p>
              <p className="text-lg mb-5 text-gray-800 font-medium">
                Guided by experienced mentors, we aim to make driving safer and
                smarter for everyone.
                <br />
                <span className="text-lg text-blue-600">
                  We build, we drive innovation, we are AITEK.
                </span>
              </p>
              <a
                href="/team"
                className="inline-flex items-center gap-1 mt-1 px-5 py-2 rounded-xl font-bold text-blue-800 bg-gradient-to-r from-yellow-200 to-blue-100 shadow hover:from-blue-100 hover:to-yellow-200 border border-blue-300 transition"
              >
                <span>Learn more about us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 flex justify-center items-center bg-gradient-to-br from-gray-100/70 to-white/90">
        <div className="max-w-2xl mx-auto w-full rounded-3xl shadow-2xl bg-white/80 backdrop-blur-xl px-8 py-10 text-center border border-blue-100">
          <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-400 to-yellow-400 bg-clip-text text-transparent flex items-center justify-center gap-2 mb-3">
            <span className="text-4xl">🚀</span>
            Want to try AutoMate first?
          </div>
          <p className="text-gray-600 mb-5 text-xl">
            Sign up now to pre-order and become a pioneer in smart driving!
          </p>
          <a
            href="/preorder"
            className="inline-block py-3 px-10 text-lg font-bold rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 text-white shadow-xl hover:scale-105 hover:shadow-2xl transition"
          >
            Pre-order Now
          </a>
          <div className="mt-4 text-lg text-gray-500">
            Early access • Limited slots available!
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

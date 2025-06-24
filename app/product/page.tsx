"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Mascot images
const MASCOTS = [
  { src: "/images/xmas.png", alt: "Xmas Edition", name: "Xmas" },
  {
    src: "/images/tet.png",
    alt: "Lunar New Year Edition",
    name: "Lunar New Year",
  },
  { src: "/images/F1.png", alt: "Racing Edition", name: "Racing" },
  { src: "/images/halo.png", alt: "Halloween Edition", name: "Halloween" },
];

// Ảnh cho các section dưới
const ARCH_IMAGE = "/images/architecture.png";
const DEMO_IMAGE = "/images/m1.jpg";

// Features array chỉ dùng emoji
const FEATURES = [
  {
    emoji: "🔑",
    title: "Unique Robot Key",
    desc: "Personalize your drive with a mascot — security + fun, activation by touch.",
    border: "from-yellow-300 to-yellow-100",
    shadow: "shadow-yellow-100",
  },
  {
    emoji: "🎤",
    title: "Fully Offline Voice",
    desc: "Instant response, always available, zero lag, works anywhere.",
    border: "from-blue-400 to-blue-100",
    shadow: "shadow-blue-100",
  },
  {
    emoji: "🔧",
    title: "Deep Hardware Integration",
    desc: "Real-time control: lights, AC, reminders — not just an app!",
    border: "from-cyan-400 to-cyan-100",
    shadow: "shadow-cyan-100",
  },
];

export default function Product() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(false);

  return (
    <>
      <Header />

      {/* HERO – Product Showroom */}
      <section
        className="relative custom-stars-bg py-16 px-4 flex flex-col items-center min-h-[60vh] overflow-x-hidden"
        style={{
          background:
            "radial-gradient(ellipse 120% 70% at 60% 10%, #2d3d6e 0%, #181e2f 80%)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow text-center">
          <span className="text-blue-400">Choose Your Style</span>
        </h1>
        <p className="text-lg md:text-xl font-semibold mb-10 text-center max-w-2xl bg-gradient-to-r from-blue-200 via-white to-yellow-300 bg-clip-text text-transparent drop-shadow">
          One product, four mascots.
          <br />
          <span className="font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Same tech. Unique personality.
          </span>
        </p>
        {/* Mascots Gallery */}
        <div className="flex flex-wrap gap-12 justify-center items-end mb-14">
          {MASCOTS.map((m, i) => (
            <div
              key={m.alt}
              className="flex flex-col items-center group cursor-pointer transition-all"
              onClick={() => {
                setOpen(true);
                setCurrent(i);
              }}
              tabIndex={0}
              aria-label={`Preview mascot ${m.name}`}
            >
              <div
                className="rounded-[2rem] bg-gradient-to-br from-blue-400 via-blue-200 to-yellow-300 shadow-2xl"
                style={{
                  width: "clamp(265px, 24vw, 420px)",
                  height: "clamp(180px, 16vw, 260px)",
                  minWidth: 220,
                  minHeight: 150,
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Inner content */}
                <div className="w-[98%] h-[96%] bg-[#171f3d] rounded-[1.6rem] flex items-center justify-center overflow-hidden">
                  <Image
                    src={m.src}
                    alt={m.alt}
                    width={350}
                    height={210}
                    className="object-contain select-none pointer-events-none transition-all scale-100 group-hover:scale-105"
                    style={{
                      maxWidth: "calc(100% - 4px)",
                      maxHeight: "92%",
                      borderRadius: "1.5rem",
                    }}
                    draggable={false}
                    priority={i === 0}
                  />
                </div>
              </div>
              <span
                className="mt-6 text-2xl md:text-3xl font-extrabold tracking-widest bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg group-hover:from-blue-400 group-hover:to-yellow-400 transition"
                style={{ letterSpacing: "0.07em" }}
              >
                {m.name}
              </span>
            </div>
          ))}
        </div>
        {/* Action buttons */}
        <div className="flex gap-4 mt-1 justify-center">
          <a
            href="/preorder"
            className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-xl shadow-lg text-lg transition"
          >
            Pre-order Now
          </a>
          <a
            href="#features"
            className="border border-blue-200 text-white hover:bg-blue-600 hover:text-yellow-300 font-semibold py-3 px-8 rounded-xl transition text-lg"
          >
            See Features
          </a>
        </div>
        {/* Modal (lightbox, full screen) */}
        {open && (
          <div
            className="fixed z-[120] inset-0 bg-black/80 flex items-center justify-center transition"
            onClick={() => setOpen(false)}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center animate-fade-in max-w-[98vw] max-h-[93vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={MASCOTS[current].src}
                alt={MASCOTS[current].name}
                width={900}
                height={700}
                className="rounded-[2.1rem] mb-5 w-full h-auto max-h-[76vh] object-contain"
                style={{
                  boxShadow: "0 8px 48px 0 #2262e055,0 2px 32px 0 #ffd84344",
                  border: "5px solid #eaeefa",
                  background: "linear-gradient(120deg,#f7fafd,#e7f0ff 80%)",
                }}
              />
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-blue-800 to-yellow-500 bg-clip-text text-transparent text-center">
                {MASCOTS[current].name} Edition
              </div>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-7 text-gray-500 hover:text-red-400 text-3xl font-bold"
                aria-label="Close preview"
              >
                ×
              </button>
              <div className="flex gap-12 mt-3">
                <button
                  onClick={() =>
                    setCurrent((current - 1 + MASCOTS.length) % MASCOTS.length)
                  }
                  className="text-4xl font-bold text-blue-500 hover:text-yellow-500 px-4 py-1 rounded-full bg-blue-50/50 shadow"
                  aria-label="Prev"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrent((current + 1) % MASCOTS.length)}
                  className="text-4xl font-bold text-blue-500 hover:text-yellow-500 px-4 py-1 rounded-full bg-blue-50/50 shadow"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section
        className="relative py-20 bg-gradient-to-b from-[#182349] via-[#f7fafd] to-white"
        id="architecture"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4">
          <div className="flex-1 bg-white/90 rounded-3xl shadow-2xl border border-blue-100 backdrop-blur-xl flex md:flex-row flex-col items-center px-10 py-10 gap-12">
            <div className="flex-1 flex justify-center">
              <img
                src={ARCH_IMAGE}
                alt="AutoMate System Architecture"
                className="
                rounded-3xl shadow-xl 
                w-[90vw] max-w-[430px] min-w-[260px] 
                aspect-[4/3] object-contain
                ring-2 ring-blue-100
                hover:scale-105 hover:ring-blue-300 transition duration-300
                bg-[#e9f1ff]/60
                cursor-zoom-in
              "
                onClick={() => setZoom(true)}
                tabIndex={0}
                aria-label="Zoom AutoMate System Architecture"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4 md:pl-2">
              <h2 className="text-[1.7rem] md:text-[2.2rem] font-extrabold mb-3 text-gray-900 leading-tight">
                <span className="text-blue-600 drop-shadow">System</span>{" "}
                Architecture
              </h2>
              <ul className="space-y-5 text-[17px]">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🧠</span>
                  <b className="text-blue-600">Raspberry Pi 5:</b>
                  <span className="text-gray-700 ml-1">
                    Offline voice, main control module.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⚡️</span>
                  <b className="text-cyan-700">STM32 Controllers:</b>
                  <span className="text-gray-700 ml-1">
                    Real-time hardware for AC, lighting, sensors.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🤖</span>
                  <b className="text-yellow-500">Robot Key:</b>
                  <span className="text-gray-700 ml-1">
                    Security, activation, mascot, personalization.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🔗</span>
                  <b className="text-sky-500">CAN/I2C/UART:</b>
                  <span className="text-gray-700 ml-1">
                    Wide compatibility, ready for most cars.
                  </span>
                </li>
              </ul>
              <div className="mt-7 text-[15px] font-bold text-blue-700 bg-gradient-to-r from-blue-50 via-white to-yellow-50/80 py-3 px-6 rounded-xl shadow-lg text-center tracking-wide border border-blue-100/40">
                <span className="text-blue-700">
                  Advanced Hardware. Real-time Control.
                </span>{" "}
                <span className="text-yellow-400 font-bold">
                  100% Offline – No Cloud Needed.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Lightbox Modal */}
        {zoom && (
          <div
            className="fixed z-[999] inset-0 bg-black/70 flex items-center justify-center transition"
            onClick={() => setZoom(false)}
            aria-modal="true"
            role="dialog"
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={ARCH_IMAGE}
                alt="AutoMate System Architecture Large"
                className="max-w-[92vw] max-h-[90vh] rounded-3xl shadow-2xl border-4 border-blue-200 bg-white object-contain animate-fade-in"
                style={{ boxShadow: "0 12px 64px 0 #3f77e7aa" }}
              />
              <button
                onClick={() => setZoom(false)}
                className="absolute top-2 right-3 text-white text-4xl font-bold bg-black/40 rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-600 transition"
                aria-label="Close zoom"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </section>

      {/* -------- FEATURES SECTION -------- */}
      <section
        className="py-20 bg-gradient-to-b from-gray-50/90 via-white to-white"
        id="features"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight">
            Why Choose <span className="text-yellow-400">AutoMate?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((f, idx) => (
              <div
                key={idx}
                className={`
                  relative rounded-3xl p-8 bg-gradient-to-br ${f.border} 
                  shadow-xl hover:shadow-2xl transition-all duration-200
                  border-[3.5px] border-transparent hover:border-blue-400 group
                  flex flex-col items-center text-center
                `}
                style={{
                  minHeight: 280,
                  background: "linear-gradient(135deg,#fff 85%,#f6faff 100%)",
                }}
              >
                <div className="mb-4 flex justify-center items-center h-20">
                  <span className="text-6xl">{f.emoji}</span>
                </div>
                <h4 className="font-bold text-[1.2rem] md:text-xl mb-2 bg-gradient-to-r from-blue-700 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
                  {f.title}
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  {f.desc}
                </p>
                <div
                  className={`absolute -z-10 top-0 left-0 w-full h-full rounded-3xl bg-white/40 group-hover:blur-[3px] transition`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- COMPARISON SECTION -------- */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-yellow-400 bg-clip-text tracking-tight">
            AutoMate vs. Other In-Car Assistants
          </h2>
          <div className="overflow-x-auto rounded-3xl shadow-2xl border-[0.5px] border-blue-100 bg-white/95 backdrop-blur-lg ring-1 ring-blue-50">
            <table className="w-full text-left min-w-[670px]">
              <thead>
                <tr className="bg-gradient-to-r from-blue-100 via-blue-50 to-yellow-50 text-blue-800">
                  <th className="py-4 px-5 font-bold text-lg rounded-tl-3xl">
                    Feature
                  </th>
                  <th className="py-4 px-5 font-bold text-lg">AutoMate</th>
                  <th className="py-4 px-5 font-bold text-lg">
                    Online Assistant
                  </th>
                  <th className="py-4 px-5 font-bold text-lg rounded-tr-3xl">
                    CarPlay/Android Auto
                  </th>
                </tr>
              </thead>
              <tbody className="text-[1.08rem] font-semibold">
                <tr className="border-t border-blue-50/40">
                  <td className="py-3 px-5">Offline Operation</td>
                  <td className="text-green-600">Yes</td>
                  <td className="text-red-500">No</td>
                  <td className="text-red-500">No</td>
                </tr>
                <tr className="border-t border-blue-50/40">
                  <td className="py-3 px-5">Physical Robot Key</td>
                  <td className="text-green-600">Yes</td>
                  <td className="text-gray-400">No</td>
                  <td className="text-gray-400">No</td>
                </tr>
                <tr className="border-t border-blue-50/40">
                  <td className="py-3 px-5">Hardware Integration</td>
                  <td className="text-green-600">Yes</td>
                  <td className="text-yellow-500">Limited</td>
                  <td className="text-yellow-500">Limited</td>
                </tr>
                <tr className="border-t border-blue-50/40">
                  <td className="py-3 px-5">Easy Installation</td>
                  <td className="text-green-600">Yes</td>
                  <td className="text-gray-400">Depends</td>
                  <td className="text-gray-400">Depends</td>
                </tr>
                <tr className="border-t border-b border-blue-50/40">
                  <td className="py-3 px-5">Customizable</td>
                  <td className="text-green-600">Yes</td>
                  <td className="text-gray-400">No</td>
                  <td className="text-gray-400">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRODUCT DEMO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 flex justify-center">
            <Image
              src={DEMO_IMAGE}
              alt="AutoMate Product Demo"
              width={340}
              height={260}
              className="rounded-2xl object-cover bg-gray-100 shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 text-blue-900">
              Real Product. Real Innovation.
            </h3>
            <p className="mb-4 text-gray-700 text-lg">
              Our prototype is fully functional: offline voice recognition,
              robot key, instant response.
              <br />
              Join our early users and see the future of driving today!
            </p>
            <a
              href="/preorder"
              className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-xl shadow-lg text-lg transition"
            >
              Pre-order Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

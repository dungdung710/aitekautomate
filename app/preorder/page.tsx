"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Preorder() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative custom-stars-bg py-20 px-4 flex flex-col items-center min-h-[60vh] overflow-x-hidden"
        style={{
          background:
            "radial-gradient(ellipse 110% 80% at 55% 15%, #2d3d6e 0%, #181e2f 80%)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow text-center">
          <span className="text-yellow-400">Pre-order AutoMate</span>
        </h1>
        <p className="text-lg md:text-xl font-medium mb-8 text-center max-w-2xl bg-gradient-to-r from-yellow-200 via-white to-blue-300 bg-clip-text text-transparent drop-shadow">
          Be the first to experience 100% offline, in-car voice assistant.
          <br />
          <span className="font-bold text-white/90 block mt-2">
            Secure your AutoMate robot-key & join the smart driving revolution!
          </span>
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Info card */}
          <div className="bg-white/90 rounded-3xl shadow-xl px-8 py-10 max-w-md border border-yellow-100 flex flex-col items-center">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-4xl">🛒</span>
              <span className="text-2xl font-bold text-yellow-500">
                Why Pre-order?
              </span>
            </div>
            <ul className="list-disc ml-4 text-base text-gray-700 space-y-2 text-left mb-4">
              <li>Get access to **exclusive mascot editions**.</li>
              <li>Special early-bird pricing (limited slots).</li>
              <li>
                Direct support from our team – feedback, suggestions welcome.
              </li>
              <li>Be featured in our beta testers Hall of Fame!</li>
            </ul>
            <div className="text-blue-600 font-semibold mt-2">
              Expected shipping: <span className="font-bold">Q4/2025</span>
            </div>
          </div>

          {/* Pre-order Action */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-3xl mb-2 text-blue-200">🚀</span>
            {/* BUTTON: Sẽ dẫn link tới Google Form */}
            <a
              href="https://your-google-form-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 font-bold py-4 px-12 rounded-2xl shadow-lg text-xl transition border-2 border-yellow-100"
            >
              Pre-order Now
            </a>
            <span className="text-gray-300 mt-1 text-sm">
              (Google Form opens in new tab)
            </span>
          </div>
        </div>
      </section>

      {/* FAQ/More Info */}
      <section className="py-16 bg-gradient-to-b from-gray-50/80 via-white to-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-7 text-blue-800">
            Frequently Asked Pre-order Questions
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl bg-white/80 shadow p-5">
              <div className="font-bold text-blue-700 flex items-center gap-2 mb-1">
                <span>💳</span> Do I need to pay now?
              </div>
              <div className="text-gray-700">
                No upfront payment required! Just leave your info. We will
                contact you before shipping for final confirmation and payment.
              </div>
            </div>
            <div className="rounded-xl bg-white/80 shadow p-5">
              <div className="font-bold text-blue-700 flex items-center gap-2 mb-1">
                <span>🌏</span> Do you ship internationally?
              </div>
              <div className="text-gray-700">
                Yes, we plan to ship globally for all pre-orders! Shipping fees
                may apply based on your location.
              </div>
            </div>
            <div className="rounded-xl bg-white/80 shadow p-5">
              <div className="font-bold text-blue-700 flex items-center gap-2 mb-1">
                <span>🔒</span> Is my information safe?
              </div>
              <div className="text-gray-700">
                Your data is kept strictly confidential and only used for
                pre-order purposes.
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href="/faq"
              className="text-blue-600 font-semibold hover:underline"
            >
              See more questions &rarr;
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

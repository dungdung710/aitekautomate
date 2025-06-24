"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const SOCIALS = [
  {
    name: "Email",
    icon: "✉️",
    value: "aitek.automate@gmail.com",
    link: "mailto:aitek.autovn@gmail.com",
    color: "text-blue-600",
  },
  {
    name: "Facebook",
    icon: "📘",
    value: "facebook.com/aitek.automate",
    link: "https://facebook.com/aitek.automate",
    color: "text-blue-500",
  },
  {
    name: "Zalo",
    icon: "💬",
    value: "zalo.me/123456789",
    link: "https://zalo.me/123456789",
    color: "text-cyan-600",
  },
];

export default function Contact() {
  // Form state (optional validation)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErr("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErr("Please fill in all fields.");
      return;
    }
    // TODO: Gửi form về server hoặc Google Form (chèn link ở đây)
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <>
      <Header />
      {/* HERO */}
      <section
        className="relative custom-stars-bg py-20 px-4 flex flex-col items-center min-h-[35vh] overflow-x-hidden"
        style={{
          background:
            "radial-gradient(ellipse 120% 70% at 60% 10%, #273866 0%, #192033 90%)",
        }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow text-center">
            <span className="text-blue-400">Let’s Connect.</span>
            <br />
            <span className="text-yellow-300">Contact the AutoMate Team!</span>
          </h1>
          <p className="text-base md:text-lg text-blue-100 text-center max-w-xl mt-4 font-medium">
            Questions, feedback, pre-orders or partnership? <br />
            Reach out and we’ll get back as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="py-16 bg-gradient-to-b from-white via-blue-50/40 to-gray-50 min-h-[60vh]">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* CONTACT INFO CARD */}
          <div className="bg-white/95 rounded-3xl shadow-2xl border border-blue-100 p-8 md:p-10 flex flex-col items-start mb-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Contact Information
            </h2>
            <ul className="space-y-4 mb-6 w-full">
              {SOCIALS.map((s) => (
                <li key={s.name} className="flex items-center gap-4">
                  <span className={`text-2xl ${s.color}`}>{s.icon}</span>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener"
                    className="font-semibold text-blue-900 hover:underline transition"
                  >
                    {s.value}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 text-gray-700">
              <span className="font-bold text-blue-700">AutoMate Team:</span>{" "}
              <br />
              Đại học Bách Khoa TP.HCM (HCMUT), Quận 10, Hồ Chí Minh
              <br />
              <span className="text-sm text-blue-400">Mon–Sat, 8am – 8pm</span>
            </div>
          </div>
          {/* CONTACT FORM */}
          <div className="bg-white/95 rounded-3xl shadow-2xl border border-blue-100 p-8 md:p-10 flex flex-col items-start w-full">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Send Us a Message
            </h2>
            {sent ? (
              <div className="text-green-600 text-lg font-bold">
                ✅ Thank you! We’ll reply soon.
              </div>
            ) : (
              <form
                className="w-full space-y-5"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-blue-100 rounded-xl px-4 py-3 bg-gray-50 focus:border-blue-400 outline-none text-blue-900"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-blue-100 rounded-xl px-4 py-3 bg-gray-50 focus:border-blue-400 outline-none text-blue-900"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-blue-100 rounded-xl px-4 py-3 bg-gray-50 focus:border-blue-400 outline-none text-blue-900 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                {err && <div className="text-red-600 font-semibold">{err}</div>}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 font-bold py-3 rounded-xl shadow-lg text-lg transition"
                >
                  Send Message
                </button>
                {/* Or link to Google Form */}
                {/* <a
                  href="https://forms.gle/your-google-form-link"
                  className="block text-center mt-2 text-blue-700 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Or fill out our Google Form
                </a> */}
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

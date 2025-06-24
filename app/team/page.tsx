"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Thông tin từng thành viên (thêm/sửa ở đây)
const MEMBERS = [
  {
    name: "Tieu Chi",
    role: "Team Leader",
    avatar: "/images/chicam.jpg", // thay bằng avatar thật hoặc /images/team.jpg nếu chưa có
    desc: "Specializes in embedded systems and automotive electronics.",
  },
  {
    name: "Minh Duy",
    role: "AI/Software Engineer",
    avatar: "/images/duysu.jpg",
    desc: "Focus on AI, voice control, system integration.",
  },
  {
    name: "Thuy Tien",
    role: "Hardware Developer",
    avatar: "/images/conchimxanh.jpg",
    desc: "Industrial design, user experience, mascot design.",
  },
  {
    name: "Tien Dung",
    role: "Market analyst",
    avatar: "/images/dungmolo.jpg",
    desc: "Conducting initial market research & competitive analysis",
  },
  {
    name: "Nang Tri",
    role: "Team Spokeperson",
    avatar: "/images/trima.jpg",
    desc: "preparing presentation materials & Pitching",
  },
  // Thêm thành viên khác nếu có
];

// Cố vấn/mentor (thêm nếu có)
const MENTORS = [
  {
    name: "Dr. Pham Tran Dang Quang",
    title: "Project Mentor (HCMUT)",
    avatar: "/images/mentor.jpg",
    desc: "Guiding the team with expertise in IoT and smart vehicle systems.",
  },
];

export default function Team() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="relative custom-stars-bg py-20 px-4 flex flex-col items-center min-h-[45vh] overflow-x-hidden"
        style={{
          background:
            "radial-gradient(ellipse 120% 70% at 60% 10%, #2d3d6e 0%, #181e2f 80%)",
        }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-2 drop-shadow text-center">
            <span className="text-blue-400">Meet the AITEK Team</span>
          </h1>
          <p className="text-base md:text-xl text-center text-blue-100 mb-5 font-medium leading-snug">
            A young, ambitious team building the future of in-car AI.
            <br />
            We believe every journey can be safer, smarter, more personalized –
            powered by Vietnamese innovation.
          </p>
          <ul className="mb-4 flex flex-col gap-1 text-[1.08rem] text-white/80 font-semibold">
            <li>
              🚀 <span className="text-blue-200">Diverse backgrounds:</span>{" "}
              Hardware, AI, design.
            </li>
            <li>
              🤝{" "}
              <span className="text-blue-200">
                Mentored by leading experts.
              </span>
            </li>
            <li>
              🏆 <span className="text-blue-200">Multiple awards</span> in
              national tech competitions.
            </li>
          </ul>
          <div className="mt-1 text-yellow-200 italic font-semibold text-2xl mb-2">
            Make your drive, make your style.
          </div>

          {/* Call to action nhẹ */}
          <a
            href="/contact"
            className="mt-5 inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-7 rounded-xl shadow transition"
          >
            Join or Partner with Us
          </a>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-center">
            Our Core Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERS.map((m) => (
              <div
                key={m.name}
                className="flex flex-col items-center bg-white/80 rounded-2xl shadow-xl border border-blue-50 px-6 py-8 hover:shadow-2xl transition-all duration-200"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-200 shadow mb-4">
                  <Image
                    src={m.avatar}
                    alt={m.name}
                    width={110}
                    height={110}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-xl font-extrabold text-blue-900">
                  {m.name}
                </div>
                <div className="text-yellow-600 font-semibold mb-2">
                  {m.role}
                </div>
                <div className="text-gray-600 text-center text-base">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTOR */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8">
            Mentor / Advisor
          </h2>
          {MENTORS.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center bg-gradient-to-br from-yellow-50 via-white to-blue-50 rounded-2xl shadow-xl px-8 py-7 border border-yellow-100"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-300 shadow mb-3">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-lg font-bold text-yellow-700">{m.name}</div>
              <div className="font-semibold text-blue-700">{m.title}</div>
              <div className="text-gray-700 text-base mt-2">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Join us in shaping the future of smart driving!
        </h2>
        <p className="mb-5 text-lg">
          We welcome partners, investors, and creative minds.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-xl shadow-lg text-lg transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}

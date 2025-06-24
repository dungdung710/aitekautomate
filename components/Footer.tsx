// components/Footer.tsx
import { FaFacebookF, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-950 py-8 mt-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        {/* Bản quyền */}
        <div className="text-gray-300 text-center md:text-left text-base">
          <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-yellow-300 bg-clip-text">
            © {new Date().getFullYear()} AutoMate – AITEK.
          </span>{" "}
          All rights reserved.
        </div>
        {/* Social */}
        <div className="flex gap-6 text-2xl items-center justify-center mt-2 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61577698261711"
            target="_blank"
            aria-label="Facebook"
            className="hover:text-blue-400 text-gray-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-red-400 text-gray-400 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            aria-label="Email"
            className="hover:text-yellow-300 text-gray-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

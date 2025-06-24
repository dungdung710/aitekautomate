"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  // State để điều khiển header
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const curr = window.scrollY;
      if (curr < 30) {
        setShow(true);
      } else if (curr > lastScroll) {
        // Đang kéo xuống
        setShow(false);
      } else {
        // Đang kéo lên
        setShow(true);
      }
      setLastScroll(curr);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [lastScroll]);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-30 bg-gradient-to-b from-gray-900/90 to-gray-900/60 backdrop-blur-sm shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="/"
          className="text-4xl font-extrabold text-blue-200 tracking-tight drop-shadow-lg hover:scale-105 transition-all duration-200"
        >
          AITEK
        </a>
        {/* Menu nav */}
        <ul className="flex gap-7 text-white font-semibold text-lg">
          <li>
            <a
              href="/product"
              className={`hover:text-yellow-300 hover:underline underline-offset-4 transition-all duration-200 ${
                pathname === "/product" ? "text-yellow-300 underline" : ""
              }`}
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="/preorder"
              className={`hover:text-yellow-300 hover:underline underline-offset-4 transition-all duration-200 ${
                pathname === "/preorder" ? "text-yellow-300 underline" : ""
              }`}
            >
              Pre-Order
            </a>
          </li>
          <li>
            <a
              href="/team"
              className={`hover:text-yellow-300 hover:underline underline-offset-4 transition-all duration-200 ${
                pathname === "/team" ? "text-yellow-300 underline" : ""
              }`}
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className={`hover:text-yellow-300 hover:underline underline-offset-4 transition-all duration-200 ${
                pathname === "/faq" ? "text-yellow-300 underline" : ""
              }`}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={`hover:text-yellow-300 hover:underline underline-offset-4 transition-all duration-200 ${
                pathname === "/contact" ? "text-yellow-300 underline" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

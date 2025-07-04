"use client";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-7 right-6 z-[120] flex flex-col items-end gap-3">
      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/profile.php?id=61578055860285"
        target="_blank"
        rel="noopener"
        className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl rounded-full p-4 flex items-center gap-2 animate-bounce"
        title="Chat with us on Facebook"
      >
        <svg width="24" height="24" fill="currentColor" className="mr-1">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.25.2 2.25.2v2.47H15c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12z" />
        </svg>
        <span className="font-bold hidden sm:block">Facebook</span>
      </a>
      {/* Contact Page Button */}
      <Link
        href="/contact"
        className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 shadow-xl rounded-full p-4 flex items-center gap-2 font-bold"
        title="Contact us"
      >
        <span className="text-2xl">✉️</span>
        <span className="hidden sm:block">Contact</span>
      </Link>
    </div>
  );
}

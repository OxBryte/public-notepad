import React from "react";

export default function Navbar() {
  return (
    <div className="w-full mx-auto py-4 border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto max-w-[1260px] flex items-center justify-between gap-10 px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <p className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            PublicPad
          </p>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Connect Wallet
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

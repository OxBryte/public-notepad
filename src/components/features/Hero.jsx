import React from "react";

export default function Hero() {
  return (
    <div className="w-full min-h-[60dvh] rounded-t-3xl py-20 flex items-center justify-center bg-gradient-to-b from-gray-200 to-transparent">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[48px] font-semibold font-bricolage">
          Make your ideas Onchain!
        </h1>
        <p className="text-gray-600 text-center font-light max-w-2xl leading-relaxed">
          Transform your thoughts into immutable digital assets. Create, share,
          and preserve your ideas on the blockchain with our secure and
          decentralized notepad platform.
        </p>
        <div className="flex gap-4 mt-3">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Start Writing
          </button>
          <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Navbar() {
  return (
    <div className="w-full mx-auto py-6 border-b border-b-gray-200">
      <div className="mx-auto max-w-[1260px] flex items-center justify-between gap-10">
        <p>Logo</p>
        <button className="text-sm bg-gray-200 px-6 py-3 rounded-xl">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

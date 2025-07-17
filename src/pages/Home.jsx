import React from "react";
import Hero from "../components/features/Hero";
import Note from "../components/features/Note";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Note />
    </div>
  );
}

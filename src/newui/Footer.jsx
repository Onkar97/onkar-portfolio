import React from "react";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-white/60">
        © {new Date().getFullYear()} Onkar Bhujbal
      </div>
    </footer>
  );
}
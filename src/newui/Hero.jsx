import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-indigo-500/40 to-sky-400/40"></div>
        <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full blur-3xl opacity-40 bg-gradient-to-tl from-fuchsia-500/30 to-cyan-400/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent md:whitespace-nowrap">
              Onkar{"\u00A0"}Bhujbal
            </span>
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl">
            Software Engineer and Full-Stack Developer crafting fast, delightful web apps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:shadow-lg transition-shadow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-2xl border border-white/20 hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: Photo (shifted right on md+) */}
        <div className="justify-self-center md:justify-self-end w-full">
          <div className="relative ml-auto max-w-fit">
            <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-indigo-500/30 to-cyan-400/30"></div>
            <img
              src={require("../assets/Profile_Image.jpg")}
              alt="Onkar Bhujbal"
              className="relative rounded-3xl w-64 md:w-80 border border-white/10 shadow-2xl ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

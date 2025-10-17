import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./projectAnimations.css";

// Local images (swap for your real screenshots)
import img1 from "../assets/projects/img1.png";
import img2 from "../assets/projects/img2.png";
import img3 from "../assets/projects/img3.png";
import img4 from "../assets/projects/img4.png";
import img5 from "../assets/projects/img5.png";
import img6 from "../assets/projects/img6.png";
import img7 from "../assets/projects/img7.png";
import img8 from "../assets/projects/img8.png";
import img9 from "../assets/projects/img9.jpg";

const projects = [
  {
    name: "Infra Provision",
    desc: "Automated AWS Infrastructure Deployment using Terraform",
    link: "https://github.com/Onkar97/Infra-Provision-Automated-AWS-Infrastructure-Deployment",
    img: img8,
  },
  {
    name: "Certi Learn",
    desc: "Full-stack Spring Boot app for E-Learning & Certification System",
    link: "https://github.com/Onkar97/Certi-Learn-E-Learning-Certification-System.git",
    img: img1,
  },
  {
    name: "Veritas Vision",
    desc: "AI-Generated vs. Real Image Detection",
    link: "https://github.com/Onkar97/Veritas-Vision-Explainable-AI-for-Image-Authenticity.git",
    img: img9,
  },
  {
    name: "Dev Sentiment",
    desc: "Predicting Developer Job Satisfaction",
    link: "https://github.com/Onkar97/Dev-Sentiment-Predicting-Developer-Job-Satisfaction.git",
    img: img2,
  },
  {
    name: "Neuro Vision",
    desc: "AI-Powered Alzheimer’s Progression Predictor using imaging & genetic data for early prediction",
    link: "https://github.com/Onkar97/Neuro-Vision-AI-Powered-Alzheimer-s-Progression-Predictor.git",
    img: img3,
  },
  {
    name: "Skill Bridge",
    desc: "AI-Driven Job Portal for Smart Recruitment",
    link: "https://github.com/Onkar97/Skill-Bridge-AI-Driven-Job-Portal-for-Smart-Recruitment.git",
    img: img4,
  },
  {
    name: "Chatter Box",
    desc: "Socket.io chat with rooms, presence and moderation real-time location-based Chat Platform",
    link: "https://github.com/Onkar97/Chatter-Box-Real-Time-Location-Based-Chat-Platform.git",
    img: img5,
  },
  {
    name: "Sentiment Smith",
    desc: "AI-Based Product Feedback Analyzer using NLP sentiment & aspect analytics on real-world reviews",
    link: "https://github.com/Onkar97/Sentiment-Smith-AI-Based-Product-Feedback-Analyzer.git",
    img: img6,
  },
  {
    name: "PICT CSI Web Portal",
    desc: "Event management site with CMS tooling",
    link: "https://github.com/Onkar97/PICT-CSI-Web-Portal.git",
    img: img7,
  },
];

function usePerView() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return perView;
}

function ProjectCard({ p }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 shadow-sm overflow-hidden h-full flex flex-col">
      <div className="relative">
        {/* Image area; keep this aspect in sync with IMG_ASPECT below */}
        <div className="aspect-[16/11] overflow-hidden">
          <img src={p.img} alt={p.name} className="h-full w-full object-cover kenburns" />
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">{p.name}</h3>
        <p className="text-sm text-white/70 mt-2 flex-1">{p.desc}</p>
        <div className="mt-4">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 to-sky-400 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsCarousel() {
  const perView = usePerView();

  // Outer container (arrows sit relative to this)
  // Viewport (clips the sliding track)
  const viewportRef = useRef(null);

  const [slideW, setSlideW] = useState(0);
  const [btnTop, setBtnTop] = useState(0);
  const [index, setIndex] = useState(0);

  const GAP = 24;             // equals mr-6
  const BTN = 64;             // arrow diameter
  const HALF_BTN = BTN / 2;
  const IMG_ASPECT = 16 / 11; // must match ProjectCard image aspect
  const ADJUST_Y = 0;         // tweak (+/- px) if you want the arrow slightly above/below the boundary

  // measure slide width and position arrows at the image/content boundary
  useEffect(() => {
    const calc = () => {
      if (!viewportRef.current) return;
      const w = viewportRef.current.offsetWidth;
      const sw = (w - GAP * (perView - 1)) / perView; // width per slide
      setSlideW(sw);

      // Arrow vertical center at bottom of image area:
      // imageHeight = slideWidth / IMG_ASPECT
      const imageH = sw / IMG_ASPECT;
      const top = Math.max(24, imageH - HALF_BTN + ADJUST_Y);
      setBtnTop(top);

      setIndex(0);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [perView, HALF_BTN, IMG_ASPECT]);

  const maxIndex = Math.max(0, projects.length - perView);

  const left = useCallback(() => {
    setIndex(i => Math.max(0, i - 1));
  }, []);

  const right = useCallback(() => {
    setIndex(i => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") left();
      if (e.key === "ArrowRight") right();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [left, right]);

  const pages = maxIndex + 1;

  return (
    <div className="relative pb-8">
      {/* Viewport (clips the track) */}
      <div className="overflow-hidden" ref={viewportRef}>
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${index * (slideW + GAP)}px)` }}
        >
          {projects.map((p) => (
            <div
              key={p.name}
              className="mr-6 last:mr-0"
              style={{ flex: `0 0 ${slideW}px` }} // exactly perView per page
            >
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows: half outside the first/last visible card, vertically at the image boundary */}
      <button
        onClick={left}
        style={{ left: -HALF_BTN, top: btnTop, width: BTN, height: BTN }}
        className="absolute z-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-400 text-white
                   ring-1 ring-white/30 shadow-xl flex items-center justify-center disabled:opacity-40"
        disabled={index === 0}
        aria-label="Previous"
      >
        <FiChevronLeft size={26} />
      </button>

      <button
        onClick={right}
        style={{ right: -HALF_BTN, top: btnTop, width: BTN, height: BTN }}
        className="absolute z-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-400 text-white
                   ring-1 ring-white/30 shadow-xl flex items-center justify-center disabled:opacity-40"
        disabled={index === maxIndex}
        aria-label="Next"
      >
        <FiChevronRight size={26} />
      </button>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2.5 bg-white/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

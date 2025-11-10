import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Foreground content */}
      <div className="relative z-[2] h-full w-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-widest text-orange-300/90 text-xs md:text-sm mb-3">Interview Buddy</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Your all‑in‑one practice studio for interview excellence
            </h1>
            <p className="mt-4 md:mt-6 text-white/80 max-w-xl">
              Upload your resume, analyze strengths, and drill with role‑specific questions — all in one minimalist, tech‑forward dashboard.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
              <button className="px-5 py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium transition">
                Start Practicing
              </button>
              <button className="px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur transition">
                Analyze Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;

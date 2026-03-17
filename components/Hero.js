'use client';
import { useEffect, useRef } from 'react';
import { Star, Shield, Clock, ChevronDown } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '8,000+', label: 'Happy Patients' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '12', label: 'Specialists' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[var(--gold)]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <span className="section-tag">Chennai's #1 Dental Clinic</span>

          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mt-2">
            Your Perfect{' '}
            <span className="text-gold">Smile</span>
            <br />
            Starts Here
          </h1>

          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-lg">
            Experience world-class dental care with cutting-edge technology,
            gentle hands, and a team that truly cares about your smile and
            overall wellbeing.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { icon: <Shield size={15} />, text: 'ISO Certified Clinic' },
              { icon: <Star size={15} />, text: 'Award Winning' },
              { icon: <Clock size={15} />, text: 'Same-Day Emergency' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full border border-white/10"
              >
                <span className="text-[var(--gold)]">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-gold text-base"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() =>
                document
                  .querySelector('#services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-outline text-base"
            >
              View Services
            </button>
          </div>
        </div>

        {/* Right — Stats card */}
        <div className="hidden md:flex justify-center">
          <div className="bg-white/8 backdrop-blur-md border border-white/10 rounded-3xl p-10 w-full max-w-sm">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-8 text-center">
              Clinic at a Glance
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 rounded-2xl p-5 text-center border border-white/8"
                >
                  <p className="font-playfair text-3xl font-bold text-[var(--gold)]">
                    {s.value}
                  </p>
                  <p className="text-white/60 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[var(--gold)]/15 rounded-2xl p-4 flex items-center gap-4 border border-[var(--gold)]/20">
              <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                🦷
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  AI Assistant Online
                </p>
                <p className="text-white/50 text-xs mt-0.5">
                  Ask about services, pricing &amp; bookings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
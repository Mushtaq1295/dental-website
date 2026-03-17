'use client';
import { GraduationCap, Award, Star } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Dentist & Founder',
    exp: '15 Years',
    edu: 'BDS, MDS – AIIMS Delhi',
    speciality: 'General & Cosmetic Dentistry',
    emoji: '👩‍⚕️',
    rating: 4.9,
    reviews: 312,
    badges: ['Smile Makeover', 'Veneers', 'Whitening'],
  },
  {
    name: 'Dr. Arjun Mehta',
    role: 'Senior Orthodontist',
    exp: '11 Years',
    edu: 'BDS, MDS – Madras Medical College',
    speciality: 'Braces, Aligners & Jaw Correction',
    emoji: '👨‍⚕️',
    rating: 4.8,
    reviews: 228,
    badges: ['Invisalign', 'Ceramic Braces', 'Retainers'],
  },
  {
    name: 'Dr. Kavitha Nair',
    role: 'Implantologist',
    exp: '9 Years',
    edu: 'BDS, Fellowship in Implantology',
    speciality: 'Dental Implants & Oral Surgery',
    emoji: '👩‍⚕️',
    rating: 4.9,
    reviews: 185,
    badges: ['Implants', 'Bone Graft', 'Full Mouth'],
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">Meet the Team</span>
          <h2 className="section-title mt-2">
            Expert Doctors, <span className="text-gold">Compassionate Care</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base">
            Our specialists combine years of clinical expertise with a gentle
            approach that puts you at ease from the moment you walk in.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div key={doc.name} className="premium-card text-center group">
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto rounded-full bg-[var(--cream)] flex items-center justify-center text-5xl mb-4 group-hover:scale-105 transition-transform">
                {doc.emoji}
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 text-[var(--gold)] mb-3">
                <Star size={14} fill="currentColor" />
                <span className="text-sm font-semibold text-gray-700">
                  {doc.rating}
                </span>
                <span className="text-xs text-gray-400">
                  ({doc.reviews} reviews)
                </span>
              </div>

              <h3 className="font-playfair text-xl font-bold text-[var(--navy)]">
                {doc.name}
              </h3>
              <p className="text-[var(--gold)] text-sm font-medium mt-0.5">
                {doc.role}
              </p>

              <div className="mt-4 space-y-2 text-sm text-gray-500 text-left bg-gray-50 rounded-xl p-4">
                <p className="flex items-center gap-2">
                  <GraduationCap size={14} className="text-[var(--gold)]" />
                  {doc.edu}
                </p>
                <p className="flex items-center gap-2">
                  <Award size={14} className="text-[var(--gold)]" />
                  {doc.exp} Experience
                </p>
              </div>

              {/* Specialty Tags */}
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {doc.badges.map((b) => (
                  <span
                    key={b}
                    className="text-xs bg-[var(--navy)]/5 text-[var(--navy)] px-3 py-1 rounded-full font-medium"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <button
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-gold w-full text-center text-sm !py-3 mt-6"
              >
                Book with {doc.name.split(' ')[1]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
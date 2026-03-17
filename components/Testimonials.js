'use client';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Krishnan',
    location: 'Anna Nagar, Chennai',
    rating: 5,
    text: 'I was terrified of dentists my whole life. Dr. Priya and her team made me feel so comfortable and safe. My smile makeover results are beyond what I imagined. Absolutely life-changing!',
    service: 'Smile Makeover',
    emoji: '🙋‍♀️',
  },
  {
    name: 'Rajesh Iyer',
    location: 'Adyar, Chennai',
    rating: 5,
    text: 'Got Invisalign with Dr. Arjun. The whole process was smooth and the AI chatbot on the website helped me understand everything before my first visit. Very professional clinic.',
    service: 'Invisible Aligners',
    emoji: '👨',
  },
  {
    name: 'Meera Sundaram',
    location: 'T. Nagar, Chennai',
    rating: 5,
    text: 'Two dental implants with Dr. Kavitha. Zero pain, excellent aftercare. The clinic is spotlessly clean with the latest equipment. Highly recommended to everyone in Chennai.',
    service: 'Dental Implants',
    emoji: '👩',
  },
  {
    name: 'Suresh Babu',
    location: 'Velachery, Chennai',
    rating: 5,
    text: 'Teeth whitening session was quick and the results are stunning. Got 7 shades lighter in just one sitting! Fair pricing and very friendly staff. Will come back.',
    service: 'Teeth Whitening',
    emoji: '🧑',
  },
  {
    name: 'Divya Ramachandran',
    location: 'Porur, Chennai',
    rating: 5,
    text: 'Brought my 8-year-old for a checkup. The whole team was so patient and gentle with her. She left actually excited about dental care! Thank you SmileCare.',
    service: 'Paediatric Checkup',
    emoji: '👩‍👧',
  },
  {
    name: 'Karthik Subramanian',
    location: 'OMR, Chennai',
    rating: 5,
    text: "Root canal was completely painless — I didn't even feel the injection. Modern equipment, experienced hands, and great ambiance. My new go-to dental clinic.",
    service: 'Root Canal',
    emoji: '👨‍💼',
  },
];

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-[var(--gold)]" fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">Patient Stories</span>
          <h2 className="section-title mt-2">
            Real Smiles, <span className="text-gold">Real Results</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Don't take our word for it — here's what our 8,000+ patients say
            about their SmileCare experience.
          </p>
        </div>

        {/* Google Rating Banner */}
        <div className="bg-white rounded-2xl p-6 flex flex-wrap gap-6 items-center justify-center mb-12 shadow-sm border border-[var(--gold)]/10">
          <div className="text-center">
            <p className="font-playfair text-5xl font-bold text-[var(--navy)]">4.9</p>
            <StarRow count={5} />
            <p className="text-xs text-gray-400 mt-1">Google Rating</p>
          </div>
          <div className="w-px h-16 bg-gray-100 hidden md:block" />
          <div className="text-center">
            <p className="font-playfair text-5xl font-bold text-[var(--navy)]">725+</p>
            <p className="text-sm text-gray-500 mt-1">Verified Reviews</p>
          </div>
          <div className="w-px h-16 bg-gray-100 hidden md:block" />
          <div className="text-center">
            <p className="font-playfair text-5xl font-bold text-[var(--navy)]">98%</p>
            <p className="text-sm text-gray-500 mt-1">Would Recommend</p>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="premium-card relative">
              <Quote
                size={36}
                className="text-[var(--gold)]/20 absolute top-5 right-5"
                fill="currentColor"
              />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--cream)] flex items-center justify-center text-2xl flex-shrink-0">
                  {t.emoji}
                </div>
                <div>
                  <p className="font-semibold text-[var(--navy)] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>

              <StarRow count={t.rating} />

              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4">
                "{t.text}"
              </p>

              <span className="text-xs bg-[var(--gold)]/10 text-[var(--gold)] px-3 py-1 rounded-full font-medium">
                {t.service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
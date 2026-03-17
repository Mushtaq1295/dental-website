'use client';

const services = [
  {
    icon: '🔍',
    title: 'General Checkup',
    price: '₹500',
    desc: 'Comprehensive oral examination, X-rays, and a personalised treatment plan from our experts.',
    tag: 'Most Popular',
  },
  {
    icon: '✨',
    title: 'Teeth Whitening',
    price: '₹5,000',
    desc: 'Professional-grade laser whitening that brightens your smile by up to 8 shades in one session.',
    tag: 'Premium',
  },
  {
    icon: '🦷',
    title: 'Dental Implants',
    price: '₹30,000',
    desc: 'Permanent, natural-looking tooth replacement using titanium implants with lifetime warranty.',
    tag: 'Advanced',
  },
  {
    icon: '😁',
    title: 'Braces & Aligners',
    price: 'from ₹25,000',
    desc: 'Metal, ceramic, or invisible aligners tailored to your bite and lifestyle requirements.',
    tag: null,
  },
  {
    icon: '🧹',
    title: 'Teeth Cleaning',
    price: '₹1,500',
    desc: 'Deep ultrasonic cleaning to remove plaque, tartar, and stains — leaving you fresh and healthy.',
    tag: null,
  },
  {
    icon: '🩺',
    title: 'Root Canal',
    price: '₹8,000+',
    desc: 'Painless, single-sitting root canal therapy using rotary instruments and apex locators.',
    tag: 'Pain-free',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title mt-2">
            Comprehensive Dental <span className="text-gold">Services</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base leading-relaxed">
            From routine checkups to complex restorations — we cover every
            aspect of your dental health with precision and care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="premium-card relative group cursor-default">
              {s.tag && (
                <span className="absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                  {s.tag}
                </span>
              )}

              <div className="text-4xl mb-4">{s.icon}</div>

              <h3 className="font-playfair text-xl font-semibold text-[var(--navy)] mb-2">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {s.desc}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-[var(--gold)] font-bold text-lg">
                  {s.price}
                </span>
                <button
                  onClick={() =>
                    document
                      .querySelector('#contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-sm text-[var(--navy)] font-medium hover:text-[var(--gold)] transition-colors"
                >
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
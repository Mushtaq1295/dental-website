import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  Services: [
    'General Checkup', 'Teeth Whitening', 'Dental Implants',
    'Braces & Aligners', 'Root Canal', 'Teeth Cleaning',
  ],
  'Quick Links': ['About Us', 'Our Doctors', 'Patient Stories', 'Blog', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[var(--gold)] flex items-center justify-center text-white font-bold text-xl">
                🦷
              </div>
              <span className="font-playfair text-xl font-bold">SmileCare</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Chennai's most trusted dental clinic, combining advanced technology
              with compassionate, personalised care since 2009.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-[var(--gold)] transition-colors"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-white/50 text-sm hover:text-[var(--gold)] transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { icon: <MapPin size={14} />, text: '123 Anna Salai, Chennai 600002' },
                { icon: <Phone size={14} />, text: '+91 98765 43210' },
                { icon: <Mail size={14} />, text: 'info@smilecare.com' },
              ].map((c) => (
                <li key={c.text} className="flex items-start gap-3 text-white/50 text-sm">
                  <span className="text-[var(--gold)] mt-0.5 flex-shrink-0">{c.icon}</span>
                  {c.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
          <p>Built with ❤️ for healthier smiles</p>
        </div>
      </div>
    </footer>
  );
}
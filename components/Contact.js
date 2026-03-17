'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const services = [
  'General Checkup',
  'Teeth Cleaning',
  'Teeth Whitening',
  'Braces / Aligners',
  'Root Canal',
  'Dental Implants',
  'Dentures',
  'Other',
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM',
];

const contactInfo = [
  {
    icon: <MapPin size={20} />,
    label: 'Address',
    value: '123 Anna Salai, Chennai, Tamil Nadu 600002',
  },
  { icon: <Phone size={20} />, label: 'Phone', value: '+91 98765 43210' },
  { icon: <Mail size={20} />, label: 'Email', value: 'info@smilecare.com' },
  {
    icon: <Clock size={20} />,
    label: 'Hours',
    value: 'Mon–Sat 9AM–7PM · Sun 10AM–2PM',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    service: '', date: '', time: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get today's date as min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title mt-2">
            Book Your <span className="text-gold">Appointment</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Fill in the form and our team will confirm your appointment within
            2 hours. Walk-ins also welcome!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="hero-bg rounded-3xl p-8 text-white">
              <h3 className="font-playfair text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="text-[var(--gold)] mt-0.5 flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider">
                        {c.label}
                      </p>
                      <p className="text-white/90 text-sm mt-0.5">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency note */}
              <div className="mt-8 bg-white/10 rounded-2xl p-4 border border-white/10">
                <p className="text-[var(--gold)] font-semibold text-sm">
                  🚨 Dental Emergency?
                </p>
                <p className="text-white/70 text-xs mt-1">
                  Call us anytime at +91 98765 43210 — we offer same-day
                  emergency appointments.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Booking Form */}
          <div className="lg:col-span-3">
            {success ? (
              <div className="premium-card text-center py-16">
                <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-[var(--navy)] mb-2">
                  Appointment Requested!
                </h3>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                  We've received your request. Our team will call you within 2
                  hours to confirm your appointment.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-gold mt-8 text-sm"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-card space-y-5">
                <h3 className="font-playfair text-xl font-bold text-[var(--navy)] mb-2">
                  Fill in Your Details
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Ananya Krishnan"
                      className="premium-input"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 99999 99999"
                      className="premium-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="premium-input"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="premium-input"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      min={today}
                      onChange={handleChange}
                      required
                      className="premium-input"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="premium-input"
                    >
                      <option value="">Select time...</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific concerns or questions..."
                    className="premium-input resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full text-center !py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Confirm Appointment →'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We'll call to confirm within 2 hours · No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
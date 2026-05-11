'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent('Demande d\'information - GSB Rosa Peace');
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@gsbrosepeace.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contactez-Nous
            <span className="block text-2xl sm:text-3xl text-[#2d7a3e] mt-2">
              Contact Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2d7a3e] to-[#d4af37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de Contact
                <span className="block text-lg text-[#2d7a3e] mt-1">
                  Contact Information
                </span>
              </h3>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#f0fdf4] to-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2d7a3e] to-[#4a9d5a] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  Adresse / Address
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Quartier Tongolo Derrière le village Noah
                  <br />
                  Yaoundé - Tongolo
                  <br />
                  Cameroun / Cameroon
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#eff6ff] to-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  Téléphone / Phone
                </h4>
                <div className="space-y-2">
                  <a
                    href="tel:+237687849295"
                    className="block text-gray-700 hover:text-[#2d7a3e] transition-colors"
                  >
                    (+237) 699 48 81 81
                  </a>
                  <a
                    href="tel:+237650371872"
                    className="block text-gray-700 hover:text-[#2d7a3e] transition-colors"
                  >
                    (+237) 650 37 18 72
                  </a>
                  <a
                    href="tel:+237677157803"
                    className="block text-gray-700 hover:text-[#2d7a3e] transition-colors"
                  >
                    (+237) 677 15 78 03
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#fffbeb] to-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#eac54f] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Email</h4>
                <a
                  href="mailto:contact@gsbrosepeace.com"
                  className="text-gray-700 hover:text-[#2d7a3e] transition-colors break-all"
                >
                  contact@gsbrosepeace.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  Horaires / Hours
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Lundi - Vendredi / Monday - Friday
                  <br />
                  <span className="font-semibold">7:30 AM - 4:00 PM</span>
                </p>
              </div>
            </div>

            {/* Founded */}
            <div className="p-6 bg-gradient-to-r from-[#2d7a3e] to-[#1f5a2c] rounded-2xl shadow-lg text-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎓</span>
                <h4 className="font-bold text-xl">Fondé en / Founded in</h4>
              </div>
              <p className="text-3xl font-bold">27 Juin / June 2017</p>
              <p className="text-white/80 mt-2">
                Plus de 7 ans d&apos;excellence éducative
                <br />
                <span className="text-sm">
                  Over 7 years of educational excellence
                </span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Envoyez-nous un message
              </h3>
              <p className="text-gray-600 mb-8">
                Send us a message / Envoyez-nous un message
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom Complet / Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d7a3e] focus:border-transparent transition-all outline-none"
                    placeholder="Votre nom / Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d7a3e] focus:border-transparent transition-all outline-none"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Téléphone / Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d7a3e] focus:border-transparent transition-all outline-none"
                    placeholder="+237 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d7a3e] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Votre message... / Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2d7a3e] to-[#1f5a2c] text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-[#1f5a2c] hover:to-[#2d7a3e] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Envoyer le Message / Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

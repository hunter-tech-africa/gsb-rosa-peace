'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1f5a2c] via-[#2d7a3e] to-[#1e5a2e] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="GSB Rosa Peace Logo"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div>
                <h3 className="font-bold text-lg">Rosa Peace</h3>
                <p className="text-sm text-white/80">Bilingual School</p>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Excellence en éducation bilingue depuis 2017
            </p>
            <p className="text-white/70 text-xs italic">
              Excellence in bilingual education since 2017
            </p>
            <div className="mt-4">
              <p className="text-[#d4af37] font-semibold italic">
                &quot;Discipline - Travail - Succès&quot;
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liens Rapides / Quick Links</h4>
            <ul className="space-y-2">
              {[
                { fr: 'Accueil', en: 'Home', id: 'home' },
                { fr: 'À Propos', en: 'About', id: 'about' },
                { fr: 'Programmes', en: 'Programs', id: 'programs' },
                { fr: 'Galerie', en: 'Gallery', id: 'gallery' },
                { fr: 'Contact', en: 'Contact', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-white hover:translate-x-1 transform transition-all duration-200 flex items-center gap-2 text-sm"
                  >
                    <span className="text-[#d4af37]">▸</span>
                    {link.fr} / {link.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5"
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
                <span className="text-white/90">
                  Yaoundé - Tongolo
                  <br />
                  Tongolo Derrière le village Noah
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-white/90">
                  <a href="tel:+237687849295" className="block hover:text-white">
                    699 48 81 81
                  </a>
                  <a href="tel:+237650371872" className="block hover:text-white">
                    650 37 18 72
                  </a>
                  <a href="tel:+237677157803" className="block hover:text-white">
                    677 15 78 03
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:contact@gsbrosepeace.com"
                  className="text-white/90 hover:text-white break-all"
                >
                  contact@gsbrosepeace.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm text-center md:text-left">
              &copy; {currentYear} Groupe Scolaire Bilingue Rosa Peace. Tous
              droits réservés / All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span>Créé avec</span>
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>pour l&apos;éducation / Created with love for education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            À Propos de Nous
            <span className="block text-2xl sm:text-3xl text-[#2d7a3e] mt-2">
              About Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2d7a3e] to-[#d4af37] mx-auto rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Fondé en <span className="font-bold text-[#2d7a3e]">2017</span>,
            le Groupe Scolaire Bilingue Rosa Peace est une institution éducative
            d&apos;excellence située à Yaoundé-Tongolo. Nous offrons un
            enseignement bilingue de qualité dans les sections maternelle et
            primaire.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed italic">
            Founded in <span className="font-bold text-[#2d7a3e]">2017</span>,
            Rosa Peace Bilingual School is an educational institution of
            excellence located in Yaoundé-Tongolo. We offer quality bilingual
            education in nursery and primary sections.
          </p>
        </div>

        {/* Core Values - Discipline, Travail, Succès */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Valeurs / Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Discipline */}
            <div className="group relative bg-gradient-to-br from-[#f0fdf4] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#2d7a3e]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d7a3e]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2d7a3e] to-[#4a9d5a] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Discipline
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Nous inculquons la discipline comme fondement de
                  l&apos;excellence académique et du développement personnel.
                </p>
                <p className="text-gray-500 text-sm italic">
                  We instill discipline as the foundation of academic excellence
                  and personal development.
                </p>
              </div>
            </div>

            {/* Travail */}
            <div className="group relative bg-gradient-to-br from-[#fffbeb] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#d4af37]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#eac54f] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Travail / Work
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Le travail acharné et la persévérance sont les clés de la
                  réussite de nos élèves.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Hard work and perseverance are the keys to our students&apos;
                  success.
                </p>
              </div>
            </div>

            {/* Succès */}
            <div className="group relative bg-gradient-to-br from-[#eff6ff] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#1e40af]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1e40af]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Succès / Success
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Nous préparons nos élèves à exceller dans leurs études et dans
                  la vie.
                </p>
                <p className="text-gray-500 text-sm italic">
                  We prepare our students to excel in their studies and in life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#2d7a3e] to-[#1f5a2c] rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold text-center mb-12">
            Pourquoi Nous Choisir? / Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Enseignants Qualifiés</h4>
              <p className="text-sm text-white/80">Qualified Teachers</p>
            </div>
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Formation Bilingue</h4>
              <p className="text-sm text-white/80">Bilingual Training</p>
            </div>
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Environnement Sûr</h4>
              <p className="text-sm text-white/80">Safe Environment</p>
            </div>
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Résultats Excellents</h4>
              <p className="text-sm text-white/80">Excellent Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

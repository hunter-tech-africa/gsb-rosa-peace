export default function Programs() {
  const maternelleActivities = [
    {
      fr: 'Arts & Créativité',
      en: 'Arts & Creativity',
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      fr: 'Éveil Linguistique',
      en: 'Language Awareness',
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      fr: 'Jeux Éducatifs',
      en: 'Educational Games',
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      fr: 'Musique & Danse',
      en: 'Music & Dance',
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
  ];

  const primaireSubjects = [
    {
      fr: 'Français & English',
      en: 'French & English',
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      fr: 'Mathématiques',
      en: 'Mathematics',
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      fr: 'Sciences',
      en: 'Sciences',
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      fr: 'Histoire & Géographie',
      en: 'History & Geography',
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nos Programmes
            <span className="block text-2xl sm:text-3xl text-[#2d7a3e] mt-2">
              Our Programs
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2d7a3e] to-[#d4af37] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Nous offrons une éducation bilingue complète dans les sections
            francophone et anglophone
            <span className="block mt-2 italic text-gray-500">
              We offer comprehensive bilingual education in French and English
              sections
            </span>
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {/* Maternelle Program */}
          <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Decorative Header */}
            <div className="h-3 bg-gradient-to-r from-[#2d7a3e] via-[#4a9d5a] to-[#d4af37]"></div>

            <div className="p-8 sm:p-10">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2d7a3e] to-[#4a9d5a] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Maternelle
                  </h3>
                  <p className="text-[#2d7a3e] font-medium text-lg">
                    Nursery School
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                Notre section maternelle offre un environnement d&apos;apprentissage
                stimulant et sécurisé pour les jeunes enfants, favorisant leur
                développement cognitif, social et émotionnel.
              </p>
              <p className="text-gray-600 text-sm italic mb-8">
                Our nursery section provides a stimulating and safe learning
                environment for young children, promoting their cognitive,
                social, and emotional development.
              </p>

              {/* Key Features */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2d7a3e] rounded-full"></span>
                  Activités / Activities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {maternelleActivities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-[#f0fdf4] rounded-xl hover:bg-[#2d7a3e]/10 transition-colors"
                    >
                      <div className="text-[#2d7a3e] flex-shrink-0">{item.svg}</div>
                      <div className="text-sm">
                        <div className="font-medium text-gray-800">
                          {item.fr}
                        </div>
                        <div className="text-gray-500 text-xs">{item.en}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Age Range */}
              <div className="mt-8 p-4 bg-gradient-to-r from-[#2d7a3e]/10 to-[#4a9d5a]/10 rounded-xl border border-[#2d7a3e]/20">
                <p className="text-center">
                  <span className="font-bold text-gray-900">Âge / Age:</span>{' '}
                  <span className="text-[#2d7a3e] font-semibold">2-5 ans / years</span>
                </p>
              </div>
            </div>
          </div>

          {/* Primaire Program */}
          <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Decorative Header */}
            <div className="h-3 bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#d4af37]"></div>

            <div className="p-8 sm:p-10">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Primaire</h3>
                  <p className="text-[#1e40af] font-medium text-lg">
                    Primary School
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                Notre programme primaire bilingue prépare les élèves à
                l&apos;excellence académique avec un curriculum rigoureux en
                français et en anglais.
              </p>
              <p className="text-gray-600 text-sm italic mb-8">
                Our bilingual primary program prepares students for academic
                excellence with a rigorous curriculum in French and English.
              </p>

              {/* Key Features */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#1e40af] rounded-full"></span>
                  Matières / Subjects:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {primaireSubjects.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-[#eff6ff] rounded-xl hover:bg-[#1e40af]/10 transition-colors"
                    >
                      <div className="text-[#1e40af] flex-shrink-0">{item.svg}</div>
                      <div className="text-sm">
                        <div className="font-medium text-gray-800">
                          {item.fr}
                        </div>
                        <div className="text-gray-500 text-xs">{item.en}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grade Range */}
              <div className="mt-8 p-4 bg-gradient-to-r from-[#1e40af]/10 to-[#3b82f6]/10 rounded-xl border border-[#1e40af]/20">
                <p className="text-center">
                  <span className="font-bold text-gray-900">
                    Classes / Grades:
                  </span>{' '}
                  <span className="text-[#1e40af] font-semibold">
                    SIL - CM2 / P1-P6
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bilingual Sections Info */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#2d7a3e] via-[#1e5a2e] to-[#1e40af] rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-8">
              Sections Bilingues / Bilingual Sections
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Francophone Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold">Section Francophone</h4>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Programme complet en français suivant le curriculum national
                  camerounais, avec des cours d&apos;anglais renforcés.
                </p>
                <p className="text-white/70 text-sm mt-3 italic">
                  Complete program in French following the Cameroonian national
                  curriculum, with reinforced English courses.
                </p>
              </div>

              {/* Anglophone Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold">Anglophone Section</h4>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Full English-based curriculum following the Cameroonian
                  anglophone system, with strengthened French language
                  instruction.
                </p>
                <p className="text-white/70 text-sm mt-3 italic">
                  Programme complet en anglais suivant le système anglophone
                  camerounais, avec enseignement renforcé du français.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

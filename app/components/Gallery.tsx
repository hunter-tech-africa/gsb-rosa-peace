'use client';

import { useState, useEffect } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Photos de l'école
  const photos = [
    { id: 1, title: 'Fête de la Jeunesse 2026 - Staff Enseignant', category: 'Événements', src: '/gallery/photos/Fete-de-la-jeunesse-2026_Rose-staff-enseignant.jpeg' },
    { id: 2, title: 'Fête de la Jeunesse 2026 - Équipe', category: 'Événements', src: '/gallery/photos/Fete-de-la-jeunesse-2026_Rose-staff-enseignant-2.jpeg' },
    { id: 3, title: 'Fête des Enseignants 2026', category: 'Événements', src: '/gallery/photos/Fete-des-enseignants-2026.jpeg' },
    { id: 4, title: 'Journée Gastronomique Février 2026', category: 'Événements', src: '/gallery/photos/Journee-Gastronomique-frevier-2026.jpeg' },
    { id: 5, title: 'Remise des Parchemins Maternelle 1', category: 'Cérémonie', src: '/gallery/photos/Les eleves en fin de cycle maternelle-ont recu-leurs-parchemins-1.jpeg' },
    { id: 6, title: 'Remise des Parchemins Maternelle 2', category: 'Cérémonie', src: '/gallery/photos/Les eleves en fin de cycle maternelle-ont recu-leurs-parchemins-2.jpeg' },
    { id: 7, title: 'Remise des Parchemins Maternelle', category: 'Cérémonie', src: '/gallery/photos/Les eleves en fin de cycle maternelle-ont recu-leurs-parchemins.jpeg' },
    { id: 8, title: 'Activités Scolaires 1', category: 'Vie Scolaire', src: '/gallery/photos/WhatsApp Image 2026-03-24 at 17.50.56.jpeg' },
    { id: 9, title: 'Activités Scolaires 2', category: 'Vie Scolaire', src: '/gallery/photos/WhatsApp Image 2026-03-24 at 17.50.59.jpeg' },
    { id: 10, title: 'Activités Scolaires 3', category: 'Vie Scolaire', src: '/gallery/photos/WhatsApp Image 2026-03-24 at 17.51.00.jpeg' },
    { id: 11, title: 'Activités Scolaires 4', category: 'Vie Scolaire', src: '/gallery/photos/WhatsApp Image 2026-03-24 at 17.51.00 (1).jpeg' },
    { id: 12, title: 'Événement Scolaire 1', category: 'Événements', src: '/gallery/photos/2026-03-24-at-17.51.01.jpeg' },
    { id: 13, title: 'Événement Scolaire 2', category: 'Événements', src: '/gallery/photos/2026-03-24-at-17.51.01(1).jpeg' },
    { id: 14, title: 'Événement Scolaire 3', category: 'Événements', src: '/gallery/photos/2026-03-24-at-17.51.02.jpeg' },
    { id: 15, title: 'Événement Scolaire 4', category: 'Événements', src: '/gallery/photos/2026-03-24-at-17.51.02 (1).jpeg' },
    { id: 16, title: 'Activités de Classe 1', category: 'Vie Scolaire', src: '/gallery/photos/2026-03-24-at-17.51.03 (1).jpeg' },
    { id: 17, title: 'Activités de Classe 2', category: 'Vie Scolaire', src: '/gallery/photos/2026-03-24-at-17.51.04.jpeg' },
    { id: 18, title: 'Activités de Classe 3', category: 'Vie Scolaire', src: '/gallery/photos/2026-03-24-at-17.51.04 (1).jpeg' },
    { id: 19, title: 'Activités de Classe 4', category: 'Vie Scolaire', src: '/gallery/photos/2026-03-24-at-17.51.05.jpeg' },
  ];

  // Vidéos de l'école
  const videos = [
    { id: 1, title: 'Fête de l\'Arbre de Noël 2025', category: 'Événements', src: '/gallery/videos/Fete-de-larbre-de noel-2025.mp4' },
    { id: 2, title: 'Fête de l\'Arbre de Noël 2025 - Partie 2', category: 'Événements', src: '/gallery/videos/Fete-de-larbre-de noel-2025-2.mp4' },
    { id: 3, title: 'Fête de l\'Arbre de Noël 2025 - Partie 3', category: 'Événements', src: '/gallery/videos/Fete-de-larbre-de noel-2025-3.mp4' },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlay && activeTab === 'photos') {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlay, activeTab, photos.length]);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    setIsAutoPlay(false);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setIsAutoPlay(false);
  };

  const goToPhoto = (index: number) => {
    setCurrentPhotoIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Galerie
            <span className="block text-2xl sm:text-3xl text-[#2d7a3e] mt-2">
              Gallery
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2d7a3e] to-[#d4af37] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre école en images et vidéos
            <span className="block mt-2 italic text-gray-500">
              Discover our school through photos and videos
            </span>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-gray-100 p-1 shadow-inner">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'bg-[#2d7a3e] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Photos
              </span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-[#2d7a3e] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Vidéos
              </span>
            </button>
          </div>
        </div>

        {/* Photos Carousel */}
        {activeTab === 'photos' && (
          <div className="max-w-6xl mx-auto">
            {/* Main Carousel */}
            <div className="relative group">
              {/* Current Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
                <div className="aspect-[16/10]">
                  <img
                    src={photos[currentPhotoIndex].src}
                    alt={photos[currentPhotoIndex].title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                  <span className="inline-block px-3 py-1 bg-[#2d7a3e] text-white text-xs font-semibold rounded-full mb-2">
                    {photos[currentPhotoIndex].category}
                  </span>
                  <h3 className="text-white font-bold text-xl mb-1">
                    {photos[currentPhotoIndex].title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    Photo {currentPhotoIndex + 1} sur {photos.length}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Photo précédente"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Photo suivante"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Auto-play Toggle */}
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="absolute top-4 right-4 px-4 py-2 bg-white/90 hover:bg-white rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  {isAutoPlay ? (
                    <>
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-800">Pause</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-800">Play</span>
                    </>
                  )}
                </button>
              </div>

              {/* Thumbnails */}
              <div className="mt-6 overflow-x-auto">
                <div className="flex gap-3 pb-4">
                  {photos.map((photo, index) => (
                    <button
                      key={photo.id}
                      onClick={() => goToPhoto(index)}
                      className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                        index === currentPhotoIndex
                          ? 'ring-4 ring-[#2d7a3e] scale-110'
                          : 'opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                      {index === currentPhotoIndex && (
                        <div className="absolute inset-0 bg-[#2d7a3e]/20"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPhoto(index)}
                    className={`transition-all duration-300 ${
                      index === currentPhotoIndex
                        ? 'w-8 h-2 bg-[#2d7a3e] rounded-full'
                        : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                    }`}
                    aria-label={`Aller à la photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Real Video */}
                <div className="aspect-video bg-black">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>

                {/* Video Info */}
                <div className="p-4 bg-white">
                  <span className="inline-block px-3 py-1 bg-[#1e40af]/10 text-[#1e40af] text-xs font-semibold rounded-full mb-2">
                    {video.category}
                  </span>
                  <h3 className="font-bold text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#2d7a3e]/10 to-[#4a9d5a]/10 rounded-2xl p-6 text-center border border-[#2d7a3e]/20">
              <div className="text-4xl font-bold text-[#2d7a3e] mb-2">{photos.length}</div>
              <div className="text-gray-700 font-medium">Photos</div>
              <div className="text-gray-500 text-sm">d&apos;événements</div>
            </div>
            <div className="bg-gradient-to-br from-[#1e40af]/10 to-[#3b82f6]/10 rounded-2xl p-6 text-center border border-[#1e40af]/20">
              <div className="text-4xl font-bold text-[#1e40af] mb-2">{videos.length}</div>
              <div className="text-gray-700 font-medium">Vidéos</div>
              <div className="text-gray-500 text-sm">disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#eac54f]/10 rounded-2xl p-6 text-center border border-[#d4af37]/20">
              <div className="text-4xl font-bold text-[#d4af37] mb-2">2017</div>
              <div className="text-gray-700 font-medium">Fondation</div>
              <div className="text-gray-500 text-sm">Année de création</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

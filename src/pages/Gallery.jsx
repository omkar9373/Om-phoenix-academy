import { useState, useEffect, useCallback } from 'react';
import { 
  Sparkles, 
  Award, 
  GraduationCap, 
  Building2, 
  Image as ImageIcon, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2 
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { galleryCategories, galleryItems } from '../data/gallery';

const categoryIcons = {
  'All': ImageIcon,
  'Felicitations & Awards': Award,
  'Celebrations & Events': Sparkles,
  'Academic Toppers': GraduationCap,
  'Academy Life': Building2,
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  }, [selectedImageIndex, filteredItems.length]);

  const goToNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => 
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [selectedImageIndex, filteredItems.length]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, goToPrevious, goToNext]);

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <div className="py-4 sm:py-6 bg-slate-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-primary-100 text-primary-800 text-xs font-bold tracking-wider uppercase mb-3 border border-primary-200">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            Academy Memories & Moments
          </span>
          <SectionTitle 
            title="Our Photo Gallery" 
            subtitle="Explore memorable milestones, faculty & student felicitations, celebrations, and achievements at Om Phoenix Learning Academy." 
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6">
          {galleryCategories.map((category) => {
            const Icon = categoryIcons[category] || ImageIcon;
            const count = category === 'All' 
              ? galleryItems.length 
              : galleryItems.filter(i => i.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedImageIndex(null);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{category}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-primary-700/50 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:shadow-primary-500/15 hover:border-primary-300 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer flex flex-col"
            >
              {/* Image Container with fixed height and neutral background for clean framing */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                {/* Ambient blurred background */}
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-110 pointer-events-none"
                />

                {/* Main full image: object-contain ensures 100% of the flyer is visible without clipping */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative z-1 max-h-full max-w-full w-auto h-auto object-contain p-1.5 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm border border-white/40">
                    {item.tag}
                  </span>
                </div>

                {/* Center Hover Expand Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-primary-600/90 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 backdrop-blur-xs">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom title text preview on image - visible on hover so it does not block the poster text */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1 mt-1 opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Info bar */}
              <div className="p-3.5 bg-white flex items-center justify-between border-t border-slate-100">
                <div className="truncate pr-2">
                  <span className="text-xs font-semibold text-slate-800 truncate block">
                    {item.title}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {item.category}
                  </span>
                </div>
                <span className="text-xs font-semibold text-primary-600 shrink-0 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  View Photo &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <ImageIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No photos in this category</h3>
            <p className="text-slate-500 text-sm mt-1">Please select another category above to view photos.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && currentItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Navigation - Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Modal Content Box */}
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/15 shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <div className="flex-1 bg-black/60 flex items-center justify-center min-h-[350px] md:min-h-[500px] max-h-[70vh] md:max-h-[85vh] p-2">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[65vh] md:max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Sidebar Details */}
            <div className="w-full md:w-80 p-6 flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-white/10 text-white">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-300 border border-primary-500/30">
                    {currentItem.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedImageIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug mb-3">
                  {currentItem.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {currentItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-xs text-slate-400 mb-2">Category</div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary-400" />
                  {currentItem.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

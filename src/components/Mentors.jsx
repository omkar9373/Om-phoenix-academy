import { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Clock, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Users 
} from 'lucide-react';
import { mentors } from '../data/mentors';
import './Mentors.css';

const Mentors = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [activeDot, setActiveDot] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const carouselRef = useRef(null);

  // Responsive itemsPerPage calculation
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // Update scroll buttons state & active dot
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 8);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);

      const firstChild = carouselRef.current.children[0];
      if (firstChild) {
        const cardWidth = firstChild.offsetWidth;
        const gap = 24;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveDot(Math.max(0, Math.min(index, mentors.length - 1)));
      }
    }
  };

  useEffect(() => {
    handleScroll();
  }, [itemsPerPage]);

  // Scroll to specific mentor index
  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const targetChild = carouselRef.current.children[index];
      if (targetChild) {
        targetChild.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        setActiveDot(index);
      }
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const firstChild = carouselRef.current.children[0];
      const step = firstChild ? firstChild.offsetWidth + 24 : 300;
      carouselRef.current.scrollBy({ left: -step, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const firstChild = carouselRef.current.children[0];
      const step = firstChild ? firstChild.offsetWidth + 24 : 300;
      carouselRef.current.scrollBy({ left: step, behavior: 'smooth' });
    }
  };

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedMentor) {
        setSelectedMentor(null);
      }
    };

    if (selectedMentor) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMentor]);

  // Total pagination dots based on screen view
  const totalDots = Math.max(1, mentors.length - itemsPerPage + 1);

  return (
    <section 
      className="py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden relative"
      id="mentors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 border border-[#168BD1]/20">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            Faculty & Mentors
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F35] tracking-tight mb-4">
            Meet Our Expert Mentors & Teachers
          </h2>
          <div className="w-20 h-1.5 bg-[#168BD1] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Learn from experienced educators who inspire, guide, and empower students to achieve academic excellence.
          </p>
        </div>

        {/* 2. Responsive Teacher Cards Carousel */}
        <div className="relative">
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 lg:gap-8 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-4 -my-4 px-1"
          >
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 snap-start flex flex-col"
              >
                <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(10,31,53,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(22,139,209,0.18)] hover:border-[#168BD1]/40 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full overflow-hidden group">
                  
                  {/* 1. Teacher Image / Promotional Poster */}
                  <div className="p-3.5 sm:p-4 pb-0">
                    <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-xs">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className={`w-full h-full object-cover ${mentor.imagePosition || 'object-top'} transform group-hover:scale-105 transition-transform duration-500 ease-out`}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 pt-4 flex-grow flex flex-col">
                    {/* 2. Subject Badge */}
                    <div className="mb-2.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#E8F5FC] text-[#168BD1] border border-[#168BD1]/20">
                        {mentor.subject}
                      </span>
                    </div>

                    {/* 3. Teacher Name in Bold */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A1F35] tracking-tight group-hover:text-[#168BD1] transition-colors duration-200">
                      {mentor.name}
                    </h3>

                    {/* 4. Educational Qualification */}
                    <p className="text-sm font-semibold text-slate-500 mt-1">
                      ({mentor.qualification})
                    </p>

                    {/* 5. Thin Horizontal Divider */}
                    <div className="border-t border-slate-100 my-4" />

                    {/* 6. Experience Information with Clock Icon */}
                    <div className="flex items-center text-sm font-semibold text-slate-700">
                      <Clock className="w-4 h-4 mr-2 text-[#F59E0B] shrink-0" />
                      <span>Exp: {mentor.experience}</span>
                    </div>

                    {/* 7. View Profile Button */}
                    <div className="mt-auto pt-5">
                      <button
                        onClick={() => setSelectedMentor(mentor)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#E8F5FC] hover:bg-[#168BD1] text-[#0A1F35] hover:text-white font-bold text-sm transition-all duration-300 group/btn border border-[#168BD1]/20 hover:border-[#168BD1] shadow-xs hover:shadow-md cursor-pointer"
                        aria-label={`View profile of ${mentor.name}`}
                      >
                        <span>View Profile</span>
                        <span className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-white/20 text-[#168BD1] group-hover/btn:text-white flex items-center justify-center transition-all duration-300 transform group-hover/btn:translate-x-1 shadow-xs">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Carousel Controls (Navigation Arrows & Pagination Dots) */}
        <div className="flex flex-col items-center justify-center gap-3 mt-10">
          {/* Previous / Next Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#E8F5FC] text-[#0A1F35] hover:text-[#168BD1] border border-slate-200/80 hover:border-[#168BD1]/30 shadow-sm hover:shadow flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous mentor"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#E8F5FC] text-[#0A1F35] hover:text-[#168BD1] border border-slate-200/80 hover:border-[#168BD1]/30 shadow-sm hover:shadow flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next mentor"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2 mt-1">
            {Array.from({ length: totalDots }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => scrollToSlide(dotIndex)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDot === dotIndex
                    ? 'w-7 bg-[#168BD1]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Profile Detail Modal */}
      {selectedMentor && (
        <div 
          className="fixed inset-0 z-50 bg-[#0A1F35]/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 mentor-modal-overlay"
          onClick={() => setSelectedMentor(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="mentor-modal-card relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedMentor(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-black shadow-md flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
              aria-label="Close mentor profile"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Left Image Column */}
            <div className="w-full md:w-5/12 bg-gradient-to-br from-[#0A1F35] to-[#168BD1] relative flex items-center justify-center p-6 min-h-[240px] md:min-h-[360px]">
              <div className="relative w-44 h-52 sm:w-52 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 bg-[#0A1F35]">
                <img
                  src={selectedMentor.image}
                  alt={selectedMentor.name}
                  className={`w-full h-full object-cover ${selectedMentor.imagePosition || 'object-top'}`}
                />
              </div>
            </div>

            {/* Modal Right Details Column */}
            <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Subject & Experience Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8F5FC] text-[#168BD1] border border-[#168BD1]/20">
                    {selectedMentor.subject}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {selectedMentor.experience}
                  </span>
                </div>

                {/* Name */}
                <h3 id="modal-title" className="text-2xl font-extrabold text-[#0A1F35]">
                  {selectedMentor.name}
                </h3>

                {/* Qualification */}
                <div className="flex items-center text-sm font-semibold text-[#168BD1] mt-1 mb-4">
                  <GraduationCap className="w-4 h-4 mr-1.5 shrink-0" />
                  <span>{selectedMentor.qualification}</span>
                </div>

                {/* Professional Description */}
                <div className="space-y-3 mb-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedMentor.description}
                  </p>
                  {selectedMentor.fullBio && (
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {selectedMentor.fullBio}
                    </p>
                  )}
                </div>

                {/* Key Specialties */}
                {selectedMentor.specialties && (
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Specialties
                    </h4>
                    <div className="space-y-1.5">
                      {selectedMentor.specialties.map((item, i) => (
                        <div key={i} className="flex items-center text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Quick Stats */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Users className="w-4 h-4 text-[#168BD1]" />
                  <span>{selectedMentor.studentsMentored || '1,000+'} Students Mentored</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                  <Award className="w-4 h-4" />
                  <span>Verified Mentor</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Mentors;

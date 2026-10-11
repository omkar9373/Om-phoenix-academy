import { Link } from 'react-router-dom';
import { 
  Presentation, 
  GraduationCap, 
  Laptop, 
  FlaskConical, 
  Calculator, 
  BookOpen, 
  Monitor, 
  School, 
  MessageCircleQuestion, 
  ShieldCheck, 
  Compass, 
  UsersRound,
  Users,
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Eye,
  Check
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { 
  facilitiesList, 
  featuredFacilities, 
  galleryImages, 
  facilityMatters 
} from '../data/facilities';

// Icon mapping for dynamic rendering
const iconMap = {
  Presentation,
  GraduationCap,
  Laptop,
  FlaskConical,
  Calculator,
  BookOpen,
  Monitor,
  School,
  MessageCircleQuestion,
  ShieldCheck,
  Compass,
  UsersRound,
  Users
};

const Facilities = () => {
  return (
    <div className="bg-white">

      {/* =====================================================
          1. FACILITIES HERO SECTION
      ====================================================== */}
      <section 
        className="relative min-h-[580px] md:min-h-[640px] flex items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/facilities/facilities-hero.png')"
        }}
      >
        {/* Dark Navy Overlays */}
        <div className="absolute inset-0 bg-[#0A1F35]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F35]/95 via-[#0A1F35]/85 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="max-w-3xl">
            {/* Small Badge */}
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#F59E0B] text-white text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              World-Class Learning Infrastructure
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              World-Class Facilities for{' '}
              <span className="text-[#F59E0B]">Better Learning</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl leading-relaxed">
              At Om Phoenix Learning Academy, we provide a comfortable, modern and student-friendly learning environment designed to support academic excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#facilities-grid"
                className="inline-flex justify-center items-center px-8 py-4 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 shadow-xl hover:scale-105"
              >
                <span>Explore Our Facilities</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>

              <Link
                to="/admission"
                className="inline-flex justify-center items-center px-8 py-4 bg-white hover:bg-slate-100 text-[#0A1F35] font-bold text-base sm:text-lg rounded-full transition-all duration-300 shadow-xl hover:scale-105"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          2. INTRODUCTION SECTION (Two Column)
      ====================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Academy / Classroom Image */}
            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-slate-100 aspect-[4/3] border border-slate-100">
                  <img
                    src="/images/facilities/smart-classroom.jpg"
                    alt="Om Phoenix Learning Academy Smart Classroom"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F35]/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>

                {/* Floating highlight card */}
                <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-4 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F5FC] text-[#168BD1] flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xl font-extrabold text-[#0A1F35] block">Smart Campus</span>
                    <span className="text-xs text-slate-500 font-medium">Technology-driven coaching ecosystem</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Content & Checklist */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div>
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 border border-[#168BD1]/20">
                  OUR FACILITIES
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F35] tracking-tight leading-tight">
                  Everything Students Need to Learn, Grow & Succeed
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Om Phoenix Learning Academy is committed to creating an environment where students can focus on learning, develop their skills and achieve their academic goals. Our facilities are designed with comfort, technology, safety and effective learning in mind.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Comfortable Learning Environment",
                  "Modern Teaching Resources",
                  "Student-Friendly Campus",
                  "Safe & Secure Environment"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-700 font-semibold text-sm sm:text-base">
                    <div className="w-6 h-6 rounded-full bg-[#E8F5FC] text-[#168BD1] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <a
                  href="#featured-facilities"
                  className="inline-flex items-center px-7 py-3.5 bg-[#0A1F35] hover:bg-[#168BD1] text-white font-bold text-base rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#168BD1]/25 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          3. FACILITIES GRID (12 Cards)
      ====================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50/70" id="facilities-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 border border-[#168BD1]/20">
              Campus Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F35] tracking-tight mb-4">
              Our Facilities
            </h2>
            <div className="w-20 h-1.5 bg-[#168BD1] mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Modern facilities designed to make learning more engaging, comfortable and effective.
            </p>
          </div>

          {/* Grid: 4 cols Desktop, 2 cols Tablet, 1 col Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {facilitiesList.map((facility) => {
              const IconComp = iconMap[facility.icon] || Presentation;
              return (
                <div
                  key={facility.id}
                  className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(10,31,53,0.06)] hover:shadow-[0_20px_35px_-10px_rgba(22,139,209,0.18)] hover:border-[#168BD1]/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col h-full"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#E8F5FC] text-[#168BD1] flex items-center justify-center mb-5 group-hover:bg-[#168BD1] group-hover:text-white transition-all duration-300 shadow-xs">
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0A1F35] mb-2.5 group-hover:text-[#168BD1] transition-colors duration-200">
                    {facility.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mt-auto">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          4. FEATURED FACILITY SECTIONS (3 Alternating Layouts)
      ====================================================== */}
      <section className="py-20 lg:py-28 bg-white" id="featured-facilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">

          {/* Section 1: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-1 lg:order-1">
              <div className="relative group overflow-hidden rounded-3xl shadow-xl bg-slate-100 aspect-[16/10] border border-slate-100">
                <img
                  src="/images/facilities/smart-classroom.jpg"
                  alt="Smart & Interactive Classrooms"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F35]/30 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="lg:col-span-6 order-2 lg:order-2 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#E8F5FC] text-[#168BD1] border border-[#168BD1]/20">
                FEATURED FACILITY 01
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F35] tracking-tight">
                Smart & Interactive Classrooms
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our classrooms combine traditional teaching with modern technology to make lessons more engaging and easier to understand.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Interactive teaching",
                  "Visual learning resources",
                  "Comfortable seating",
                  "Focused learning environment"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-slate-700 font-semibold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#168BD1] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  to="/courses"
                  className="inline-flex items-center px-7 py-3.5 bg-[#0A1F35] hover:bg-[#168BD1] text-white font-bold text-base rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#168BD1]/25 group"
                >
                  <span>Explore Learning</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>


          {/* Section 2: Content Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#E8F5FC] text-[#168BD1] border border-[#168BD1]/20">
                FEATURED FACILITY 02
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F35] tracking-tight">
                Learning Beyond the Classroom
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Students at Om Phoenix get opportunities to participate in academic activities, projects, discussions, competitions and skill-building sessions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Academic activities",
                  "Projects & presentations",
                  "Competitions",
                  "Skill development"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-slate-700 font-semibold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#168BD1] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center px-7 py-3.5 bg-[#0A1F35] hover:bg-[#168BD1] text-white font-bold text-base rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#168BD1]/25 group"
                >
                  <span>Discover More</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative group overflow-hidden rounded-3xl shadow-xl bg-slate-100 aspect-[16/10] border border-slate-100">
                <img
                  src="/images/facilities/interactive-learning.jpg"
                  alt="Learning Beyond the Classroom"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F35]/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>


          {/* Section 3: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-1 lg:order-1">
              <div className="relative group overflow-hidden rounded-3xl shadow-xl bg-slate-100 aspect-[16/10] border border-slate-100">
                <img
                  src="/images/facilities/science-lab.jpg"
                  alt="Safe, Clean & Student-Friendly Environment"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F35]/30 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="lg:col-span-6 order-2 lg:order-2 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#E8F5FC] text-[#168BD1] border border-[#168BD1]/20">
                FEATURED FACILITY 03
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F35] tracking-tight">
                Safe, Clean & Student-Friendly Environment
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We maintain a welcoming environment where students can learn comfortably, interact with teachers and focus on their academic development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Clean classrooms",
                  "Student-friendly atmosphere",
                  "Safe environment",
                  "Supportive teachers"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-slate-700 font-semibold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#168BD1] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-7 py-3.5 bg-[#0A1F35] hover:bg-[#168BD1] text-white font-bold text-base rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#168BD1]/25 group"
                >
                  <span>Visit Campus</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          5. FACILITY IMAGE GALLERY ("Explore Our Campus")
      ====================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50/70" id="campus-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Gallery Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 border border-[#168BD1]/20">
              Campus Tour
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F35] tracking-tight mb-4">
              Explore Our Campus
            </h2>
            <div className="w-20 h-1.5 bg-[#168BD1] mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Take a glimpse at the learning environment and facilities at Om Phoenix Learning Academy.
            </p>
          </div>

          {/* Modern Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden rounded-2xl shadow-md border border-slate-200/80 bg-slate-100 ${item.span} min-h-[260px] md:min-h-[300px]`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle Overlay with title & category */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F35]/90 via-[#0A1F35]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="inline-block text-xs font-bold tracking-wider uppercase text-[#F59E0B] mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          6. WHY OUR FACILITIES MATTER (Light Blue Section)
      ====================================================== */}
      <section className="py-20 lg:py-24 bg-[#E8F5FC] border-y border-[#168BD1]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white text-[#168BD1] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-xs border border-[#168BD1]/20">
              Value for Students
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F35] tracking-tight mb-4">
              Designed Around Student Success
            </h2>
            <div className="w-20 h-1.5 bg-[#F59E0B] mx-auto rounded-full mb-6"></div>
          </div>

          {/* 4 Features with large icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityMatters.map((item) => {
              const IconComp = iconMap[item.icon] || School;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-7 text-center border border-[#168BD1]/20 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  {/* Large Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#E8F5FC] text-[#168BD1] flex items-center justify-center mb-5 group-hover:bg-[#168BD1] group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComp className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0A1F35] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          7. CALL TO ACTION (Full-width Dark Navy)
      ====================================================== */}
      <section className="py-20 lg:py-24 bg-[#0A1F35] text-white relative overflow-hidden">
        {/* Subtle background glow accents */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#168BD1]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-white/10 text-[#F59E0B] text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 border border-white/15">
            <Sparkles className="w-4 h-4" />
            Admissions Open 2026-27
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Experience the Om Phoenix Learning Environment
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Give your child the right environment, guidance and support to build a strong academic future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/admission"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:scale-105"
            >
              <span>Enquire Now</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#168BD1] hover:bg-[#0f6da7] text-white font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:scale-105"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Facilities;

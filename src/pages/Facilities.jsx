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
  Check
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { 
  facilitiesList, 
  featuredFacilities, 
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
        className="relative py-12 sm:py-16 lg:py-20 flex items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/facilities/facilities-hero.png')"
        }}
      >
        {/* Refined Gradient Overlay: clear visibility for background while ensuring high contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F35]/95 via-[#0A1F35]/70 to-[#0A1F35]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F35]/60 via-transparent to-black/20"></div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 py-4 sm:py-6">
          <div className="max-w-3xl">
            {/* Small Badge */}
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] text-white text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 shadow-lg">
              <Sparkles className="w-4 h-4" />
              World-Class Learning Infrastructure
            </span>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight text-white">
              World-Class Facilities for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd166] via-[#ffb800] to-[#ff5e00]">
                Better Learning
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-100 mb-6 max-w-2xl leading-relaxed">
              At Om Phoenix Learning Academy, we provide a comfortable, modern and student-friendly learning environment designed to support academic excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#facilities-grid"
                className="inline-flex justify-center items-center px-7 py-3 bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] hover:from-[#f59e0b] hover:via-[#ea580c] hover:to-[#dc2626] text-white font-bold text-base rounded-full transition-all duration-300 shadow-xl hover:scale-105"
              >
                <span>Explore Our Facilities</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <Link
                to="/admission"
                className="inline-flex justify-center items-center px-7 py-3 bg-white hover:bg-slate-100 text-[#0A1F35] font-bold text-base rounded-full transition-all duration-300 shadow-xl hover:scale-105"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. FACILITIES GRID (12 Cards)
      ====================================================== */}
      <section className="py-6 sm:py-8 bg-slate-50/70" id="facilities-grid">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="inline-block py-1 px-3.5 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 border border-[#168BD1]/20">
              Campus Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1F35] tracking-tight mb-3">
              Our Facilities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3"></div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Modern facilities designed to make learning more engaging, comfortable and effective.
            </p>
          </div>

          {/* Grid: 4 cols Desktop, 2 cols Tablet, 1 col Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
            {facilitiesList.map((facility) => {
              const IconComp = iconMap[facility.icon] || Presentation;
              return (
                <div
                  key={facility.id}
                  className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#168BD1]/15 hover:border-[#168BD1]/50 transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col h-full"
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#E8F5FC] text-[#168BD1] flex items-center justify-center mb-4 group-hover:bg-[#168BD1] group-hover:text-white group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 ease-out shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0A1F35] mb-2 group-hover:text-[#168BD1] transition-colors duration-200">
                    {facility.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-auto">
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
      <section className="py-6 sm:py-8 bg-white" id="featured-facilities">
        <div className="w-full px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-12">

          {/* Section 1: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-1 lg:order-1">
              <div className="relative group overflow-hidden rounded-3xl shadow-lg bg-slate-100 aspect-[16/10] border border-slate-100">
                <img
                  src="/images/facilities/smart-classroom.jpg"
                  alt="Smart & Interactive Classrooms"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F35]/30 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="lg:col-span-6 order-2 lg:order-2 space-y-4">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#E8F5FC] text-[#168BD1] border border-[#168BD1]/20">
                FEATURED FACILITY 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F35] tracking-tight">
                Smart & Interactive Classrooms
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our classrooms combine traditional teaching with modern technology to make lessons more engaging and easier to understand.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  "Interactive teaching",
                  "Visual learning resources",
                  "Comfortable seating",
                  "Focused learning environment"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-slate-700 font-semibold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#168BD1] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/courses"
                  className="inline-flex items-center px-6 py-2.5 bg-[#0A1F35] hover:bg-[#168BD1] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#168BD1]/25 group"
                >
                  <span>Explore Learning</span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>


          {/* Section 2: Content Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#E8F5FC] text-[#168BD1] border border-[#168BD1]/20">
                FEATURED FACILITY 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F35] tracking-tight">
                Learning Beyond the Classroom
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Students at Om Phoenix get opportunities to participate in academic activities, projects, discussions, competitions and skill-building sessions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  "Academic activities",
                  "Projects & presentations",
                  "Competitions",
                  "Skill development"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-slate-700 font-semibold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#168BD1] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-2.5 bg-[#0A1F35] hover:bg-[#168BD1] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#168BD1]/25 group"
                >
                  <span>Discover More</span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative group overflow-hidden rounded-3xl shadow-lg bg-slate-100 aspect-[16/10] border border-slate-100">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-1 lg:order-1">
              <div className="relative group overflow-hidden rounded-3xl shadow-lg bg-slate-100 aspect-[16/10] border border-slate-100">
                <img
                  src="/images/facilities/science-lab.jpg"
                  alt="Safe, Clean & Student-Friendly Environment"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F35]/30 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="lg:col-span-6 order-2 lg:order-2 space-y-4">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#E8F5FC] text-[#168BD1] border border-[#168BD1]/20">
                FEATURED FACILITY 03
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F35] tracking-tight">
                Safe, Clean & Student-Friendly Environment
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We maintain a welcoming environment where students can learn comfortably, interact with teachers and focus on their academic development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  "Clean classrooms",
                  "Student-friendly atmosphere",
                  "Safe environment",
                  "Supportive teachers"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-slate-700 font-semibold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#168BD1] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-2.5 bg-[#0A1F35] hover:bg-[#168BD1] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#168BD1]/25 group"
                >
                  <span>Visit Campus</span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>





      {/* =====================================================
          6. WHY OUR FACILITIES MATTER (Light Blue Section)
      ====================================================== */}
      <section className="py-6 sm:py-8 bg-[#E8F5FC] border-y border-[#168BD1]/15">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="inline-block py-1 px-3.5 rounded-full bg-white text-[#168BD1] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 shadow-xs border border-[#168BD1]/20">
              Value for Students
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1F35] tracking-tight mb-3">
              Designed Around Student Success
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3"></div>
          </div>

          {/* 4 Features with large icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {facilityMatters.map((item) => {
              const IconComp = iconMap[item.icon] || School;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-[#168BD1]/20 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  {/* Large Icon */}
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#E8F5FC] text-[#168BD1] flex items-center justify-center mb-4 group-hover:bg-[#168BD1] group-hover:text-white transition-all duration-300 shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0A1F35] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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
      <section className="py-8 sm:py-10 bg-[#0A1F35] text-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#168BD1]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-white/10 text-[#F59E0B] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 border border-white/15">
            <Sparkles className="w-4 h-4" />
            Admissions Open 2026-27
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 leading-tight text-white !text-white">
            Experience the Om Phoenix Learning Environment
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-6 leading-relaxed">
            Give your child the right environment, guidance and support to build a strong academic future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/admission"
              className="btn-flame w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-white font-bold text-base rounded-full transition-all duration-300 shadow-xl hover:scale-105"
            >
              <span>Enquire Now</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-[#168BD1] hover:bg-[#0f6da7] text-white font-bold text-base rounded-full transition-all duration-300 shadow-xl hover:scale-105"
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

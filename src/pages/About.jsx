import { Link } from 'react-router-dom';
import {
  Users,
  GraduationCap,
  BookOpen,
  Target,
  Lightbulb,
  ClipboardCheck,
  UserRoundCheck,
  MessageCircleQuestion,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Heart,
  Award,
  Compass,
} from 'lucide-react';

import grandOpeningImg from '../assets/grand-opning.jpeg';
import admissionBannerImg from '../assets/adsmition.jpeg';
import vedikaResultImg from '../assets/vedika.jpeg';
import harshadaResultImg from '../assets/harshada.jpeg';
import aniketResultImg from '../assets/aniket.jpeg';

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '10+',   label: 'Experienced Faculty',    icon: Users },
  { value: '500+',  label: 'Students Guided',         icon: GraduationCap },
  { value: '95%+',  label: 'Academic Focus',          icon: BookOpen },
  { value: '100%',  label: 'Commitment to Students',  icon: Target },
];

const whyCards = [
  {
    icon: Users,
    title: 'Experienced Faculty',
    desc: 'Learn from dedicated educators who guide students through every stage of their academic journey.',
  },
  {
    icon: Lightbulb,
    title: 'Concept-Based Learning',
    desc: 'Strong emphasis on understanding concepts instead of memorising information.',
  },
  {
    icon: ClipboardCheck,
    title: 'Regular Assessments',
    desc: 'Regular tests and assessments help students understand their progress.',
  },
  {
    icon: UserRoundCheck,
    title: 'Personalised Guidance',
    desc: 'Individual attention and guidance help students identify and improve their weak areas.',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Doubt-Solving Support',
    desc: 'Students receive support to clarify questions and strengthen their understanding.',
  },
  {
    icon: TrendingUp,
    title: 'Student Development',
    desc: 'Focus on confidence, discipline, problem-solving and overall academic development.',
  },
];

const steps = [
  { num: '01', title: 'Understand', desc: 'Build strong conceptual foundations.' },
  { num: '02', title: 'Practice',   desc: 'Solve examples and practice questions.' },
  { num: '03', title: 'Assess',     desc: 'Regular tests to measure progress.' },
  { num: '04', title: 'Improve',    desc: 'Identify mistakes and strengthen weak areas.' },
  { num: '05', title: 'Achieve',    desc: 'Work confidently towards academic goals.' },
];

const commitments = [
  { icon: Award,   title: 'Academic Excellence',         desc: 'Dedicated to helping every student reach their academic best.' },
  { icon: Heart,   title: 'Personal Attention',          desc: 'One-on-one guidance tailored to each student\'s needs.' },
  { icon: TrendingUp, title: 'Continuous Improvement',   desc: 'Regular feedback and progress tracking to keep students on track.' },
  { icon: Compass, title: 'Positive Learning Environment', desc: 'A safe, inclusive atmosphere that encourages curiosity and growth.' },
];

const achievementImgs = [
  { src: vedikaResultImg,   alt: 'Vedika Bansode – Student Achievement' },
  { src: harshadaResultImg, alt: 'Harshada Navale – Student Achievement' },
  { src: aniketResultImg,   alt: 'Aniket Kundgir – Student Achievement' },
];

const announcements = [
  {
    img: grandOpeningImg,
    title: 'Grand Opening',
    desc: 'Celebrating the beginning of a new learning journey with Om Phoenix Learning Academy.',
    alt: 'Grand Opening – Om Phoenix Learning Academy',
  },
  {
    img: admissionBannerImg,
    title: 'Admissions Open',
    desc: 'Explore our academic programs and begin your learning journey with Om Phoenix.',
    alt: 'Admissions Open – Om Phoenix Learning Academy',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const About = () => (
  <div className="bg-white">

    {/* ==================================================
        1. HERO
    ================================================== */}
    <section className="relative py-8 sm:py-12 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1F35] via-[#0d2b4a] to-[#168BD1]">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#168BD1]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-4">
        {/* badge */}
        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 shadow-lg">
          <Sparkles className="w-4 h-4" />
          About Om Phoenix
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Empowering Students to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd166] via-[#ffb800] to-[#ff5e00]">
            Learn, Grow & Succeed
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-6 leading-relaxed">
          Om Phoenix Learning Academy is committed to providing quality education, expert guidance and a supportive learning environment that helps students unlock their true potential.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] hover:from-[#f59e0b] hover:via-[#ea580c] hover:to-[#dc2626] text-white font-bold text-base rounded-full transition-all duration-300 shadow-xl hover:scale-105 group"
          >
            Explore Our Courses
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-7 py-3 bg-white hover:bg-slate-100 text-[#0A1F35] font-bold text-base rounded-full transition-all duration-300 shadow-xl hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>


    {/* ==================================================
        2. WHO WE ARE (Two Column Introduction)
    ================================================== */}
    <section className="py-6 sm:py-8 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT – image */}
          <div className="flex items-center justify-center w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200/80 bg-white w-full max-w-md max-h-[360px] sm:max-h-[400px] flex items-center justify-center p-2.5 group">
              <img
                src={grandOpeningImg}
                alt="Om Phoenix Learning Academy Grand Opening"
                className="max-h-[340px] sm:max-h-[380px] w-auto max-w-full object-contain rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT – content */}
          <div className="flex flex-col justify-center space-y-4">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs sm:text-sm font-bold tracking-widest uppercase border border-[#168BD1]/20 w-fit">
              WHO WE ARE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1F35] tracking-tight leading-tight">
              Building Strong Foundations for a Brighter Future
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Om Phoenix Learning Academy is dedicated to helping students build strong academic foundations and develop the confidence, knowledge and skills required to achieve their goals.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our approach combines experienced faculty, structured learning, regular assessments, doubt-solving support and a student-focused environment.
            </p>

            {/* checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                'Experienced & Dedicated Faculty',
                'Student-Centric Learning',
                'Regular Tests & Assessments',
                'Personalised Academic Guidance',
                'Doubt-Solving Support',
                'Focus on Conceptual Understanding',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-slate-700 font-semibold text-xs sm:text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#E8F5FC] text-[#168BD1] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#learning-approach"
                className="inline-flex items-center px-6 py-2.5 bg-[#0A1F35] hover:bg-[#168BD1] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#168BD1]/25 group"
              >
                Discover Our Approach
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* ==================================================
        3. STATISTICS
    ================================================== */}
    <section className="py-6 sm:py-8 bg-[#0A1F35]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 mx-auto rounded-xl bg-[#168BD1]/20 text-[#168BD1] flex items-center justify-center mb-2.5 group-hover:bg-[#168BD1] group-hover:text-white transition-all duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5">{value}</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* ==================================================
        4. OUR MISSION
    ================================================== */}
    <section className="py-6 sm:py-8 bg-[#E8F5FC]">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg border border-[#168BD1]/15 p-6 sm:p-10 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#E8F5FC] text-[#168BD1] flex items-center justify-center mb-4 shadow-sm">
            <Target className="w-7 h-7" />
          </div>
          <span className="inline-block py-1 px-3 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs font-bold tracking-widest uppercase mb-3 border border-[#168BD1]/20">
            Our Mission
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F35] mb-3 tracking-tight">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            To provide accessible, high-quality and student-focused education that helps learners understand concepts deeply, develop confidence and prepare effectively for academic and competitive examinations.
          </p>
        </div>
      </div>
    </section>


    {/* ==================================================
        5. OUR VISION
    ================================================== */}
    <section className="py-6 sm:py-8 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT – large icon illustration */}
          <div className="flex items-center justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#E8F5FC] to-[#168BD1]/20 flex items-center justify-center shadow-lg border border-[#168BD1]/20">
              <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#168BD1] to-[#0A1F35] flex items-center justify-center shadow-inner">
                <Compass className="w-14 h-14 sm:w-20 sm:h-20 text-white opacity-90" />
              </div>
            </div>
          </div>

          {/* RIGHT – content */}
          <div className="flex flex-col justify-center space-y-4">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs font-bold tracking-widest uppercase border border-[#168BD1]/20 w-fit">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1F35] tracking-tight leading-tight">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To become a trusted learning destination where students receive the right guidance, resources and encouragement to achieve academic excellence and build a successful future.
            </p>
            <div className="inline-flex items-center gap-2.5 py-2 px-5 rounded-2xl bg-[#E8F5FC] border border-[#168BD1]/20 text-[#0A1F35] font-bold text-base sm:text-lg tracking-wide w-fit">
              <span className="text-[#168BD1]">Learn</span>
              <span className="text-[#F59E0B]">•</span>
              <span className="text-[#168BD1]">Develop</span>
              <span className="text-[#F59E0B]">•</span>
              <span className="text-[#168BD1]">Achieve</span>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* ==================================================
        6. WHY CHOOSE OM PHOENIX
    ================================================== */}
    <section className="py-6 sm:py-8 bg-slate-50/70">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs font-bold tracking-widest uppercase mb-2 border border-[#168BD1]/20">
            Our Difference
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1F35] tracking-tight mb-3">
            Why Choose Om Phoenix Learning Academy?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We focus on more than marks. We focus on building confident and capable learners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {whyCards.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#168BD1]/15 hover:border-[#168BD1]/50 transition-all duration-300 ease-out hover:-translate-y-1.5 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8F5FC] text-[#168BD1] flex items-center justify-center mb-4 group-hover:bg-[#168BD1] group-hover:text-white group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 ease-out shadow-2xs">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1F35] mb-2 group-hover:text-[#168BD1] transition-colors duration-200">
                {title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>


    {/* ==================================================
        7. OUR LEARNING APPROACH (Timeline/Steps)
    ================================================== */}
    <section className="py-6 sm:py-8 bg-white" id="learning-approach">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs font-bold tracking-widest uppercase mb-2 border border-[#168BD1]/20">
            Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1F35] tracking-tight mb-3">
            Our Learning Approach
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3" />
        </div>

        {/* Steps with connecting lines on desktop */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[44px] left-[calc(10%+24px)] right-[calc(10%+24px)] h-0.5 bg-gradient-to-r from-[#E8F5FC] via-[#168BD1]/40 to-[#E8F5FC]" />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map(({ num, title, desc }, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#0A1F35] text-white flex items-center justify-center text-base font-extrabold mb-3 shadow-md group-hover:bg-[#168BD1] transition-colors duration-300 ring-4 ring-[#E8F5FC]">
                  {num}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0A1F35] mb-1.5 group-hover:text-[#168BD1] transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[160px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>


    {/* ==================================================
        8. STUDENT ACHIEVEMENTS
    ================================================== */}
    <section className="py-6 sm:py-8 bg-slate-50/70">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs font-bold tracking-widest uppercase mb-2 border border-[#168BD1]/20">
            Student Achievement
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1F35] tracking-tight mb-3">
            Celebrating Student Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We are proud of the dedication and hard work demonstrated by our students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
          {achievementImgs.map(({ src, alt }, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#168BD1]/15 hover:border-[#168BD1]/50 transition-all duration-300 ease-out hover:-translate-y-1.5"
            >
              <div className="px-4 pt-4 pb-2">
                <span className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#F59E0B] text-white mb-2">
                  Student Achievement
                </span>
              </div>
              <div className="overflow-hidden bg-slate-50 mx-4 rounded-xl mb-4">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


    {/* ==================================================
        9. LATEST ANNOUNCEMENTS
    ================================================== */}
    <section className="py-4 sm:py-6 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs font-bold tracking-widest uppercase mb-2 border border-[#168BD1]/20">
            News & Updates
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1F35] tracking-tight mb-2">
            Latest Announcements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto items-stretch">
          {announcements.map(({ img, title, desc, alt }, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#168BD1]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="overflow-hidden bg-slate-50 h-52 sm:h-60 md:h-64 w-full flex items-center justify-center p-2.5">
                <img
                  src={img}
                  alt={alt}
                  className="max-h-full max-w-full w-auto h-auto object-contain transform group-hover:scale-102 transition-transform duration-500 ease-out rounded-lg shadow-2xs"
                  loading="lazy"
                />
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1F35] mb-1.5 group-hover:text-[#168BD1] transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 flex-grow">{desc}</p>
                <div className="mt-auto pt-2 border-t border-slate-100">
                  <Link
                    to="/admission"
                    className="inline-flex items-center text-[#168BD1] font-bold text-xs sm:text-sm hover:text-[#0A1F35] transition-colors duration-200 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


    {/* ==================================================
        10. OUR COMMITMENT (Dark Navy)
    ================================================== */}
    <section className="py-6 sm:py-8 bg-[#0A1F35]">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block py-1 px-3.5 rounded-full bg-white/10 text-[#F59E0B] text-xs font-bold tracking-widest uppercase mb-2 border border-white/15">
            Our Promise
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
            Our Commitment to Every Student
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3" />
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every student has unique potential. At Om Phoenix Learning Academy, we strive to create an environment where students feel supported, motivated and confident to work towards their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {commitments.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#168BD1]/20 text-[#168BD1] flex items-center justify-center mb-3 group-hover:bg-[#168BD1] group-hover:text-white transition-all duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">{title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>


    {/* ==================================================
        11. CALL TO ACTION
    ================================================== */}
    <section className="py-8 sm:py-10 bg-gradient-to-br from-[#168BD1] to-[#0A1F35] relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-white/15 text-white text-xs font-bold tracking-widest uppercase mb-4 border border-white/20">
          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          Admissions Open
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
          Ready to Begin Your Learning Journey?
        </h2>

        <p className="text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto mb-6 leading-relaxed">
          Discover the right learning program and take the next step towards your academic goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/courses"
            className="btn-flame inline-flex items-center justify-center px-8 py-3 text-white font-bold text-base rounded-full transition-all duration-300 shadow-xl hover:scale-105 group"
          >
            Explore Courses
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-slate-100 text-[#0A1F35] font-bold text-base rounded-full transition-all duration-300 shadow-xl hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>

  </div>
);

export default About;

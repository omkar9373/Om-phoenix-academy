import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import {
  Users,
  GraduationCap,
  BookOpen,
  Target,
  Lightbulb,
  ClipboardCheck,
  UserRoundCheck,
  MessageCircleQuestion,
  MapPin,
  Phone,
  Navigation,
  ExternalLink,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Heart,
  Award,
  Compass,
} from 'lucide-react';

import grandOpeningImg from '../assets/grand-opning.jpeg';
import foundersImg from '../assets/founders.jpg';
import vedikaResultImg from '../assets/vedika.jpeg';
import harshadaResultImg from '../assets/harshada.jpeg';
import aniketResultImg from '../assets/aniket.jpeg';

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '10+', label: 'Experienced Faculty', icon: Users },
  { value: '500+', label: 'Students Guided', icon: GraduationCap },
  { value: '95%+', label: 'Academic Focus', icon: BookOpen },
  { value: '100%', label: 'Commitment to Students', icon: Target },
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
  { num: '02', title: 'Practice', desc: 'Solve examples and practice questions.' },
  { num: '03', title: 'Assess', desc: 'Regular tests to measure progress.' },
  { num: '04', title: 'Improve', desc: 'Identify mistakes and strengthen weak areas.' },
  { num: '05', title: 'Achieve', desc: 'Work confidently towards academic goals.' },
];

const commitments = [
  { icon: Award, title: 'Academic Excellence', desc: 'Dedicated to helping every student reach their academic best.' },
  { icon: Heart, title: 'Personal Attention', desc: 'One-on-one guidance tailored to each student\'s needs.' },
  { icon: TrendingUp, title: 'Continuous Improvement', desc: 'Regular feedback and progress tracking to keep students on track.' },
  { icon: Compass, title: 'Positive Learning Environment', desc: 'A safe, inclusive atmosphere that encourages curiosity and growth.' },
];

const achievementImgs = [
  { src: vedikaResultImg, alt: 'Vedika Bansode – Student Achievement' },
  { src: harshadaResultImg, alt: 'Harshada Navale – Student Achievement' },
  { src: aniketResultImg, alt: 'Aniket Kundgir – Student Achievement' },
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
        4. VISIONARY FOUNDERS & LEADERSHIP
    ================================================== */}
    <section className="py-8 sm:py-12 bg-white" id="founders">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#E8F5FC] text-[#168BD1] text-xs font-bold tracking-widest uppercase mb-2 border border-[#168BD1]/20">
            Visionary Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1F35] tracking-tight mb-2">
            Meet Our Founders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Guided by dedication and a passion for student excellence, our founders are committed to empowering students to achieve top ranks in IIT-JEE, NEET, MHT-CET, and Foundation boards.
          </p>
        </div>

        {/* Founders Showcase Card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-[#e8f5fc]/40 rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_-6px_rgba(10,31,53,0.08)] overflow-hidden p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* LEFT: Founders Photo Card */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                <img
                  src={foundersImg}
                  alt="Founders Gangadhar Ghongade and Ravindr Gadade – Om Phoenix Learning Academy"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay Badge at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 bg-gradient-to-t from-[#0a1f35]/95 via-[#0a1f35]/80 to-transparent text-white">
                  <p className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center justify-between">
                    <span>Gangadhar Ghongade & Ravindr Gadade</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-300 font-semibold mt-0.5">
                    Founders & Directors, Om Phoenix Learning Academy
                  </p>
                </div>
              </div>

              {/* Trust Badges under photo */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-3.5 w-full max-w-lg">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] sm:text-xs font-bold text-[#0A1F35]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Visionary Mentorship
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] sm:text-xs font-bold text-[#0A1F35]">
                  <Award className="w-3.5 h-3.5 text-[#168BD1]" />
                  Result-Oriented Pedagogy
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] sm:text-xs font-bold text-[#0A1F35]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Student-First Values
                </span>
              </div>
            </div>

            {/* RIGHT: Founders' Message & Vision */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8F5FC] text-[#168BD1] border border-[#168BD1]/20 mb-2">
                  Directors' Message
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0A1F35] tracking-tight leading-snug">
                  "Education is not just about scoring marks, it's about igniting true potential."
                </h3>
              </div>

              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p>
                  Under the visionary leadership of <strong className="text-[#0A1F35] font-bold">Mr. Gangadhar Ghongade</strong> and <strong className="text-[#0A1F35] font-bold">Mr. Ravindr Gadade</strong>, Om Phoenix Learning Academy was established with a singular mission: to bring Kota-standard academic coaching with individualized attention to Moshi, Pune.
                </p>
                <p>
                  Having mentored hundreds of students through competitive exams like <strong className="text-slate-800">IIT-JEE, NEET-UG, and MHT-CET</strong>, our founders recognize that every student has unique learning needs. Their pedagogy combines disciplined concept mastery, daily practice problem sheets (DPPs), continuous performance analytics, and dedicated one-on-one doubt resolution.
                </p>
              </div>

              {/* Leadership Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5FC] text-[#168BD1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0A1F35]">Kota-Pattern Pedagogy</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Structured study material & test series</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0A1F35]">Personal Attention</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Small batches & 1-on-1 mentor guidance</p>
                  </div>
                </div>
              </div>

              {/* CTA link */}
              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#0A1F35] hover:bg-[#168BD1] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#168BD1]/25 group"
                >
                  <span>Connect With Our Leadership</span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>


    {/* ==================================================
        5. WHY CHOOSE OM PHOENIX
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
        6. OUR LEARNING APPROACH (Timeline/Steps)
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
        7. STUDENT ACHIEVEMENTS
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
        8. VISIT OUR MOSHI BRANCH
    ================================================== */}
   

    <section className="py-0 bg-white border-t border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Visit Our Moshi Branch"
          subtitle="We are here to help you build a brighter future. Visit us at our Moshi Branch."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-4 items-stretch">

          {/* Branch Info Card */}
          <div className="lg:col-span-2 flex flex-col">
            <div
              className="flex-1 rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,130,214,0.18)] border border-primary-100"
              style={{
                background: 'linear-gradient(160deg, #004875 0%, #0082d6 60%, #36c5ff 100%)',
              }}
            >
              {/* Card header */}
              <div className="px-7 pt-8 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/15 p-2.5 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">Branch</p>
                    <h3 className="text-white text-lg font-extrabold leading-tight">OM PHOENIX ACADEMY</h3>
                    <p className="text-blue-200 text-sm font-semibold">Moshi Branch</p>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-7 py-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" />
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Shakuntal Commercia Building, Office No. 233, 2nd Floor,
                    Near City Pride School, Dehu-Moshi Road, Jadhavwadi, Moshi, Maharashtra.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" />
                  <div className="space-y-1.5">
                    {['8329063312', '9860641233', '9860651233'].map((num) => (
                      <a
                        key={num}
                        href={`tel:${num}`}
                        className="block text-white font-semibold text-sm hover:text-blue-200 transition-colors"
                      >
                        {num.replace(/(\d{5})(\d{5})/, '$1 $2')}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Directions button */}
              <div className="px-7 pb-8">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Shakuntal+Commercia+Building+Office+No+233+Near+City+Pride+School+Dehu+Moshi+Road+Jadhavwadi+Moshi+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Get Directions to Om Phoenix Academy Moshi Branch"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="lg:col-span-3">
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12)] border border-gray-100">
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-md text-xs font-bold text-primary-700 border border-primary-100">
                <MapPin className="w-3.5 h-3.5 text-primary-600" />
                Om Phoenix Academy – Moshi Branch
              </div>
              <iframe
                title="Om Phoenix Academy Moshi Branch Map"
                src="https://maps.google.com/maps?q=Shakuntal+Commercia+Building+Near+City+Pride+School+Dehu+Moshi+Road+Jadhavwadi+Moshi+Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map showing Om Phoenix Academy Moshi Branch location"
              />
            </div>
          </div>

        </div>

        <p className="mt-5 text-center text-sm text-gray-400">
          Having trouble viewing the map?{' '}
          <a
            href="https://www.google.com/maps/search/Shakuntal+Commercia+Building+Near+City+Pride+School+Dehu+Moshi+Road+Jadhavwadi+Moshi+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-semibold hover:underline"
          >
            Open in Google Maps ↗
          </a>
        </p>
      </div>
    </section>


  </div>
);

export default About;

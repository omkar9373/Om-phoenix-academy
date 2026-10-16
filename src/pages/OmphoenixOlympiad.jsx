import { Link } from 'react-router-dom';
import { 
  Target, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  Clock, 
  BookOpen, 
  ArrowRight,
  Phone,
  GraduationCap,
  Medal,
  FileCheck2,
  Users,
  Compass
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const OmphoenixOlympiad = () => {
  const rewardTiers = [
    {
      rank: 'AIR 1 - 3',
      reward: '100% Scholarship + Gold Medal + Cash Prize',
      badge: 'National Topper',
      highlightColor: 'from-amber-400 to-amber-600',
      tagBg: 'bg-amber-100 text-amber-900 border-amber-300',
      iconColor: 'text-amber-500',
    },
    {
      rank: 'AIR 4 - 10',
      reward: '75% Scholarship + Silver Medal + Merit Certificate',
      badge: 'State Topper',
      highlightColor: 'from-slate-400 to-slate-600',
      tagBg: 'bg-slate-100 text-slate-800 border-slate-300',
      iconColor: 'text-slate-500',
    },
    {
      rank: 'AIR 11 - 50',
      reward: '50% Scholarship + Bronze Medal + Academy Study Kit',
      badge: 'Zonal Achiever',
      highlightColor: 'from-orange-400 to-orange-600',
      tagBg: 'bg-orange-100 text-orange-900 border-orange-300',
      iconColor: 'text-orange-500',
    },
    {
      rank: 'AIR 51 - 200',
      reward: 'Up to 35% Fee Concession + Participation Certificate',
      badge: 'Merit Qualifier',
      highlightColor: 'from-blue-400 to-blue-600',
      tagBg: 'bg-blue-100 text-blue-900 border-blue-300',
      iconColor: 'text-blue-500',
    },
  ];

  const examStructure = [
    {
      label: 'Test Duration',
      value: '90 Minutes',
      desc: 'Timed speed & accuracy test',
      icon: Clock,
    },
    {
      label: 'Exam Pattern',
      value: '60 MCQs',
      desc: 'Multiple choice questions',
      icon: BookOpen,
    },
    {
      label: 'Eligible Classes',
      value: 'Class 5th - 12th',
      desc: 'CBSE, ICSE & State Board',
      icon: GraduationCap,
    },
    {
      label: 'Syllabus Covered',
      value: 'Maths, Science & MAT',
      desc: 'Mental Ability & Science',
      icon: Target,
    },
    {
      label: 'Exam Mode',
      value: 'Offline & Online',
      desc: 'Moshi Campus or Online CBT',
      icon: Compass,
    },
  ];

  const benefits = [
    {
      title: 'National & State Benchmarking',
      desc: 'Get an authentic All-India Rank (AIR) and detailed percentile comparison to evaluate your standing among thousands of aspirants.',
      icon: Trophy,
    },
    {
      title: 'Diagnostic Topic-Wise Analysis',
      desc: 'Comprehensive post-exam report highlighting your core conceptual strengths, calculation speed, and specific areas for improvement.',
      icon: FileCheck2,
    },
    {
      title: 'Early Competitive Edge',
      desc: 'Build early exam temperament, time management skills, and confidence for IIT-JEE, NEET, NTSE, and Olympiad examinations.',
      icon: Target,
    },
    {
      title: '1-on-1 Academic Counseling',
      desc: 'Direct interaction and personalized academic roadmap with Om Phoenix Academy senior faculties and Kota-trained mentors in Moshi.',
      icon: Users,
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Online Registration',
      desc: 'Register online in 2 minutes or visit our Moshi academy campus to fill out the Olympiad form.',
      link: '/admission',
      btnText: 'Register Online',
    },
    {
      step: '02',
      title: 'Appear for Olympiad',
      desc: 'Take the test at our Moshi center or online with comprehensive question papers designed by experts.',
      link: '/scholarships/m-cet',
      btnText: 'Exam Guidelines',
    },
    {
      step: '03',
      title: 'Win Scholarships & Rewards',
      desc: 'Receive your score card, claim merit-based tuition fee waivers up to 100%, and start your ranker journey.',
      link: '/scholarships/explorescholarships',
      btnText: 'View Scholarships',
    },
  ];

  return (
    <div className="py-4 sm:py-6 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Om Phoenix Olympiad 2026-27"
          subtitle="National Talent Recognition & Scholarship Examination by Om Phoenix Academy for Classes 5th to 12th."
        />

        {/* =========================================================
            FLAGSHIP HERO CARD (Matches site branding & palette)
        ========================================================== */}
        <div className="bg-gradient-to-r from-[#071f38] via-[#0a2540] to-[#005087] rounded-3xl p-6 sm:p-10 text-white mb-8 shadow-xl relative overflow-hidden border border-primary-500/20">
          {/* Radiant Lighting Mesh */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#ff5e00]/25 via-[#ffb800]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#00a8ff]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffb800] text-slate-950 text-xs font-black tracking-wider uppercase shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                  National Talent Discovery Exam
                </span>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs border border-white/20 uppercase tracking-wide">
                  Classes 5th - 12th
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Benchmark Your Potential.{' '}
                <span className="text-[#ffd166] drop-shadow-[0_2px_12px_rgba(255,209,102,0.3)]">
                  Win Up to 100% Scholarship
                </span>
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl">
                The Om Phoenix Olympiad is Om Phoenix Academy’s prestigious annual academic talent recognition initiative. It evaluates students on conceptual clarity, problem-solving speed, and analytical reasoning across Science, Mathematics, and Mental Ability.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Link
                  to="/admission"
                  className="btn-flame py-3 sm:py-3.5 px-7 sm:px-8 text-sm sm:text-base shadow-lg hover:shadow-orange-500/30"
                >
                  Apply for Olympiad Now
                </Link>
                <Link
                  to="/scholarships/m-cet"
                  className="inline-flex items-center px-6 py-3 sm:py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm sm:text-base backdrop-blur-xs transition-all hover:scale-102"
                >
                  Explore M-CET Exam <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Quick Highlight Stats */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-center">
                <Trophy className="w-6 h-6 text-[#ffb800] mx-auto mb-1.5" />
                <div className="text-xl sm:text-2xl font-black">₹10 Lakh+</div>
                <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider mt-0.5">Prize &amp; Rewards</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-center">
                <GraduationCap className="w-6 h-6 text-[#00a8ff] mx-auto mb-1.5" />
                <div className="text-xl sm:text-2xl font-black">100%</div>
                <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider mt-0.5">Max Fee Waiver</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-center">
                <Medal className="w-6 h-6 text-[#ffb800] mx-auto mb-1.5" />
                <div className="text-xl sm:text-2xl font-black">Top 200</div>
                <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider mt-0.5">Ranker Rewards</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-center">
                <Target className="w-6 h-6 text-emerald-400 mx-auto mb-1.5" />
                <div className="text-xl sm:text-2xl font-black">AIR &amp; State</div>
                <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider mt-0.5">Benchmarking</div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================
            EXAM STRUCTURE & KEY DETAILS (Grid of 5 stat cards)
        ========================================================== */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center font-bold">
              <Clock className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Exam Format &amp; Guidelines</h3>
              <p className="text-xs text-gray-500">Key specifications for Om Phoenix Olympiad 2026-27 test day</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {examStructure.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1.5 transition-all duration-300 ease-out group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 ease-out">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{item.label}</div>
                  <div className="text-base sm:text-lg font-extrabold text-gray-900 mt-0.5 group-hover:text-primary-700 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            SCHOLARSHIPS & REWARDS BREAKDOWN (Interactive Cards)
        ========================================================== */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Trophy className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Scholarships &amp; Awards Breakdown</h3>
              <p className="text-xs text-gray-500">Tier-wise recognition, cash awards, and fee concessions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rewardTiers.map((tier, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-primary-600/10 hover:-translate-y-1.5 hover:border-primary-300 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Top Glowing Color Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${tier.highlightColor}`} />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-md border ${tier.tagBg}`}>
                      {tier.badge}
                    </span>
                    <Trophy className={`w-5 h-5 ${tier.iconColor} group-hover:scale-110 transition-transform`} />
                  </div>

                  <h4 className="text-2xl font-black text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {tier.rank}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed">
                    {tier.reward}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Guaranteed Recognition</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            WHY APPEAR FOR OM PHOENIX OLYMPIAD (Benefits 2x2 Grid)
        ========================================================== */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Why Students Must Appear</h3>
              <p className="text-xs text-gray-500">Proven advantages of benchmarking in Om Phoenix Olympiad 2026-27</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1.5 transition-all duration-300 ease-out flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 ease-out shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            STEP-BY-STEP ADMISSION PROCESS (Consistent with MCet)
        ========================================================== */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">How to Participate</h3>
              <p className="text-xs text-gray-500">Three easy steps to register, take the exam, and claim scholarships</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item) => (
              <Link
                key={item.step}
                to={item.link}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-primary-600/10 hover:-translate-y-1.5 hover:border-primary-300 transition-all duration-300 flex flex-col justify-between cursor-pointer block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-200 group-hover:text-primary-600 tracking-tight transition-colors duration-300 select-none">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary-600">
                  <span>{item.btnText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM CALL-TO-ACTION BANNER (Matches FeeStructure & MCet)
        ========================================================== */}
        <div className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 border border-primary-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
              Registration Help &amp; Counseling
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-primary-950 mb-1">
              Need Assistance with Om Phoenix Olympiad Registration?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
              Connect with our academic counselors in Moshi, Pune. We will assist you with syllabus details, test dates, and sample question papers.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:9860651233"
              className="inline-flex items-center gap-2 py-3 px-5 rounded-full border border-primary-300 bg-white hover:bg-primary-50 text-xs sm:text-sm font-bold text-primary-700 transition-colors shadow-2xs"
            >
              <Phone className="w-4 h-4 text-primary-600" />
              <span>Call 9860651233</span>
            </a>
            <Link
              to="/admission"
              className="btn-flame py-3 px-6 text-xs sm:text-sm shadow-md"
            >
              Apply Online Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OmphoenixOlympiad;


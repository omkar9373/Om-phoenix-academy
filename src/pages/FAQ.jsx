import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  PhoneCall, 
  MessageSquare, 
  GraduationCap, 
  BookOpen, 
  Building2, 
  Award,
  ArrowRight
} from 'lucide-react';
import { faqs as initialFaqs } from '../data/faq';

const extendedFaqs = [
  ...initialFaqs,
  {
    id: 6,
    category: 'admissions',
    question: 'What is the M-SAT (Matrix Scholarship & Admission Test)?',
    answer: 'M-SAT is our national-level scholarship and diagnostic examination. It tests analytical and problem-solving aptitude, allowing students to earn up to a 100% scholarship on tuition fees while benchmarking their competitive readiness.'
  },
  {
    id: 7,
    category: 'courses',
    question: 'How are student doubts resolved outside regular classroom hours?',
    answer: 'We have dedicated daily Doubt Resolution Counters where subject faculty are available for one-on-one assistance. Students can also submit doubts through their batch mentors for expedited clarification.'
  },
  {
    id: 8,
    category: 'courses',
    question: 'What study materials and test series are provided to students?',
    answer: 'Students receive comprehensive printed theory modules, daily practice papers (DPPs), chapter-wise question banks, NCERT booster sheets, and regular All-India level simulated test series with in-depth analytical scorecards.'
  },
  {
    id: 9,
    category: 'fees',
    question: 'Can tuition fees be paid in installments?',
    answer: 'Yes, we provide flexible installment payment options to support parents. Our counseling team will share the customized installment breakdown during the admission orientation.'
  },
  {
    id: 10,
    category: 'facilities',
    question: 'Where is Om Phoenix Academy campus located in Pune?',
    answer: 'Our main campus is conveniently located at Shakuntal Commercial Building, 2nd Floor, Office No. 233, Gat No. 68, City Pride School Road, Dehu-Moshi Road, Moshi, Pune.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All FAQs', icon: HelpCircle },
    { id: 'admissions', label: 'Admissions & M-SAT', icon: GraduationCap },
    { id: 'courses', label: 'Courses & Academics', icon: BookOpen },
    { id: 'fees', label: 'Scholarships & Fees', icon: Award },
    { id: 'facilities', label: 'Campus & Facilities', icon: Building2 },
  ];

  const filteredFaqs = extendedFaqs.filter(faq => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'admissions') return faq.id === 1 || faq.id === 6;
    if (selectedCategory === 'courses') return faq.id === 4 || faq.id === 5 || faq.id === 7 || faq.id === 8;
    if (selectedCategory === 'fees') return faq.id === 2 || faq.id === 9;
    if (selectedCategory === 'facilities') return faq.id === 3 || faq.id === 10;
    return true;
  });

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===================================================
          1. HERO SECTION
      ==================================================== */}
      <section className="relative py-8 sm:py-10 bg-gradient-to-br from-[#0a1f35] via-[#0d2a48] to-[#168bd1] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5e00]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold tracking-wider uppercase mb-3 border border-white/15 animate-float">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3" />

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Find answers to common queries regarding admissions, batch timings, M-SAT scholarships, curriculum structure, and student life at Om Phoenix Academy.
          </p>
        </div>
      </section>

      {/* ===================================================
          2. CATEGORY TABS & ACCORDION
      ==================================================== */}
      <section className="py-6 sm:py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] text-white shadow-md shadow-orange-500/25 scale-102'
                      : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-100 hover:text-primary-600'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                    isOpen
                      ? 'bg-white border-primary-300 shadow-md ring-1 ring-primary-200/50'
                      : 'bg-white border-slate-200/80 hover:border-primary-300 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#0a1f35] leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-primary-600 text-white rotate-180'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Counselor Helpdesk Card */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0a1f35] to-[#168bd1] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Still have questions?</h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Our academic counselors are available to assist you Monday through Saturday (9 AM - 7 PM).
              </p>
            </div>
            <div className="flex gap-2.5 shrink-0">
              <a
                href="tel:8378903312"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] text-white font-bold text-xs shadow-xs hover:scale-102 transition-transform"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call +91 8378903312</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
              >
                <span>Contact Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FAQ;

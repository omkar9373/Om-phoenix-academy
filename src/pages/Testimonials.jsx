import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Star, 
  Quote, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake, 
  Users,
  GraduationCap
} from 'lucide-react';
import { testimonials as studentTestimonials } from '../data/testimonials';

const parentTestimonials = [
  {
    name: 'Dr. Suresh Bansode',
    role: 'Parent of Vedika Bansode (NEET Score 685/720)',
    text: 'As a doctor myself, I was very particular about medical entrance coaching. Om Phoenix Academy impressed us with their conceptual rigor, NCERT focus, and regular progress updates. Vedika got personalized guidance that made all the difference.',
    rating: 5,
  },
  {
    name: 'Mrs. Sunita Navale',
    role: 'Parent of Harshada Navale (JEE Advanced AIR 452)',
    text: 'The discipline and regular doubt counters at Om Phoenix are unmatched. Harshada never felt overwhelmed because the teachers were always approachable. We are immensely grateful to the entire faculty team.',
    rating: 5,
  },
  {
    name: 'Mr. Prakash Kundgir',
    role: 'Parent of Aniket Kundgir (JEE Top Ranker)',
    text: 'The daily DPP assignments and weekly performance reviews helped Aniket stay consistent throughout the two years. Highly recommended for every serious JEE & CET aspirant in Pune.',
    rating: 5,
  },
];

const allStories = [
  ...studentTestimonials.map(t => ({ ...t, type: 'student' })),
  ...parentTestimonials.map((p, idx) => ({ ...p, id: `p-${idx}`, achievement: 'Proud Parent Review', type: 'parent' }))
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredStories = allStories.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'parents') return item.type === 'parent';
    if (activeTab === 'jee') return item.achievement?.toLowerCase().includes('jee');
    if (activeTab === 'neet') return item.achievement?.toLowerCase().includes('neet');
    if (activeTab === 'cet') return item.achievement?.toLowerCase().includes('cet') || item.achievement?.toLowerCase().includes('foundation');
    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===================================================
          1. HERO HEADER
      ==================================================== */}
      <section className="relative py-8 sm:py-10 bg-gradient-to-br from-[#0a1f35] via-[#0d2a48] to-[#168bd1] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5e00]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold tracking-wider uppercase mb-3 border border-white/15 animate-float">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Voices of Triumph &amp; Trust</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Student &amp; Parent Testimonials
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3" />

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed mb-6">
            Real stories of dedication, mentorship, and academic excellence from students who achieved their dream ranks with Om Phoenix Academy.
          </p>

          {/* Trust Score Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-2 border-t border-white/15">
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/10 backdrop-blur-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-white text-sm">4.9 / 5 Rating</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/10 backdrop-blur-xs">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span className="font-extrabold text-white text-sm">500+ Top Achievers</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/10 backdrop-blur-xs">
              <HeartHandshake className="w-4 h-4 text-cyan-400" />
              <span className="font-extrabold text-white text-sm">100% Parent Trust</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. FILTER TABS & STORIES
      ==================================================== */}
      <section className="py-6 sm:py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'jee', label: 'JEE Achievers' },
              { id: 'neet', label: 'NEET Medicos' },
              { id: 'cet', label: 'MHT-CET & Foundation' },
              { id: 'parents', label: "Parents' Perspective" },
            ].map(tab => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] text-white shadow-md shadow-orange-500/25 scale-102'
                      : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-100 hover:text-primary-600'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {filteredStories.map((item, idx) => (
              <div
                key={item.id || idx}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-primary-300 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden"
              >
                {/* Decorative Quote mark */}
                <Quote className="absolute top-4 right-4 w-10 h-10 text-slate-100 group-hover:text-primary-100 group-hover:scale-110 transition-all duration-300 pointer-events-none rotate-180" />

                <div>
                  {/* Star Rating & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-50 text-primary-700 border border-primary-200/60">
                      {item.type === 'parent' ? 'Verified Parent' : 'Verified Student'}
                    </span>
                  </div>

                  {/* Feedback Text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-4 relative z-10">
                    "{item.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#0a1f35] group-hover:text-primary-600 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-semibold text-primary-600 block">
                      {item.achievement}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {item.role}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs uppercase">
                    {item.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Admission Prompt */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0a1f35] via-[#0d2a48] to-[#168bd1] text-white flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-md">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Ready to Achieve Your Dream Rank?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Join our upcoming batches for JEE, NEET &amp; MHT-CET. Appear for M-CET to unlock up to 100% scholarships.
              </p>
            </div>
            <div className="flex gap-2.5 shrink-0">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] text-white font-bold text-xs sm:text-sm shadow-md hover:scale-102 transition-transform"
              >
                <span>Enroll Now</span>
                <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Link>
              <Link
                to="/scholarships/m-cet"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
              >
                <span>Register for M-CET</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Testimonials;

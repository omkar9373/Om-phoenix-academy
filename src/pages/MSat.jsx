import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  ClipboardCheck, 
  FileCheck2, 
  Award, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const MSat = () => {
  const steps = [
    {
      step: '01',
      title: 'Online Registration',
      desc: 'Fill out the simple application form with student details and select your preferred test slot.',
      icon: ClipboardCheck,
      badge: 'Step 01',
      action: 'Register Now',
      link: '/admission',
    },
    {
      step: '02',
      title: 'Appear for M-SAT',
      desc: 'Take the 2-hour objective aptitude test online or at your nearest Om Phoenix study center.',
      icon: FileCheck2,
      badge: 'Step 02',
      action: 'Test Guidelines',
      link: '/admission',
    },
    {
      step: '03',
      title: 'Results & Scholarship',
      desc: 'Get your performance analysis report and claim up to 100% scholarship on admission.',
      icon: Award,
      badge: 'Step 03',
      action: 'View Concessions',
      link: '/scholarships',
    },
  ];

  return (
    <div className="pt-2 sm:pt-4 pb-0 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="M-SAT (Admission Test)"
          subtitle="Matrix Scholarship and Admission Test — evaluate aptitude and secure merit-based fee concessions."
        />

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider border border-primary-100">
                <Sparkles className="w-3.5 h-3.5 text-primary-600" />
                Admission &amp; Scholarship Test
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                What is M-SAT?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                M-SAT is Om Phoenix Academy’s flagship diagnostic examination designed to test a student’s fundamental understanding, problem-solving speed, and analytical reasoning in Science, Mathematics, and Mental Ability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-3.5 border border-slate-100 hover:border-primary-200 hover:bg-primary-50/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-white text-primary-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Duration</div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-primary-700 transition-colors">120 Minutes</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-3.5 border border-slate-100 hover:border-primary-200 hover:bg-primary-50/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-white text-primary-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Format</div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-primary-700 transition-colors">MCQ Pattern</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-3.5 border border-slate-100 hover:border-primary-200 hover:bg-primary-50/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-white text-primary-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Frequency</div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Every Sunday</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl p-7 text-white text-center flex flex-col justify-between shadow-xl shadow-primary-700/20 border border-primary-500/30">
              <div>
                <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-xs rounded-full text-[11px] font-semibold text-primary-100 uppercase tracking-wider mb-3">
                  Next Batch Open
                </span>
                <h4 className="text-2xl font-extrabold text-white mb-2">Ready to Take M-SAT?</h4>
                <p className="text-xs text-primary-100 leading-relaxed mb-6">
                  Registrations for the upcoming Sunday test session are closing soon. Secure your seat today.
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  to="/admission"
                  className="w-full bg-white text-primary-700 hover:bg-primary-50 font-bold py-3 px-4 rounded-xl text-sm block transition-all duration-300 shadow hover:shadow-lg hover:scale-[1.02] active:scale-[0.99]"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps Section */}
        <div className="mb-6 pb-0">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100 inline-block mb-3">
              Simple 3-Step Journey
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              3 Simple Steps to M-SAT
            </h3>
            <p className="text-sm text-gray-500 mt-2.5">
              Take a structured, seamless pathway from registration to scholarship confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.step}
                  to={item.link}
                  className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-primary-600/15 hover:-translate-y-2 hover:border-primary-300 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer block"
                >
                  {/* Top glowing accent indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Ambient background blur glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/15 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Header Row: Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-black text-slate-200 group-hover:text-primary-600 tracking-tight transition-colors duration-300 select-none">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xs">
                        <Icon className="w-6 h-6 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Step Footer with interactive badge & arrow */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-primary-600 transition-colors duration-300">
                    <span className="uppercase text-[11px] tracking-wider px-2.5 py-1 rounded-md bg-slate-50 group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors">
                      {item.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300 text-xs font-bold">
                      {item.action} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSat;

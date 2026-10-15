import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { Award, GraduationCap, Trophy, Users, ArrowRight } from 'lucide-react';

const Scholarships = () => {
  const scholarshipsList = [
    {
      icon: Award,
      title: 'M-SAT Merit Scholarship',
      percentage: 'Up to 100%',
      desc: 'Awarded to top performers in our nationwide Om Phoenix Scholarship and Admission Test (M-SAT).',
      criteria: 'Based on M-SAT percentile & rank',
    },
    {
      icon: GraduationCap,
      title: 'Board Exam Excellence',
      percentage: 'Up to 50%',
      desc: 'Merit-based concession for students scoring 90% or above in 10th or 12th Board examinations.',
      criteria: 'Marksheets of CBSE, ICSE, or State Board',
    },
    {
      icon: Trophy,
      title: 'Competitive Exam Achievers',
      percentage: 'Up to 75%',
      desc: 'Special incentive for achievers in NTSE, KVPY, RMO, or state-level talent exams.',
      criteria: 'Official qualification scorecard',
    },
    {
      icon: Users,
      title: 'Special Category Concession',
      percentage: 'Up to 25%',
      desc: 'Dedicated support for siblings studying together, children of defense personnel, and single parents.',
      criteria: 'Valid identification and proof',
    },
  ];

  return (
    <div className="pt-2 sm:pt-4 pb-0 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Explore Scholarships"
          subtitle="Empowering meritorious students with rewarding scholarships and fee waivers up to 100%."
        />

        {/* Hero Card */}
        <div className="bg-gradient-to-r from-[#071f38] via-primary-800 to-primary-900 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl relative overflow-hidden border border-primary-500/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ff5e00]/20 via-[#00a8ff]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 w-full">
            <span className="bg-white/15 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
              Merit First
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 mb-2 text-white">
              Unlock Your Scholarship with M-SAT
            </h3>
            <p className="text-primary-100 text-sm sm:text-base mb-6 leading-relaxed max-w-3xl">
              Take the Om Phoenix Scholarship and Admission Test to assess your analytical abilities and secure up to a 100% waiver on tuition fees.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/scholarships/m-sat" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] hover:from-[#f59e0b] hover:via-[#ea580c] hover:to-[#dc2626] text-white font-extrabold text-sm rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105">
                Apply for M-SAT Now
              </Link>
              <Link to="/scholarships/om-phoenix-olympiad" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all backdrop-blur-xs">
                Om Phoenix Olympiad
              </Link>
            </div>
          </div>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {scholarshipsList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-primary-300 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-extrabold text-primary-600 group-hover:text-primary-700 block mb-1 transition-colors">
                    {item.percentage}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1.5">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                </div>
                <div className="pt-2.5 border-t border-gray-100 text-xs font-medium text-gray-500">
                  <span className="text-gray-400 block mb-0.5">Eligibility:</span>
                  {item.criteria}
                </div>
              </div>
            );
          })}
        </div>

        {/* How to Apply Section */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">How to Claim Your Scholarship?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm mb-5">
            Register online for M-SAT or submit your academic credentials during campus admission to get your scholarship approved instantly.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/admission" className="btn-flame py-2.5 px-6 text-sm">
              <span>Start Admission Inquiry</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;

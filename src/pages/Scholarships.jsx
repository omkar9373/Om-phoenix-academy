import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { Award, GraduationCap, Trophy, Users, ArrowRight } from 'lucide-react';

const Scholarships = () => {
  const scholarshipsList = [
    {
      icon: Award,
      title: 'M-SAT Merit Scholarship',
      percentage: 'Up to 100%',
      desc: 'Awarded to top performers in our nationwide Matrix Scholarship and Admission Test (M-SAT).',
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
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Explore Scholarships"
          subtitle="Empowering meritorious students with rewarding scholarships and fee waivers up to 100%."
        />

        {/* Hero Card */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 sm:p-12 text-white mb-16 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Merit First
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-3 text-white">
              Unlock Your Scholarship with M-SAT
            </h3>
            <p className="text-primary-100 text-base sm:text-lg mb-8">
              Take the Matrix Scholarship and Admission Test to assess your analytical abilities and secure up to a 100% waiver on tuition fees.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/m-sat" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full shadow transition-colors">
                Apply for M-SAT Now
              </Link>
              <Link to="/matrix-olympiad" className="bg-primary-700/80 hover:bg-primary-700 border border-white/30 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Matrix Olympiad
              </Link>
            </div>
          </div>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scholarshipsList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-primary-300 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-extrabold text-primary-600 group-hover:text-primary-700 block mb-1 transition-colors">
                    {item.percentage}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs font-medium text-gray-500">
                  <span className="text-gray-400 block mb-0.5">Eligibility:</span>
                  {item.criteria}
                </div>
              </div>
            );
          })}
        </div>

        {/* How to Apply Section */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">How to Claim Your Scholarship?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-8">
            Register online for M-SAT or submit your academic credentials during campus admission to get your scholarship approved instantly.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/admission" className="btn-primary py-3 px-6 text-sm">
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

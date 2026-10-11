import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { Calendar, Clock, BookOpen } from 'lucide-react';

const MSat = () => {
  const steps = [
    {
      step: '01',
      title: 'Online Registration',
      desc: 'Fill out the simple application form with student details and select your preferred test slot.',
    },
    {
      step: '02',
      title: 'Pay Nominal Fee',
      desc: 'Complete the nominal examination fee payment securely online via UPI or card.',
    },
    {
      step: '03',
      title: 'Appear for M-SAT',
      desc: 'Take the 2-hour objective aptitude test online or at your nearest Om Phoenix study center.',
    },
    {
      step: '04',
      title: 'Results & Scholarship',
      desc: 'Get your performance analysis report and claim up to 100% scholarship on admission.',
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="M-SAT (Admission Test)"
          subtitle="Matrix Scholarship and Admission Test — evaluate aptitude and secure merit-based fee concessions."
        />

        {/* Hero Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Admission &amp; Scholarship Test
              </span>
              <h3 className="text-3xl font-extrabold text-gray-900">
                What is M-SAT?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                M-SAT is Om Phoenix Academy’s flagship diagnostic examination designed to test a student’s fundamental understanding, problem-solving speed, and analytical reasoning in Science, Mathematics, and Mental Ability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-600 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500">Duration</div>
                    <div className="text-sm font-bold text-gray-900">120 Minutes</div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary-600 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500">Format</div>
                    <div className="text-sm font-bold text-gray-900">MCQ Pattern</div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary-600 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500">Frequency</div>
                    <div className="text-sm font-bold text-gray-900">Every Sunday</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white text-center flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Ready to Take M-SAT?</h4>
                <p className="text-xs text-primary-100 mb-6">
                  Registrations for the upcoming Sunday test session are closing soon.
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  to="/admission"
                  className="w-full bg-white text-primary-700 hover:bg-gray-100 font-semibold py-2.5 px-4 rounded-xl text-sm block transition-colors shadow"
                >
                  Register Now
                </Link>
                <Link
                  to="/pay-m-sat-fee"
                  className="w-full bg-primary-700/80 hover:bg-primary-700 border border-white/30 text-white font-semibold py-2.5 px-4 rounded-xl text-sm block transition-colors"
                >
                  Pay Test Fee
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">4 Simple Steps to M-SAT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
                <span className="text-3xl font-black text-primary-200 block mb-2">{item.step}</span>
                <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSat;

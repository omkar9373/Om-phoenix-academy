import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

const FeeStructure = () => {
  const feePlans = [
    {
      title: 'JEE (Main + Advanced)',
      subtitle: '2-Year Integrated Classroom Program',
      tag: 'Class 11 & 12',
      popular: true,
      features: [
        'Complete Physics, Chemistry & Math syllabus',
        'Comprehensive study material & Daily Practice Papers (DPP)',
        'Periodic tests & All India Test Series (AITS)',
        'Doubt-clearing counters & 1-on-1 mentoring',
        'Scholarships up to 100% via M-CET',
      ],
    },
    {
      title: 'NEET (UG) Medical',
      subtitle: 'Target & Comprehensive Medical Batch',
      tag: 'Class 11, 12 & Droppers',
      popular: false,
      features: [
        'In-depth NCERT coverage for Biology, Chemistry & Physics',
        'High-yield question banks & mock test series',
        'Regular parent-teacher academic reviews',
        'Special revision and test-taking speed drills',
        'Scholarships up to 100% via M-CET',
      ],
    },
    {
      title: 'MHT-CET Target Batch',
      subtitle: 'Focused State Entrance Exam Preparation',
      tag: 'Class 12 & Repeaters',
      popular: false,
      features: [
        'State board mapped curriculum with speed optimization',
        'Extensive chapter-wise problem sets',
        'Full-length computer-based simulated tests',
        'Dedicated faculty support and score analysis',
        'Affordable installment plans available',
      ],
    },
    {
      title: 'Foundation Program',
      subtitle: 'Building Strong Concepts for Future Success',
      tag: 'Classes 8, 9 & 10',
      popular: false,
      features: [
        'Strengthening Math and Science fundamentals',
        'Preparation for Olympiads, NTSE, and School Boards',
        'Interactive learning modules and visual demonstrations',
        'Aptitude and logical reasoning development',
        'Early enrollment scholarship concessions',
      ],
    },
  ];

  return (
    <div className="py-4 sm:py-6 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Fee Structure"
          subtitle="Transparent, value-focused fee details and flexible payment plans for all academic courses."
        />

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 border border-primary-200/80 rounded-2xl p-6 mb-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div>
            <h3 className="text-xl font-bold text-primary-900 mb-1">
              Looking for Fee Concessions &amp; Scholarships?
            </h3>
            <p className="text-sm text-primary-700">
              Students can avail up to 100% scholarship on tuition fees through our M-CET entrance test.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link to="/scholarships/m-cet" className="btn-flame py-2.5 px-5 text-xs sm:text-sm">
              Register for M-CET
            </Link>
            <Link to="/scholarships/explorescholarships" className="inline-flex items-center px-5 py-2.5 rounded-full border border-primary-300 text-sm font-semibold text-primary-700 hover:bg-primary-100 transition-colors">
              View Scholarships
            </Link>
          </div>
        </div>

        {/* Fee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {feePlans.map((plan) => (
            <div
              key={plan.title}
              className={`group bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1.5 ${
                plan.popular ? 'border-primary-500 ring-2 ring-primary-500/20 hover:border-primary-600' : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <div className="p-6">
                {plan.popular && (
                  <span className="inline-block bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-3 shadow-xs">
                    Most Popular
                  </span>
                )}
                <span className="inline-block text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md mb-2">
                  {plan.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.title}</h3>
                <p className="text-xs text-gray-500 mb-6">{plan.subtitle}</p>

                <div className="space-y-3 pt-2 border-t border-gray-100">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 bg-white">
                <Link
                  to="/admission"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-sm font-semibold border border-primary-600 text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  <span>Inquire Fee Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights & Policy */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary-600" />
            Fee Policy &amp; Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-base">Installment Options</h4>
              <p>Tuition fees can be paid in convenient installments across the academic year without any extra interest.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-base">All-Inclusive Kit</h4>
              <p>Course fees include complete module books, question banks, academy bag, ID card, and test series access.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-base">Scholarship Adjustment</h4>
              <p>Scholarship earned through M-CET or Olympiads is directly deducted from the second installment of tuition fees.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;

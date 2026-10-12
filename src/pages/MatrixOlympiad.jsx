import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { Target, Award, Calendar, CheckCircle2 } from 'lucide-react';

const MatrixOlympiad = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Apply for Matrix Olympiad"
          subtitle="Test your analytical skills, compete with top students across India, and win exciting awards."
        />

        {/* Overview Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">About Matrix Olympiad</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              The Matrix Olympiad is a prestigious talent-recognition initiative organized to discover and nurture young minds. It helps students understand their competitive standing, gain confidence, and win scholarships up to 100% for IIT-JEE, NEET, and Foundation programs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <Target className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">National Benchmarking</h4>
                  <p className="text-xs text-gray-500 mt-1">Get an All-India Rank (AIR) and detailed chapter-wise analysis.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <Award className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Scholarships &amp; Rewards</h4>
                  <p className="text-xs text-gray-500 mt-1">Cash rewards, certificates of excellence, and academy fee waivers.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Features:</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  Eligible for students from Class 5th to Class 12th.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  Both Online (Computer-Based) and Offline Test options available.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  Free 1-on-1 counseling session with our senior faculty after results.
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Apply Card */}
          <div className="bg-white rounded-2xl p-8 border border-primary-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-4">
                <Calendar className="w-4 h-4" />
                Registrations Open
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Register Today</h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill in your details or connect with our academic team to register for the upcoming Olympiad stage.
              </p>

              <div className="space-y-4">
                <Link
                  to="/m-sat"
                  className="w-full btn-primary py-3 text-sm text-center block"
                >
                  Explore M-SAT Dates
                </Link>
                <Link
                  to="/pay-m-sat-fee"
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Pay Exam Fee Online
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 mt-6 text-center text-xs text-gray-500">
              Have questions? Call helpline:{' '}
              <a href="tel:+919860651233" className="text-primary-600 font-semibold">
                +91 98606 51233
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixOlympiad;

import { useState } from 'react';
import { Link } from 'react-router-dom';

const NeetAnswerKey = () => {
  const [selectedSubject, setSelectedSubject] = useState('Physics');
  const subjects = ['Physics', 'Chemistry', 'Biology'];

  const sampleQuestions = {
    Physics: [
      { q: 1, correctOption: 'B', topic: 'Mechanics' },
      { q: 2, correctOption: 'A', topic: 'Electrostatics' },
      { q: 3, correctOption: 'D', topic: 'Optics' },
      { q: 4, correctOption: 'C', topic: 'Thermodynamics' },
      { q: 5, correctOption: 'B', topic: 'Waves' },
    ],
    Chemistry: [
      { q: 46, correctOption: 'A', topic: 'Organic Chemistry' },
      { q: 47, correctOption: 'C', topic: 'Physical Chemistry' },
      { q: 48, correctOption: 'D', topic: 'Inorganic Chemistry' },
      { q: 49, correctOption: 'B', topic: 'Electrochemistry' },
      { q: 50, correctOption: 'A', topic: 'Thermodynamics' },
    ],
    Biology: [
      { q: 91, correctOption: 'C', topic: 'Cell Biology' },
      { q: 92, correctOption: 'A', topic: 'Genetics' },
      { q: 93, correctOption: 'D', topic: 'Plant Physiology' },
      { q: 94, correctOption: 'B', topic: 'Human Physiology' },
      { q: 95, correctOption: 'C', topic: 'Ecology' },
    ],
  };

  const optionColors = { A: 'bg-blue-100 text-blue-700', B: 'bg-green-100 text-green-700', C: 'bg-yellow-100 text-yellow-700', D: 'bg-red-100 text-red-700' };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #38bdf8 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/20 text-white border border-white/30">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            NEET Answer Key
          </h1>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto">
            Access the official NEET answer key prepared by our expert faculty. Cross-check your
            answers and estimate your score.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 text-center">
          ⚠️ This is a <strong>sample answer key</strong> for demonstration. Official keys will be
          updated after exam day. Please verify with NTA's official website.
        </div>
      </section>

      {/* Subject Tabs */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 mb-8 bg-white p-1.5 rounded-xl shadow-sm border border-slate-100 w-fit mx-auto">
          {subjects.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                selectedSubject === sub
                  ? 'bg-primary-600 text-white shadow'
                  : 'text-slate-600 hover:text-primary-600'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-left font-semibold text-slate-600">Q. No.</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-600">Topic</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-600">Correct Option</th>
              </tr>
            </thead>
            <tbody>
              {sampleQuestions[selectedSubject].map((row, idx) => (
                <tr
                  key={row.q}
                  className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-slate-700">{row.q}</td>
                  <td className="px-6 py-4 text-slate-500">{row.topic}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${optionColors[row.correctOption]}`}>
                      Option {row.correctOption}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Want to predict your rank?
          </h3>
          <p className="text-slate-500 mb-6">
            Use our NEET Rank Predictor to estimate where you stand.
          </p>
          <Link to="/results/neet-rank-predictor" className="btn-primary">
            Try Rank Predictor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NeetAnswerKey;

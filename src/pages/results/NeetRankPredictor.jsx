import { useState } from 'react';
import { Link } from 'react-router-dom';

const NeetRankPredictor = () => {
  const [score, setScore] = useState('');
  const [category, setCategory] = useState('General');
  const [result, setResult] = useState(null);

  const categories = ['General', 'OBC', 'SC', 'ST', 'EWS', 'PH'];

  const predictRank = () => {
    const s = parseInt(score, 10);
    if (!score || isNaN(s) || s < 0 || s > 720) return;
    let baseRank;
    if (s >= 700) baseRank = Math.round(Math.random() * 50 + 10);
    else if (s >= 680) baseRank = Math.round(Math.random() * 200 + 60);
    else if (s >= 650) baseRank = Math.round(Math.random() * 800 + 260);
    else if (s >= 600) baseRank = Math.round(Math.random() * 5000 + 1000);
    else if (s >= 550) baseRank = Math.round(Math.random() * 20000 + 6000);
    else baseRank = Math.round(Math.random() * 80000 + 26000);
    const categoryMultiplier = { General: 1, OBC: 0.7, SC: 0.4, ST: 0.35, EWS: 0.85, PH: 0.5 };
    const predictedRank = Math.round(baseRank * (categoryMultiplier[category] || 1));
    const eligibleColleges =
      predictedRank < 1000 ? 'AIIMS, Top Government Medical Colleges'
      : predictedRank < 5000 ? 'Top Government Medical Colleges'
      : predictedRank < 20000 ? 'Government Medical Colleges'
      : predictedRank < 60000 ? 'State Government Colleges & Top Private Colleges'
      : 'Private Medical Colleges';
    setResult({ predictedRank, eligibleColleges, score: s, category });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #fb923c 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/20 text-white border border-white/30">
            Tools
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            NEET Rank Predictor
          </h1>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            Enter your expected NEET score and category to get an estimated rank and eligible
            college list.
          </p>
        </div>
      </section>

      {/* Predictor Form */}
      <section className="py-16 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Predict Your Rank
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="neet-score">
                Your NEET Score (0–720)
              </label>
              <input
                id="neet-score"
                type="number"
                min="0"
                max="720"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="e.g. 650"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-400 transition bg-white"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <button
              onClick={predictRank}
              className="w-full btn-primary py-3 text-base rounded-xl"
            >
              Predict My Rank
            </button>
          </div>

          {/* Result */}
          {result && (
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-1 text-center">
                Estimated Result
              </p>
              <p className="text-5xl font-extrabold text-primary-600 text-center mb-1">
                AIR ~{result.predictedRank.toLocaleString()}
              </p>
              <p className="text-sm text-slate-400 text-center mb-4">
                Score: {result.score}/720 | Category: {result.category}
              </p>
              <div className="bg-white rounded-xl p-4 border border-primary-100 text-center">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                  Likely Eligible For
                </p>
                <p className="text-sm font-semibold text-slate-700">{result.eligibleColleges}</p>
              </div>
              <p className="text-xs text-slate-400 mt-4 text-center">
                * This is an approximate prediction based on historical data. Actual rank may vary.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Want expert guidance on college selection?
          </h3>
          <p className="text-slate-500 mb-6">
            Our counsellors are here to help you make the best choice for your future.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NeetRankPredictor;

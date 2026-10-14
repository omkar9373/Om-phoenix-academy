import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';

const PayMSatFee = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('studentName');
    const phone = formData.get('phone');
    const grade = formData.get('grade');

    const message = `*M-SAT Fee Payment Request*\n\n*Student:* ${name}\n*Phone:* ${phone}\n*Class:* ${grade}\n*Test Fee:* ₹200`;
    const whatsappUrl = `https://wa.me/919860651233?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-4 sm:py-6 bg-gray-50">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Pay M-SAT Fee"
          subtitle="Complete your examination registration fee payment securely."
        />

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-4">
          {/* Fee Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-6">
            <div>
              <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider block mb-1">
                Examination Fee
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                M-SAT Registration 2026-27
              </h3>
            </div>
            <div className="bg-primary-50 px-5 py-2.5 rounded-xl border border-primary-100 text-right">
              <span className="text-xs text-primary-700 block">Registration Amount</span>
              <span className="text-2xl font-extrabold text-primary-600">₹200</span>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Payment Request Initiated!</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Our team will confirm your payment receipt and send the M-SAT admit card to your registered WhatsApp number and email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student Full Name
                </label>
                <input
                  type="text"
                  name="studentName"
                  required
                  placeholder="Enter student's full name"
                  className="w-full rounded-xl border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2.5 px-3 border text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parent / Student Mobile
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2.5 px-3 border text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Class / Grade
                  </label>
                  <select
                    name="grade"
                    required
                    className="w-full rounded-xl border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2.5 px-3 border text-sm"
                  >
                    <option value="Class 8">Class 8th</option>
                    <option value="Class 9">Class 9th</option>
                    <option value="Class 10">Class 10th</option>
                    <option value="Class 11 - Science (PCM)">Class 11th (JEE)</option>
                    <option value="Class 11 - Science (PCB)">Class 11th (NEET)</option>
                    <option value="Class 12 - Science (PCM)">Class 12th (JEE)</option>
                    <option value="Class 12 - Science (PCB)">Class 12th (NEET)</option>
                    <option value="Repeater / Dropper">Repeater / Dropper</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-xl border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2.5 px-3 border text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-flame py-3.5 flex items-center justify-center gap-2 text-base font-semibold shadow-md mt-6"
              >
                <CreditCard className="w-5 h-5" />
                <span>Proceed to Pay ₹200</span>
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span>100% Secure Transaction &bull; UPI, Cards, Net Banking Supported</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayMSatFee;

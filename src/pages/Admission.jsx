import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import admissionBg from '../assets/admission-bg.png';
import { 
  User, 
  Phone, 
  GraduationCap, 
  School, 
  BookOpen, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Clock, 
  Headphones
} from 'lucide-react';

const Admission = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formDataState, setFormDataState] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const studentName = data.get('studentName');
    const parentPhone = data.get('parentPhone');
    const std = data.get('std');
    const board = data.get('board');
    const course = data.get('course');
    const city = data.get('city') || 'Maharashtra';

    const submissionData = {
      studentName,
      parentPhone,
      std,
      board,
      course,
      city,
    };

    setFormDataState(submissionData);
    setSubmitted(true);

    const message = `*🎓 New Admission Application - Om Phoenix Academy*\n\n` +
      `👤 *Student Name:* ${studentName}\n` +
      `📞 *Parent Mobile:* ${parentPhone}\n` +
      `🏫 *Class / Std:* ${std}\n` +
      `📜 *Board (Maharashtra):* ${board}\n` +
      `📚 *Program:* ${course}\n` +
      `📍 *Location:* ${city}\n\n` +
      `_Submitted via Om Phoenix Academy Online Portal_`;

    const whatsappUrl = `https://wa.me/919860651233?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="py-16 sm:py-20 min-h-screen relative bg-cover bg-center bg-no-repeat bg-slate-50"
      style={{
        backgroundImage: `url(${admissionBg})`,
        backgroundAttachment: 'local',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Admission Inquiry" 
          subtitle="Begin your journey towards academic excellence. Admissions open for academic session 2026-27." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          {/* Main Admission Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/80 shadow-2xl hover:shadow-primary-500/10 transition-all duration-300">
              <div className="mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-100 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-primary-600" />
                  Quick Registration
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Student Admission Form
                </h3>
                <p className="text-sm text-slate-500 mt-1.5">
                  Fill in the student details below to book a free counseling session and test slot.
                </p>
              </div>

              {submitted && formDataState ? (
                <div className="py-8 text-center space-y-5 animate-hero-fade">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">Application Submitted!</h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you for applying. We have received the admission details for <span className="font-semibold text-slate-900">{formDataState.studentName}</span> ({formDataState.std}, {formDataState.board}).
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-left max-w-md mx-auto text-xs space-y-2 text-slate-700">
                    <div className="flex justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-slate-500">Student:</span>
                      <span className="font-semibold">{formDataState.studentName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-slate-500">Parent Mobile:</span>
                      <span className="font-semibold">{formDataState.parentPhone}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-slate-500">Class &amp; Board:</span>
                      <span className="font-semibold">{formDataState.std} ({formDataState.board})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Course Selected:</span>
                      <span className="font-semibold text-primary-600">{formDataState.course}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                    >
                      Fill Another Form
                    </button>
                    <a
                      href="tel:+919860651233"
                      className="btn-primary py-2.5 px-6 text-sm"
                    >
                      Speak with Counselor (+91 98606 51233)
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Student Full Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                      Student Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        name="studentName" 
                        required 
                        placeholder="Enter student's full name"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white" 
                      />
                    </div>
                  </div>

                  {/* Parent Mobile Number */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                      Parent Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input 
                        type="tel" 
                        name="parentPhone" 
                        required 
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="10-digit mobile number (e.g. 9876543210)"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white" 
                      />
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      We will share the batch details and M-SAT test pass on this number.
                    </span>
                  </div>

                  {/* Grid for Class (Std) and Board */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Class / Standard (5th to 12th Std) */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                        Class / Standard <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <School className="w-5 h-5" />
                        </div>
                        <select 
                          name="std" 
                          required
                          defaultValue="10th Standard"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white cursor-pointer"
                        >
                          <option value="5th Standard">5th Standard</option>
                          <option value="6th Standard">6th Standard</option>
                          <option value="7th Standard">7th Standard</option>
                          <option value="8th Standard">8th Standard</option>
                          <option value="9th Standard">9th Standard</option>
                          <option value="10th Standard">10th Standard</option>
                          <option value="11th Standard (Science)">11th Standard (Science)</option>
                          <option value="12th Standard (Science)">12th Standard (Science)</option>
                          <option value="12th Passed / Dropper">12th Passed / Repeater</option>
                        </select>
                      </div>
                    </div>

                    {/* School Board (Maharashtra) */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                        Education Board <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <select 
                          name="board" 
                          required
                          defaultValue="Maharashtra State Board (SSC/HSC)"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white cursor-pointer"
                        >
                          <option value="Maharashtra State Board (SSC/HSC)">
                            Maharashtra State Board (SSC / HSC)
                          </option>
                          <option value="CBSE">
                            CBSE (Central Board)
                          </option>
                          <option value="ICSE / ISC">
                            ICSE / ISC Board
                          </option>
                          <option value="IGCSE / Cambridge">
                            Cambridge / IGCSE
                          </option>
                          <option value="IB (International Baccalaureate)">
                            IB Board
                          </option>
                          <option value="Other Board">
                            Other Board
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Course Interested In */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                      Program / Course Interested In <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <select 
                        name="course" 
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white cursor-pointer"
                      >
                        <option value="JEE (Main & Advanced) Integrated">
                          JEE (Main &amp; Advanced) Integrated Program
                        </option>
                        <option value="NEET (UG) Medical Comprehensive">
                          NEET (UG) Medical Comprehensive Program
                        </option>
                        <option value="MHT-CET Target Batch">
                          MHT-CET Target Batch (Engineering / Pharmacy)
                        </option>
                        <option value="Foundation & Olympiad (Class 5th - 10th)">
                          Foundation &amp; Olympiad Program (5th - 10th Std)
                        </option>
                        <option value="M-SAT Scholarship & Admission Test">
                          M-SAT Scholarship &amp; Admission Test
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* City in Maharashtra */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                      City / Region (Maharashtra)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <select 
                        name="city"
                        defaultValue="Pune"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white cursor-pointer"
                      >
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Chhatrapati Sambhajinagar">Chhatrapati Sambhajinagar (Aurangabad)</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Kolhapur">Kolhapur</option>
                        <option value="Solapur">Solapur</option>
                        <option value="Satara">Satara</option>
                        <option value="Other Maharashtra City">Other Maharashtra City</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full btn-primary py-3.5 text-base font-bold shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Submit Application via WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      Instant forward to Academy WhatsApp Helpline: <span className="font-semibold text-slate-600">+91 98606 51233</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Your contact details are encrypted and strictly confidential.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar / Info & Benefits Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Why Join Om Phoenix Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-white/80 shadow-2xl hover:shadow-primary-500/10 transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100 inline-block mb-3">
                Academy Benefits
              </span>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Why Study at Om Phoenix?
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Up to 100% Scholarship</span>
                    Fee concessions based on M-SAT performance and board examination merit.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Expert Faculty Mentors</span>
                    Experienced teachers from top universities and IIT/NIT alumni.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Personalized Attention</span>
                    Small batch sizes with daily 1-on-1 doubt clearing support.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Maharashtra State &amp; National Syllabi</span>
                    Aligned with Maharashtra SSC/HSC as well as CBSE/ICSE patterns.
                  </div>
                </li>
              </ul>
            </div>

            {/* Helpline & Quick Contact Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-7 text-white shadow-xl shadow-primary-700/15 border border-primary-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Need Guidance?</h4>
                  <span className="text-xs text-primary-100">Talk to our Academic Counselor</span>
                </div>
              </div>
              <p className="text-xs text-primary-100 leading-relaxed mb-5">
                Have questions regarding syllabus, batch timings, or fee concessions? Reach out directly to our admissions office.
              </p>
              <div className="space-y-2.5">
                <a
                  href="tel:+919860651233"
                  className="w-full bg-white text-primary-700 hover:bg-primary-50 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm block text-center transition-all shadow"
                >
                  Call +91 98606 51233
                </a>
                <a
                  href="https://wa.me/919860651233?text=Hello%2C%20I%20have%20an%20admission%20query."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary-700/80 hover:bg-primary-700 border border-white/30 text-white font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm block text-center transition-all"
                >
                  WhatsApp Us (+91 98606 51233)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;

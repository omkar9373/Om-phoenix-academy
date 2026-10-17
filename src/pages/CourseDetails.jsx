import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Award, 
  Calendar, 
  FileText, 
  GraduationCap, 
  PhoneCall, 
  HelpCircle,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { courses } from '../data/courses';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="py-20 text-center bg-slate-50 min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Course Not Found</h2>
        <p className="text-slate-500 mb-4">The academic program you are looking for does not exist or has been moved.</p>
        <Link to="/courses" className="btn-flame text-sm">
          Browse All Courses
        </Link>
      </div>
    );
  }

  // Course specific curriculum highlights
  const curriculumMap = {
    jee: [
      { subject: 'Physics', topics: 'Mechanics, Electrodynamics, Optics, Modern Physics, Thermodynamics' },
      { subject: 'Chemistry', topics: 'Physical Chemistry, Organic Mechanisms, Inorganic NCERT Mastery, Coordination Compounds' },
      { subject: 'Mathematics', topics: 'Calculus, Vectors & 3D Geometry, Algebra, Coordinate Geometry, Trigonometry' },
    ],
    neet: [
      { subject: 'Biology (Botany & Zoology)', topics: 'Cell Biology, Genetics, Human Physiology, Plant Physiology, Ecology & Biotechnology' },
      { subject: 'Physics', topics: 'Kinematics, Laws of Motion, Modern Physics, Current Electricity, Optics' },
      { subject: 'Chemistry', topics: 'Organic Chemistry, Chemical Bonding, Equilibrium, Solutions, NCERT In-Depth' },
    ],
    'mht-cet': [
      { subject: 'Mathematics', topics: 'Calculus, Trigonometric Functions, Vectors, Matrices, Probability' },
      { subject: 'Physics', topics: 'Rotational Dynamics, Oscillations, Electrostatics, Magnetic Effects, Modern Physics' },
      { subject: 'Chemistry', topics: 'Solid State, Chemical Kinetics, p/d/f Block Elements, Aldehydes & Ketones' },
    ],
    foundation: [
      { subject: 'Science (Physics, Chem, Bio)', topics: 'Concept-First Foundation, Practical Demonstrations, NCERT Advanced Applications' },
      { subject: 'Mathematics', topics: 'Logical Reasoning, Number Systems, Geometry, Algebra, Competitive Problem Solving' },
      { subject: 'Mental Ability & Olympiad Prep', topics: 'Analytical Thinking, Pattern Recognition, NTSE / IMO / NSO Specialized Training' },
    ],
  };

  const curriculum = curriculumMap[course.id] || curriculumMap.foundation;

  const highlights = [
    'Complete syllabus coverage mapped strictly to latest exam patterns',
    'Daily Practice Papers (DPP) with same-day doubt clearing counters',
    'Weekly chapter-wise tests and monthly full-length mock examinations',
    'Small batch sizes ensuring individual attention and mentor tracking',
    'Comprehensive study materials, question banks, and formula handbooks',
    'Regular parent-teacher meetings (PTM) with detailed academic analytics'
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===================================================
          1. HERO HEADER
      ==================================================== */}
      <section className="relative py-8 sm:py-10 bg-gradient-to-br from-[#0a1f35] via-[#0d2a48] to-[#168bd1] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5e00]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-amber-300 font-semibold">{course.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/15 text-amber-300 border border-white/20">
              {course.badge || 'ACADEMIC PROGRAM'}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Admissions Open 2026-27
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            {course.id === 'foundation' ? 'Syllabus And Foundation' : course.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed mb-6">
            {course.id === 'foundation'
              ? '5th to 10th CBSE/STATE BOARD Curriculum Syllabus And Foundation'
              : course.description}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl pt-2 border-t border-white/15">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-300 block">Duration</span>
              <span className="text-sm sm:text-base font-extrabold text-white">{course.duration}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-300 block">Eligibility</span>
              <span className="text-sm sm:text-base font-extrabold text-white">{course.eligibility}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-300 block">Batch Mode</span>
              <span className="text-sm sm:text-base font-extrabold text-white">Classroom Offline</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-300 block">Scholarship</span>
              <span className="text-sm sm:text-base font-extrabold text-amber-300">Up to 100% via M-CET</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. COURSE CONTENT & SIDEBAR
      ==================================================== */}
      <section className="py-6 sm:py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            
            {/* Left Column (2 Cols): Course Details */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Key Features & Pedagogy */}
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0a1f35]">Program Highlights &amp; Features</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum Breakdown */}
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0a1f35]">Curriculum &amp; Subject Modules</h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Structured syllabus designed to bridge foundational understanding with advanced competitive difficulty level.
                </p>

                <div className="space-y-3">
                  {curriculum.map((sub, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-primary-300 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm sm:text-base font-bold text-primary-700">{sub.subject}</h3>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Module {i + 1}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{sub.topics}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Classroom Routine & Methodology */}
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0a1f35]">Daily Academic Routine</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-primary-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out">
                    <span className="text-xs font-bold text-primary-600 block mb-1">Step 1 • 2 Hours</span>
                    <h4 className="text-sm font-bold text-[#0a1f35] mb-1">Concept Mastery</h4>
                    <p className="text-[11px] text-slate-500">Interactive theory &amp; real-time problem derivation by faculty.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-secondary-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out">
                    <span className="text-xs font-bold text-secondary-600 block mb-1">Step 2 • 1.5 Hours</span>
                    <h4 className="text-sm font-bold text-[#0a1f35] mb-1">DPP Solving</h4>
                    <p className="text-[11px] text-slate-500">Targeted practice questions with faculty doubt assistance.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-emerald-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out">
                    <span className="text-xs font-bold text-emerald-600 block mb-1">Step 3 • Weekly</span>
                    <h4 className="text-sm font-bold text-[#0a1f35] mb-1">Test &amp; Analysis</h4>
                    <p className="text-[11px] text-slate-500">Mock tests with personalized error analysis and rank tracking.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (1 Col): Sticky Quick Action Card */}
            <div className="lg:col-span-1 space-y-5 lg:sticky lg:top-24">
              
              {/* Main Admission Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-primary-300 transition-all duration-300 ease-out p-5 sm:p-6 overflow-hidden">
                <div className="relative rounded-xl overflow-hidden h-44 w-full mb-4 bg-slate-100">
                  <img
                    src={course.image || '/images/course-jee.jpg'}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-white/95 text-[#168bd1] shadow-xs">
                    Limited Seats (35 / Batch)
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0a1f35] mb-2">{course.title}</h3>
                
                {/* Scholarship Waiver Box */}
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 mb-4">
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-0.5">M-CET Scholarship</span>
                  <p className="text-xs font-semibold text-amber-900 leading-tight">
                    Appear for M-CET and get up to 100% waiver on tuition fees!
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5">
                  <Link
                    to="/admission"
                    className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] hover:from-[#f59e0b] hover:via-[#ea580c] hover:to-[#dc2626] text-white font-bold text-sm shadow-md hover:shadow-orange-500/25 transition-all text-center"
                  >
                    Apply for Admission
                  </Link>

                  <Link
                    to="/scholarships/m-cet"
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-white border border-primary-300 text-primary-700 hover:bg-primary-50 font-bold text-xs transition-colors text-center"
                  >
                    Register for M-CET Scholarship
                  </Link>

                  <a
                    href="tel:8378903312"
                    className="w-full inline-flex items-center justify-center py-2 px-4 rounded-xl text-slate-700 hover:text-primary-600 font-semibold text-xs transition-colors gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-primary-500" />
                    <span>Call Counselor: +91 8378903312</span>
                  </a>
                </div>

                {/* Location / Campus info */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  <p><strong>Campus:</strong> Shakuntal Commercial, Dehu-Moshi Road, Moshi, Pune</p>
                  <p><strong>Batch Timings:</strong> Morning &amp; Evening options available</p>
                </div>
              </div>

              {/* Navigation Back */}
              <div className="text-center">
                <Link
                  to="/courses"
                  className="inline-flex items-center text-xs font-semibold text-primary-600 hover:text-primary-700 gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>View All Other Courses</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;

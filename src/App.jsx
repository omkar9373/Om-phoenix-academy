import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Admission from './pages/Admission';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import FeeStructure from './pages/FeeStructure';
import Scholarships from './pages/Scholarships';
import OmphoenixOlympiad from './pages/OmphoenixOlympiad';
import MSat from './pages/MSat';
import JeeAdvanced from './pages/results/JeeAdvanced';
import JeeMain from './pages/results/JeeMain';
import Neet from './pages/results/Neet';
import Olympiads from './pages/results/Olympiads';
import NeetAnswerKey from './pages/results/NeetAnswerKey';
import Class5to10 from './pages/results/Class5to10';
import Class11to12 from './pages/results/Class11to12';
import MhtCet from './pages/results/MhtCet';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route path="/scholarships/explorescholarships" element={<Scholarships />} />
            <Route path="/scholarships/om-phoenix-olympiad" element={<OmphoenixOlympiad />} />
            <Route path="/scholarships/Omphoenix-olympiad" element={<Navigate to="/scholarships/om-phoenix-olympiad" replace />} />
            <Route path="/Omphoenix-olympiad" element={<Navigate to="/scholarships/om-phoenix-olympiad" replace />} />
            <Route path="/om-phoenix-olympiad" element={<Navigate to="/scholarships/om-phoenix-olympiad" replace />} />
            <Route path="/scholarships/m-sat" element={<MSat />} />
            <Route path="/pay-m-sat-fee" element={<Navigate to="/scholarships/m-sat" replace />} />
            <Route path="/fee" element={<Navigate to="/fee-structure" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/results" element={<Navigate to="/results/class-11th-12th" replace />} />
            <Route path="/results/class-5th-10th" element={<Class5to10 />} />
            <Route path="/results/class-11th-12th" element={<Class11to12 />} />
            <Route path="/results/mht-cet" element={<MhtCet />} />
            <Route path="/results/jee-advanced" element={<JeeAdvanced />} />
            <Route path="/results/jee-main" element={<JeeMain />} />
            <Route path="/results/neet" element={<Neet />} />
            <Route path="/results/olympiads" element={<Olympiads />} />
            <Route path="/results/neet-answer-key" element={<NeetAnswerKey />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

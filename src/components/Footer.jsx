import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Share2, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/om-academy logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#071f38] text-slate-300 pt-8 sm:pt-10 pb-5 border-t border-[#00a8ff]/20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          
          {/* Brand & About */}
          <div className="space-y-3">
            <Link to="/" className="inline-block group" aria-label="Om Phoenix Learning Academy">
              <div className="bg-white/95 group-hover:bg-white transition-all px-3 py-1.5 rounded-xl inline-flex items-center shadow-sm">
                <img 
                  src={logo} 
                  alt="Om Phoenix Learning Academy" 
                  className="h-10 sm:h-11 w-auto object-contain" 
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 line-clamp-3">
              Empowering students with quality education for JEE, NEET, MHT-CET, and Foundation courses to achieve their academic dreams.
            </p>
            <div className="flex space-x-3 pt-1">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Share2 className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-3">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-primary-400 transition-colors">Our Courses</Link></li>
              <li><Link to="/admission" className="hover:text-primary-400 transition-colors">Admission</Link></li>
              <li><Link to="/facilities" className="hover:text-primary-400 transition-colors">Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-3">Support</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-base mb-3">Contact Us</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Office No. 233, 2nd Floor, Shakuntal Commercia, Dehu-Moshi Road, Moshi, Pune 412105</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-[#ff8a00] shrink-0" />
                <a href="tel:8329063312" className="text-xs sm:text-sm hover:text-white transition-colors">+91 8329063312 / 9860651233</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-[#00a8ff] shrink-0" />
                <a href="mailto:omphoenixacademymoshi2026@gmail.com" className="text-xs sm:text-sm hover:text-white transition-colors">omphoenixacademymoshi2026@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Om Phoenix Learning Academy. All rights reserved.
          </p>
          <p>
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

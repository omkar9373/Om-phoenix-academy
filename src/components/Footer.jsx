import { Link } from 'react-router-dom';
import { BookOpen, Globe, MessageCircle, Share2, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-600 p-1.5 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white leading-tight">
                Om Phoenix <br /> Academy
              </span>
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              Empowering students with quality education for JEE, NEET, MHT-CET, and Foundation courses to achieve their academic dreams.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-primary-400 transition-colors">Our Courses</Link></li>
              <li><Link to="/admission" className="hover:text-primary-400 transition-colors">Admission</Link></li>
              <li><Link to="/facilities" className="hover:text-primary-400 transition-colors">Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-sm">123 Education Hub, Knowledge Park, Pune, Maharashtra 411001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                <span className="text-sm">info@omphoenix.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Om Phoenix Learning Academy. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

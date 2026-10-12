import PropTypes from 'prop-types';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 border border-slate-100 hover:border-primary-200 hover:-translate-y-1.5 transition-all duration-300 relative h-full flex flex-col">
      <div className="absolute top-6 right-8 text-primary-100 group-hover:text-primary-200 group-hover:scale-110 transition-all duration-300">
        <Quote className="w-12 h-12 rotate-180" />
      </div>
      
      <div className="mb-6 flex-grow">
        <p className="text-gray-600 italic leading-relaxed relative z-10 text-lg">
          "{testimonial.text}"
        </p>
      </div>
      
      <div className="mt-auto border-t border-gray-50 pt-6">
        <div className="flex flex-col">
          <span className="font-bold text-gray-900 text-lg">{testimonial.name}</span>
          <span className="text-primary-600 font-medium text-sm mt-1">{testimonial.achievement}</span>
          <span className="text-gray-500 text-sm mt-0.5">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    achievement: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default TestimonialCard;

import PropTypes from 'prop-types';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative h-full flex flex-col">
      <div className="absolute top-6 right-8 text-primary-100">
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

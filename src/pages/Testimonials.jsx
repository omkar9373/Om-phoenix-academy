import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Student Testimonials" subtitle="What our successful students say about us." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

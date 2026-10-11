import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Stethoscope, BookOpen, School, Clock, Users } from 'lucide-react';

const iconMap = {
  GraduationCap,
  Stethoscope,
  BookOpen,
  School
};

const CourseCard = ({ course }) => {
  const IconComponent = iconMap[course.icon] || BookOpen;

  return (
    <div className="card group flex flex-col h-full border border-gray-100 hover:border-primary-100 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="p-8 flex-grow">
        <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
          <IconComponent className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {course.description}
        </p>
        
        <div className="space-y-2 mb-6 pt-6 border-t border-gray-50">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2 text-primary-500" />
            <span>Duration: <span className="font-medium text-gray-700">{course.duration}</span></span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2 text-primary-500" />
            <span>Eligibility: <span className="font-medium text-gray-700">{course.eligibility}</span></span>
          </div>
        </div>
      </div>
      <div className="px-8 pb-8 mt-auto">
        <Link 
          to={`/courses/${course.id}`} 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group/link"
        >
          View Details
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    eligibility: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired
};

export default CourseCard;

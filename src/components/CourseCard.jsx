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
    <div className="card group flex flex-col h-full border border-slate-200/80 hover:border-primary-300 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1.5 transition-all duration-300 relative">
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <div className="w-11 h-11 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 shadow-2xs">
          <IconComponent className="w-5 h-5" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-1.5 min-h-[2.5rem] flex items-center">
          {course.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed min-h-[2.5rem]">
          {course.description}
        </p>
        
        <div className="space-y-1.5 mb-3 pt-3 border-t border-gray-100 mt-auto">
          <div className="flex items-center text-xs sm:text-sm text-gray-500">
            <Clock className="w-3.5 h-3.5 mr-2 text-primary-500" />
            <span>Duration: <span className="font-medium text-gray-700">{course.duration}</span></span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-gray-500">
            <Users className="w-3.5 h-3.5 mr-2 text-primary-500" />
            <span>Eligibility: <span className="font-medium text-gray-700">{course.eligibility}</span></span>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 mt-auto">
        <Link 
          to={`/courses/${course.id}`} 
          className="inline-flex items-center text-primary-600 font-semibold text-xs sm:text-sm hover:text-primary-700 transition-colors group/link"
        >
          View Details
          <ArrowRight className="ml-1.5 w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
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

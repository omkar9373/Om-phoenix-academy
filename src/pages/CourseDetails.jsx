import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import SectionTitle from '../components/SectionTitle';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return <div className="py-20 text-center">Course not found.</div>;
  }

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/courses" className="text-primary-600 hover:underline mb-8 inline-block">&larr; Back to Courses</Link>
        <SectionTitle title={course.title} subtitle={course.description} centered={false} />
        
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mt-8">
          <h3 className="text-xl font-bold mb-4">Course Features</h3>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            {course.features?.map((feature, i) => (
              <li key={i} className="text-gray-700">{feature}</li>
            ))}
          </ul>
          
          <Link to="/admission" className="btn-primary">Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

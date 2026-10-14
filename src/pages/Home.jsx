import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Clock, MapPin, Phone, Navigation, ExternalLink } from 'lucide-react';
import StatsSection from '../components/StatsSection';
import HeroCarousel from '../components/HeroCarousel';
import PopularCoursesOverlap from '../components/PopularCoursesOverlap';
import SectionTitle from '../components/SectionTitle';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';

import { courses } from '../data/courses';
import { testimonials } from '../data/testimonials';
import { galleryItems } from '../data/gallery';

const Home = () => {
  return (
    <div>

      {/* =====================================================
          HERO CAROUSEL SECTION
      ====================================================== */}
      <HeroCarousel />

      {/* =====================================================
          POPULAR COURSES OVERLAP SECTION
      ====================================================== */}
      <PopularCoursesOverlap />


      {/* =====================================================
          STATS SECTION
      ====================================================== */}
      <StatsSection />


      {/* =====================================================
          OUR COURSES (ALTERNATING SECTIONS)
      ====================================================== */}
      <section className="py-0 bg-slate-50/70" id="courses">

        <div className="w-full px-2 sm:px-4 lg:px-6">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
            <span className="inline-block py-1 px-3.5 rounded-full bg-[#e8f5fc] text-[#168bd1] text-xs font-bold tracking-wider uppercase mb-2 border border-[#168bd1]/20">
              Academic Programs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f35] tracking-tight mb-2">
              Our Courses
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3"></div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore our carefully designed programs to build strong academic foundations and achieve your goals.
            </p>
          </div>

          {/* Course Cards Container */}
          <div className="space-y-4 sm:space-y-5">
            {/* Flagship Courses: JEE & NEET */}
            {courses.slice(0, 2).map((course, index) => {
              const imageLeft = index % 2 === 0;

              // Image Block
              const imageBlock = (
                <div className="w-full h-full">
                  <div className="relative overflow-hidden rounded-2xl w-full h-44 sm:h-52 lg:h-52 shadow-sm bg-slate-100">
                    <img
                      src={course.image || '/images/course-jee.jpg'}
                      alt={course.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f35]/25 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              );

              // Content Block
              const contentBlock = (
                <div className="flex flex-col justify-center space-y-2.5 sm:space-y-3 h-full">
                  {/* Badge */}
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#e8f5fc] text-[#168bd1] border border-[#168bd1]/25">
                      {course.badge || 'ACADEMIC PROGRAM'}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-2xl font-extrabold text-[#0a1f35] leading-snug tracking-tight group-hover:text-[#168bd1] transition-colors duration-300">
                    {course.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  {/* Course Details (Duration & Eligibility) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                    <div className="flex items-center p-2 rounded-lg bg-slate-50 border border-slate-200/70">
                      <div className="w-7 h-7 rounded-md bg-[#e8f5fc] text-[#168bd1] flex items-center justify-center mr-2.5 flex-shrink-0 shadow-2xs">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block leading-none mb-0.5">
                          Duration
                        </span>
                        <span className="text-xs font-bold text-[#0a1f35]">
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center p-2 rounded-lg bg-slate-50 border border-slate-200/70">
                      <div className="w-7 h-7 rounded-md bg-[#e8f5fc] text-[#168bd1] flex items-center justify-center mr-2.5 flex-shrink-0 shadow-2xs">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block leading-none mb-0.5">
                          Eligibility
                        </span>
                        <span className="text-xs font-bold text-[#0a1f35]">
                          {course.eligibility}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-1">
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0a1f35] hover:bg-[#168bd1] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-[#168bd1]/25 group/btn w-fit"
                    >
                      <span>View Details</span>
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );

              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_-5px_rgba(10,31,53,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(22,139,209,0.2)] hover:border-[#168bd1]/50 hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden p-4 sm:p-5"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
                    {imageLeft ? (
                      <>
                        <div className="order-1 lg:order-1">{imageBlock}</div>
                        <div className="order-2 lg:order-2">{contentBlock}</div>
                      </>
                    ) : (
                      <>
                        <div className="order-2 lg:order-1">{contentBlock}</div>
                        <div className="order-1 lg:order-2">{imageBlock}</div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}

            {/* MHT-CET & Foundation Courses: Col-6 by 6 (2 equal columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-stretch">
              {courses.slice(2, 4).map((course) => (
                <div
                  key={course.id}
                  className="group bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_-5px_rgba(10,31,53,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(22,139,209,0.2)] hover:border-[#168bd1]/50 hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between p-4 sm:p-5 h-full"
                >
                  <div className="flex flex-col flex-grow">
                    {/* Image Block with Badge */}
                    <div className="relative overflow-hidden rounded-xl h-36 sm:h-40 w-full shadow-2xs bg-slate-100 mb-3 flex-shrink-0">
                      <img
                        src={course.image || '/images/course-jee.jpg'}
                        alt={course.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f35]/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
                      <span className="absolute top-2.5 left-2.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md text-[#168bd1] border border-white/60 shadow-2xs">
                        {course.badge || 'ACADEMIC PROGRAM'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1f35] leading-snug tracking-tight group-hover:text-[#168bd1] transition-colors duration-300 mb-1.5 min-h-[2.5rem] flex items-center">
                      {course.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2 min-h-[2.25rem]">
                      {course.description}
                    </p>

                    {/* Details: Duration & Eligibility */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 mt-auto">
                      <div className="flex items-center p-2 rounded-lg bg-slate-50 border border-slate-200/70 h-full">
                        <div className="w-6 h-6 rounded-md bg-[#e8f5fc] text-[#168bd1] flex items-center justify-center mr-2 flex-shrink-0 shadow-2xs">
                          <Clock className="w-3 h-3" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block leading-none mb-0.5">
                            Duration
                          </span>
                          <span className="text-xs font-bold text-[#0a1f35] leading-tight block">
                            {course.duration}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center p-2 rounded-lg bg-slate-50 border border-slate-200/70 h-full">
                        <div className="w-6 h-6 rounded-md bg-[#e8f5fc] text-[#168bd1] flex items-center justify-center mr-2 flex-shrink-0 shadow-2xs">
                          <Users className="w-3 h-3" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block leading-none mb-0.5">
                            Eligibility
                          </span>
                          <span className="text-xs font-bold text-[#0a1f35] leading-tight block">
                            {course.eligibility}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0a1f35] hover:bg-[#168bd1] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-2xs hover:shadow-sm hover:shadow-[#168bd1]/25 group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
                    <span className="text-[11px] font-semibold text-primary-600">
                      Admissions Open
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Courses Button */}
          <div className="text-center mt-5 sm:mt-6 mb-3">
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] hover:from-[#f59e0b] hover:via-[#ea580c] hover:to-[#dc2626] text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 hover:scale-102 group"
            >
              <span>View All Courses</span>
              <ArrowRight
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

        </div>

      </section>


      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="py-0 bg-white">

        <div className="w-full px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Success Stories"
            subtitle="Hear from our students who are working towards achieving their academic goals with Om Phoenix Learning Academy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {testimonials.slice(0, 2).map((testimonial) => (

              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY SECTION
      ====================================================== */}
      


      {/* =====================================================
          VISIT OUR BRANCH / MAP SECTION
      ====================================================== */}
     


      {/* =====================================================
          CALL TO ACTION
      ====================================================== */}
      <section className="relative py-0 bg-gradient-to-br from-[#071f38] via-[#0a2540] to-[#05162b] text-white text-center overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#00a8ff]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#ff5e00]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 tracking-tight text-white">

            Ready to Start Your Journey?

          </h2>


          <p className="text-lg md:text-xl text-white font-medium mb-10 leading-relaxed">

            Admissions are open for the upcoming academic session.
            Start your learning journey with Om Phoenix Learning Academy.

          </p>


          <Link
            to="/admission"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] hover:from-[#f59e0b] hover:via-[#ea580c] hover:to-[#dc2626] text-white font-extrabold text-lg rounded-full transition-all shadow-xl hover:shadow-[0_15px_30px_-5px_rgba(255,94,0,0.55)] hover:scale-105"
          >

            Enroll Now

            <ArrowRight className="ml-2.5 w-5 h-5" />

          </Link>

        </div>

      </section>


    </div>
  );
};

export default Home;
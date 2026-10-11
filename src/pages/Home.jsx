import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Clock, MapPin, Phone, Navigation, ExternalLink } from 'lucide-react';
import StatsSection from '../components/StatsSection';
import HeroCarousel from '../components/HeroCarousel';
import PopularCoursesOverlap from '../components/PopularCoursesOverlap';
import SectionTitle from '../components/SectionTitle';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import Mentors from '../components/Mentors';

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
      <section className="py-20 lg:py-24 bg-slate-50/70" id="courses">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#e8f5fc] text-[#168bd1] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 border border-[#168bd1]/20">
              Academic Programs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f35] tracking-tight mb-4">
              Our Courses
            </h2>
            <div className="w-20 h-1.5 bg-[#f59e0b] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore our carefully designed programs to build strong academic foundations and achieve your goals.
            </p>
          </div>

          {/* Alternating Course Cards */}
          <div className="space-y-12 lg:space-y-16">
            {courses.map((course, index) => {
              const imageLeft = index % 2 === 0;

              // Image Block
              const imageBlock = (
                <div className="w-full">
                  <div className="relative overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-full shadow-md bg-slate-100">
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
                <div className="flex flex-col justify-center space-y-5">
                  {/* Badge */}
                  <div>
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#e8f5fc] text-[#168bd1] border border-[#168bd1]/25">
                      {course.badge || 'ACADEMIC PROGRAM'}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f35] leading-tight tracking-tight group-hover:text-[#168bd1] transition-colors duration-300">
                    {course.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details (Duration & Eligibility) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                      <div className="w-10 h-10 rounded-lg bg-[#e8f5fc] text-[#168bd1] flex items-center justify-center mr-3.5 flex-shrink-0 shadow-sm">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                          Duration
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#0a1f35]">
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                      <div className="w-10 h-10 rounded-lg bg-[#e8f5fc] text-[#168bd1] flex items-center justify-center mr-3.5 flex-shrink-0 shadow-sm">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                          Eligibility
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#0a1f35]">
                          {course.eligibility}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-3">
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#0a1f35] hover:bg-[#168bd1] text-white font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#168bd1]/25 group/btn w-fit"
                    >
                      <span>View Details</span>
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );

              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(10,31,53,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(22,139,209,0.18)] hover:border-[#168bd1]/40 transition-all duration-500 overflow-hidden p-6 sm:p-8 lg:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
          </div>

          {/* View All Courses Button */}
          <div className="text-center mt-16 lg:mt-20">
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <span>View All Courses</span>
              <ArrowRight
                className="ml-2.5 w-5 h-5 transform group-hover:translate-x-1.5 transition-transform"
              />
            </Link>
          </div>

        </div>

      </section>


      {/* =====================================================
          MENTORS SECTION
      ====================================================== */}

      <Mentors />


      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
      <section className="py-20 bg-slate-50 border-t border-slate-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Life at Om Phoenix"
            subtitle="Catch glimpses of our academic culture, activities, faculty, events, and celebrations."
          />


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {galleryItems
              .filter((item) => item.featured)
              .slice(0, 4)
              .map((item) => (

                <Link
                  to="/gallery"
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col"
                >

                  <div className="relative h-64 overflow-hidden bg-slate-900">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity">
                    </div>


                    {/* Tag */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">

                      {item.tag}

                    </span>


                    {/* Title */}
                    <div className="absolute bottom-3 inset-x-3 text-white">

                      <p className="text-sm font-bold line-clamp-1">
                        {item.title}
                      </p>

                    </div>

                  </div>

                </Link>

              ))}

          </div>


          {/* Gallery Button */}
          <div className="text-center mt-10">

            <Link
              to="/gallery"
              className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700 transition-colors text-lg group"
            >

              Explore Full Gallery

              <ArrowRight
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISIT OUR BRANCH / MAP SECTION
      ====================================================== */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Visit Our Moshi Branch"
            subtitle="We are here to help you build a brighter future. Visit us at our Moshi Branch."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-4 items-stretch">

            {/* Branch Info Card */}
            <div className="lg:col-span-2 flex flex-col">
              <div
                className="flex-1 rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,130,214,0.18)] border border-primary-100"
                style={{
                  background: 'linear-gradient(160deg, #004875 0%, #0082d6 60%, #36c5ff 100%)',
                }}
              >
                {/* Card header */}
                <div className="px-7 pt-8 pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/15 p-2.5 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">Branch</p>
                      <h3 className="text-white text-lg font-extrabold leading-tight">OM PHOENIX ACADEMY</h3>
                      <p className="text-blue-200 text-sm font-semibold">Moshi Branch</p>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-7 py-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" />
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Shakuntal Commercia Building, Office No. 233, 2nd Floor,
                      Near City Pride School, Dehu-Moshi Road, Jadhavwadi, Moshi, Maharashtra.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" />
                    <div className="space-y-1.5">
                      {['8329063312', '9860641233', '9860651233'].map((num) => (
                        <a
                          key={num}
                          href={`tel:${num}`}
                          className="block text-white font-semibold text-sm hover:text-blue-200 transition-colors"
                        >
                          {num.replace(/(\d{5})(\d{5})/, '$1 $2')}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Directions button */}
                <div className="px-7 pb-8">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Shakuntal+Commercia+Building+Office+No+233+Near+City+Pride+School+Dehu+Moshi+Road+Jadhavwadi+Moshi+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-colors shadow-md hover:shadow-lg"
                    aria-label="Get Directions to Om Phoenix Academy Moshi Branch"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-3">
              <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12)] border border-gray-100">
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-md text-xs font-bold text-primary-700 border border-primary-100">
                  <MapPin className="w-3.5 h-3.5 text-primary-600" />
                  Om Phoenix Academy – Moshi Branch
                </div>
                <iframe
                  title="Om Phoenix Academy Moshi Branch Map"
                  src="https://maps.google.com/maps?q=Shakuntal+Commercia+Building+Near+City+Pride+School+Dehu+Moshi+Road+Jadhavwadi+Moshi+Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Map showing Om Phoenix Academy Moshi Branch location"
                />
              </div>
            </div>

          </div>

          <p className="mt-5 text-center text-sm text-gray-400">
            Having trouble viewing the map?{' '}
            <a
              href="https://www.google.com/maps/search/Shakuntal+Commercia+Building+Near+City+Pride+School+Dehu+Moshi+Road+Jadhavwadi+Moshi+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 font-semibold hover:underline"
            >
              Open in Google Maps ↗
            </a>
          </p>
        </div>
      </section>


      {/* =====================================================
          CALL TO ACTION
      ====================================================== */}
      <section className="py-20 bg-[#0a1f35] text-white text-center">

        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">

            Ready to Start Your Journey?

          </h2>


          <p className="text-xl text-gray-300 mb-10">

            Admissions are open for the upcoming academic session.
            Start your learning journey with Om Phoenix Learning Academy.

          </p>


          <Link
            to="/admission"
            className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-4 px-10 rounded-full text-lg inline-flex items-center transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >

            Enroll Now

            <ArrowRight className="ml-2 w-5 h-5" />

          </Link>

        </div>

      </section>


    </div>
  );
};

export default Home;
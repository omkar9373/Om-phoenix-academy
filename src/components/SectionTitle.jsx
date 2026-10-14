import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-6 sm:mb-8 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1.5 w-24 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mt-6 rounded-full shadow-xs ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  centered: PropTypes.bool
};

export default SectionTitle;

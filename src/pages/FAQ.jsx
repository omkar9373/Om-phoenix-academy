import SectionTitle from '../components/SectionTitle';
import { faqs } from '../data/faq';

const FAQ = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Frequently Asked Questions" />
        <div className="space-y-6">
          {faqs.map(faq => (
            <div key={faq.id} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

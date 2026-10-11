import SectionTitle from '../components/SectionTitle';

const Admission = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const course = formData.get('course');
    
    const message = `*New Admission Inquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Course:* ${course}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Admission" subtitle="Apply for our courses today." />
        
        <form className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 px-3 border" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" name="phone" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 px-3 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Course Interested In</label>
              <select name="course" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 px-3 border">
                <option value="JEE Main & Advanced">JEE Main & Advanced</option>
                <option value="NEET (UG)">NEET (UG)</option>
                <option value="MHT-CET">MHT-CET</option>
                <option value="Foundation Courses">Foundation Courses</option>
              </select>
            </div>
            <button type="submit" className="w-full btn-primary py-3">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;

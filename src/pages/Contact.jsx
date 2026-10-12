import SectionTitle from '../components/SectionTitle';
import { MapPin, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';

/* ─── Branch constants ──────────────────────────────────────────────────── */
const BRANCH = {
  name: 'OM PHOENIX ACADEMY',
  subtitle: 'Moshi Branch',
  address:
    'Shakuntal Commercia Building, Office No. 233, 2nd Floor, Near City Pride School, Dehu-Moshi Road, Jadhavwadi, Moshi, Maharashtra.',
  phones: [
    { display: '83290 63312', tel: '8329063312' },
    { display: '98606 41233', tel: '9860641233' },
    { display: '98606 51233', tel: '9860651233' },
  ],
  email: 'info@omphoenix.edu',
  // Directions URL for the exact address
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Shakuntal+Commercia+Building+Office+No+233+Near+City+Pride+School+Dehu+Moshi+Road+Jadhavwadi+Moshi+Maharashtra',
  // Embed src – searches for the address so the pin lands accurately
  mapEmbedSrc:
    'https://maps.google.com/maps?q=Shakuntal+Commercia+Building+Near+City+Pride+School+Dehu+Moshi+Road+Jadhavwadi+Moshi+Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const whatsappMessage = `*New Contact Message*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/919860651233?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── Hero banner ──────────────────────────────────────────────────── */}
      <div
        className="relative py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #004875 0%, #0082d6 55%, #36c5ff 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/20 text-white border border-white/30">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Get in touch with us for any queries about admissions, courses, or campus visits.
          </p>
        </div>
      </div>

      {/* ── Contact form + info cards ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary-50 p-3 rounded-full text-primary-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Our Location</h3>
                <p className="text-gray-600 leading-relaxed">
                  Shakuntal Commercia Building, Office No. 233, 2nd Floor,
                  Near City Pride School, Dehu-Moshi Road, Jadhavwadi, Moshi, Maharashtra.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary-50 p-3 rounded-full text-primary-600 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Phone Numbers</h3>
                <div className="space-y-1">
                  {BRANCH.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="block text-gray-600 hover:text-primary-600 transition-colors font-medium"
                    >
                      📞 {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary-50 p-3 rounded-full text-primary-600 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Email Address</h3>
                <a
                  href="mailto:info@omphoenix.edu"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  info@omphoenix.edu
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2.5 px-4 border outline-none transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2.5 px-4 border outline-none transition"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full rounded-xl border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2.5 px-4 border outline-none transition resize-none"
                  placeholder="Your Message"
                />
              </div>
              <button type="submit" className="w-full btn-primary py-3 rounded-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Map + Branch card section ──────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Visit Our Moshi Branch"
            subtitle="We are here to help you build a brighter future. Visit us at our Moshi Branch."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-4 items-stretch">

            {/* ── Branch Info Card (2 cols) ─────────────────────────────── */}
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
                      <h3 className="text-white text-lg font-extrabold leading-tight">
                        {BRANCH.name}
                      </h3>
                      <p className="text-blue-200 text-sm font-semibold">{BRANCH.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-7 py-6 space-y-5">

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" />
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {BRANCH.address}
                    </p>
                  </div>

                  {/* Phone numbers */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" />
                    <div className="space-y-1.5">
                      {BRANCH.phones.map((p) => (
                        <a
                          key={p.tel}
                          href={`tel:${p.tel}`}
                          className="block text-white font-semibold text-sm hover:text-blue-200 transition-colors"
                        >
                          {p.display}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" />
                    <a
                      href={`mailto:${BRANCH.email}`}
                      className="text-white text-sm font-semibold hover:text-blue-200 transition-colors"
                    >
                      {BRANCH.email}
                    </a>
                  </div>
                </div>

                {/* Get Directions button */}
                <div className="px-7 pb-8">
                  <a
                    href={BRANCH.directionsUrl}
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

            {/* ── Google Map Embed (3 cols) ─────────────────────────────── */}
            <div className="lg:col-span-3">
              <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12)] border border-gray-100">
                {/* Decorative label badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-md text-xs font-bold text-primary-700 border border-primary-100">
                  <MapPin className="w-3.5 h-3.5 text-primary-600" />
                  Om Phoenix Academy – Moshi Branch
                </div>

                <iframe
                  title="Om Phoenix Academy Moshi Branch Location"
                  src={BRANCH.mapEmbedSrc}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Map showing Om Phoenix Academy Moshi Branch location"
                />
              </div>
            </div>

          </div>

          {/* ── Open in Maps link ──────────────────────────────────────────── */}
          <p className="mt-5 text-center text-sm text-gray-400">
            Having trouble viewing the map?{' '}
            <a
              href={BRANCH.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 font-semibold hover:underline"
            >
              Open in Google Maps ↗
            </a>
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;

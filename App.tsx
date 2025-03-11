import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gallery } from 'react-photoswipe-gallery';
import {
  Heart,
  MapPin,
  Calendar,
  Clock,
  Mail,
  Phone,
  Gift,
  Users,
  Navigation,
  Hotel,
  Camera
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2024-09-15T16:00:00').getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timelineEvents = [
    { date: 'June 2020', title: 'First Meeting', description: 'A chance encounter at a local café' },
    { date: 'December 2020', title: 'First Date', description: 'Dinner and a walk under the stars' },
    { date: 'August 2021', title: 'Moving In Together', description: 'Starting our life together' },
    { date: 'February 2023', title: 'The Proposal', description: 'A magical evening in Paris' },
    { date: 'September 2024', title: 'Wedding Day', description: 'Beginning our forever' }
  ];

  const weddingParty = [
    { role: 'Maid of Honor', name: 'Sarah Johnson', relation: 'Bride\'s Sister' },
    { role: 'Best Man', name: 'Michael Thompson', relation: 'Groom\'s Brother' },
    { role: 'Bridesmaid', name: 'Emily Davis', relation: 'Bride\'s Best Friend' },
    { role: 'Groomsman', name: 'James Wilson', relation: 'Groom\'s Best Friend' }
  ];

  const photos = [
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80', width: 1200, height: 800, alt: 'Engagement Photo 1' },
    { src: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&q=80', width: 1200, height: 800, alt: 'Couple Photo 1' },
    { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80', width: 1200, height: 800, alt: 'Pre-wedding 1' },
    { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80', width: 1200, height: 800, alt: 'Engagement Photo 2' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-slate-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {['home', 'story', 'details', 'gallery', 'registry', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize ${
                  activeSection === section
                    ? 'text-rose-600 font-semibold'
                    : 'text-gray-600 hover:text-rose-500'
                } transition-colors duration-200`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-rose-600 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sarah & Michael
          </h1>
          <p className="text-2xl text-gray-700 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            September 15, 2024
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                className="bg-white/90 p-6 rounded-lg shadow-md w-28"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-rose-600">{value}</div>
                <div className="text-sm text-gray-600 capitalize">{unit}</div>
              </motion.div>
            ))}
          </div>

          <Heart className="text-rose-500 w-12 h-12 mx-auto animate-pulse" />
        </motion.div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Story
          </h2>
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.date}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-8"
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <h3 className="text-xl font-semibold text-rose-600">{event.date}</h3>
                  <h4 className="text-lg font-medium text-gray-800">{event.title}</h4>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                {index % 2 === 0 && (
                  <div className="w-4 h-4 rounded-full bg-rose-500 flex-shrink-0" />
                )}
                {index % 2 === 1 && (
                  <div className="w-4 h-4 rounded-full bg-rose-500 flex-shrink-0" />
                )}
                <div className={`flex-1 ${index % 2 === 1 ? 'text-left' : ''}`}>
                  {index % 2 === 1 && (
                    <>
                      <h3 className="text-xl font-semibold text-rose-600">{event.date}</h3>
                      <h4 className="text-lg font-medium text-gray-800">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="py-20 bg-rose-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wedding Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Calendar className="text-rose-500 w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">Ceremony</h3>
              </div>
              <p className="text-gray-700">
                September 15, 2024<br />
                4:00 PM<br />
                St. Mary's Cathedral<br />
                123 Church Street<br />
                New York, NY 10001
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Clock className="text-rose-500 w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">Reception</h3>
              </div>
              <p className="text-gray-700">
                6:00 PM - 11:00 PM<br />
                The Grand Plaza Hotel<br />
                456 Plaza Avenue<br />
                New York, NY 10001
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Hotel className="text-rose-500 w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">Accommodations</h3>
              </div>
              <p className="text-gray-700">
                The Grand Plaza Hotel<br />
                Special room block rate: $199/night<br />
                Booking code: WEDDING2024<br />
                <a href="tel:+1234567890" className="text-rose-600 hover:text-rose-700">
                  Call to Reserve: (123) 456-7890
                </a>
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Users className="text-rose-500 w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">Dress Code</h3>
              </div>
              <p className="text-gray-700">
                Formal Attire<br />
                Ladies: Floor-length gowns<br />
                Gentlemen: Tuxedos or dark suits<br />
                Colors: Neutral tones preferred
              </p>
            </motion.div>
          </div>

          {/* Wedding Party */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Wedding Party
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {weddingParty.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <h4 className="text-xl font-semibold text-rose-600">{member.role}</h4>
                  <p className="text-gray-800 font-medium">{member.name}</p>
                  <p className="text-gray-600">{member.relation}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Photo Gallery
          </h2>
          <Gallery>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <motion.div
                  key={photo.src}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </Gallery>
        </div>
      </section>

      {/* Registry */}
      <section id="registry" className="py-20 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Registry
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we are registered at the following locations:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {['Crate & Barrel', 'West Elm', 'Amazon'].map((store) => (
              <motion.a
                key={store}
                href="#"
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <Gift className="text-rose-500 w-8 h-8 mb-4" />
                <span className="text-gray-800 font-medium">{store}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Questions?
          </h2>
          <div className="bg-rose-50 p-8 rounded-lg shadow-md">
            <p className="text-center text-gray-700 mb-8">
              For any questions about the wedding, please don't hesitate to contact us:
            </p>
            <div className="flex justify-center space-x-8">
              <a href="mailto:wedding@example.com" className="flex items-center text-gray-600 hover:text-rose-500">
                <Mail className="w-6 h-6 mr-2" />
                <span>wedding@example.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-rose-500">
                <Phone className="w-6 h-6 mr-2" />
                <span>(123) 456-7890</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="text-rose-500 w-8 h-8 mx-auto mb-4" />
          <p className="text-gray-600">Sarah & Michael</p>
          <p className="text-gray-500">September 15, 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
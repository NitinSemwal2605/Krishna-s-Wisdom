import { Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://i.postimg.cc/2SQSFzDb/flute.png" // Replace with your image URL
                alt="Krishna's Wisdom Logo"
                className="h-8 w-8 rounded-full" // Adjust image size and shape as needed
              />
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Krishna's Wisdom
              </span>
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-md`}>
              Discover the timeless wisdom of the Bhagavad Gita through our AI-powered spiritual guide.
              Get personalized guidance for your life's journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className={`${isDark ? 'text-gray-400' : 'text-gray-600'} hover:text-purple-500`}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className={`${isDark ? 'text-gray-400' : 'text-gray-600'} hover:text-purple-500`}>
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className={`${isDark ? 'text-gray-400' : 'text-gray-600'} hover:text-purple-500`}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className={`${isDark ? 'text-gray-400' : 'text-gray-600'} hover:text-purple-500`}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className={`h-5 w-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  55semwalnitin@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={`h-5 w-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  +91 7536862785
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className={`h-5 w-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Shivalik Nagar , Haridwar
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Krishna's Wisdom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

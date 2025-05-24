
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/c764919b-6594-4120-90eb-81a5a3c78c65.png" 
                alt="IPD Club" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-lg text-white">IPD Club</span>
            </div>
            <p className="text-white/80 text-sm">
              Your creative space for building amazing tech & product experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Teams', 'Events', 'Projects', 'Gallery'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>📧 ipd.club@university.edu</li>
              <li>📱 +1 (555) 123-4567</li>
              <li>📍 Mvj College of Engineering , Room 301</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { name: 'Instagram', icon: '📷' },
                { name: 'LinkedIn', icon: '💼' },
                { name: 'Twitter', icon: '🐦' },
                { name: 'Discord', icon: '💬' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'var(--ipd-glass)', backdropFilter: 'blur(10px)' }}
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 IPD Club. Made with ❤️ by the Software Core Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

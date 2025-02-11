import emailjs from 'emailjs-com'; // Import EmailJS
import { BookOpen, Heart, Users } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const { name, email, message } = formData;

    // EmailJS service to send the message
    emailjs
      .sendForm('service_cv50c3d', 'template_s8tjyw9', e.target, 'GAehD-Q0GufBmdjwy')
      .then(
        (result) => {
          setSendStatus('Message sent successfully!');
          setIsSending(false);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setSendStatus('Failed to send the message. Please try again.');
          setIsSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
          <img
              src="https://i.postimg.cc/YqbTgZ4N/logo.png" 
              alt="Krishna's Wisdom Logo"
              className=" h-32 rounded-full" 
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Divine Wisdom for Modern Life
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Experience personalized spiritual guidance through the timeless teachings of the Bhagavad Gita
          </p>
          <Link
            to="/chat"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Your Spiritual Journey
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose Krishna's Wisdom?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              icon: BookOpen,
              title: 'Ancient Wisdom',
              description: 'Access the timeless teachings of the Bhagavad Gita in a modern context'
            }, {
              icon: Heart,
              title: 'Personal Guidance',
              description: 'Receive customized spiritual advice for your unique life situations'
            }, {
              icon: Users,
              title: 'Community',
              description: 'Join a growing community of spiritual seekers on the path of dharma'
            }].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-700 shadow-lg text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://i.pinimg.com/736x/6d/36/a6/6d36a664c63767bd1dd85f7dc930224d.jpg"
                alt="Krishna Statue"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Our Mission
              </h3>
              <p className="mb-6 text-gray-300">
                Krishna's Wisdom is dedicated to making the profound teachings of the Bhagavad Gita
                accessible to everyone seeking spiritual guidance in their daily lives. Our AI-powered
                platform combines ancient wisdom with modern technology to provide personalized insights
                and practical advice.
              </p>
              <p className="mb-6 text-gray-300">
                We believe that the timeless wisdom of Lord Krishna can help address the challenges of
                modern life, bringing peace, clarity, and purpose to those who seek it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {sendStatus && (
              <p className="text-center mt-4 text-white">{sendStatus}</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

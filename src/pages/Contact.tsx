
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'ipd.club@university.edu',
      description: 'For general inquiries and partnership opportunities'
    },
    {
      icon: '📱',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Available during business hours (9 AM - 6 PM)'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'Engineering Building, Room 301',
      description: 'Office hours: Monday-Friday, 10 AM - 4 PM'
    },
    {
      icon: '💬',
      title: 'Discord',
      details: 'IPD Club Server',
      description: 'Join our community for real-time discussions'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', handle: '@ipdclub', color: 'from-pink-400 to-purple-500' },
    { name: 'LinkedIn', icon: '💼', handle: 'IPD Club University', color: 'from-blue-500 to-blue-600' },
    { name: 'Twitter', icon: '🐦', handle: '@ipdclub', color: 'from-blue-400 to-blue-500' },
    { name: 'YouTube', icon: '📺', handle: 'IPD Club', color: 'from-red-500 to-red-600' },
    { name: 'GitHub', icon: '💻', handle: 'ipdclub', color: 'from-gray-700 to-gray-800' },
    { name: 'Discord', icon: '💬', handle: 'Join Server', color: 'from-indigo-500 to-purple-600' }
  ];

  const faqItems = [
    {
      question: 'How can I join IPD Club?',
      answer: 'Fill out our application form on the Join Us page. We welcome students from all branches and years!'
    },
    {
      question: 'Are there membership fees?',
      answer: 'No! IPD Club membership is completely free. We believe in making innovation accessible to everyone.'
    },
    {
      question: 'Can I propose a project idea?',
      answer: 'Absolutely! We love hearing new ideas. Reach out to us and we\'ll help you turn your vision into reality.'
    },
    {
      question: 'Do you offer mentorship?',
      answer: 'Yes! Our senior members and alumni provide mentorship and guidance to help you grow and succeed.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions, ideas, or just want to say hi? We'd love to hear from you! 
              Our community is always open to new connections and collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-card hover-lift text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <CardTitle className="text-lg font-bold text-gray-800">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-semibold text-ipd-purple">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-white/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="bg-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more..."
                      rows={5}
                      className="bg-white/50"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Location and Hours */}
            <div className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">Find Us On Campus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-4xl mb-2">🗺️</div>
                      <p>Campus Map</p>
                      <p className="text-sm">Engineering Building, Room 301</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Office Hours:</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><span className="font-medium">Monday - Friday:</span> 10:00 AM - 4:00 PM</p>
                      <p><span className="font-medium">Saturday:</span> 12:00 PM - 3:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQ */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">Quick FAQ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-gray-800 text-sm">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                      {index < faqItems.length - 1 && <hr className="border-gray-200" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Follow Our Journey</h2>
            <p className="text-lg text-gray-600">Stay connected and updated with all our latest activities!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialLinks.map((social, index) => (
              <Card key={index} className="glass-card hover-lift text-center cursor-pointer group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl text-white">{social.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{social.name}</h3>
                  <p className="text-sm text-gray-600">{social.handle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

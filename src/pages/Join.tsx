
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    year: '',
    interests: '',
    why: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const perks = [
    {
      icon: '🎓',
      title: 'Learn & Grow',
      description: 'Access to workshops, mentorship, and hands-on project experience'
    },
    {
      icon: '🤝',
      title: 'Network & Connect',
      description: 'Build relationships with peers, alumni, and industry professionals'
    },
    {
      icon: '🚀',
      title: 'Build & Create',
      description: 'Work on real projects that make an impact in the community'
    },
    {
      icon: '🏆',
      title: 'Lead & Excel',
      description: 'Opportunities to take leadership roles and develop management skills'
    },
    {
      icon: '💡',
      title: 'Innovate & Experiment',
      description: 'Access to cutting-edge technology and resources for your ideas'
    },
    {
      icon: '🌟',
      title: 'Recognition & Achievement',
      description: 'Showcase your work and gain recognition for your contributions'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">Join IPD Club</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to be part of something amazing? We welcome students from all branches who are passionate about innovation and building cool stuff!
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-ipd-purple to-ipd-blue text-white px-6 py-3 rounded-full font-semibold animate-bounce-gentle">
              <span>🎉</span>
              <span>We're open to ALL branches!</span>
              <span>🎉</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Why Join IPD Club?</h2>
            <p className="text-lg text-gray-600">Here's what makes being part of our community so special</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <Card key={index} className="glass-card hover-lift text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="text-4xl mb-4">{perk.icon}</div>
                  <CardTitle className="text-xl font-bold text-gray-800">{perk.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Ready to Apply?</h2>
            <p className="text-lg text-gray-600">Fill out this form and we'll get back to you soon!</p>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-800">Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@university.edu"
                      className="bg-white/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch/Major *</Label>
                    <Input
                      id="branch"
                      name="branch"
                      type="text"
                      required
                      value={formData.branch}
                      onChange={handleChange}
                      placeholder="e.g., Computer Science, Mechanical, etc."
                      className="bg-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Study *</Label>
                    <select
                      id="year"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ipd-purple"
                    >
                      <option value="">Select your year</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                      <option value="graduate">Graduate Student</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <Input
                    id="interests"
                    name="interests"
                    type="text"
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="e.g., Design, Software Development, Hardware, AI, etc."
                    className="bg-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="why">Why do you want to join IPD Club? *</Label>
                  <Textarea
                    id="why"
                    name="why"
                    required
                    value={formData.why}
                    onChange={handleChange}
                    placeholder="Tell us about your motivation, what you hope to achieve, and what you can contribute to the club..."
                    rows={5}
                    className="bg-white/50"
                  />
                </div>

                <div className="text-center pt-6">
                  <Button type="submit" className="btn-primary px-12 py-4 text-lg">
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">What Happens Next?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Application Review',
                description: 'Our team reviews your application within 3-5 business days'
              },
              {
                step: '2',
                title: 'Meet & Greet',
                description: 'If selected, we\'ll invite you for a casual chat with current members'
              },
              {
                step: '3',
                title: 'Welcome Aboard!',
                description: 'Join our orientation session and start your IPD Club journey'
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-ipd-purple to-ipd-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;

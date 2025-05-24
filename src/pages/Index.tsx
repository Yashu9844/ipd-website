
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  const features = [
    {
      title: 'Teams',
      description: 'Join one of our specialized core teams and collaborate with amazing people',
      icon: '👥',
      link: '/teams'
    },
    {
      title: 'Projects',
      description: 'Work on real-world product development projects that make an impact',
      icon: '🚀',
      link: '/projects'
    },
    {
      title: 'Events',
      description: 'Attend workshops, hackathons, and networking sessions',
      icon: '🎉',
      link: '/events'
    },
    {
      title: 'Community',
      description: 'Connect with fellow innovators and build lifelong friendships',
      icon: '❤️',
      link: '/contact'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Members' },
    { number: '50+', label: 'Projects Completed' },
    { number: '7', label: 'Core Teams' },
    { number: '100+', label: 'Events Hosted' }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--ipd-navy)' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C9FF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            {/* Official IPD Logo */}
            <div className="flex justify-center animate-bounce-gentle">
              <img 
                src="/lovable-uploads/c764919b-6594-4120-90eb-81a5a3c78c65.png" 
                alt="IPD Club - Integrated Product Development" 
                className="w-32 h-32 object-contain animate-glow"
              />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight" style={{ color: 'var(--ipd-text)' }}>
                <span className="gradient-text">Innovate.</span>{' '}
                <span className="gradient-text">Build.</span>{' '}
                <span className="gradient-text">Shine.</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(249, 250, 251, 0.8)' }}>
                Your creative space for building amazing tech & product experiences
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="btn-primary text-lg px-12 py-4 animate-glow">
                <Link to="/teams">Explore Teams</Link>
              </Button>
              <Button asChild variant="outline" className="btn-secondary text-lg px-12 py-4 text-black">
                <Link to="/events">See Events</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
                  <div className="font-medium" style={{ color: 'rgba(249, 250, 251, 0.7)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About IPD Club</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(249, 250, 251, 0.8)' }}>
              We're a dynamic community of students passionate about innovation and product development. 
              From ideation to implementation, we bridge the gap between creativity and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover-lift group cursor-pointer animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <Link to={feature.link}>
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold" style={{ color: 'black' }}>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center" style={{ color: 'black' }}>
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Join the Innovation?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We welcome students from all branches! Come be part of something amazing.
            </p>
            <Button asChild className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 text-lg px-12 py-4 font-semibold border border-white/30">
              <Link to="/join">Join IPD Club</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

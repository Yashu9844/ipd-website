
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Events = () => {
  const featuredEvent = {
    title: 'Innovation Showcase 2024',
    date: 'March 21, 2024',
    time: '6:00 PM - 9:00 PM',
    venue: 'Engineering Auditorium',
    description: 'Join us for our biggest event of the year! Teams will showcase their latest projects, and we\'ll have networking, food, and exciting announcements about upcoming initiatives.',
    highlights: ['Project Demos', 'Networking Session', 'Food & Drinks', 'Prize Announcements']
  };

  const upcomingEvents = [
    {
      title: 'Design Thinking Workshop',
      date: 'March 15, 2024',
      time: '2:00 PM - 5:00 PM',
      venue: 'Room 205',
      type: 'Workshop',
      status: 'Upcoming'
    },
    {
      title: 'Tech Talk: AI in Product Development',
      date: 'March 28, 2024',
      time: '7:00 PM - 8:30 PM',
      venue: 'Virtual',
      type: 'Talk',
      status: 'Upcoming'
    },
    {
      title: 'Hackathon 2024',
      date: 'April 5-7, 2024',
      time: '48 Hours',
      venue: 'Innovation Lab',
      type: 'Hackathon',
      status: 'Registration Open'
    }
  ];

  const pastEvents = [
    {
      title: 'New Member Orientation',
      date: 'February 20, 2024',
      participants: 120,
      type: 'Orientation'
    },
    {
      title: 'Product Management 101',
      date: 'February 14, 2024',
      participants: 85,
      type: 'Workshop'
    },
    {
      title: 'Winter Project Expo',
      date: 'January 30, 2024',
      participants: 200,
      type: 'Expo'
    },
    {
      title: 'Industry Networking Night',
      date: 'January 25, 2024',
      participants: 150,
      type: 'Networking'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming': return 'bg-blue-100 text-blue-800';
      case 'Registration Open': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Workshop': return 'bg-purple-100 text-purple-800';
      case 'Talk': return 'bg-indigo-100 text-indigo-800';
      case 'Hackathon': return 'bg-red-100 text-red-800';
      case 'Networking': return 'bg-yellow-100 text-yellow-800';
      case 'Orientation': return 'bg-teal-100 text-teal-800';
      case 'Expo': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--ipd-navy)' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">Events</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(249, 250, 251, 0.8)' }}>
              From workshops to hackathons, we host events that inspire learning, collaboration, and innovation. Join us and be part of something amazing!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Featured Event</h2>
            <p className="text-lg" style={{ color: 'rgba(249, 250, 251, 0.7)' }}>Don't miss our biggest event of the season!</p>
          </div>

          <Card className="glass-card max-w-4xl mx-auto animate-glow">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <Badge className="gradient-bg text-white px-4 py-2 text-sm font-semibold">
                  FEATURED EVENT
                </Badge>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold" style={{ color: 'black' }}>
                {featuredEvent.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg" style={{ background: 'var(--ipd-glass)' }}>
                  <div className="text-2xl mb-2">📅</div>
                  <div className="font-semibold" style={{ color: 'black' }}>{featuredEvent.date}</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ background: 'var(--ipd-glass)' }}>
                  <div className="text-2xl mb-2">⏰</div>
                  <div className="font-semibold" style={{ color: 'black' }}>{featuredEvent.time}</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ background: 'var(--ipd-glass)' }}>
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-semibold"style={{ color: 'black' }}>{featuredEvent.venue}</div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed text-center"style={{ color: 'black' }}>
                {featuredEvent.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg" style={{ color: 'black' }}>Event Highlights:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {featuredEvent.highlights.map((highlight, index) => (
                    <div key={index} className="text-center p-3 rounded-lg" style={{ background: 'var(--ipd-glass)' }}>
                      <div className="font-medium" style={{ color: 'black' }}>{highlight}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-4">
                <button className="btn-primary">
                  Register Now
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Upcoming Events</h2>
            <p className="text-lg" style={{ color: 'rgba(249, 250, 251, 0.7)' }}>Mark your calendars for these exciting upcoming events!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="glass-card hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                    <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold" style={{ color: 'black' }}>{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">📅</span>
                      <span className="font-medium"style={{ color: 'black' }}>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">⏰</span>
                      <span className="font-medium"style={{ color: 'black' }}>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">📍</span>
                      <span className="font-medium"style={{ color: 'black' }}>{event.venue}</span>
                    </div>
                  </div>
                  <button className="w-full btn-secondary mt-4" style={{ color: 'black' }}>
                    Learn More
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Past Events</h2>
            <p className="text-lg" style={{ color: 'rgba(249, 250, 251, 0.7)' }}>Check out some of our recent successful events!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="glass-card hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'black' }}>{event.title}</h3>
                      <p style={{ color: 'rgba(249, 250, 251, 0.7)' }}>{event.date}</p>
                    </div>
                    <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">👥</span>
                    <span className="font-medium"style={{ color: 'black' }}>{event.participants} participants</span>
                  </div>
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

export default Events;

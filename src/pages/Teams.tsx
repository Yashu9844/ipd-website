
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Teams = () => {
  const teams = [
    {
      name: 'Design Core',
      emoji: '🎨',
      lead: 'Alex Chen',
      coLead: 'Sarah Kim',
      description: 'Creating beautiful, user-centered designs that tell compelling stories',
      color: 'from-pink-400 to-purple-500'
    },
    {
      name: 'Software Core',
      emoji: '💻',
      lead: 'Marcus Johnson',
      coLead: 'Emma Rodriguez',
      description: 'Building robust applications and digital solutions that scale',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Embedded Core',
      emoji: '🔧',
      lead: 'David Park',
      coLead: 'Lisa Zhang',
      description: 'Developing smart hardware solutions and IoT innovations',
      color: 'from-green-400 to-teal-500'
    },
    {
      name: 'Engineering Core',
      emoji: '⚙️',
      lead: 'Ryan Kumar',
      coLead: 'Zoe Martinez',
      description: 'Solving complex technical challenges with engineering excellence',
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Neotech Core',
      emoji: '🌐',
      lead: 'Jordan Lee',
      coLead: 'Maya Patel',
      description: 'Exploring emerging technologies like AI, blockchain, and VR',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      name: 'Business & Management',
      emoji: '📊',
      lead: 'Chris Taylor',
      coLead: 'Nina Singh',
      description: 'Driving strategy, operations, and bringing products to market',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Media Core',
      emoji: '📸',
      lead: 'Tyler Ross',
      coLead: 'Aria Kumar',
      description: 'Capturing moments and telling our story through visual media',
      color: 'from-teal-400 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--ipd-navy)' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">Our Teams</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(249, 250, 251, 0.8)' }}>
              Meet the amazing core teams that make IPD Club the innovative community it is. 
              Each team brings unique skills and perspectives to our projects.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <Card key={index} className="glass-card hover-lift group cursor-pointer animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center space-y-4">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${team.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{team.emoji}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold" style={{ color: 'black' }}>{team.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="leading-relaxed" style={{ color: 'black' }}>{team.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 rounded-lg" style={{ background: 'var(--ipd-glass)' }}>
                      <span className="font-medium" style={{ color: 'black' }}>Lead:</span>
                      <span className="font-semibold gradient-text">{team.lead}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg" style={{ background: 'var(--ipd-glass)' }}>
                      <span className="font-medium" style={{ color: 'black' }}>Co-Lead:</span>
                      <span className="font-semibold gradient-text">{team.coLead}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join a Team CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Find Your Team
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Interested in joining one of our core teams? Each team welcomes new members who are passionate and eager to learn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 border border-white/30">
                Apply to Join
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ipd-purple font-semibold py-3 px-8 rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teams;

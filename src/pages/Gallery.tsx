
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      alt: 'Team collaboration session',
      caption: 'Brainstorming session during our Design Thinking Workshop'
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop',
      alt: 'Hackathon event',
      caption: 'Team working hard during our 48-hour Hackathon'
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop',
      alt: 'Project presentation',
      caption: 'Student presenting their project at Innovation Showcase'
    },
    {
      src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&h=300&fit=crop',
      alt: 'Workshop session',
      caption: 'Hands-on learning during our Product Management workshop'
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      alt: 'Team building',
      caption: 'Annual team building retreat - creating memories!'
    },
    {
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop',
      alt: 'Tech talk',
      caption: 'Industry expert sharing insights about AI in product development'
    },
    {
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop',
      alt: 'Networking event',
      caption: 'Members networking at our Industry Connect evening'
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop',
      alt: 'Demo day',
      caption: 'Demo day - showcasing amazing student projects'
    },
    {
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=300&fit=crop',
      alt: 'Award ceremony',
      caption: 'Celebrating winners at our annual competition'
    }
  ];

  const eventCategories = [
    { name: 'All Events', filter: 'all' },
    { name: 'Workshops', filter: 'workshop' },
    { name: 'Hackathons', filter: 'hackathon' },
    { name: 'Networking', filter: 'networking' },
    { name: 'Competitions', filter: 'competition' }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--ipd-navy)' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(249, 250, 251, 0.8)' }}>
              Relive the amazing moments from our events, workshops, and community gatherings. 
              Every photo tells a story of innovation, collaboration, and fun!
            </p>
            <div className="inline-flex items-center space-x-2 gradient-bg text-white px-6 py-3 rounded-full font-semibold">
              <span>📸</span>
              <span>Captured by our talented Media Core team</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {eventCategories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  background: 'var(--ipd-glass)', 
                  color: 'var(--ipd-text)', 
                  border: '1px solid rgba(255, 255, 255, 0.2)' 
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="glass-card hover-lift cursor-pointer group overflow-hidden animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">🔍</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Core Shoutout */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="text-6xl mb-6">📸</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Shoutout to Media Core!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              These amazing photos are brought to you by our incredible Media Core team. 
              They capture every moment and help us share our story with the world!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                { role: 'Photography Lead', name: 'Tyler Ross', emoji: '📷' },
                { role: 'Video Production', name: 'Aria Kumar', emoji: '🎬' },
                { role: 'Social Media', name: 'Jamie Chen', emoji: '📱' }
              ].map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                  <div className="text-3xl mb-3">{member.emoji}</div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-white/80">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;

import React, { useState } from 'react';
import { Leaf, Globe, MessageCircle, Briefcase, Users, BarChart, ArrowLeft } from 'lucide-react';
import { Twitter, MessageSquare } from 'lucide-react'; // Added Twitter and MessageSquare icons
import Header from './components/Header';
import AudienceSelection from './components/AudienceSelection';
import LinkSection from './components/LinkSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);

  const businessLinks = [
    {
      title: "Carbify Business Solutions",
      description: "Discover how Carbify can help your business offset carbon emissions with transparency and measurable impact.",
      url: "https://business.carbify.io/",
      icon: <Briefcase className="w-10 h-10" />
    },
    {
      title: "Global Carbon Standard",
      description: "Learn about our UN-approved carbon certification ensuring transparency and real-world impact.",
      url: "https://carbify.io/global-carbon-standard",
      icon: <Globe className="w-10 h-10" />
    },
    {
      title: "Impact Analytics",
      description: "Access real-time data and analytics on your carbon offsetting initiatives.",
      url: "https://carbify.io/impact-analytics",
      icon: <BarChart className="w-10 h-10" />
    },
    {
      title: "Contact Our Experts",
      description: "Get in touch with our team to discuss tailored carbon offsetting solutions for your company.",
      url: "mailto:sales@carbify.io",
      icon: <MessageCircle className="w-10 h-10" />
    }
  ];

  const cryptoLinks = [
    {
      title: "Carbify Token Ecosystem",
      description: "Explore our innovative carbon debit tokens and NFTrees linked to real-world environmental impact.",
      url: "https://carbify.io/token-ecosystem",
      icon: <Leaf className="w-10 h-10" />
    },
    {
      title: "Eco Empires: Battle for Earth",
      description: "Join our MMO-RTS game that gamifies carbon offsetting and make a real-world difference while playing.",
      url: "https://www.ecoempires.com/",
      icon: <Globe className="w-10 h-10" />
    },
    {
      title: "Join Our Community",
      description: "Connect with our community on various platforms and stay updated on the latest developments.",
      url: "#",
      icon: <Users className="w-10 h-10" />,
      subLinks: [
        { name: "Discord", url: "https://discord.gg/carbify", icon: <MessageSquare className="w-6 h-6" /> },
        { name: "Telegram", url: "https://t.me/carbify", icon: <MessageCircle className="w-6 h-6" /> },
        { name: "Twitter", url: "https://twitter.com/carbify_io", icon: <Twitter className="w-6 h-6" /> },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <div className="flex-grow container mx-auto px-4 py-4">
        <Header selectedAudience={selectedAudience} />
        {!selectedAudience ? (
          <AudienceSelection onSelect={setSelectedAudience} />
        ) : (
          <div className="fade-in mt-4"> {/* Reduced top margin by 30px */}
            <button
              onClick={() => setSelectedAudience(null)}
              className="mb-4 text-white hover:text-accent transition-colors duration-300"
              aria-label="Back to selection"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <LinkSection
              links={selectedAudience === 'business' ? businessLinks : cryptoLinks}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
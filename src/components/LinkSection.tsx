import React from 'react';

interface SubLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface Link {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  subLinks?: SubLink[];
}

interface LinkSectionProps {
  links: Link[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ links }) => {
  return (
    <section className="mb-10 fade-in">
      <div className="grid gap-6 md:grid-cols-2">
        {links.map((link, index) => (
          <div
            key={index}
            className="link-item flex flex-col p-6 rounded-lg hover-lift custom-radius cursor-pointer"
            onClick={() => !link.subLinks && window.open(link.url, '_blank', 'noopener,noreferrer')}
          >
            <div className="flex items-start mb-4">
              <div className="mr-6 text-primary flex-shrink-0">
                {React.cloneElement(link.icon as React.ReactElement, { className: 'w-12 h-12' })}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {link.title}
                </h3>
                <p className="text-sm text-lightText">{link.description}</p>
              </div>
            </div>
            {link.subLinks && (
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                {link.subLinks.map((subLink, subIndex) => (
                  <a
                    key={subIndex}
                    href={subLink.url}
                    className="flex items-center justify-center p-3 bg-primary text-white rounded-full hover:bg-accent transition-colors duration-300 w-12 h-12"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={subLink.name}
                  >
                    {React.cloneElement(subLink.icon as React.ReactElement, { className: 'w-6 h-6' })}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LinkSection;
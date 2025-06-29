import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Import client components dynamically for better SEO
const HeroCarousel = dynamic(() => import('./HeroCarousel'));
const InteractiveProjectsGrid = dynamic(
  () => import('./InteractiveProjectsGrid'),
);
const TestimonialsCarousel = dynamic(() => import('./TestimonialsCarousel'));
const FAQAccordion = dynamic(() => import('./FAQAccordion'));
const ContactForm = dynamic(() => import('./ContactForm'));
const ProjectMapWrapper = dynamic(() => import('./ProjectMapWrapper'));

// --- Projects Data (Server-side accessible) ---
export const projects = [
  {
    title: 'Amcoproperties',
    location: 'Kikuyu',
    description:
      'A dynamic website for Amcoproperties in Kikuyu, featuring instant WhatsApp chat and a modern property showcase.',
    features: ['Instant WhatsApp chat', 'Modern property showcase'],
    imageUrl:
      'https://images.unsplash.com/photo-1587745890135-20db8c79b027?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    impact: 'Streamlined client communication',
    coords: { lat: -1.25, lng: 36.6686 },
    url: 'https://amcoproperties.co.ke',
  },
  {
    title: 'Fanaka Real Estate Ltd',
    location: 'Nairobi',
    description:
      'A robust platform for Fanaka Real Estate Ltd, Nairobi, with advanced search, blog, and mobile-first design.',
    features: ['Advanced search', 'Blog integration'],
    imageUrl:
      'https://images.unsplash.com/photo-1614059470716-e7f3cabab081?q=80&w=533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    impact: 'Enhanced user engagement',
    coords: { lat: -1.2921, lng: 36.8219 },
    url: 'https://fanaka.co.ke',
  },
  {
    title: 'Abib Homes',
    location: 'Thika , Kiambu',
    description:
      'A modern website for a premium plots agency in Thika, featuring elegant branding and seamless property listings.',
    features: ['Mobile-friendly', 'WhatsApp integration'],
    imageUrl: 'https://fanaka.co.ke/storage/w1.webp',
    impact: 'Increased leads by 40%',
    coords: { lat: -1.3201, lng: 36.7202 },
    url: 'https://abibhomes.com/',
  },
  {
    title: 'Kitengela Sunrise Plots',
    location: 'Kitengela, Kajiado',
    description:
      'A vibrant site for a fast-growing agency, with interactive maps and easy inquiry forms for plot buyers.',
    features: ['Interactive map', 'Lead capture forms'],
    imageUrl:
      'https://images.unsplash.com/photo-1718037026797-948d2c3a5fac?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    impact: 'Doubled online inquiries',
    coords: { lat: -1.4746, lng: 36.9631 },
    url: '#',
  },
  {
    title: 'Ngong Hills Realty',
    location: 'Ngong, Kajiado',
    description:
      'A clean, fast-loading platform for a plots agency near Ngong Hills, optimized for local SEO and mobile users.',
    features: ['SEO optimized', 'Fast loading'],
    imageUrl:
      'https://images.unsplash.com/photo-1597050063949-19cc3e33a88b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    impact: 'Improved Google ranking',
    coords: { lat: -1.3527, lng: 36.6626 },
    url: '#',
  },
  {
    title: 'Pettmall Shelters Ltd',
    location: 'Nairobi',
    description:
      'A professional site for a Pettmall Shelters Ltd, with a gallery, testimonials, and WhatsApp chat support.',
    features: ['Gallery', 'WhatsApp chat support'],
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1736338574831-f37239e478b4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    impact: 'Boosted client trust',
    coords: { lat: -1.0334, lng: 37.0693 },
    url: 'https://pettmallshelters.co.ke/',
  },
  {
    title: 'Ruiru Land Hub',
    location: 'Ruiru, Kiambu',
    description:
      'A robust website for a Ruiru plots seller, featuring property filters and a blog for real estate tips.',
    features: ['Property filters', 'Blog integration'],
    imageUrl:
      'https://images.unsplash.com/photo-1665425923597-43d605daa8f2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    impact: 'Increased time on site',
    coords: { lat: -1.1454, lng: 36.9586 },
    url: 'https://pettmallshelters.co.ke/',
  },
  {
    title: 'Waraka Homes',
    location: 'Nairobi, Kiambu, Machakos',
    description:
      'Waraka Homes is a premier real estate company specializing in the sale of residential and commercial plots in strategic locations across Nairobi, Kiambu, and Machakos.',
    features: [
      'Ready title deeds',
      'Modern infrastructure',
      'Secure & compliant',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1591389703635-e15a07b842d7?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    impact: 'Empowering confident land investment',
    coords: { lat: -1.2921, lng: 36.8219 },
    url: 'https://waraka.home',
  },
];

// --- Hero Section (Server-side rendered) ---
const Hero = () => (
  <section className="relative text-center py-10 md:py-16 rounded-xl mb-10 shadow-lg overflow-hidden">
    {/* Carousel background - Client component */}
    <HeroCarousel projects={projects} />

    {/* Hero content - Server-side rendered for SEO */}
    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
      <Image
        src="https://media.licdn.com/dms/image/v2/D4D03AQEr-wPwND-YXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700389389011?e=1755734400&v=beta&t=ZVVVewcr0wCcT78Q-4q3C01lvjGOS51uF9E3g-iOyxw"
        alt="Edwin Muhoro - Real Estate Website Developer"
        width={112}
        height={112}
        className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-4 object-cover"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
        Your Trusted Partner for Real Estate Websites
      </h1>
      <p className="text-lg md:text-2xl text-white opacity-90 mb-6">
        Empowering Kenyan land agencies with beautiful, secure, and
        high-converting websites. Stand out, get found, and win more clients.
      </p>
      <a
        href="#contact"
        className="btn btn-primary bg-white text-primary font-bold px-6 py-2 rounded-full shadow z-hover"
      >
        Let&apos;s Work Together
      </a>
    </div>
  </section>
);

// --- Static Project Cards Grid (Server-side rendered for SEO) ---
const ProjectsGrid = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center text-base-content opacity-80">
      Featured Real Estate Projects
    </h2>
    <InteractiveProjectsGrid projects={projects} />
  </section>
);

// --- Static Testimonials Section (Server-side rendered for SEO) ---
const Testimonials = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center text-base-content opacity-80">
      What Real Estate Clients Say
    </h2>
    <TestimonialsCarousel />
  </section>
);

// --- Project Impact Stats (Server-side rendered) ---
const ImpactStats = () => (
  <section className="mb-16">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      <div className="bg-base-100 rounded-xl shadow p-6">
        <div className="text-3xl font-bold text-primary mb-2">8+</div>
        <div className="text-base-content opacity-70">Real Estate Websites</div>
      </div>
      <div className="bg-base-100 rounded-xl shadow p-6">
        <div className="text-3xl font-bold text-primary mb-2">+200%</div>
        <div className="text-base-content opacity-70">
          Avg. Increase in Inquiries
        </div>
      </div>
      <div className="bg-base-100 rounded-xl shadow p-6">
        <div className="text-3xl font-bold text-primary mb-2">100%</div>
        <div className="text-base-content opacity-70">Mobile-Optimized</div>
      </div>
    </div>
  </section>
);

// --- Why Your Real Estate Agency Needs a Website (Server-side rendered) ---
const WhyWebsiteSection = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center text-base-content opacity-80">
      Why Your Real Estate Agency Needs a Website
    </h2>
    <div className="max-w-3xl mx-auto bg-base-100 rounded-xl shadow-lg p-8 mb-8">
      <ul className="list-disc list-inside space-y-3 text-base-content text-opacity-80 text-left">
        <li>
          <span className="font-semibold text-primary">
            Builds Credibility:
          </span>{' '}
          A professional website instantly boosts trust with potential
          clients—most buyers research online before contacting an agent.
        </li>
        <li>
          <span className="font-semibold text-primary">
            24/7 Online Presence:
          </span>{' '}
          Your listings and contact info are always available, even when your
          office is closed.
        </li>
        <li>
          <span className="font-semibold text-primary">Lead Generation:</span>{' '}
          Capture inquiries directly from your site with forms, WhatsApp, and
          call-to-action buttons.
        </li>
        <li>
          <span className="font-semibold text-primary">
            Cost-Effective Marketing:
          </span>{' '}
          Unlike paid ads, your website is a one-time investment that keeps
          working for you—no ongoing ad spend required.
        </li>
        <li>
          <span className="font-semibold text-primary">Full Control:</span> You
          own your brand, content, and client data—unlike social media or
          third-party platforms.
        </li>
        <li>
          <span className="font-semibold text-primary">
            SEO & Google Visibility:
          </span>{' '}
          Get found by buyers searching for plots in your area. A website helps
          you rank on Google and attract organic traffic.
        </li>
        <li>
          <span className="font-semibold text-primary">
            Showcase Your Work:
          </span>{' '}
          Display past projects, testimonials, and unique selling points to
          stand out from competitors.
        </li>
        <li>
          <span className="font-semibold text-primary">
            Professional Email:
          </span>{' '}
          Use a branded email (e.g., info@youragency.co.ke) for more trust and
          better communication.
        </li>
      </ul>
    </div>
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-base-100 rounded-xl shadow p-6 flex flex-col items-center">
        <h3 className="text-lg font-bold text-primary mb-2">Website</h3>
        <ul className="text-base-content text-opacity-80 text-left list-disc list-inside space-y-1">
          <li>One-time investment</li>
          <li>Permanent online presence</li>
          <li>Builds long-term trust</li>
          <li>Organic (free) traffic from Google</li>
          <li>Showcase all your listings</li>
          <li>Direct lead capture</li>
        </ul>
      </div>
      <div className="bg-base-100 rounded-xl shadow p-6 flex flex-col items-center border-2 border-primary/30">
        <h3 className="text-lg font-bold text-primary mb-2">Paid Ads Only</h3>
        <ul className="text-base-content text-opacity-80 text-left list-disc list-inside space-y-1">
          <li>Ongoing monthly costs</li>
          <li>Leads stop when ads stop</li>
          <li>Lower trust without a website</li>
          <li>Limited info in short ads</li>
          <li>Harder to showcase all properties</li>
          <li>Less control over your brand</li>
        </ul>
      </div>
    </div>
  </section>
);

// --- How I Work Timeline (Server-side rendered) ---
const steps = [
  { title: 'Discovery', desc: "Understand your agency's needs and goals." },
  { title: 'Design', desc: 'Create a modern, user-friendly design.' },
  { title: 'Development', desc: 'Build a fast, secure, mobile-first website.' },
  { title: 'Launch', desc: 'Go live and ensure everything works perfectly.' },
  { title: 'Support', desc: 'Ongoing help and updates as needed.' },
];

const HowIWork = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center text-base-content opacity-80">
      How I Work
    </h2>
    <div className="flex flex-col md:flex-row md:justify-center gap-6">
      {steps.map((step, i) => (
        <div
          key={i}
          className="flex-1 bg-base-100 rounded-xl shadow p-6 text-center animate-fadeInUp"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="text-primary text-2xl font-bold mb-2">{i + 1}</div>
          <div className="font-semibold mb-1 text-base-content opacity-80">
            {step.title}
          </div>
          <div className="text-base-content text-opacity-60 text-sm">
            {step.desc}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- Tech Stack Icons (Server-side rendered) ---
const tech = [
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🌬️' },
  { name: 'WhatsApp API', icon: '💬' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
];

const TechStack = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center text-base-content opacity-80">
      Tech Stack
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
      {tech.map((t, i) => (
        <div
          key={i}
          className="flex flex-col items-center bg-base-100 rounded-xl shadow p-4 w-28 animate-fadeInUp"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="text-3xl mb-2">{t.icon}</div>
          <div className="text-base-content opacity-80 font-semibold text-sm">
            {t.name}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- Contact Section (Server-side rendered wrapper) ---
const ContactSection = () => (
  <section id="contact" className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center text-base-content opacity-80">
      Let&apos;s Build Your Website
    </h2>
    <ContactForm />
  </section>
);

// --- FAQ Section (Server-side rendered wrapper) ---
const FAQSection = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center text-base-content opacity-80">
      Frequently Asked Questions
    </h2>
    <FAQAccordion />
  </section>
);

// --- Pricing Packages (Server-side rendered) ---
const PricingPackages = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center text-base-content opacity-80">
      Pricing Packages for Real Estate Websites
    </h2>
    <div className="flex flex-col md:flex-row justify-center gap-8">
      {/* Starter Package */}
      <div className="flex-1 bg-base-100 rounded-xl shadow-lg p-8 text-center border-2 border-primary/20">
        <h3 className="text-xl font-bold mb-2 text-primary">Starter</h3>
        <div className="text-3xl font-bold mb-4">Ksh 9,400</div>
        <ul className="mb-6 text-base-content text-opacity-80 text-left list-disc list-inside">
          <li>All-in-One Landing Page</li>
          <li>Mobile Responsive</li>
          <li>WhatsApp Integration</li>
          <li>Basic Gallery</li>
          <li>Contact Form</li>
        </ul>
        <a href="#contact" className="btn btn-primary w-full">
          Get Started
        </a>
      </div>
      {/* Professional Package */}
      <div className="flex-1 bg-base-100 rounded-xl shadow-lg p-8 text-center border-2 border-primary">
        <h3 className="text-xl font-bold mb-2 text-primary">Professional</h3>
        <div className="text-3xl font-bold mb-4">Ksh 18,000</div>
        <ul className="mb-6 text-base-content text-opacity-80 text-left list-disc list-inside">
          <li>Multi-Page Website</li>
          <li>Property Listings</li>
          <li>WhatsApp & Email Integration</li>
          <li>Photo Gallery & Testimonials</li>
          <li>SEO Optimization</li>
        </ul>
        <a href="#contact" className="btn btn-primary w-full">
          Get Started
        </a>
      </div>
      {/* Premium Package */}
      <div className="flex-1 bg-base-100 rounded-xl shadow-lg p-8 text-center border-2 border-primary/20">
        <h3 className="text-xl font-bold mb-2 text-primary">Premium</h3>
        <div className="text-3xl font-bold mb-4">Ksh 30,000</div>
        <ul className="mb-6 text-base-content text-opacity-80 text-left list-disc list-inside">
          <li>All Professional Features</li>
          <li>Custom Design & Branding</li>
          <li>Blog/News Section</li>
          <li>Advanced Contact/Inquiry Forms</li>
          <li>Ongoing Support (3 months)</li>
        </ul>
        <a href="#contact" className="btn btn-primary w-full">
          Get Started
        </a>
      </div>
    </div>
  </section>
);

// --- Main Portfolio Page (Server-side rendered) ---
const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 py-8 px-4 md:px-10 fade-in">
      <div className="max-w-5xl mx-auto">
        <Hero />
        <PricingPackages />
        <WhyWebsiteSection />
        <ImpactStats />
        <ProjectsGrid />
        <Testimonials />
        <HowIWork />
        <TechStack />
        <ProjectMapWrapper projects={projects} />
        <ContactSection />
        <FAQSection />
      </div>
    </div>
  );
};

export default Portfolio;

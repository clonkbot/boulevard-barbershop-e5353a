import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Classic Cut', price: '$35', description: 'Traditional scissor cut with hot towel finish' },
    { name: 'Fade & Design', price: '$45', description: 'Precision fade with custom line work' },
    { name: 'Beard Sculpt', price: '$25', description: 'Shape, trim & conditioning oil treatment' },
    { name: 'The Full Service', price: '$75', description: 'Cut, beard, hot towel, face massage' },
    { name: 'Straight Razor Shave', price: '$40', description: 'Old-world technique with premium lather' },
    { name: 'Grey Blending', price: '$30', description: 'Subtle color blend for natural look' },
  ];

  const barbers = [
    { name: 'Marcus Cole', specialty: 'Classic Cuts & Fades', years: 15 },
    { name: 'James Rivera', specialty: 'Beard Artistry', years: 12 },
    { name: 'Devon Brooks', specialty: 'Modern Styles', years: 8 },
  ];

  return (
    <div className="min-h-screen bg-[#1a1814] text-[#f5f0e6] overflow-x-hidden">
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-[#1a1814]/95 backdrop-blur-sm py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#c9a227] rotate-45 flex items-center justify-center">
              <span className="font-display text-[#c9a227] text-sm md:text-lg -rotate-45 font-bold">B</span>
            </div>
            <span className="font-display text-lg md:text-xl tracking-wider">BOULEVARD</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm tracking-widest hover:text-[#c9a227] transition-colors">SERVICES</a>
            <a href="#barbers" className="text-sm tracking-widest hover:text-[#c9a227] transition-colors">BARBERS</a>
            <a href="#location" className="text-sm tracking-widest hover:text-[#c9a227] transition-colors">LOCATION</a>
            <button className="bg-[#c9a227] text-[#1a1814] px-6 py-3 text-sm tracking-widest font-semibold hover:bg-[#f5f0e6] transition-colors">
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-[#c9a227] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#c9a227] transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#c9a227] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-[#1a1814]/98 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="px-4 py-8 flex flex-col gap-6">
            <a href="#services" className="text-lg tracking-widest text-center" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
            <a href="#barbers" className="text-lg tracking-widest text-center" onClick={() => setIsMenuOpen(false)}>BARBERS</a>
            <a href="#location" className="text-lg tracking-widest text-center" onClick={() => setIsMenuOpen(false)}>LOCATION</a>
            <button className="bg-[#c9a227] text-[#1a1814] px-6 py-4 text-lg tracking-widest font-semibold mx-auto">
              BOOK NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Art Deco geometric background */}
        <div className="absolute inset-0">
          {/* Diagonal lines pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-[200%] w-px bg-[#c9a227]"
                style={{
                  left: `${i * 5}%`,
                  transform: 'rotate(45deg)',
                  transformOrigin: 'top left'
                }}
              />
            ))}
          </div>

          {/* Corner decorations */}
          <div className="absolute top-20 left-4 md:left-12 w-20 md:w-32 h-20 md:h-32 border-l-2 border-t-2 border-[#c9a227]/30" />
          <div className="absolute bottom-20 right-4 md:right-12 w-20 md:w-32 h-20 md:h-32 border-r-2 border-b-2 border-[#c9a227]/30" />

          {/* Circle accent */}
          <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 border border-[#c9a227]/10 rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 border border-[#c9a227]/10 rounded-full translate-x-8 translate-y-8" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Decorative element above title */}
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
            <div className="w-2 h-2 bg-[#c9a227] rotate-45" />
            <span className="text-[#c9a227] tracking-[0.3em] text-xs md:text-sm font-body">EST. 1947</span>
            <div className="w-2 h-2 bg-[#c9a227] rotate-45" />
            <div className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4 md:mb-6">
            BOULEVARD
          </h1>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl tracking-[0.2em] text-[#c9a227] mb-6 md:mb-8">
            BARBERSHOP
          </h2>

          <p className="font-body text-lg md:text-xl text-[#f5f0e6]/70 max-w-xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            Where tradition meets precision. Experience the art of classic grooming in an atmosphere of timeless sophistication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-[#c9a227] text-[#1a1814] px-8 md:px-12 py-4 md:py-5 text-sm tracking-[0.2em] font-semibold hover:bg-[#f5f0e6] transition-all duration-300 hover:scale-105">
              BOOK APPOINTMENT
            </button>
            <button className="w-full sm:w-auto border-2 border-[#f5f0e6]/30 px-8 md:px-12 py-4 md:py-5 text-sm tracking-[0.2em] hover:border-[#c9a227] hover:text-[#c9a227] transition-all duration-300">
              VIEW SERVICES
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest text-[#f5f0e6]/50">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#c9a227] to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 relative">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-[#c9a227] tracking-[0.3em] text-xs md:text-sm font-body">WHAT WE OFFER</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4">OUR SERVICES</h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-12 md:w-24 h-px bg-[#c9a227]/50" />
              <div className="w-3 h-3 border border-[#c9a227] rotate-45" />
              <div className="w-12 md:w-24 h-px bg-[#c9a227]/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group relative bg-[#1a1814] border border-[#f5f0e6]/10 p-6 md:p-8 hover:border-[#c9a227]/50 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-xl md:text-2xl group-hover:text-[#c9a227] transition-colors">{service.name}</h3>
                  <span className="font-display text-xl md:text-2xl text-[#c9a227]">{service.price}</span>
                </div>
                <p className="font-body text-[#f5f0e6]/60 text-sm md:text-base leading-relaxed">{service.description}</p>

                <div className="mt-6 pt-4 border-t border-[#f5f0e6]/10">
                  <button className="text-xs tracking-[0.2em] text-[#c9a227] hover:text-[#f5f0e6] transition-colors py-2">
                    BOOK THIS SERVICE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider with quote */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#c9a227]/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center px-4 md:px-8">
          <div className="font-display text-5xl md:text-7xl text-[#c9a227]/20 mb-4">"</div>
          <blockquote className="font-display text-2xl md:text-4xl italic leading-relaxed">
            A man's character is reflected in his appearance. We craft both.
          </blockquote>
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-4">
            <div className="w-8 md:w-12 h-px bg-[#c9a227]" />
            <span className="font-body text-[#c9a227] tracking-widest text-xs md:text-sm">THE BOULEVARD PHILOSOPHY</span>
            <div className="w-8 md:w-12 h-px bg-[#c9a227]" />
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section id="barbers" className="py-16 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-[#c9a227] tracking-[0.3em] text-xs md:text-sm font-body">MASTER CRAFTSMEN</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4">OUR BARBERS</h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-12 md:w-24 h-px bg-[#c9a227]/50" />
              <div className="w-3 h-3 border border-[#c9a227] rotate-45" />
              <div className="w-12 md:w-24 h-px bg-[#c9a227]/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {barbers.map((barber, index) => (
              <div key={barber.name} className="group text-center">
                {/* Placeholder avatar with art deco frame */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 md:mb-8">
                  <div className="absolute inset-0 border-2 border-[#c9a227]/30 rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
                  <div className="absolute inset-2 bg-gradient-to-br from-[#8b5a2b]/20 to-[#1a1814] flex items-center justify-center">
                    <span className="font-display text-4xl md:text-5xl text-[#c9a227]/50">{barber.name.charAt(0)}</span>
                  </div>
                  {/* Years badge */}
                  <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-12 h-12 md:w-14 md:h-14 bg-[#c9a227] flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
                    <div className="text-center text-[#1a1814]">
                      <span className="block text-base md:text-lg font-bold">{barber.years}</span>
                      <span className="block text-[8px] md:text-[10px] tracking-wider">YEARS</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-xl md:text-2xl mb-2">{barber.name}</h3>
                <p className="font-body text-[#c9a227] tracking-wider text-xs md:text-sm">{barber.specialty}</p>

                <button
                  className="mt-4 md:mt-6 px-6 py-3 border border-[#f5f0e6]/20 text-xs tracking-[0.2em] hover:border-[#c9a227] hover:text-[#c9a227] transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  BOOK WITH {barber.name.split(' ')[0].toUpperCase()}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 md:py-32 relative bg-[#c9a227]/5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="text-[#c9a227] tracking-[0.3em] text-xs md:text-sm font-body">FIND US</span>
              <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 md:mb-8">VISIT THE SHOP</h2>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 border border-[#c9a227] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a227] text-lg">&#9906;</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg md:text-xl mb-1">Location</h4>
                    <p className="font-body text-[#f5f0e6]/70 text-sm md:text-base">247 West Boulevard<br />Brooklyn, NY 11211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 border border-[#c9a227] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a227] text-lg">&#9716;</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg md:text-xl mb-1">Hours</h4>
                    <p className="font-body text-[#f5f0e6]/70 text-sm md:text-base">
                      Tue - Fri: 9AM - 8PM<br />
                      Saturday: 8AM - 6PM<br />
                      Sunday - Monday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 border border-[#c9a227] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a227] text-lg">&#9742;</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg md:text-xl mb-1">Contact</h4>
                    <p className="font-body text-[#f5f0e6]/70 text-sm md:text-base">
                      (718) 555-0147<br />
                      hello@boulevardbarber.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder with art deco styling */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full border-2 border-[#c9a227]/30" />
              <div className="relative bg-[#1a1814] border border-[#f5f0e6]/20 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 border-2 border-[#c9a227] rounded-full flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-[#c9a227]">&#10022;</span>
                  </div>
                  <p className="font-body text-[#f5f0e6]/50 text-xs md:text-sm tracking-wider">INTERACTIVE MAP</p>
                  <p className="font-body text-[#c9a227] text-xs tracking-wider mt-2">CLICK TO OPEN</p>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 w-6 h-6 md:w-8 md:h-8 border-l-2 border-t-2 border-[#c9a227]" />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 border-r-2 border-t-2 border-[#c9a227]" />
                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-6 h-6 md:w-8 md:h-8 border-l-2 border-b-2 border-[#c9a227]" />
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 border-[#c9a227]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/10 via-transparent to-[#c9a227]/10" />

        {/* Decorative scissors */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <span className="font-display text-[200px] md:text-[400px] text-[#c9a227]">&#9986;</span>
        </div>

        <div className="relative max-w-3xl mx-auto text-center px-4 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6">READY FOR A FRESH CUT?</h2>
          <p className="font-body text-[#f5f0e6]/70 text-base md:text-lg mb-8 md:mb-10">
            Walk-ins welcome, but appointments guarantee your preferred barber and time.
          </p>
          <button className="bg-[#c9a227] text-[#1a1814] px-10 md:px-16 py-4 md:py-5 text-sm tracking-[0.2em] font-semibold hover:bg-[#f5f0e6] transition-all duration-300 hover:scale-105">
            BOOK YOUR APPOINTMENT
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 border-t border-[#f5f0e6]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#c9a227] rotate-45 flex items-center justify-center">
                <span className="font-display text-[#c9a227] text-sm -rotate-45 font-bold">B</span>
              </div>
              <span className="font-display text-lg tracking-wider">BOULEVARD</span>
            </div>

            <div className="flex items-center gap-6 md:gap-8">
              <a href="#" className="w-10 h-10 border border-[#f5f0e6]/20 flex items-center justify-center hover:border-[#c9a227] hover:text-[#c9a227] transition-colors text-xs tracking-wider">IG</a>
              <a href="#" className="w-10 h-10 border border-[#f5f0e6]/20 flex items-center justify-center hover:border-[#c9a227] hover:text-[#c9a227] transition-colors text-xs tracking-wider">FB</a>
              <a href="#" className="w-10 h-10 border border-[#f5f0e6]/20 flex items-center justify-center hover:border-[#c9a227] hover:text-[#c9a227] transition-colors text-xs tracking-wider">X</a>
            </div>

            <p className="font-body text-[#f5f0e6]/40 text-xs md:text-sm tracking-wider">
              © 2024 Boulevard Barbershop
            </p>
          </div>

          {/* Attribution footer */}
          <div className="mt-8 pt-6 border-t border-[#f5f0e6]/5 text-center">
            <p className="font-body text-[#f5f0e6]/30 text-xs tracking-wide">
              Requested by @web-user · Built by @clonkbot
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

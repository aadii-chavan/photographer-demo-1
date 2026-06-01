import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useScroll, useTransform, useVelocity, useSpring, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import heroVideoDesktop from '../assets/v1.mp4';
import heroVideoMobile from '../assets/v2.mp4';
import journeyImg1 from '../assets/01.jpg';
import journeyImg2 from '../assets/02.jpg';
import journeyImg3 from '../assets/03.jpg';
import journeyImg4 from '../assets/04.jpg';
const ContactModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent overflow-hidden rounded-full border border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm hover:text-[#0C0C0C] transition-colors duration-500"
      >
        <div className="absolute inset-0 w-0 bg-[#D7E2EA] transition-all duration-500 ease-out group-hover:w-full z-[-1]" />
        <span className="relative z-10 flex items-center gap-2">
          Book a Shoot
          <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </button>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
              />
              
              {/* Premium Split Modal */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[95vw] max-w-5xl h-[85vh] max-h-[800px] bg-[#0C0C0C] border border-[#D7E2EA]/20 shadow-2xl rounded-[30px] sm:rounded-[50px] overflow-y-auto md:overflow-hidden z-10 flex flex-col md:flex-row"
            >
              {/* Left: Cinematic Image */}
              <div className="hidden md:block w-1/2 h-full relative overflow-hidden bg-[#0C0C0C]">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="https://image.pollinations.ai/prompt/cinematic_indian_bride_getting_ready_dark_moody_photography?width=800&height=1000&nologo=true" 
                  className="w-full h-full object-cover opacity-80"
                  alt="Studio Darpan Let's Talk"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <p className="text-[#D7E2EA] font-light text-[1.35rem] leading-snug italic opacity-90">
                    "We don't just take photographs, we preserve the very heartbeat of your generational legacy."
                  </p>
                </div>
              </div>

              {/* Right: Contact Info */}
              <div className="w-full md:w-1/2 h-max md:h-full flex flex-col justify-between p-6 sm:p-12 md:p-16 relative bg-[#0C0C0C]">
                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 md:top-8 md:right-8 text-[#D7E2EA]/40 hover:text-white transition-colors duration-300 z-20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="flex flex-col gap-2 mt-12 md:mt-0">
                  <span className="text-[#D7E2EA]/40 uppercase tracking-[0.3em] text-xs sm:text-sm font-medium">Say Hello</span>
                  <h3 className="hero-heading font-black uppercase tracking-tight text-5xl sm:text-7xl md:text-[5rem] leading-none mb-6 md:mb-8">
                    Let's <br/> Talk.
                  </h3>
                </div>

                <div className="flex flex-col w-full mt-auto">
                  <a href="mailto:hello@studiodarpan.com" className="group flex justify-between items-center py-6 sm:py-8 border-b border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 transition-colors">
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <span className="text-[#D7E2EA]/40 text-[10px] sm:text-xs uppercase tracking-widest">Email Us</span>
                      <span className="text-[#D7E2EA] font-light text-xl sm:text-2xl md:text-3xl tracking-wide group-hover:text-white transition-colors">hello@studiodarpan.com</span>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C] transition-all duration-300 -rotate-45 group-hover:rotate-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </a>

                  <a href="tel:+919876543210" className="group flex justify-between items-center py-6 sm:py-8 border-b border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 transition-colors">
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <span className="text-[#D7E2EA]/40 text-[10px] sm:text-xs uppercase tracking-widest">Call Us</span>
                      <span className="text-[#D7E2EA] font-light text-xl sm:text-2xl md:text-3xl tracking-wide group-hover:text-white transition-colors">+91 98765 43210</span>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C] transition-all duration-300 -rotate-45 group-hover:rotate-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </a>

                  <div className="flex flex-col gap-1 sm:gap-2 py-6 sm:py-8">
                    <span className="text-[#D7E2EA]/40 text-[10px] sm:text-xs uppercase tracking-widest">Studio</span>
                    <span className="text-[#D7E2EA] font-light text-xl sm:text-2xl md:text-3xl tracking-wide">Koregaon Park, Pune, MH</span>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

const LiveProjectButton = () => (
  <button className="rounded-full px-5 py-2.5 sm:px-10 sm:py-3.5 text-xs sm:text-base border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors shrink-0">
    View Gallery
  </button>
);

const FadeIn = ({ children, delay = 0, duration = 0.8, x = 0, y = 40, className = "" }: any) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x, y, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const AnimatedText = ({ text, className = "" }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className}>
      {chars.map((char: string, i: number) => {
        const start = i / chars.length;
        const end = start + (1 / chars.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <span key={i} className="relative inline-block">
            <span className="invisible">{char === " " ? "\u00A0" : char}</span>
            <motion.span className="absolute left-0 top-0" style={{ opacity }}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col overflow-hidden relative z-0">
      {/* Cinematic Background */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-[-1]"
      >
        <video 
          src={heroVideoDesktop}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover hidden sm:block"
        />
        <video 
          src={heroVideoMobile}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover block sm:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/90 via-[#0C0C0C]/30 to-[#0C0C0C] pointer-events-none" />
      </motion.div>

      <FadeIn delay={0} y={-20} className="w-full z-10">
        <nav className="w-full flex justify-between items-center px-4 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-[10px] sm:text-xs md:text-sm">
          <div className="flex gap-3 sm:gap-8">
            {["About", "Services"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:opacity-70 transition-opacity duration-200">
                {link}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex text-[#D7E2EA]/50 tracking-[0.2em] text-xs">
            EST. 2014 &nbsp; | &nbsp; PUNE, MH
          </div>

          <div className="flex gap-3 sm:gap-8">
            {["Journey", "Portfolio"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:opacity-70 transition-opacity duration-200">
                {link}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center items-center overflow-hidden z-10 w-full px-4">
        <FadeIn delay={0.15} y={40} duration={0.9} className="flex flex-col items-center">
          <span className="text-[#D7E2EA] uppercase tracking-[0.4em] text-[10px] sm:text-sm md:text-base mb-4 sm:mb-6 opacity-80">Premium Photography</span>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center text-[15vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw]">
            Studio Darpan
          </h1>
        </FadeIn>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end pb-10 px-6 md:px-10 z-20 gap-8 sm:gap-0">
        <FadeIn delay={0.35} y={20} className="text-center sm:text-left">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-relaxed text-sm sm:text-base max-w-[280px] sm:max-w-[320px] md:max-w-[400px]">
            capturing the vibrant essence of maharashtrian weddings and grand celebrations through a cinematic lens.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactModalButton />
        </FadeIn>
      </div>
    </section>
  );
};

const MarqueeSection = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewX = useTransform(smoothVelocity, [-1000, 1000], [2, -2]);
  
  const move1 = useTransform(scrollY, v => -v * 0.4);
  const move2 = useTransform(scrollY, v => v * 0.4 - 1000);

  // Assuming you have 21 images named h1.jpg, h2.jpg ... h21.jpg in your public folder.
  // You can adjust the number '21' to match the actual number of images you have.
  // Adjusted to 10 images (5 in each row) for better performance.
  const totalImages = 10;
  const allImages = Array.from({ length: totalImages }, (_, i) => `/h${i + 1}.jpg`);

  const half = Math.ceil(allImages.length / 2);
  // Duplicate 4 times to ensure smooth looping across wide screens
  const row1Images = [...allImages.slice(0, half), ...allImages.slice(0, half), ...allImages.slice(0, half), ...allImages.slice(0, half)];
  const row2Images = [...allImages.slice(half), ...allImages.slice(half), ...allImages.slice(half), ...allImages.slice(half)];

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-2 sm:gap-3 relative z-20">
      <motion.div 
        className="flex gap-2 sm:gap-3 w-max will-change-transform"
        style={{ x: move1, skewX }}
      >
        {row1Images.map((src, i) => (
          <img key={`r1-${i}`} src={src} className="w-[200px] h-[130px] sm:w-[320px] sm:h-[210px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl object-cover shrink-0" loading="lazy" alt="" />
        ))}
      </motion.div>
      <motion.div 
        className="flex gap-2 sm:gap-3 w-max will-change-transform"
        style={{ x: move2, skewX }}
      >
        {row2Images.map((src, i) => (
          <img key={`r2-${i}`} src={src} className="w-[200px] h-[130px] sm:w-[320px] sm:h-[210px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl object-cover shrink-0" loading="lazy" alt="" />
        ))}
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden z-20 bg-[#0C0C0C]">
      <div className="z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About us
          </h2>
        </FadeIn>
        
        <div className="mt-10 sm:mt-14 md:mt-16">
          <AnimatedText 
            text="With more than ten years of experience behind the lens, we specialize in authentic Maharashtrian weddings, vibrant cultural events, and cinematic pre-wedding shoots across Pune, Mumbai, and Nagpur. We truly enjoy working with families who want to preserve their rich heritage and capture their finest moments. Let's create your generational legacy together!"
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactModalButton />
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { num: "01", title: "Maharashtrian Weddings", desc: "From the sacred Sakharpuda and vibrant Haldi to the emotional Kanyadaan, we capture every authentic ritual and fleeting emotion." },
    { num: "02", title: "Pre-Wedding Shoots", desc: "Cinematic and deeply personal love stories shot across beautiful landscapes in Pune, Mumbai, Lonavala, and beyond." },
    { num: "03", title: "Cultural Events & Munj", desc: "Comprehensive coverage of your family's most auspicious ceremonies, including Thread Ceremonies (Munj) and Naming Ceremonies (Barsa)." },
    { num: "04", title: "Bridal & Fashion", desc: "High-end fashion photography showcasing traditional Paithani, Nauvari sarees, and modern bridal couture." },
    { num: "05", title: "Premium Albums", desc: "Exquisitely designed photo books and professional post-production retouching to preserve your generational memories." },
  ];

  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-30">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
        Services
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((srv, i) => (
          <FadeIn key={srv.num} delay={i * 0.1} y={30} className="border-t border-[rgba(12,12,12,0.15)] last:border-b py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16">
            <span className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none shrink-0 w-auto md:w-[15%]">
              {srv.num}
            </span>
            <div className="flex flex-col gap-2 sm:gap-4 flex-1">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                {srv.title}
              </h3>
              <p className="text-[#0C0C0C] opacity-60 font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                {srv.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const JourneySection = () => {
  const journey = [
    {
      num: "01",
      title: "The Connection",
      desc: "Before we ever pick up a camera, we sit down with you. We want to know how you met, the quirks of your families, and what matters most. We don't just photograph clients; we build a connection so on your big day, we feel like old friends.",
      img: journeyImg1
    },
    {
      num: "02",
      title: "The Anticipation",
      desc: "A day away from the wedding chaos to just be yourselves. Whether it's the breezy hills of Lonavala or the historic streets of Pune, we capture the raw, unfiltered chemistry and the quiet moments of anticipation.",
      img: journeyImg2
    },
    {
      num: "03",
      title: "The Celebration",
      desc: "From the playful chaos of the Haldi to the deeply spiritual tear at the Kanyadaan. We blend into the background, letting the authentic emotions unfold naturally—capturing both the grand scale and the intimate, fleeting glances.",
      img: journeyImg3
    },
    {
      num: "04",
      title: "The Legacy",
      desc: "Long after the flowers have faded, your memories remain. We handcraft premium albums that act as a time machine, allowing you and your future generations to relive the magic exactly as it felt in that exact moment.",
      img: journeyImg4
    }
  ];

  return (
    <section id="journey" className="py-24 sm:py-32 bg-[#0C0C0C] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <FadeIn y={30}>
          <div className="flex flex-col gap-4 mb-20 md:mb-32">
            <h2 className="hero-heading font-black uppercase tracking-tight text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] leading-none">
              Our Journey Together
            </h2>
            <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base md:text-lg max-w-2xl">
              More than just capturing photos, we believe in preserving the depth of your emotions. 
              Here is how we turn your fleeting moments into a generational legacy.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-24 sm:gap-32 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D7E2EA]/0 via-[#D7E2EA]/20 to-[#D7E2EA]/0 sm:block hidden" />

          {journey.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.num} className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}>
                
                {/* Text Content */}
                <div className={`w-full md:w-1/2 flex flex-col gap-4 md:gap-6 ${isEven ? 'md:text-right md:items-end' : 'md:text-left md:items-start'} relative z-10 pl-0 md:pl-0`}>
                  <FadeIn delay={0.1} y={30}>
                    <span className="text-[#D7E2EA]/30 font-black text-6xl sm:text-8xl tracking-tighter leading-none mb-2 block">
                      {step.num}
                    </span>
                    <h3 className="text-[#D7E2EA] font-medium uppercase text-2xl sm:text-3xl md:text-4xl tracking-wide mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[#D7E2EA]/70 font-light leading-relaxed text-sm sm:text-base md:text-lg max-w-md">
                      {step.desc}
                    </p>
                  </FadeIn>
                </div>

                {/* Center Node (Desktop & Mobile) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-10 md:top-auto flex justify-center items-center z-20 hidden sm:flex">
                  <div className="w-3 h-3 rounded-full bg-[#0C0C0C] border-2 border-[#D7E2EA] shadow-[0_0_15px_rgba(215,226,234,0.5)]" />
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <FadeIn delay={0.2} y={40} scale={0.95}>
                    <div className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden group shadow-2xl shadow-black/50 border border-[#D7E2EA]/10">
                      <div className="absolute inset-0 bg-[#0C0C0C]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                      <img 
                        src={step.img} 
                        alt={step.title} 
                        className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </FadeIn>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ proj, index, totalCards }: any) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - index) * 0.04;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const filter = useTransform(scrollYProgress, [0, 1], ['brightness(1)', 'brightness(0.4)']);
  
  return (
    <div ref={ref} className="h-[100vh] w-full flex items-center justify-center sticky top-0" style={{ zIndex: index }}>
      <motion.div 
        style={{ 
          scale, 
          filter,
          top: `calc(5vh + ${index * 30}px)` 
        }}
        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 shadow-2xl rounded-[32px] sm:rounded-[50px] md:rounded-[60px] p-5 sm:p-6 md:p-8 flex flex-col gap-5 md:gap-8 origin-top h-[85vh] sm:h-[90vh] relative"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 w-full shrink-0">
          <div className="flex items-center gap-4 sm:gap-10">
            <span className="text-[#D7E2EA] font-black text-[clamp(2.5rem,8vw,100px)] leading-none">
              {proj.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] sm:text-sm">
                {proj.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {proj.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 h-full overflow-hidden pb-1 md:pb-2">
          <div className="w-full md:w-[40%] flex flex-row md:flex-col gap-3 md:gap-4 h-[30%] min-h-[100px] sm:min-h-[140px] md:h-auto md:min-h-0">
            <img src={proj.images[0]} alt="" className="w-1/2 md:w-full h-full md:h-[clamp(130px,16vw,230px)] object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]" />
            <img src={proj.images[1]} alt="" className="w-1/2 md:w-full h-full md:flex-1 object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]" />
          </div>
          <div className="w-full md:w-[60%] flex-1 md:h-full min-h-[200px] md:min-h-0">
            <img src={proj.images[2]} alt="" className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      num: "01",
      category: "Wedding",
      name: "The Deshmukh Vivah",
      images: [
        "https://image.pollinations.ai/prompt/cinematic_indian_wedding_couple_in_mandap_high_quality_photography?width=1280&height=850&nologo=true",
        "https://image.pollinations.ai/prompt/beautiful_maharashtrian_bride_portrait_high_end_photography?width=1280&height=850&nologo=true",
        "https://image.pollinations.ai/prompt/traditional_indian_wedding_rituals_close_up_photography?width=1280&height=850&nologo=true"
      ]
    },
    {
      num: "02",
      category: "Pre-Wedding",
      name: "Sahil & Anjali in Pune",
      images: [
        "https://image.pollinations.ai/prompt/romantic_indian_couple_pre_wedding_shoot_in_nature_sunset?width=1280&height=850&nologo=true",
        "https://image.pollinations.ai/prompt/candid_couple_laughing_outdoor_photography_india?width=1280&height=850&nologo=true",
        "https://image.pollinations.ai/prompt/beautiful_landscape_pune_with_couple_silhouette_romantic?width=1280&height=850&nologo=true"
      ]
    },
    {
      num: "03",
      category: "Editorial",
      name: "The Paithani Elegance",
      images: [
        "https://image.pollinations.ai/prompt/high_fashion_editorial_photography_indian_woman_in_saree?width=1280&height=850&nologo=true",
        "https://image.pollinations.ai/prompt/luxury_indian_bridal_jewelry_fashion_shoot?width=1280&height=850&nologo=true",
        "https://image.pollinations.ai/prompt/elegant_maharashtrian_nauvari_saree_fashion_model_studio?width=1280&height=850&nologo=true"
      ]
    }
  ];

  return (
    <section id="portfolio" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-40 pb-40">
      <div className="pt-20 sm:pt-24 md:pt-32 pb-10">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-10">
          Portfolio
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 flex flex-col items-center pb-[5vh] relative">
        {projects.map((proj, index) => {
          return (
            <ProjectCard key={proj.num} proj={proj} index={index} totalCards={projects.length} />
          );
        })}
      </div>
    </section>
  );
};

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-[#0C0C0C] pt-20 pb-10 px-6 sm:px-10 md:px-16 border-t border-[rgba(215,226,234,0.1)] relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
        <div className="flex flex-col gap-6 max-w-sm">
          <h2 className="hero-heading font-black uppercase tracking-tight text-3xl sm:text-4xl">Studio Darpan</h2>
          <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base leading-relaxed">
            Preserving your generational legacy through timeless, cinematic photography. Based in Pune, capturing stories worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white font-medium uppercase tracking-widest text-sm mb-2">Explore</h3>
          {["About", "Services", "Portfolio", "Contact"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[#D7E2EA]/60 hover:text-white transition-colors text-sm uppercase tracking-wide">
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white font-medium uppercase tracking-widest text-sm mb-2">Connect</h3>
          <a href="mailto:hello@studiodarpan.com" className="text-[#D7E2EA]/60 hover:text-white transition-colors text-sm flex items-center gap-3">
            <Mail size={16} /> hello@studiodarpan.com
          </a>
          <p className="text-[#D7E2EA]/60 text-sm flex items-center gap-3">
            <Phone size={16} /> +91 98765 43210
          </p>
          <p className="text-[#D7E2EA]/60 text-sm flex items-center gap-3">
            <MapPin size={16} /> Koregaon Park, Pune, MH
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[rgba(215,226,234,0.1)] flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Studio Darpan. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[#D7E2EA]/40 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-[#D7E2EA]/40 hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen text-white w-full overflow-hidden font-sans">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <JourneySection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}

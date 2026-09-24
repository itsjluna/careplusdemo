import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Calendar, ArrowRight, ShieldCheck, Activity, Users, Menu, Building, HeartHandshake, Sparkles, User, CheckCircle, MessageSquare, Home, MessageCircle, Star } from 'lucide-react';
import InteractiveClinics from './InteractiveClinics';
import { LanguageContext } from './LanguageContext';

const LanguageToggle = () => {
  const { lang, toggleLanguage } = React.useContext(LanguageContext);
  return (
    <button 
      onClick={toggleLanguage}
      className="btn-aero-glass px-3 py-1.5 rounded-full flex items-center shadow-sm hover:scale-105 active:scale-95 transition-transform duration-300 font-extrabold text-xs border border-white/60 bg-white/60 backdrop-blur-md"
    >
      <span className={lang === 'en' ? 'text-[#084654]' : 'text-slate-400 opacity-60'}>EN</span>
      <span className="mx-1.5 text-slate-300">|</span>
      <span className={lang === 'es' ? 'text-[#084654]' : 'text-slate-400 opacity-60'}>ES</span>
    </button>
  );
};


// ==========================================
// 🖼️ IMAGE CONFIGURATION
// Swap these out with your own local stock images.
// Just drop your images in the `public/` folder of your project and 
// update these paths (e.g., changed to '/my-custom-hero.jpg')
// ==========================================
const IMAGES = {
  heroDoctor: "/hero-doctor.jpg",
  clinicOffice: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  customerCare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
  therapy: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
  doctorBio: "/doctor-bio.jpg",
  mapTexture: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
  footerWater: "https://images.unsplash.com/photo-1518837695005-2083093ee35c?auto=format&fit=crop&q=80&w=2000"
};

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const VistaAuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#073847] z-0" style={{ transform: 'translateZ(0)' }}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,_#9ebf1e_0%,_transparent_55%)] opacity-90" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,_#0a7496_0%,_transparent_55%)] opacity-90" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_0%,_#09654d_0%,_transparent_55%)] opacity-90" />
    
    <motion.div 
      animate={{ rotate: [-4, 4, -4], scale: [1, 1.05, 1], y: ['0%', '-5%', '0%'] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-[300%] h-[200%] rounded-[100%] border-t-[3px] border-[#e1ff54]/60"
      style={{ left: '-100%', top: '40%', background: 'linear-gradient(to bottom, rgba(189,245,34,0.15) 0%, transparent 30%)', willChange: 'transform' }}
    />
    
    <motion.div 
      animate={{ rotate: [10, 16, 10], scale: [1, 1.1, 1], y: ['0%', '5%', '0%'] }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-[300%] h-[200%] rounded-[100%] border-t-[2px] border-[#5ce1e6]/50"
      style={{ left: '-100%', top: '30%', background: 'linear-gradient(to bottom, rgba(92,225,230,0.1) 0%, transparent 30%)', willChange: 'transform' }}
    />

    <motion.div 
      animate={{ y: ['120vh', '-120vh'] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute w-[300%] h-[2px] bg-white/70"
      style={{ left: '-100%', top: '0', rotate: -25, boxShadow: '0 0 15px 3px rgba(184, 207, 37, 0.5)', willChange: 'transform' }}
    />

    <motion.div 
      animate={{ y: ['-30vh', '30vh', '-30vh'] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-[300%] h-[1px] bg-white/60"
      style={{ left: '-100%', top: '50%', rotate: 15, boxShadow: '0 0 12px 2px rgba(92, 225, 230, 0.6)', willChange: 'transform' }}
    />

    <motion.div
      animate={{ x: ['-15vw', '15vw', '-15vw'] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 bottom-0 w-[200%] origin-center"
      style={{ left: '-50%', transform: 'skewX(-25deg)', background: 'linear-gradient(to right, transparent 35%, rgba(72,223,176,0.1) 45%, rgba(72,223,176,0.2) 50%, rgba(72,223,176,0.1) 55%, transparent 65%)', willChange: 'transform' }}
    />
    <motion.div
      animate={{ x: ['15vw', '-15vw', '15vw'] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 bottom-0 w-[200%] origin-center"
      style={{ left: '-50%', transform: 'skewX(30deg)', background: 'linear-gradient(to right, transparent 35%, rgba(92,225,230,0.1) 45%, rgba(92,225,230,0.15) 50%, rgba(92,225,230,0.1) 55%, transparent 65%)', willChange: 'transform' }}
    />

    <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent opacity-50 mix-blend-screen pointer-events-none" />
  </div>
);

const QuickService = ({ icon: Icon, title, desc, className = "" }) => (
  <motion.div 
    variants={fadeInUp}
    className={`glass-panel-dark aero-card-sheen p-6 rounded-3xl flex flex-col items-center text-center hover:bg-[#0b80a6]/40 hover:-translate-y-2 transition duration-300 group cursor-pointer relative ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-healing-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-3xl" />
    <div className="glass-orb bg-gradient-to-b from-[#0b80a6] to-[#084654] w-16 h-16 mb-4 z-10 border border-[#5ce1e6]/40 group-hover:shadow-[inset_0_4px_6px_rgba(255,255,255,0.9),0_0_20px_rgba(11,128,166,0.6)] transition-shadow duration-300">
      <Icon className="text-white w-7 h-7 drop-shadow-md z-10 relative" />
    </div>
    <h3 className="font-semibold text-white text-lg mb-2 relative z-10">{title}</h3>
    <p className="text-blue-100/70 text-sm relative z-10">{desc}</p>
  </motion.div>
);

const HighlightFeature = ({ img, title, icon: Icon }) => (
  <motion.div variants={fadeInUp} className="flex flex-col items-center group cursor-pointer text-center relative pt-2">
    <div className="relative w-full h-56 rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-[6px] border-white/80 group-hover:border-white transition-colors duration-300">
       <div className="absolute inset-0 bg-[#084654]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
       <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={title} loading="lazy" width="800" height="600" />
    </div>
    {/* Frutiger Orb bridging image and text */}
    <div className="absolute top-[12.5rem] z-20">
      <div className="glass-orb bg-gradient-to-b from-[#5ce1e6] to-[#0b80a6] w-14 h-14 border-2 border-white shadow-xl group-hover:scale-110 transition-transform duration-300">
         <Icon className="text-white w-6 h-6 drop-shadow-md z-10 relative" />
      </div>
    </div>
    <h3 className="text-lg font-extrabold text-[#084654] uppercase tracking-wide mt-10 group-hover:text-[#0b80a6] transition-colors">{title}</h3>
  </motion.div>
);

const TestimonialCard = ({ name, text }) => (
  <div className="relative">
    <div className="glass-panel aero-card-sheen p-6 sm:p-8 rounded-3xl relative h-full">
      <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-[#084654]/5 absolute top-4 right-4 sm:top-6 sm:right-6" />
      <p className="text-slate-700 italic leading-relaxed mt-2 relative z-10 text-sm sm:text-base">"{text}"</p>
      <p className="font-bold text-[#084654] mt-4 relative z-10 text-sm sm:text-base">- {name}</p>
    </div>
    <div className="absolute -top-4 -left-2 sm:-top-5 sm:-left-5 z-20">
       <div className="glass-orb bg-gradient-to-b from-slate-200 to-slate-300 w-10 h-10 sm:w-12 sm:h-12 border-2 border-white shadow-md">
         <User className="text-slate-600 w-5 h-5 sm:w-6 sm:h-6 z-10 relative" />
       </div>
       <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px] shadow-sm z-30">
         <CheckCircle className="text-[#8cb320] w-3 h-3 sm:w-4 sm:h-4" />
       </div>
    </div>
  </div>
);


const MobileDockItem = ({ icon: Icon, label }) => (
  <button 
    className="flex flex-col items-center justify-center w-14 h-12 relative group active:scale-90 active:-translate-y-0.5 transition-transform duration-200"
  >
    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 rounded-xl transition-colors" />
    <Icon className="w-5 h-5 text-medical-blue-900 drop-shadow-sm mb-0.5 relative z-10" />
    <span className="text-[9px] font-bold text-medical-blue-950 relative z-10">{label}</span>
  </button>
);

export default function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { t } = React.useContext(LanguageContext);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-white selection:bg-healing-green-400 selection:text-white font-sans overflow-x-hidden">
      {/* Desktop Nav (Hidden on Mobile) */}
      <nav className="hidden md:block fixed w-full z-50 transition-all duration-500 ease-out top-6 px-6 pointer-events-none">
         <div className={`mx-auto pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between rounded-full border ${
           isScrolled 
             ? 'max-w-4xl bg-white/70 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,1)] border-white/70 h-16 px-6' 
             : 'max-w-7xl bg-white/40 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] border-white/40 h-20 px-10'
         }`}>
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="font-bold text-2xl text-medical-blue-950 tracking-tight drop-shadow-sm">Care<span className="text-[#8cb320]">Plus</span></span>
            </div>
            {/* Links */}
            <div className="flex space-x-6 items-center">
              <a href="#" className="text-medical-blue-900 font-medium hover:text-[#0b80a6] transition-colors">{t('Services', 'Servicios')}</a>
              <a href="#" className="text-medical-blue-900 font-medium hover:text-[#0b80a6] transition-colors">{t('Our Team', 'Nuestro Equipo')}</a>
              <a href="#" className="text-medical-blue-900 font-medium hover:text-[#0b80a6] transition-colors">{t('Locations', 'Ubicaciones')}</a>
              <a href="#" className="text-medical-blue-900 font-medium hover:text-[#0b80a6] transition-colors">{t('Testimonials', 'Testimonios')}</a>
              <LanguageToggle />
              <button 
                className={`btn-aero-orange rounded-full flex shadow-md hover:scale-105 active:scale-95 transition-all duration-300 ${isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-base'}`}
              >
                <span className="relative z-10 flex items-center justify-center w-full">{t('Call Now', 'Llamar Ahora')}</span>
              </button>
            </div>
         </div>
      </nav>
      
      {/* Mobile Top Bar */}
      <nav className="md:hidden fixed w-full z-50 transition-all duration-500 ease-out top-4 px-4 pointer-events-none">
         <div className={`mx-auto pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between rounded-full border px-4 ${
           isScrolled
             ? 'bg-white/70 backdrop-blur-2xl shadow-lg border-white/70 h-12 w-64'
             : 'bg-white/50 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] border-white/40 h-16 w-full'
         }`}>
            <span className={`font-bold text-medical-blue-950 tracking-tight transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>Care<span className="text-[#8cb320]">Plus</span></span>
            <LanguageToggle />
         </div>
      </nav>
      
      {/* Mobile Bottom Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[360px]">
         <div className="bg-white/40 backdrop-blur-3xl border border-white/70 rounded-[2rem] p-2 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.2),inset_0_2px_5px_rgba(255,255,255,0.9)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-[2rem] pointer-events-none" />
            
            <MobileDockItem icon={Home} label={t("Home", "Inicio")} />
            <MobileDockItem icon={Activity} label={t("Services", "Servicios")} />
            <MobileDockItem icon={Users} label={t("Team", "Equipo")} />
            <MobileDockItem icon={MapPin} label={t("Locations", "Clínicas")} />
            
            <button 
              className="w-12 h-12 rounded-full btn-aero-orange flex items-center justify-center border border-white/50 shadow-lg ml-1 flex-shrink-0 active:scale-90 transition-transform duration-200"
            >
               <Phone className="w-5 h-5 text-white relative z-10" />
            </button>
         </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-slate-900">
        <VistaAuroraBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="inline-flex items-center bg-gradient-to-b from-white/95 to-white/70 backdrop-blur-2xl p-1.5 pr-5 rounded-full mb-6 shadow-[0_15px_30px_rgba(0,0,0,0.3),inset_0_2px_5px_rgba(255,255,255,1)] border-[2px] border-white cursor-default hover:scale-105 transition-transform duration-300">
                <div className="glass-orb bg-gradient-to-b from-[#b8cf25] to-[#0a7356] w-8 h-8 flex items-center justify-center mr-3 shadow-sm flex-shrink-0">
                  <div className="absolute inset-0 rounded-full border border-white/60 z-20 pointer-events-none" />
                  <HeartHandshake className="w-4 h-4 text-white drop-shadow-md z-10 relative" />
                </div>
                <span className="text-[#084654] font-extrabold tracking-wider uppercase text-[11px] drop-shadow-sm leading-tight">{t('Accepting New Patients', 'Aceptando Nuevos Pacientes')}</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
                {t('Expert Relief for', 'Alivio Experto para')} <br className="hidden lg:block"/>
                <span className="text-[#c7d825] drop-shadow-sm">
                  {t('Pain & Injuries', 'Dolor y Lesiones')}
                </span>
              </h1>

              <p className="text-blue-50/90 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                {t("Dallas-Fort Worth's premier chiropractic and injury rehabilitation clinic. We provide advanced, non-invasive therapies to get you back to living pain-free.", "La principal clínica de quiropráctica y rehabilitación de lesiones en Dallas-Fort Worth. Ofrecemos terapias avanzadas y no invasivas para que vuelva a vivir sin dolor.")}
              </p>
              
              {/* MOBILE ONLY IMAGE */}
              <div className="lg:hidden w-full mb-8 relative px-2">
                <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 shadow-xl relative transform-gpu animate-float">
                  <img 
                    src={IMAGES.heroDoctor} 
                    alt="Medical professional examining patient" 
                    width="800"
                    height="500"
                    fetchpriority="high"
                    decoding="async"
                    className="rounded-[1.5rem] opacity-100 object-cover h-[300px] sm:h-[400px] w-full"
                  />
                  <div className="absolute -bottom-4 left-4 z-30 bg-white/90 backdrop-blur-xl p-2 pr-6 rounded-full flex items-center space-x-3 shadow-[0_10px_20px_rgba(0,0,0,0.2)] border-2 border-white">
                    <div className="glass-orb bg-gradient-to-b from-[#ff9a3d] to-[#ea580c] w-10 h-10 shadow-sm flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-white z-10 relative drop-shadow-md" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <p className="text-[#084654] font-extrabold uppercase tracking-wide text-[10px] leading-tight">No Insurance Needed</p>
                      <p className="text-[#ea580c] text-[10px] font-bold leading-tight">Low Self-Pay Cost</p>
                    </div>
                  </div>
                </div>
              </div>


              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto justify-center lg:justify-start">
                <button 
                  className="btn-aero-green px-8 py-4 rounded-full text-lg shadow-xl flex hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center w-full">
                    <Calendar className="w-5 h-5 text-medical-blue-950 mr-2 drop-shadow-sm" /> {t('Book Free Consult', 'Consulta Gratis')}
                  </span>
                </button>
                <button 
                  className="btn-aero-glass px-8 py-4 rounded-full text-lg shadow-xl flex hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center w-full">
                    <Phone className="w-5 h-5 text-white mr-2 drop-shadow-sm" /> (800) 123-4567
                  </span>
                </button>
              </div>

              {/* Trust & Credibility Bar */}
              <div className="mt-8 inline-flex items-center justify-center space-x-3 sm:space-x-5 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 text-white/90 text-xs sm:text-sm font-medium shadow-inner">
                <div className="flex items-center">
                  <div className="flex text-[#c7d825] mr-2">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span>5.0 (450+ {t('Reviews', 'Reseñas')})</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-[#c7d825]" />
                  <span>6 DFW Locations</span>
                </div>
              </div>

            </motion.div>
            
            {/* Desktop Image */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="hidden lg:block relative transform-gpu animate-float"
            >
              {/* Glass Bezel */}
              <div className="p-4 bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.4),inset_0_2px_15px_rgba(255,255,255,0.4)] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 bottom-0 rounded-[3rem] pointer-events-none" />
                
                <img 
                  src={IMAGES.heroDoctor} 
                  alt="Medical professional examining patient" 
                  width="1000"
                  height="600"
                  fetchpriority="high"
                  decoding="async"
                  className="rounded-[2.5rem] opacity-100 object-cover h-[550px] w-full relative z-0"
                />
                
                {/* No Insurance Badge */}
                <div 
                  className="absolute bottom-10 -left-10 z-30 bg-white/90 backdrop-blur-2xl p-3 pr-10 rounded-full flex items-center space-x-4 cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.3),inset_0_2px_5px_rgba(255,255,255,1)] border-[3px] border-white hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <div className="glass-orb bg-gradient-to-b from-[#ff9a3d] to-[#ea580c] w-16 h-16 shadow-[0_5px_15px_rgba(234,88,12,0.4)] flex-shrink-0">
                    <div className="absolute inset-0 rounded-full border border-white/60 z-20 pointer-events-none" />
                    <ShieldCheck className="w-8 h-8 text-white drop-shadow-lg z-10 relative" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#084654] font-extrabold uppercase tracking-wide text-[14px] leading-tight drop-shadow-sm">{t('No Insurance Needed', 'No se requiere seguro')}</p>
                    <p className="text-[#ea580c] text-[14px] font-bold leading-tight mt-0.5">{t('Low Self-Pay Cost', 'Bajo Costo de Pago Directo')}</p>
                  </div>
                </div>

                {/* Optional Second Badge for Balance */}
                <div className="absolute top-10 -right-6 z-30 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-full flex items-center shadow-[0_15px_30px_rgba(0,0,0,0.2)] border-2 border-white hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-default">
                  <Users className="w-5 h-5 text-[#8cb320] mr-2" />
                  <span className="text-[#084654] font-bold text-sm tracking-wide">{t('Bilingual Staff', 'Personal Bilingüe')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Flat Grid */}
      <section className="relative z-30 -mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Our Core Services</h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <QuickService icon={Activity} title={t("Spine & Joint", "Columna y Articulaciones")} desc={t("Targeted therapy for back and joint pain.", "Terapia para dolor de espalda y articulaciones.")} />
          <QuickService icon={Users} title={t("Sports & Family", "Deportes y Familia")} desc={t("Care for athletes and everyday wellness.", "Cuidado para atletas y bienestar diario.")} />
          <QuickService icon={Activity} title={t("Auto Accidents", "Accidentes de Auto")} desc={t("Whiplash and trauma recovery programs.", "Programas de recuperación de latigazo y trauma.")} />
          <QuickService icon={ShieldCheck} title={t("Work Injuries", "Lesiones de Trabajo")} desc={t("Rehabilitation to get you back to work safely.", "Rehabilitación para regresar al trabajo a salvo.")} />
        </motion.div>
      </section>

      {/* Office Highlights Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Ambient Light Bleed */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0ea5e9]/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#34d399]/10 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#084654] via-[#0b80a6] to-[#0ea5e9] mb-4">{t('Experience the Care Plus Difference', 'Experimente la Diferencia Care Plus')}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t('State-of-the-art facilities paired with compassionate, expert care.', 'Instalaciones de última generación combinadas con cuidado experto y compasivo.')}</p>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            <HighlightFeature title={t('Our Office', 'Nuestra Clínica')} icon={Building} img={IMAGES.clinicOffice} />
            <HighlightFeature title={t('Customer Care', 'Atención al Cliente')} icon={HeartHandshake} img={IMAGES.customerCare} />
            <HighlightFeature title={t('The Right Therapy', 'La Terapia Correcta')} icon={Sparkles} img={IMAGES.therapy} />
          </motion.div>
        </div>
      </section>

      {/* About/Trust Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
        {/* Richer Ambient Light Bleed */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#0ea5e9]/10 rounded-full blur-[120px] -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.15)] border-[8px] border-white/90 backdrop-blur-sm">
                <img src={IMAGES.doctorBio} alt="Doctor" loading="lazy" width="800" height="800" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-blue-950/90 via-medical-blue-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-10">
                  <p className="text-[#c7d825] font-bold tracking-wide uppercase text-sm mb-2 drop-shadow-sm">{t('Lead Chiropractor', 'Quiropráctico Principal')}</p>
                  <h3 className="text-4xl font-extrabold text-white drop-shadow-md">Dr. David Gianino</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#084654] via-[#0b80a6] to-[#0ea5e9] mb-6">{t('Meet Our Expert Team', 'Conoce a Nuestro Equipo Experto')}</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {t("Dedicated to providing personalized care, our doctors use state-of-the-art techniques to restore mobility and alleviate pain. Whether you've suffered an injury on the job, in a vehicle, or just dealing with chronic discomfort, we are here to help you regain your life.", "Dedicados a brindar atención personalizada, nuestros doctores utilizan técnicas de vanguardia para restaurar la movilidad y aliviar el dolor. Ya sea que haya sufrido una lesión en el trabajo, en un vehículo o simplemente esté lidiando con dolor crónico, estamos aquí para ayudarle a recuperar su vida.")}
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  t('Comprehensive Injury Assessments', 'Evaluaciones Integrales de Lesiones'),
                  t('Personalized Rehabilitation Plans', 'Planes de Rehabilitación Personalizados'),
                  t('Bilingual Staff (Spanish & English)', 'Personal Bilingüe (Español e Inglés)'),
                  t('Same-Day Appointments Available', 'Citas Disponibles el Mismo Día')
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-medical-blue-900 font-semibold cursor-pointer group text-lg">
                    <div className="glass-orb bg-gradient-to-b from-[#b8cf25] to-[#8cb320] w-7 h-7 mr-4 border border-[#d6eb75] flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5 text-white z-10 relative drop-shadow-sm" />
                    </div>
                    <span className="group-hover:text-[#0b80a6] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-aero-glass !text-[#084654] !border-[#084654]/20 !bg-white/50 px-6 py-3 rounded-full flex items-center group shadow-sm hover:shadow-md transition-shadow">
                <span className="relative z-10 flex items-center">
                  {t('Read Full Bio', 'Leer Biografía Completa')} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-[#084654] mb-10">{t('Patient Success Stories', 'Historias de Éxito de Pacientes')}</h2>
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
               <TestimonialCard 
                 name="Sarah Jenkins" 
                 text={t("After my auto accident, I was in constant pain. The team at Care Plus not only relieved my back pain but guided me through the entire rehabilitation process. Highly recommended!", "Después de mi accidente automovilístico, sentía un dolor constante. El equipo de Care Plus no solo alivió mi dolor, sino que me guió durante toda la rehabilitación. ¡Muy recomendados!")}
               />
               <TestimonialCard 
                 name="Michael Ramirez" 
                 text={t("Professional, bilingual, and incredibly effective. I suffered a slip and fall at work and they helped me get back on my feet faster than I ever expected. A true lifesaver.", "Profesionales, bilingües e increíblemente efectivos. Sufrí una caída en el trabajo y me ayudaron a recuperarme más rápido de lo que esperaba. Un verdadero salvavidas.")}
               />
            </div>
          </div>
          
          <div className="lg:col-span-1 rounded-3xl bg-gradient-to-br from-[#9ebf1e] to-[#0a7356] p-10 text-white flex flex-col justify-center items-center text-center shadow-[0_15px_40px_rgba(10,115,86,0.3)] relative overflow-hidden mt-8 lg:mt-0">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-[50px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/20 rounded-full blur-[50px] pointer-events-none" />
            
            <h3 className="text-3xl font-extrabold mb-4 drop-shadow-md relative z-10 leading-tight">{t('See What More Clients Are Saying', 'Vea lo que dicen otros pacientes')}</h3>
            <p className="text-white/90 font-medium mb-8 relative z-10">{t('Join thousands of recovered patients across the DFW Metroplex.', 'Únase a miles de pacientes recuperados en DFW.')}</p>
            <button 
              className="btn-aero-glass w-full py-4 rounded-full flex shadow-xl border-white/40 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center justify-center w-full">{t('Read More', 'Leer Más')} <ArrowRight className="w-5 h-5 ml-2" /></span>
            </button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
        {/* Ambient Light Bleed */}
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-[#34d399]/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#084654] via-[#0b80a6] to-[#0ea5e9] mb-4">{t('Convenient DFW Locations', 'Clínicas Convenientes en DFW')}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t('Find a Care Plus clinic near you. We have 6 locations across the Metroplex ready to serve your recovery needs.', 'Encuentre una clínica de Care Plus cerca de usted. Tenemos 6 ubicaciones en Metroplex listas para ayudarle en su recuperación.')}</p>
          </div>
          
          <InteractiveClinics mapTexture={IMAGES.mapTexture} />
        </div>
      </section>

      {/* NEW: Lead Capture Form Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
        
        {/* Richer Ambient Light Bleed */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f97316]/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#0ea5e9]/10 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-panel rounded-[3rem] p-8 md:p-12 border-[4px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-slate-50/60 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#084654] via-[#0b80a6] to-[#0ea5e9] mb-6">{t('Start Your Recovery Today', 'Inicie su Recuperación Hoy')}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {t("Don't let pain control your life. Schedule your free consultation today and let our expert medical team build a personalized rehabilitation plan for you.", "No deje que el dolor controle su vida. Programe su consulta gratuita hoy y deje que nuestro equipo médico experto cree un plan de rehabilitación personalizado para usted.")}
                </p>
                <ul className="space-y-4 mb-8">
                   <li className="flex items-center text-[#0b80a6] font-bold text-lg"><CheckCircle className="w-6 h-6 mr-3 text-[#b8cf25] drop-shadow-sm" /> {t('Same-Day Appointments', 'Citas el Mismo Día')}</li>
                   <li className="flex items-center text-[#0b80a6] font-bold text-lg"><CheckCircle className="w-6 h-6 mr-3 text-[#b8cf25] drop-shadow-sm" /> {t('Free Initial Consultation', 'Consulta Inicial Gratuita')}</li>
                   <li className="flex items-center text-[#0b80a6] font-bold text-lg"><CheckCircle className="w-6 h-6 mr-3 text-[#b8cf25] drop-shadow-sm" /> {t('Transportation Assistance Available', 'Asistencia de Transporte Disponible')}</li>
                </ul>
              </div>
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border-[3px] border-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 z-0" />
                <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder={t("First Name", "Nombre")} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0b80a6]/50 transition-shadow text-slate-700 font-medium placeholder-slate-400 shadow-inner" />
                    <input type="text" placeholder={t("Last Name", "Apellido")} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0b80a6]/50 transition-shadow text-slate-700 font-medium placeholder-slate-400 shadow-inner" />
                  </div>
                  <input type="tel" placeholder={t("Phone Number", "Número de Teléfono")} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0b80a6]/50 transition-shadow text-slate-700 font-medium placeholder-slate-400 shadow-inner" />
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0b80a6]/50 transition-shadow text-slate-500 font-medium shadow-inner appearance-none cursor-pointer">
                    <option value="">{t('What do you need help with?', '¿En qué necesita ayuda?')}</option>
                    <option value="auto">{t('Auto Accident Injury', 'Lesión por Accidente de Auto')}</option>
                    <option value="work">{t('Work Injury', 'Lesión de Trabajo')}</option>
                    <option value="back">{t('Back or Joint Pain', 'Dolor de Espalda o Articulaciones')}</option>
                    <option value="sports">{t('Sports Injury', 'Lesión Deportiva')}</option>
                  </select>
                  <button className="w-full btn-aero-orange py-4 rounded-full font-bold text-lg shadow-lg flex justify-center mt-6 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                    <span className="relative z-10 flex items-center justify-center w-full">{t('Request Appointment', 'Solicitar Cita')} <ArrowRight className="w-5 h-5 ml-2" /></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#063343] pt-20 pb-32 md:pb-10 border-t-4 border-[#b8cf25] relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10 mix-blend-overlay"
          style={{ backgroundImage: `url("${IMAGES.footerWater}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0a7356]/40 via-[#063343]/90 to-[#063343]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="font-bold text-3xl text-white tracking-tight drop-shadow-md">Care<span className="text-[#b8cf25]">Plus</span></span>
              </div>
              <p className="text-blue-100/90 mb-6 max-w-sm">
                {t('Professional pain management and injury rehabilitation across the Dallas-Fort Worth Metroplex.', 'Manejo profesional del dolor y rehabilitación de lesiones en Metroplex Dallas-Fort Worth.')}
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6 drop-shadow-sm">{t('Working Hours', 'Horario de Atención')}</h4>
              <ul className="space-y-3 text-blue-100/90">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>{t('Mon - Thu', 'Lun - Jue')}</span> <span>8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>{t('Friday', 'Viernes')}</span> <span>8:00 AM - 1:00 PM</span></li>
                <li className="flex justify-between text-[#f97316] drop-shadow-sm"><span>{t('Sat - Sun', 'Sáb - Dom')}</span> <span>{t('Closed', 'Cerrado')}</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6 drop-shadow-sm">{t('Need Immediate Help?', '¿Necesita Ayuda Inmediata?')}</h4>
              <button 
                className="w-full btn-aero-orange px-6 py-4 rounded-full mb-4 flex shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
              >
                <span className="relative z-10 flex items-center justify-center w-full">
                  <Phone className="w-5 h-5 text-white mr-2" /> {t('Call Now', 'Llamar Ahora')}
                </span>
              </button>
              <p className="text-blue-100/70 text-sm text-center">{t('We accept walk-ins during business hours.', 'Aceptamos visitas sin cita durante el horario laboral.')}</p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col items-center text-center">
            <div className="flex space-x-6 text-sm text-blue-100/80 mb-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p className="text-blue-100/60 text-sm mb-6">© 2026 Care Plus Pain & Injury. All rights reserved.</p>
            
            {/* NEW: SEO Keyword Footer */}
            <p className="text-blue-100/30 text-xs leading-relaxed max-w-4xl">
              Providing expert <strong>Chiropractor Care</strong>, <strong>Back Pain Relief</strong>, <strong>Sports Injury Rehabilitation</strong>, and <strong>General Injury Recovery</strong>. Proudly serving patients across the DFW Metroplex including <strong>Plano, Garland, Dallas, Fort Worth, Mesquite, and Irving</strong>.
            </p>
          </div>
        </div>
      </footer>
    </div>

      {/* NEW: Floating Live Chat Widget */}
      <div 
        style={{ position: 'fixed', zIndex: 9999 }}
        className="bottom-28 md:bottom-6 right-4 md:right-6"
      >
        <button className="glass-orb bg-gradient-to-b from-[#b8cf25] to-[#8cb320] w-14 h-14 md:w-16 md:h-16 shadow-[0_10px_30px_rgba(130,163,20,0.5)] border-2 border-white flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10 drop-shadow-md" />
        </button>
        <span className="absolute -top-1 -right-1 w-4 h-4 md:w-4 md:h-4 bg-[#f97316] border-2 border-white rounded-full animate-pulse shadow-sm z-20"></span>
      </div>
    </>
  );
}

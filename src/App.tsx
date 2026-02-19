import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flower, 
  Calendar, 
  Clock, 
  MapPin, 
  Share2, 
  Mail, 
  GlassWater, 
  Bed, 
  Mountain, 
  Compass, 
  Heart,
  Menu,
  X
} from 'lucide-react';

const WEDDING_DATE = new Date('2026-02-26T08:30:00');

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = WEDDING_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-5 mb-12">
      <div className="flex flex-col items-center">
        <div className="bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border border-primary/20">
          <span className="text-xl md:text-2xl font-bold text-text-brown">{timeLeft.days}</span>
        </div>
        <span className="text-[16px] uppercase tracking-widest mt-2 font-bold text-primary">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border border-primary/20">
          <span className="text-xl md:text-2xl font-bold text-text-brown">{timeLeft.hours}</span>
        </div>
        <span className="text-[16px] uppercase tracking-widest mt-2 font-bold text-primary">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border border-primary/20">
          <span className="text-xl md:text-2xl font-bold text-text-brown">{timeLeft.minutes}</span>
        </div>
        <span className="text-[16px] uppercase tracking-widest mt-2 font-bold text-primary">Mins</span>
      </div>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden selection:bg-primary/30">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-beige-warm/90 backdrop-blur-md border-b border-primary/10 px-6 py-4 lg:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flower className="text-primary w-8 h-8" />
            <h2 className="text-lg font-extrabold tracking-tight text-text-brown">J&S</h2>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Our Story', 'Gallery'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all uppercase tracking-wider hidden sm:inline-block">
              J&S
            </button>
            <button 
              type="button"
              className="md:hidden p-2 text-text-brown hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-beige-warm border-t border-primary/10 mt-4"
            >
              <div className="flex flex-col gap-4 py-4">
                {['Our Story', 'Gallery'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm font-semibold hover:text-primary transition-colors px-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-24 pb-20 relative flex flex-col items-center">
        {/* เลเยอร์ดอกไม้ — อยู่ด้านหลังเสมอ (isolate + z-0) */}
        <div className="absolute inset-0 z-0 isolate pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-60">
            <img 
              alt="blush and dusty rose boho florals" 
              className="w-full h-full object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHGkSJTu6eAMK4uupnoE7Rtq7limccua6m9HKRfbhYlkpqm4FLtllPurcsq4oyYesubvl7dbQYkl5ATWeB9GsqwxCZ6X5vAfCimBqYnuXLrtKLmDlL3W7rzD1LRf7AaEvgzBRE3Llv4bmzTm66dwLqk22sp0NHK3kjWQyanP7exMf9Gr2adgQbXDv5b9KKp4vEDh3sXFP0CGfjVrzw5Tb9vgpE2VLzyT0AtmrjQiql9r82TzpY72Ko9Vq6h6XkC5Td6aXtrGR1FtP6"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-80 h-80 md:w-96 md:h-96 opacity-60">
            <img 
              alt="pampas grass and coral florals" 
              className="w-full h-full object-contain transform -scale-x-100" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-VQY26-FmuJwYPptZ9VVrmK4Ca5AU8JY_VelCxSGnDw9XqRfa5JxHDWxUdbQf1IEubrtNR4j1qIuTC7vB0sarAAcLYiw3xDkV9WRO4F7fpY8R0oLU-RwdW-8SWIJ-cUYkxJ1MMMJGQnWIAj3Tz-7ffUgcOE8RtydvYuXkTlIGlSjwE972W9bZYDDonq2Fj5BYvqAjeYHjUPb-aWcfGYjozZdRex0noGIyORsssIB9Fn2QQp8IKgGbjeNiuVwoUfEMDydGCyC-aM3I"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* เนื้อหาทั้งหมด — อยู่ด้านหน้า (z-10) */}
        <div className="relative z-10 w-full flex flex-col items-center flex-1">
        {/* Main Invitation Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl px-4"
        >
          <div className="paper-texture rounded-2xl shadow-2xl overflow-hidden border border-primary/10 flex flex-col md:flex-row min-h-[650px]">
            {/* Image Side - mobile: สูงขึ้น + object-position ให้เห็นหัวทั้งคู่ */}
            <div className="w-full md:w-5/12 relative h-80 min-h-[320px] md:h-auto overflow-hidden">
              <img 
                alt="Jennapa & Sittisak Formal Portrait" 
                className="absolute inset-0 w-full h-full object-cover object-top md:object-center" 
                src="/assets/jenna-sittisak-formal.png"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-end p-10 bg-gradient-to-t from-text-brown/60 to-transparent">
                <p className="text-white font-romantic text-4xl">To have and to hold</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-7/12 p-8 lg:p-16 flex flex-col justify-center items-center text-center">
              <div className="mb-8">
                <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase block mb-3">Save the Date</span>
                <div className="h-px w-16 bg-primary/40 mx-auto"></div>
              </div>
              
              <h1 className="font-romantic text-6xl lg:text-8xl text-text-brown mb-6 leading-tight">
                Jennapa <span className="text-coral-pink">&amp;</span> Sittisak
              </h1>
              
              <p className="text-text-brown/80 font-serif text-xl mb-10 max-w-md italic">
                Together with their families, invite you to celebrate their wedding day in a modern boho celebration
              </p>

              <div className="grid grid-cols-1 gap-4 w-full max-w-sm mb-12">
                <div className="flex items-center gap-5 bg-beige-warm/40 p-5 rounded-xl border border-primary/10 backdrop-blur-sm">
                  <div className="bg-white/80 p-3 rounded-full shadow-sm">
                    <Calendar className="text-primary w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[16px] uppercase tracking-widest text-coral-pink font-bold">The Date</p>
                    <p className="font-bold text-text-brown text-lg">Thursday, February 26, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 bg-beige-warm/40 p-5 rounded-xl border border-primary/10 backdrop-blur-sm">
                  <div className="bg-white/80 p-3 rounded-full shadow-sm">
                    <Clock className="text-primary w-6 h-6" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-[16px] uppercase tracking-widest text-coral-pink font-bold">The Time</p>
                    <p className="font-bold text-text-brown text-lg">8:30 AM</p>
                    <p className="text-text-brown/90 text-sm mt-2 space-y-0.5">
                      <span className="block">Ceremony begins 8:30</span>
                      <span className="block">Thread tying ceremony</span>
                      <span className="block">Reception & meal 10:30</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 bg-beige-warm/40 p-5 rounded-xl border border-primary/10 backdrop-blur-sm">
                  <div className="bg-white/80 p-3 rounded-full shadow-sm">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[16px] uppercase tracking-widest text-coral-pink font-bold">Place</p>
                    <p className="font-bold text-text-brown text-lg">6 Moo 3, Non Charoen, Ban Kruat, Buriram</p>
                  </div>
                </div>
              </div>
              <Countdown />
            </div>
          </div>
        </motion.div>

        {/* Google Map */}
        <section className="w-full max-w-5xl px-4 mt-16">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/10 bg-beige-warm/30">
            <div className="p-4 border-b border-primary/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold text-text-brown">6 Moo 3, Non Charoen, Ban Kruat, Buriram</span>
              </div>
              <a
                href="https://www.google.com/maps/place/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%B2%E0%B8%A5+%E0%B8%8B%E0%B8%B2%E0%B8%A5%E0%B8%AD%E0%B8%99(%E0%B9%82%E0%B8%99%E0%B8%99%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D)/@14.4801292,103.1839575,17z?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-primary hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="aspect-video w-full">
              <iframe
                title="Venue location - น้ำตาล ซาลอน (โนนเจริญ)"
                src="https://www.google.com/maps?q=14.4801292,103.1839575&output=embed&z=17"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className="max-w-4xl mx-auto px-6 py-24 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase block mb-3">Our Story</span>
              <div className="h-px w-16 bg-primary/40 mx-auto"></div>
            </div>
            <h2 className="font-romantic text-5xl md:text-6xl text-text-brown mb-8">A Journey of Love</h2>
            <p className="text-text-brown/80 font-serif text-lg leading-relaxed mb-12 italic">
              "From our first meeting to this beautiful moment, our journey has been filled with love, laughter, and countless memories. We are so excited to start this new chapter together and share our special day with all of you."
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/10 max-w-3xl mx-auto">
              <img 
                src="/assets/jenna-sittisak-casual.png" 
                alt="Jennapa & Sittisak กับน้องหมา" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase block mb-3">Gallery</span>
            <h2 className="font-romantic text-5xl md:text-6xl text-text-brown">Captured Moments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]"
            >
              <img 
                src="/assets/gallery-dogs.png" 
                alt="Jennapa & Sittisak กับน้องหมาบนทางเดิน" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]"
            >
              <img 
                src="/assets/gallery-laugh.png" 
                alt="Jennapa & Sittisak ช่วงเวลาสนุกบนหญ้า" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]"
            >
              <img 
                src="/assets/gallery-bouquet.png" 
                alt="Jennapa & Sittisak กับช่อดอกไม้" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </section>

        {/* QR Code สำหรับใส่ซอง */}
        <section id="qr-envelope" className="max-w-2xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase block mb-3">Gift</span>
            <div className="h-px w-16 bg-primary/40 mx-auto mb-6"></div>
            <h2 className="font-romantic text-3xl md:text-4xl text-text-brown mb-4">ร่วมแสดงความยินดีกับเรา</h2>
            <p className="text-text-brown/70 text-sm mb-8 max-w-md mx-auto">
              สแกน QR Code ด้านล่างเพื่อร่วมแสดงความยินดี ขอบคุณค่ะ/ครับ
            </p>
            <div className="inline-flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl border border-primary/10">
              <img
                src="/assets/qr-envelope.png"
                alt="QR Code สำหรับใส่ซอง"
                className="w-52 h-52 md:w-56 md:h-56 object-contain"
              />
              <p className="mt-4 font-semibold text-text-brown text-lg">น.ส. เจนนภา รักพรม</p>
            </div>
            <p className="mt-8 text-text-brown/80 font-serif italic">Thank you sincerely</p>
          </motion.div>
        </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-beige-warm py-16 border-t border-primary/10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-romantic text-5xl text-primary mb-4">Jennapa & Sittisak</p>
          <p className="text-xs text-text-brown/60 uppercase tracking-[0.5em] font-bold">February 26, 2026 • Ban Kruat, Buriram</p>
          <div className="mt-12 flex justify-center items-center gap-2 text-text-brown/40 text-[10px] tracking-widest uppercase">
            <span>Made with love</span>
            <Heart className="w-3 h-3 text-coral-pink fill-current" />
            <span>for friends & family</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

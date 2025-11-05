import { Zap, CheckCircle, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Diagonal lines decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent rotate-45" />
        <div className="absolute bottom-40 -right-20 w-64 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent rotate-45" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center gap-3 mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full animate-pulse" />
              <Zap className="relative w-20 h-20 text-[#D4AF37]" fill="#D4AF37" />
            </div>
            <h1 className="text-[#D4AF37] bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text">Fast Electro</h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Профессиональный электромонтаж в частных домах<br />
            Санкт-Петербурга и Ленинградской области
          </motion.p>

          {/* Key features pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-[#4A4A4A]/30 backdrop-blur-sm rounded-full border border-[#D4AF37]/20">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/80">Гарантия качества</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#4A4A4A]/30 backdrop-blur-sm rounded-full border border-[#D4AF37]/20">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/80">Точно в срок</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#4A4A4A]/30 backdrop-blur-sm rounded-full border border-[#D4AF37]/20">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/80">15+ лет опыта</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              asChild
              className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 px-8 py-6 shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all"
            >
              <a href="#visit">Посетить объект</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 px-8 py-6"
            >
              <a href="#services">Наши услуги</a>
            </Button>
          </motion.div>
        </div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-[#4A4A4A]/20 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-6 text-center hover:border-[#D4AF37]/40 transition-all">
            <div className="text-[#D4AF37] mb-2">500+</div>
            <p className="text-white/70">Завершенных проектов</p>
          </div>
          <div className="bg-[#4A4A4A]/20 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-6 text-center hover:border-[#D4AF37]/40 transition-all">
            <div className="text-[#D4AF37] mb-2">24/7</div>
            <p className="text-white/70">Поддержка клиентов</p>
          </div>
          <div className="bg-[#4A4A4A]/20 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-6 text-center hover:border-[#D4AF37]/40 transition-all">
            <div className="text-[#D4AF37] mb-2">100%</div>
            <p className="text-white/70">Гарантия качества</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#D4AF37]/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-[#D4AF37] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

import { Phone, MessageCircle, Send, MapPin, Zap, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Footer() {
  const phoneNumber = '+79523761369';

  return (
    <footer id="contacts" className="relative py-20 bg-[#4A4A4A]/20 px-4 border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-[#D4AF37]/60 uppercase tracking-wider border border-[#D4AF37]/30 rounded-full px-4 py-1">
              Свяжитесь с нами
            </span>
          </div>
          <h2 className="text-[#D4AF37] mb-4">Контакты</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Выберите удобный способ связи
          </p>
        </motion.div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 bg-[#1A1A1A]/50 backdrop-blur-sm p-6 rounded-xl border border-[#4A4A4A]/30 hover:border-[#D4AF37]/50 transition-all"
          >
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white/50 mb-1">Регион работы</p>
              <p className="text-white">Санкт-Петербург и ЛО</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 bg-[#1A1A1A]/50 backdrop-blur-sm p-6 rounded-xl border border-[#4A4A4A]/30 hover:border-[#D4AF37]/50 transition-all"
          >
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white/50 mb-1">Телефон</p>
              <a href={`tel:${phoneNumber}`} className="text-white hover:text-[#D4AF37] transition-colors">
                +7 952 376-13-69
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <Button
            asChild
            className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 gap-2 px-8 shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all"
          >
            <a href={`tel:${phoneNumber}`}>
              <Phone className="w-4 h-4" />
              Позвонить
            </a>
          </Button>

          <Button
            asChild
            className="bg-[#25D366] text-white hover:bg-[#25D366]/90 gap-2 px-8 shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all"
          >
            <a href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>

          <Button
            asChild
            className="bg-[#0088cc] text-white hover:bg-[#0088cc]/90 gap-2 px-8 shadow-lg shadow-[#0088cc]/20 hover:shadow-xl hover:shadow-[#0088cc]/30 transition-all"
          >
            <a href="https://t.me/FastElectro_SPB" target="_blank" rel="noopener noreferrer">
              <Send className="w-4 h-4" />
              Telegram
            </a>
          </Button>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4A4A4A]/50 to-transparent mb-12" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <Zap className="w-6 h-6 text-[#D4AF37]" fill="#D4AF37" />
            <span className="text-[#D4AF37]">Fast Electro</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <a href="#about" className="text-white/50 hover:text-[#D4AF37] transition-colors">О нас</a>
            <a href="#services" className="text-white/50 hover:text-[#D4AF37] transition-colors">Услуги</a>
            <a href="#portfolio" className="text-white/50 hover:text-[#D4AF37] transition-colors">Портфолио</a>
            <a href="#visit" className="text-white/50 hover:text-[#D4AF37] transition-colors">Посетить объект</a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/50"
          >
            © 2025 Fast Electro
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

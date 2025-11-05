import { Button } from './ui/button';
import { motion } from 'motion/react';
import { MapPin, Calendar, Users, Phone, Send } from 'lucide-react';

export function VisitObject() {
  const phoneNumber = '+79523761369';

  const benefits = [
    {
      icon: MapPin,
      text: 'Посещение реального объекта'
    },
    {
      icon: Calendar,
      text: 'Удобное время визита'
    },
    {
      icon: Users,
      text: 'Консультация специалистов'
    }
  ];

  return (
    <section id="visit" className="relative py-32 bg-[#1A1A1A] px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
      
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
              Экскурсия
            </span>
          </div>
          <h2 className="text-[#D4AF37] mb-8">Посетить объект</h2>
          <p className="text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Хотите увидеть, как мы работаем? Приглашаем вас посетить один из наших объектов! 
            Это отличная возможность оценить качество нашей работы, задать вопросы напрямую 
            специалистам и убедиться в профессионализме команды Fast Electro.
          </p>
          <p className="text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Свяжитесь с нами удобным для вас способом, и мы согласуем время визита.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Benefits cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center gap-4 bg-[#4A4A4A]/20 backdrop-blur-sm p-8 rounded-xl border border-[#4A4A4A]/30 hover:border-[#D4AF37]/50 transition-all"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <p className="text-white/80 text-center">{benefit.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-8 rounded-xl border border-[#D4AF37]/30 mb-12"
          >
            <p className="text-white/70 leading-relaxed text-center">
              💡 При посещении объекта вы сможете увидеть используемые 
              материалы, технологии работы и пообщаться с нашими специалистами о вашем проекте.
            </p>
          </motion.div>

          {/* Contact buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              asChild
              className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 gap-2 px-8 h-12 shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="w-5 h-5" />
                Позвонить
              </a>
            </Button>

            <Button
              asChild
              className="bg-[#0088cc] text-white hover:bg-[#0088cc]/90 gap-2 px-8 h-12 shadow-lg shadow-[#0088cc]/20 hover:shadow-xl hover:shadow-[#0088cc]/30 transition-all"
            >
              <a href="https://t.me/FastElectro_SPB" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5" />
                Telegram
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Cable, FileText, Plug, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Cable,
      title: 'Монтаж электропроводки',
      description: 'Профессиональная прокладка электропроводки в частных домах с соблюдением всех норм безопасности',
      color: 'from-[#D4AF37]/20 to-[#D4AF37]/5'
    },
    {
      icon: FileText,
      title: 'Создание проектов',
      description: 'Разработка детальных проектов электроснабжения с учетом всех требований и пожеланий заказчика',
      color: 'from-[#FFD700]/20 to-[#FFD700]/5'
    },
    {
      icon: Plug,
      title: 'Монтаж электрооборудования',
      description: 'Установка и подключение электрощитов, розеток, выключателей и другого оборудования',
      color: 'from-[#D4AF37]/20 to-[#D4AF37]/5'
    },
    {
      icon: Wrench,
      title: 'Электромонтажные работы в сложных условиях',
      description: 'Выполнение работ любой сложности, включая реконструкцию и модернизацию существующих систем',
      color: 'from-[#FFD700]/20 to-[#FFD700]/5'
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-[#1A1A1A] px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
      
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
              Услуги
            </span>
          </div>
          <h2 className="text-[#D4AF37] mb-4">Наши услуги</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Полный спектр электромонтажных работ для вашего дома
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-[#4A4A4A]/20 to-[#4A4A4A]/5 p-8 rounded-2xl border border-[#4A4A4A]/30 hover:border-[#D4AF37] transition-all overflow-hidden"
            >
              {/* Animated background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-[#D4AF37]/5 group-hover:text-[#D4AF37]/10 transition-colors">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#1A1A1A]/50 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-[#D4AF37]/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#D4AF37]/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

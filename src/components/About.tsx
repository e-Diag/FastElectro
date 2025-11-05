import { CheckCircle, Shield, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const features = [
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Все работы выполняются с гарантией'
    },
    {
      icon: Clock,
      title: 'Соблюдение сроков',
      description: 'Четкое планирование и выполнение в срок'
    },
    {
      icon: Award,
      title: 'Опытные специалисты',
      description: 'Профессиональные электрики с большим опытом'
    },
    {
      icon: CheckCircle,
      title: 'Современное оборудование',
      description: 'Используем только качественные материалы'
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-[#4A4A4A]/20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
      
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
              О нас
            </span>
          </div>
          <h2 className="text-[#D4AF37] mb-8">О компании</h2>
          <p className="text-white/80 mb-4 max-w-4xl mx-auto leading-relaxed">
            От простой установки до комплексной модернизации — мы предлагаем полный спектр электромонтажных услуг для частных домов. 
            Наша команда профессионалов гарантирует надёжность, безопасность и качество на каждом этапе работы.
          </p>
          <p className="text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Мы работаем в Санкт-Петербурге и Ленинградской области, обеспечивая быстрое реагирование и индивидуальный подход к каждому проекту.
          </p>
        </motion.div>

        <div className="mt-16">
          <h3 className="text-[#D4AF37] mb-12 text-center">Почему выбирают нас?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[#1A1A1A] p-8 rounded-xl border border-[#4A4A4A]/30 hover:border-[#D4AF37]/50 transition-all overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-white mb-2">{feature.title}</h4>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

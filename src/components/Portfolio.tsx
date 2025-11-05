import { useState } from "react";
import Masonry from "react-responsive-masonry";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { motion } from "motion/react";
import { ZoomIn } from "lucide-react";

import portfolio1 from "figma:asset/ebc35a75cf3254496287b2212c81dd6b7e9bc4a3.png";
import portfolio2 from "figma:asset/7a672d4524e30c1baf480ccbea15f67b56ef2b0c.png";
import portfolio3 from "figma:asset/18ac31cb352b54fcbae9a81173b3373392f398ca.png";
import portfolio4 from "figma:asset/e740ab3c46b6ed12c936bf6ed3f04f88abeba396.png";
import portfolio5 from "figma:asset/ae24eacf076b5964e66c83c021d3a7bd961d6525.png";
import portfolio6 from "figma:asset/920e0c2e29518a2277e45e52f7d858241b573b07.png";

const portfolioImages = [
  {
    url: portfolio1,
    alt: "Монтаж электропроводки",
    title: "Монтаж кабелей",
  },
  {
    url: portfolio2,
    alt: "Электрический щит",
    title: "Сборка электрического щита",
  },
  {
    url: portfolio3,
    alt: "Электромонтаж",
    title: "Электромонтаж",
  },
  {
    url: portfolio4,
    alt: "Прокладка кабелей",
    title: "Прокладка кабелей",
  },
  {
    url: portfolio5,
    alt: "Освещение лестницы",
    title: "Освещение лестницы",
  },
  {
    url: portfolio6,
    alt: "Монтаж щита",
    title: "Монтаж щита",
  },
];

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<
    string | null
  >(null);

  return (
    <section
      id="portfolio"
      className="relative py-32 bg-[#4A4A4A]/20 px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />

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
              Наши работы
            </span>
          </div>
          <h2 className="text-[#D4AF37] mb-4">Портфолио</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Примеры выполненных проектов по электромонтажу в
            домах Санкт-Петербурга и ЛО
          </p>
        </motion.div>

        <Masonry
          columnsCount={3}
          gutter="20px"
          className="masonry-grid"
        >
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#4A4A4A]/30 hover:border-[#D4AF37] transition-all"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white mb-2">
                      {image.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <ZoomIn className="w-4 h-4" />
                      <span>Посмотреть</span>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-xl" />
              </div>
            </motion.div>
          ))}
        </Masonry>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-5xl bg-[#1A1A1A]/95 backdrop-blur-xl border-[#D4AF37]/50">
            <DialogTitle className="sr-only">
              Просмотр изображения портфолио
            </DialogTitle>
            <DialogDescription className="sr-only">
              Увеличенное изображение проекта электромонтажных
              работ
            </DialogDescription>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Portfolio image"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
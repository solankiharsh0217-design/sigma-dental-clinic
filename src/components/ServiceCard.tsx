"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ServiceModal from "./ServiceModal";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  details: string[];
  benefits: string[];
}

export default function ServiceCard({
  title,
  description,
  image,
  icon,
  details,
  benefits,
}: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer group border border-navy/5 hover:shadow-premium transition-all duration-500 card-premium"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-44 sm:h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="bg-gold/90 text-navy p-2.5 rounded-xl">{icon}</div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300 heading-editorial">
            {title}
          </h3>
          <p className="text-text-muted text-sm mb-5 line-clamp-2 leading-relaxed">{description}</p>
          <div className="flex items-center text-gold font-semibold text-sm group-hover:gap-3 transition-all duration-300">
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </motion.div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        image={image}
        details={details}
        benefits={benefits}
      />
    </>
  );
}

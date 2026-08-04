"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Check, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  details: string[];
  benefits: string[];
}

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
  image,
  details,
  benefits,
}: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-premium border border-navy/5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-56 sm:h-64">
              <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 672px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-navy/60 hover:bg-navy text-white p-2.5 rounded-xl transition-colors cursor-pointer backdrop-blur-sm"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white heading-editorial">{title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
              <p className="text-text-muted mb-8 text-lg leading-relaxed">{description}</p>

              {/* Details */}
              {details.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <div className="w-8 h-1 bg-gold rounded" />
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    {details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-muted">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-gold" />
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {benefits.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <div className="w-8 h-1 bg-gold rounded" />
                    Benefits
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-muted">
                        <div className="w-5 h-5 rounded-full bg-navy/5 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-navy" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-navy/5">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex-1 btn-gold flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
                <a
                  href="tel:+17735062033"
                  className="flex-1 btn-outline-gold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

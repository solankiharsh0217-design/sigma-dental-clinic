"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import {
  Stethoscope,
  Smile,
  Shield,
  Clock,
  Scissors,
  Droplets,
  Sun,
  AlignLeft,
  Gem,
  Plug,
  Layers,
  PaintBucket,
  UserCog,
  Zap,
  Heart,
} from "lucide-react";

const services = [
  // General Dentistry
  {
    category: "General Dentistry",
    id: "general",
    items: [
      {
        title: "Teeth Cleaning & Checkups",
        description: "Essential care for a bright, healthy smile. Professional cleaning removes plaque and tartar buildup.",
        image: "/images/services/dental-checkup.jpg",
        icon: <Stethoscope className="w-5 h-5" />,
        details: [
          "Comprehensive dental examination",
          "Professional plaque removal",
          "Oral cancer screening",
          "Personalized hygiene tips",
        ],
        benefits: [
          "Prevents cavities and gum disease",
          "Maintains overall oral health",
          "Early detection of issues",
          "Bright, polished smile",
        ],
      },
      {
        title: "Kids Dentistry",
        description: "Gentle, friendly dental care designed specifically for children.",
        image: "/images/hero/dental-clinic-interior.jpg",
        icon: <Heart className="w-5 h-5" />,
        details: [
          "Pediatric dental exams",
          "Gentle cleanings",
          "Dental sealants",
          "Fluoride treatments",
        ],
        benefits: [
          "Creates positive dental experiences",
          "Establishes lifelong oral health habits",
          "Gentle, child-friendly approach",
          "Preventive care for growing smiles",
        ],
      },
      {
        title: "Deep Cleaning",
        description: "Scaling and root planing to treat gum disease and restore gum health.",
        image: "/images/services/dental-tools.jpg",
        icon: <Droplets className="w-5 h-5" />,
        details: [
          "Scaling to remove tartar",
          "Root planing to smooth roots",
          "Antibiotic treatment if needed",
          "Follow-up care",
        ],
        benefits: [
          "Treats gum disease",
          "Prevents tooth loss",
          "Reduces inflammation",
          "Restores gum health",
        ],
      },
      {
        title: "Root Canal Treatment",
        description: "Save and preserve your infected tooth with professional root canal therapy.",
        image: "/images/services/root-canal.jpg",
        icon: <Shield className="w-5 h-5" />,
        details: [
          "Removal of infected pulp",
          "Cleaning and disinfection",
          "Filling and sealing",
          "Crown restoration",
        ],
        benefits: [
          "Preserves natural tooth",
          "Relieves pain",
          "Restores function",
          "Prevents further damage",
        ],
      },
      {
        title: "Tooth Extractions",
        description: "Safe, comfortable removal of damaged or problematic teeth.",
        image: "/images/services/dental-equipment.jpg",
        icon: <Scissors className="w-5 h-5" />,
        details: [
          "Simple extractions",
          "Surgical extractions",
          "Wisdom teeth removal",
          "Post-extraction care",
        ],
        benefits: [
          "Relieves pain and discomfort",
          "Prevents spread of infection",
          "Prepares for orthodontics",
          "Expert, gentle care",
        ],
      },
      {
        title: "Gum Disease Therapy",
        description: "Comprehensive treatment for gingivitis and periodontitis.",
        image: "/images/hero/dental-care-story.webp",
        icon: <Heart className="w-5 h-5" />,
        details: [
          "Non-surgical treatments",
          "Scaling and root planing",
          "Antibiotic therapy",
          "Maintenance programs",
        ],
        benefits: [
          "Stops gum disease progression",
          "Prevents tooth loss",
          "Reduces gum inflammation",
          "Improves overall health",
        ],
      },
      {
        title: "TMJ Treatment",
        description: "Effective treatment for jaw joint disorders and related pain.",
        image: "/images/services/dental-clinic.jpg",
        icon: <Zap className="w-5 h-5" />,
        details: [
          "TMJ assessment",
          "Custom night guards",
          "Botox treatment",
          "Lifestyle modifications",
        ],
        benefits: [
          "Relieves jaw pain",
          "Reduces headaches",
          "Improves jaw function",
          "Non-invasive options",
        ],
      },
    ],
  },
  // Cosmetic Dentistry
  {
    category: "Cosmetic Dentistry",
    id: "cosmetic",
    items: [
      {
        title: "Teeth Whitening",
        description: "Brighten your smile and boost your confidence with professional whitening.",
        image: "/images/services/teeth-whitening.jpg",
        icon: <Sun className="w-5 h-5" />,
        details: [
          "In-office whitening",
          "Take-home kits",
          "Custom treatment plans",
          "Long-lasting results",
        ],
        benefits: [
          "Restores brightness",
          "Boosts confidence",
          "Safe and comfortable",
          "Long-lasting results",
        ],
      },
      {
        title: "Clear Aligners (Invisalign)",
        description: "Straighten your smile with confidence using clear, removable aligners.",
        image: "/images/services/veneers.jpg",
        icon: <AlignLeft className="w-5 h-5" />,
        details: [
          "SureSmile Clear Aligners",
          "Custom-made aligners",
          "Digital treatment planning",
          "Regular monitoring",
        ],
        benefits: [
          "Virtually invisible",
          "Comfortable fit",
          "Removable convenience",
          "Customized treatment",
        ],
      },
      {
        title: "Porcelain Veneers",
        description: "Achieve a perfect smile with custom, natural-looking restorations.",
        image: "/images/services/smile makeover.jpg",
        icon: <Gem className="w-5 h-5" />,
        details: [
          "Custom porcelain shells",
          "Color matching",
          "Minimal tooth preparation",
          "Long-lasting results",
        ],
        benefits: [
          "Repairs chips and cracks",
          "Reshapes teeth",
          "Durable and long-lasting",
          "Natural-looking results",
        ],
      },
    ],
  },
  // Restorative Dentistry
  {
    category: "Restorative Dentistry",
    id: "restorative",
    items: [
      {
        title: "Dental Implants",
        description: "The most durable, long-lasting tooth replacement solution available.",
        image: "/images/services/dental-implant.jpg",
        icon: <Plug className="w-5 h-5" />,
        details: [
          "Single tooth implants",
          "Multiple tooth implants",
          "All-on-4 implants",
          "Implant-supported dentures",
        ],
        benefits: [
          "Long-lasting solution",
          "Natural look and feel",
          "Improved functionality",
          "Preserves jawbone health",
        ],
      },
      {
        title: "Crowns & Bridges",
        description: "Restore your smile and function with custom restorations.",
        image: "/images/services/crowns.jpg",
        icon: <Layers className="w-5 h-5" />,
        details: [
          "Porcelain crowns",
          "Metal-free bridges",
          "Same-day crowns",
          "Custom color matching",
        ],
        benefits: [
          "Restores functionality",
          "Natural look",
          "Long-lasting and durable",
          "Custom fit",
        ],
      },
      {
        title: "Fillings",
        description: "Reinforce and restore the strength and health of your teeth.",
        image: "/images/hero/dental-chair.jpg",
        icon: <PaintBucket className="w-5 h-5" />,
        details: [
          "Tooth-colored fillings",
          "Composite resin",
          "Mercury-free options",
          "Same-day treatment",
        ],
        benefits: [
          "Restores function",
          "Natural appearance",
          "Durable and long-lasting",
          "Prevents further damage",
        ],
      },
      {
        title: "Dentures",
        description: "Restore your smile with comfort and confidence using removable dentures.",
        image: "/images/services/modern-clinic.jpg",
        icon: <UserCog className="w-5 h-5" />,
        details: [
          "Partial dentures",
          "Full dentures",
          "Immediate dentures",
          "Denture repairs",
        ],
        benefits: [
          "Personalized fit",
          "Natural appearance",
          "Expert care",
          "Comprehensive support",
        ],
      },
    ],
  },
  // Emergency
  {
    category: "Emergency Dental",
    id: "emergency",
    items: [
      {
        title: "Emergency Dental Treatment",
        description: "Urgent dental care for traumatic injuries and severe pain.",
        image: "/images/services/dental-tools.jpg",
        icon: <Clock className="w-5 h-5" />,
        details: [
          "Same-day appointments",
          "Traumatic injury treatment",
          "Severe toothache relief",
          "Emergency extractions",
        ],
        benefits: [
          "Immediate care",
          "Pain relief",
          "Save your teeth",
          "Expert treatment",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/dental-clinic-interior.jpg"
            alt="Sigma Dental Clinic Treatment Room"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,168,83,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">Our Services</p>
            <h1 className="heading-editorial text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Comprehensive <span className="text-gold-gradient">Dental Care</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Professional dental care near you in Chicago, IL. Comprehensive solutions for the whole family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((category) => (
        <section key={category.id} id={category.id} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-1 bg-gold rounded" />
                <h2 className="heading-editorial text-3xl sm:text-4xl text-navy">
                  {category.category}
                </h2>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">Questions?</p>
            <h2 className="heading-editorial text-3xl sm:text-4xl text-navy mb-6">
              We&apos;re Here to <span className="text-gold">Help</span>
            </h2>
            <p className="text-text-muted mb-8 text-lg max-w-xl mx-auto">
              Our team at Sigma Dental Clinic in Chicago, IL 60640 is ready to assist you.
            </p>
            <a href="tel:+17735062033" className="btn-gold inline-flex items-center gap-3">
              Call (773) 506-2033
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

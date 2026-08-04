"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Shield,
  Heart,
  Clock,
  Users,
  Star,
  Check,
  ChevronDown,
  MapPin,
  Award,
  Smile,
  Stethoscope,
  ArrowRight,
  Play,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ScrollToTop from "@/components/ScrollToTop";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive dental care for the whole family, from routine check-ups to preventive treatments.",
    image: "/images/services/dental-checkup.jpg",
    icon: <Stethoscope className="w-5 h-5" />,
    details: [
      "Teeth Cleaning & Checkups",
      "Kids Dentistry",
      "Deep Cleaning",
      "Tooth Extractions",
      "Root Canal Treatment",
      "Gum Disease Therapy",
      "TMJ Treatment",
    ],
    benefits: [
      "Maintains optimal oral health",
      "Prevents future dental problems",
      "Early detection of issues",
      "Personalized care plans",
    ],
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with our advanced cosmetic treatments designed to boost your confidence.",
    image: "/images/services/smile makeover.jpg",
    icon: <Smile className="w-5 h-5" />,
    details: [
      "Teeth Whitening",
      "Clear Aligners (Invisalign)",
      "Porcelain Veneers",
      "Dental Bonding",
    ],
    benefits: [
      "Brighter, whiter smile",
      "Correct imperfections",
      "Boost self-confidence",
      "Natural-looking results",
    ],
  },
  {
    title: "Restorative Dentistry",
    description: "Restore your smile and oral health with our comprehensive restorative treatments.",
    image: "/images/services/dental-implant.jpg",
    icon: <Shield className="w-5 h-5" />,
    details: [
      "Dental Implants",
      "Crowns & Bridges",
      "Fillings",
      "Dentures",
    ],
    benefits: [
      "Long-lasting solutions",
      "Natural look and feel",
      "Restore chewing function",
      "Preserve jawbone health",
    ],
  },
  {
    title: "Emergency Dental",
    description: "Urgent dental care when you need it most. We're here for dental emergencies.",
    image: "/images/hero/dental-chair.jpg",
    icon: <Clock className="w-5 h-5" />,
    details: [
      "Traumatic dental injuries",
      "Severe toothache",
      "Knocked-out teeth",
      "Broken or chipped teeth",
    ],
    benefits: [
      "Immediate care",
      "Pain relief",
      "Save your teeth",
      "Expert treatment",
    ],
  },
];

const stats = [
  { label: "Years Experience", value: "18+", icon: <Award className="w-7 h-7" /> },
  { label: "Happy Patients", value: "5000+", icon: <Users className="w-7 h-7" /> },
  { label: "Services Offered", value: "20+", icon: <Heart className="w-7 h-7" /> },
  { label: "5-Star Reviews", value: "500+", icon: <Star className="w-7 h-7" /> },
];

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Dr. Sepi is amazing! She made me feel so comfortable during my treatment. The whole team is wonderful!",
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "Best dental experience I've ever had. The office is modern and clean, and the staff is very professional.",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "I was terrified of dentists until I came here. Dr. Sepi changed everything. Now I actually look forward to my appointments!",
  },
];

export default function Home() {
  return (
    <>
      {/* Full Viewport Hero with YouTube Video Background */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-screen min-h-[400px] flex items-center overflow-hidden">
        {/* YouTube Video Background - Autoplay, Loop, Muted */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 aspect-video w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/HzgVzGlWU7g?autoplay=1&mute=1&loop=1&playlist=HzgVzGlWU7g&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
              title="Sigma Dental Clinic Tour"
              allow="autoplay; encrypted-media"
              className="absolute inset-0 w-full h-full scale-[1.2] pointer-events-none"
              style={{ border: 'none' }}
            />
          </div>
        </div>

        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              {/* Gold accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-gold to-gold-light mb-8"
              />

              {/* Tagline */}
              <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6">
                Premium Dental Care in Chicago
              </p>

              {/* Main Heading */}
              <h1 className="heading-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 sm:mb-8">
                Where
                <br />
                <span className="text-gold-gradient">Beautiful</span>
                <br />
                Smiles Begin
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 max-w-xl font-light leading-relaxed">
                Experience world-class dentistry with Dr. Sepi Dashti. Compassionate care,
                advanced technology, and results that transform lives.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-gold inline-flex items-center justify-center gap-3 text-base"
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Consultation
                </Link>
                <a
                  href="tel:+17735062033"
                  className="btn-outline-gold inline-flex items-center justify-center gap-3 text-base"
                >
                  <Phone className="w-5 h-5" />
                  (773) 506-2033
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 text-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Premium dark */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,168,83,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-2xl mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  {stat.icon}
                </div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 heading-editorial">{stat.value}</p>
                <p className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Editorial split */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <Image
                  src="/images/team/dentist-portrait.jpg"
                  alt="Dr. Sepi Dashti"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[350px] sm:h-[500px] lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-navy text-white p-6 rounded-2xl shadow-premium border border-gold/20">
                <p className="text-4xl font-bold text-gold heading-editorial">18+</p>
                <p className="text-white/70 text-sm uppercase tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">About Us</p>
              <h2 className="heading-editorial text-3xl sm:text-4xl lg:text-5xl text-navy mb-6 sm:mb-8">
                Dental Care with a
                <br />
                <span className="text-gold">Personal Touch</span>
              </h2>
              <p className="text-text-muted text-base sm:text-lg mb-6 leading-relaxed">
                Welcome to Sigma Dental Clinic! We provide exceptional dental care in the heart of
                Uptown, Andersonville, Bowmanville, and Lincoln Square, Chicago, IL. Our experienced
                team is dedicated to comprehensive oral health.
              </p>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Dr. Sepi Dashti is a distinguished Chicago dentist, recognized for her expertise in
                General and Cosmetic Dentistry. With over 18 years of hands-on experience, she is
                known for her meticulous approach and dedication to exceptional patient care.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {["Compassionate Care", "Advanced Technology", "Flexible Scheduling", "Affordable Options"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="text-navy font-medium">{item}</span>
                    </div>
                  )
                )}
              </div>
              <Link
                href="/about"
                className="btn-navy inline-flex items-center gap-3"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Services Section */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">What We Offer</p>
            <h2 className="heading-editorial text-3xl sm:text-4xl lg:text-5xl text-navy mb-6">
              Our <span className="text-gold">Services</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">
              Comprehensive dental care for the whole family. From routine check-ups to advanced
              treatments, we offer everything you need for a healthy, beautiful smile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link
              href="/services"
              className="btn-navy inline-flex items-center gap-3"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Premium */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/other/patient-satisfaction.webp"
            alt="Happy Patient"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,168,83,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">Testimonials</p>
            <h2 className="heading-editorial text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              What Our Patients <span className="text-gold">Say</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base sm:text-lg">
              Why Patients Love Dr. Sepi at Sigma Dental Clinic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-navy-light/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/70 mb-6 text-lg leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold font-bold text-lg">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/40 text-sm">Verified Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/services/modern-clinic.jpg"
              alt="Sigma Dental Clinic"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/85" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,168,83,0.5) 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            </div>
            <div className="relative z-10 p-8 sm:p-12 lg:p-20 text-center">
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">Get Started</p>
              <h2 className="heading-editorial text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Ready to Transform
                <br />
                <span className="text-gold">Your Smile?</span>
              </h2>
              <p className="text-white/60 mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg">
                Schedule your appointment today and experience the difference of expert care
                delivered with genuine compassion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-gold inline-flex items-center justify-center gap-3 text-base"
                >
                  <Calendar className="w-5 h-5" />
                  Book Online
                </Link>
                <a
                  href="tel:+17735062033"
                  className="btn-outline-gold inline-flex items-center justify-center gap-3 text-base"
                >
                  <Phone className="w-5 h-5" />
                  Call (773) 506-2033
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">Visit Us</p>
              <h2 className="heading-editorial text-3xl sm:text-4xl lg:text-5xl text-navy mb-6 sm:mb-8">
                Conveniently Located
                <br />
                in <span className="text-gold">Chicago</span>
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                    <MapPin className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Address</p>
                    <p className="text-text-muted">1954 W Foster Ave, Chicago, IL 60640</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                    <Phone className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Phone</p>
                    <p className="text-text-muted">(773) 506-2033 | (773) 754-0005</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                    <Clock className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Hours</p>
                    <p className="text-text-muted">Mon-Fri: 10am-7pm | Sat: 9am-2pm</p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-navy inline-flex items-center gap-3"
              >
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-premium h-[300px] sm:h-[350px] lg:h-[450px]"
            >
              <iframe
                src="https://maps.google.com/maps?q=Sigma%20Dental%20Clinic%201954%20W%20Foster%20Ave%2C%20Chicago%2C%20IL%2060640%2C%20United%20States&t=m&z=15&output=embed&iwloc=near"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Sigma Dental Clinic Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Shield,
  Users,
  Check,
  ArrowRight,
  Phone,
  Calendar,
} from "lucide-react";

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Compassionate Care",
    description: "We treat every patient like family, ensuring comfort and confidence throughout their visit.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Advanced Technology",
    description: "State-of-the-art equipment and techniques for precise, effective treatments.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Patient-Centered",
    description: "Your needs and concerns are at the heart of every decision we make.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description: "We maintain the highest standards of dental care and professional integrity.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/dental-care-story.webp"
            alt="Dr. Sepi Dashti - Sigma Dental Clinic"
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
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">About Us</p>
            <h1 className="heading-editorial text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              About <span className="text-gold-gradient">Sigma Dental</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              World-class dental care with a personal touch. Discover our story and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dr. Sepi Section */}
      <section className="py-24 bg-background" id="dentist">
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
                  className="object-cover w-full h-[500px] lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>
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
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">Meet Your Dentist</p>
              <h2 className="heading-editorial text-4xl lg:text-5xl text-navy mb-8">
                Dr. Sepi <span className="text-gold">Dashti</span>
              </h2>
              <p className="text-text-muted text-lg mb-6 leading-relaxed">
                Dr. Sepi Dashti is a distinguished Chicago dentist, recognized for her expertise in
                General and Cosmetic Dentistry. With over 18 years of hands-on experience, she is
                known for her meticulous approach and dedication to exceptional patient care.
              </p>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Her passion for dentistry extends beyond technical excellence. She believes in building
                lasting relationships with her patients, understanding their unique needs, and creating
                personalized treatment plans that deliver optimal results.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {["General Dentistry", "Cosmetic Expert", "Patient Focused", "18+ Years Experience"].map(
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
                href="/contact"
                className="btn-navy inline-flex items-center gap-3"
              >
                Book with Dr. Sepi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">Our Values</p>
            <h2 className="heading-editorial text-4xl lg:text-5xl text-navy mb-6">
              What <span className="text-gold">Defines</span> Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5 hover:shadow-premium hover:border-gold/20 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-gold mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 heading-editorial">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,168,83,0.5) 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            </div>
            <div className="relative z-10">
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">Get Started</p>
              <h2 className="heading-editorial text-4xl lg:text-5xl text-white mb-6">
                Ready to Experience
                <br />
                <span className="text-gold">Premium Care?</span>
              </h2>
              <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg">
                Schedule your appointment today and discover the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-gold inline-flex items-center justify-center gap-3 text-base"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
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
    </>
  );
}

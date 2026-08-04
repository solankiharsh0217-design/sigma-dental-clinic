"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, Calendar, Phone } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Lorelei Stewart",
    text: "The staff at Sigma Dental Clinic is very professional, and the atmosphere is welcoming. I've never felt more comfortable during a dental visit.",
    rating: 5,
  },
  {
    name: "Kim Williams",
    text: "Sigma Dental Clinic has transformed my smile. The team is professional, and the results are amazing. I couldn't be happier!",
    rating: 5,
  },
  {
    name: "Michael G",
    text: "I've been coming to Sigma Dental Clinic for years, and they've always provided me with exceptional dental care. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    text: "Dr. Sepi is the best dentist I've ever had. She explains everything clearly and makes sure I'm comfortable throughout the procedure.",
    rating: 5,
  },
  {
    name: "David Chen",
    text: "I was nervous about getting dental implants, but the team at Sigma made the process smooth and painless. Now I have a natural-looking smile!",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    text: "Excellent pediatric dentistry! My kids actually look forward to their dental visits. The staff is patient and great with children.",
    rating: 5,
  },
  {
    name: "James Wilson",
    text: "I had a dental emergency and Sigma Dental Clinic fit me in the same day. The care was outstanding and the pain relief was immediate.",
    rating: 5,
  },
  {
    name: "Emily Brown",
    text: "The teeth whitening results exceeded my expectations. My smile is brighter than ever! Thank you, Sigma Dental Clinic!",
    rating: 5,
  },
  {
    name: "Robert Taylor",
    text: "Professional, caring, and efficient. That's how I'd describe Sigma Dental Clinic. I've been a patient for over 5 years and couldn't be happier.",
    rating: 5,
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/other/patient-satisfaction.webp"
            alt="Happy Patients"
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
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">Patient Reviews</p>
            <h1 className="heading-editorial text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              What Our Patients <span className="text-gold-gradient">Say</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              See what our patients are saying about their experience at Sigma Dental Clinic in Chicago, IL.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5 hover:shadow-premium hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gold/20 mb-4" />
                <p className="text-text-muted mb-6 leading-relaxed text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 border-t border-navy/5 pt-5">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                    <span className="text-gold font-bold text-lg">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy">{testimonial.name}</p>
                    <p className="text-text-muted text-sm">Verified Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background-alt">
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
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">Join Our Patients</p>
              <h2 className="heading-editorial text-4xl lg:text-5xl text-white mb-6">
                Experience Our
                <br />
                <span className="text-gold">Dental Care</span>
              </h2>
              <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg">
                Join our satisfied patients and discover why we&apos;re Chicago&apos;s most trusted dental clinic.
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

"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/modern-clinic.jpg"
            alt="Sigma Dental Clinic"
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
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">Contact Us</p>
            <h1 className="heading-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Get in <span className="text-gold-gradient">Touch</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
              We&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm border border-navy/5"
            >
              <h2 className="heading-editorial text-2xl text-navy mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-background"
                    placeholder="(773) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
                    Service
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="restorative">Restorative Dentistry</option>
                    <option value="emergency">Emergency Dental</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 border border-navy/10 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none bg-background"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-gold flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="text-gold font-medium tracking-[0.25em] uppercase text-sm mb-4">Our Location</p>
                <h2 className="heading-editorial text-3xl text-navy mb-8">Find Us</h2>
                <div className="space-y-4">
                  <a
                    href="https://maps.google.com/?q=1954+W+Foster+Ave+Chicago+IL+60640"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-navy/5 hover:shadow-premium hover:border-gold/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <p className="font-bold text-navy mb-1">Address</p>
                      <p className="text-text-muted">1954 W Foster Ave, Chicago, IL 60640</p>
                    </div>
                  </a>
                  <a
                    href="tel:+17735062033"
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-navy/5 hover:shadow-premium hover:border-gold/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                      <Phone className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <p className="font-bold text-navy mb-1">Phone</p>
                      <p className="text-text-muted">(773) 506-2033 | (773) 754-0005</p>
                    </div>
                  </a>
                  <a
                    href="mailto:Info@sigmadentalclinic.com"
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-navy/5 hover:shadow-premium hover:border-gold/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                      <Mail className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <p className="font-bold text-navy mb-1">Email</p>
                      <p className="text-text-muted">Info@sigmadentalclinic.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-navy/5">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-navy mb-1">Office Hours</p>
                      <div className="text-text-muted space-y-0.5">
                        <p>Monday - Friday: 10am - 7pm</p>
                        <p>Saturday: 9am - 2pm (Every Other Saturday)</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-premium h-64 sm:h-72">
                <iframe
                  src="https://maps.google.com/maps?q=Sigma%20Dental%20Clinic%201954%20W%20Foster%20Ave%2C%20Chicago%2C%20IL%2060640%2C%20United%20States&t=m&z=15&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Sigma Dental Clinic Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Globe, Camera, Briefcase, PlayCircle } from "lucide-react";

const footerLinks = {
  services: [
    { name: "General Dentistry", href: "/services#general" },
    { name: "Cosmetic Dentistry", href: "/services#cosmetic" },
    { name: "Restorative Dentistry", href: "/services#restorative" },
    { name: "Emergency Dental", href: "/services#emergency" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Meet Our Dentist", href: "/about#dentist" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact Us", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/p/Sigma-Dental-Clinic-61565429923531/", icon: Globe },
  { name: "Instagram", href: "https://www.instagram.com/sigma.dental.clinic/", icon: Camera },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/sigma-dental-clinic-chicago-il/", icon: Briefcase },
  { name: "YouTube", href: "https://www.youtube.com/@SigmaDentalClinic-ChicagoIL", icon: PlayCircle },
];

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,168,83,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src="/images/logo/logo-sigma.webp"
              alt="Sigma Dental Clinic"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Your trusted Chicago dentist for comprehensive, compassionate dental care. World-class
              dentistry with a personal touch.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-gold hover:bg-gold/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/0 group-hover:bg-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/0 group-hover:bg-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <div className="space-y-4 text-sm">
              <a
                href="https://maps.google.com/?q=1954+W+Foster+Ave+Chicago+IL+60640"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/40 hover:text-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="pt-1.5">1954 W Foster Ave, Chicago, IL 60640</span>
              </a>
              <a
                href="tel:+17735062033"
                className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>(773) 506-2033 | (773) 754-0005</span>
              </a>
              <a
                href="mailto:Info@sigmadentalclinic.com"
                className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Info@sigmadentalclinic.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/40">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="pt-1.5">
                  <p>Mon - Fri: 10am - 7pm</p>
                  <p>Sat: 9am - 2pm (Every Other Sat)</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Sigma Dental Clinic. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Designed with care for our patients.
          </p>
        </div>
      </div>
    </footer>
  );
}

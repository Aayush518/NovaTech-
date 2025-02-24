import React from 'react';
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight, Globe, Shield, Gift, CreditCard, Cpu } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative border-t border-slate-800/50 pt-16 pb-8 bg-slate-950">
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 text-2xl font-bold mb-6">
              <Cpu className="w-8 h-8 text-slate-300" />
              <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">NovaTech</span>
            </div>
            <p className="text-slate-400 mb-6">Pioneering the future of technology with innovative solutions and premium devices designed for the modern digital era.</p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
                    <Icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-slate-200 mb-6">Product Categories</h3>
            <ul className="space-y-3">
              {[
                'Professional Workstations',
                'Gaming Systems',
                'Mobile Devices',
                'Smart Home',
                'Audio Solutions',
                'Premium Accessories'
              ].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href="#" className="text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-slate-200 mb-6">Customer Support</h3>
            <ul className="space-y-3">
              {[
                'Order Status',
                'Premium Support',
                'Technical Assistance',
                'Product Guide',
                'Trade-In Program',
                'Enterprise Solutions'
              ].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href="#" className="text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-slate-200 mb-6">Contact Information</h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "NovaTech HQ, 123 Innovation Drive, Silicon Valley, CA" },
                { icon: Phone, text: "1-800-NOVATECH (1-800-668-2832)" },
                { icon: Mail, text: "support@novatech.com" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-3 text-slate-400"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-5 h-5 text-slate-500" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-slate-800/50"
        >
          {[
            { icon: Globe, title: "Global Network", desc: "Worldwide presence" },
            { icon: Shield, title: "Secure Platform", desc: "Enterprise security" },
            { icon: Gift, title: "Elite Benefits", desc: "Member exclusives" },
            { icon: CreditCard, title: "Smart Payments", desc: "Multiple options" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 rounded-full bg-slate-900 border border-slate-800">
                <item.icon className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h4 className="text-slate-300 font-semibold">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="border-t border-slate-800/50 pt-8"
        >
          <p className="text-center text-slate-500">
            © {new Date().getFullYear()} NovaTech. Leading Innovation in Technology.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
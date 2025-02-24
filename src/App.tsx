import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CategorySection from './components/CategorySection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import ProductShowcase from './components/ProductShowcase';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.15, 0.2]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.03, 0.06, 0.09, 0.12]);

  return (
    <NextUIProvider>
      <div className="relative min-h-screen flex flex-col">
        <motion.div
          className="h-1 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 fixed top-0 left-0 right-0 origin-left z-50"
          style={{ scaleX }}
        />
        <div className="flex-grow bg-[#030712] antialiased relative">
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=60')] bg-cover bg-center"
              style={{ 
                opacity: backgroundOpacity,
                scale: backgroundScale
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/95 to-[#030712]/90" />
            <motion.div 
              className="absolute inset-0 bg-grid-white" 
              style={{ 
                opacity: gridOpacity,
                maskImage: 'linear-gradient(to bottom, transparent, black)', 
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
                transform: 'perspective(1000px) rotateX(60deg) translateY(-100px)',
                transformOrigin: 'top'
              }}
            />
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.15), rgba(30, 41, 59, 0))',
                filter: 'blur(50px)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.15), rgba(30, 41, 59, 0))',
                filter: 'blur(50px)'
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
                x: [0, -50, 0],
                y: [0, 30, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Header />
            </div>
            
            <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Hero />
            </div>

            <ProductShowcase />
            
            <motion.div 
              className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
              >
                {[
                  { title: "Global Network", desc: "Worldwide premium delivery service" },
                  { title: "Secure Platform", desc: "Enterprise-grade protection" },
                  { title: "Premium Support", desc: "24/7 dedicated assistance" },
                  { title: "Lifetime Warranty", desc: "Comprehensive coverage" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ 
                      opacity: 0,
                      y: 50,
                      rotateX: -30,
                      scale: 0.9
                    }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      mass: 1,
                      delay: index * 0.1
                    }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 to-slate-900/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-xl p-6 hover:border-slate-700/50 transition-all duration-300 transform-gpu relative">
                      <h3 className="text-lg font-semibold text-slate-200 mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
              >
                <CategorySection />
              </motion.div>
                
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
              >
                <div className="flex justify-between items-center mb-8">
                  <motion.h2 
                    className="text-3xl font-bold text-slate-200"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Signature Collection
                  </motion.h2>
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 transition-all duration-300"
                    >
                      Featured
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-full bg-slate-900/50 text-slate-300 hover:bg-slate-800/80 transition-colors border border-slate-800 hover:border-slate-700"
                    >
                      New Arrivals
                    </motion.button>
                  </div>
                </div>
                <ProductGrid />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="mb-16"
              >
                <div className="flex justify-between items-center mb-8">
                  <motion.h2 
                    className="text-3xl font-bold text-slate-200"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Industry Insights
                  </motion.h2>
                </div>
                <BlogList />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
              >
                <Newsletter />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="relative z-10 w-full"
        >
          <Footer />
        </motion.footer>
      </div>
    </NextUIProvider>
  );
}

export default App;
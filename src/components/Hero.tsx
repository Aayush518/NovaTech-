import React from 'react';
import { Button } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Laptop, Cpu, Layers, Shield, ChevronRight, Gauge, Wifi } from 'lucide-react';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#030712,#000000)]" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=60")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 20,
            repeat: Number.MAX_SAFE_INTEGER,
            ease: "linear"
          }}
        />
        
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'top',
            opacity: 0.2
          }}
        />

        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-slate-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.MAX_SAFE_INTEGER,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/50 border border-slate-800/50 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Cpu className="w-5 h-5 text-slate-300" />
              <span className="text-slate-300 font-medium">Redefining Technology</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block text-slate-100">
                Master Your
              </span>
              <br />
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
                Digital Universe
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Experience technology that transcends boundaries. Precision-engineered devices 
              that empower the visionaries of tomorrow.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-slate-800 text-slate-200 font-semibold hover:bg-slate-700 px-8 h-14 text-lg group"
                endContent={
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1,
                      repeat: Number.MAX_SAFE_INTEGER
                    }}
                  >
                    <ChevronRight className="w-6 h-6 group-hover:text-slate-100" />
                  </motion.div>
                }
              >
                Explore Collection
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-slate-800 text-slate-300 hover:bg-slate-800/50 px-8 h-14 text-lg"
                endContent={<Layers className="w-6 h-6" />}
              >
                View Showcase
              </Button>
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                {
                  icon: Gauge,
                  label: "Engineering",
                  value: "Masterclass",
                },
                {
                  icon: Shield,
                  label: "Protection",
                  value: "Military-grade",
                },
                {
                  icon: Wifi,
                  label: "Integration",
                  value: "Boundless",
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 10, repeat: Number.MAX_SAFE_INTEGER }}
                  />
                  <div className="relative">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-slate-800/30 p-3 mb-4"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 3, repeat: Number.MAX_SAFE_INTEGER }}
                    >
                      <stat.icon className="w-full h-full text-slate-300" />
                    </motion.div>
                    <div className="text-2xl font-bold text-slate-200 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&auto=format&fit=crop&q=60"
                alt="Future Technology"
                className="w-full rounded-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.MAX_SAFE_INTEGER,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-60" />
            </motion.div>

            <motion.div
              className="absolute -inset-4 rounded-2xl z-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.1) 0%, rgba(15, 23, 42, 0.1) 100%)',
                filter: 'blur(40px)'
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 10,
                repeat: Number.MAX_SAFE_INTEGER,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
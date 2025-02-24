import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@nextui-org/react";
import { Smartphone, Shield, Zap, Wifi, RotateCcw, ChevronLeft, ChevronRight, Maximize2, Cpu, Lock } from 'lucide-react';

const ProductShowcase = () => {
  const constraintsRef = useRef(null);
  const [isManualRotate, setIsManualRotate] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const rotateY = useMotionValue(0);
  const springRotate = useSpring(rotateY, {
    stiffness: 150,
    damping: 30,
    mass: 1
  });

  const autoRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleDragEnd = (event, info) => {
    const velocity = info.velocity.x;
    const rotation = springRotate.get() + (velocity / 4);
    springRotate.set(rotation);
    setIsManualRotate(true);
  };

  const handleRotateLeft = () => {
    const currentRotation = springRotate.get();
    springRotate.set(currentRotation - 90);
    setIsManualRotate(true);
  };

  const handleRotateRight = () => {
    const currentRotation = springRotate.get();
    springRotate.set(currentRotation + 90);
    setIsManualRotate(true);
  };

  const resetRotation = () => {
    springRotate.set(0);
    setIsManualRotate(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#030712,#020617)]" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'top'
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950/50 border border-slate-800/50 mb-8 group hover:bg-slate-900/50 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Cpu className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
            </motion.div>
            <span className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">Revolutionary Technology</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200">
                The Future of Mobile Computing
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experience the next evolution in mobile technology with our most advanced device yet
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={constraintsRef}
            className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-[#020617]/90 flex items-center justify-center' : 'h-[600px] flex items-center justify-center'}`}
            style={{ perspective: 2000 }}
          >
            {/* Ambient light effect */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(51, 65, 85, 0.3) 0%, transparent 70%)',
                filter: 'blur(40px)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="relative cursor-grab active:cursor-grabbing"
              style={{
                rotateY: isManualRotate ? springRotate : autoRotate,
                scale: isFullscreen ? 1.5 : phoneScale,
                opacity: isFullscreen ? 1 : opacity
              }}
              drag="x"
              dragConstraints={constraintsRef}
              onDragEnd={handleDragEnd}
              whileHover={{ scale: isFullscreen ? 1.6 : 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div 
                className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  isIconOnly
                  className="bg-slate-950/50 backdrop-blur-xl border border-slate-800/50 text-slate-400 hover:bg-slate-900/50 hover:text-slate-300 transition-all duration-300"
                  onClick={handleRotateLeft}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  className="bg-slate-950/50 backdrop-blur-xl border border-slate-800/50 text-slate-400 hover:bg-slate-900/50 hover:text-slate-300 transition-all duration-300"
                  onClick={resetRotation}
                  startContent={<RotateCcw className="w-4 h-4" />}
                >
                  Reset View
                </Button>
                <Button
                  isIconOnly
                  className="bg-slate-950/50 backdrop-blur-xl border border-slate-800/50 text-slate-400 hover:bg-slate-900/50 hover:text-slate-300 transition-all duration-300"
                  onClick={handleRotateRight}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
                <Button
                  isIconOnly
                  className="bg-slate-950/50 backdrop-blur-xl border border-slate-800/50 text-slate-400 hover:bg-slate-900/50 hover:text-slate-300 transition-all duration-300"
                  onClick={toggleFullscreen}
                >
                  <Maximize2 className="w-5 h-5" />
                </Button>
              </motion.div>

              {/* Phone frame with enhanced visibility */}
              <motion.div
                className="relative w-[300px] h-[600px] rounded-[3rem] bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-[0_0_15px_rgba(30,41,59,0.5)]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Edge highlight effect */}
                <motion.div
                  className="absolute inset-0 rounded-[3rem]"
                  style={{
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
                    filter: 'blur(1px)'
                  }}
                />

                {/* Screen content */}
                <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-inner">
                  <motion.div
                    className="relative w-full h-full"
                    style={{
                      background: 'linear-gradient(45deg, rgba(30, 41, 59, 0.5) 0%, rgba(51, 65, 85, 0.5) 100%)'
                    }}
                  >
                    <motion.img
                      src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&auto=format&fit=crop&q=60"
                      alt="Phone Interface"
                      className="w-full h-full object-cover mix-blend-overlay"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.7, 0.5]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Screen overlay gradient */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.2) 0%, rgba(51, 65, 85, 0.4) 100%)'
                      }}
                      animate={{
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Reflective edge effect */}
                <motion.div
                  className="absolute -inset-1 rounded-[4rem]"
                  style={{
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent)',
                    filter: 'blur(2px)'
                  }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Floating icons with enhanced visibility */}
              <AnimatePresence>
                {[
                  { icon: Lock, delay: 0, position: { top: "20%", left: "-20%" } },
                  { icon: Cpu, delay: 0.2, position: { top: "40%", right: "-20%" } },
                  { icon: Wifi, delay: 0.4, position: { top: "60%", left: "-20%" } }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      ...item.position,
                      zIndex: isFullscreen ? 60 : 1
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -20, 0],
                      rotate: [0, 360],
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 4,
                      delay: item.delay,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-slate-800/80 p-3 backdrop-blur-xl border border-slate-700/50 shadow-lg shadow-slate-900/50 group hover:bg-slate-700/80 hover:border-slate-600/50 transition-all duration-500"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <item.icon className="w-full h-full text-slate-300 group-hover:text-slate-200 transition-colors" />
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {[
              {
                title: "Bionic Processor",
                description: "Next-generation neural engine with advanced machine learning capabilities",
                icon: Cpu,
                gradient: "from-slate-800 to-slate-900"
              },
              {
                title: "ProMotion XDR",
                description: "Revolutionary display with adaptive refresh and quantum color precision",
                icon: Smartphone,
                gradient: "from-slate-900 to-slate-800"
              },
              {
                title: "TitaniumShield",
                description: "Military-grade security with quantum encryption technology",
                icon: Shield,
                gradient: "from-slate-800 to-slate-900"
              },
              {
                title: "UltraConnect",
                description: "Seamless connectivity with integrated satellite and 6G capability",
                icon: Wifi,
                gradient: "from-slate-900 to-slate-800"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-800/0 via-slate-800/5 to-slate-800/0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="relative p-6 bg-slate-950/20 border border-slate-800/50 rounded-2xl backdrop-blur-xl group-hover:bg-slate-900/30 group-hover:border-slate-700/50 transition-all duration-500">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 group-hover:shadow-lg group-hover:shadow-slate-900/50 transition-all duration-500`}
                        whileHover={{ rotate: 180 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <feature.icon className="w-full h-full text-slate-400 group-hover:text-slate-300 transition-colors" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">{feature.title}</h3>
                      <p className="text-slate-500 group-hover:text-slate-400 transition-colors">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
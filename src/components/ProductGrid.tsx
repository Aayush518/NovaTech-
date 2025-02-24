import React, { useState } from 'react';
import { Card, CardBody, Image, Button, Chip } from "@nextui-org/react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ShoppingCart, Star, Heart, Eye, Package, Shield, Award } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "MacBook Pro M3",
    price: 1999.99,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=60",
    discount: 15,
    tag: "New Arrival",
    description: "Experience unprecedented power with the revolutionary M3 chip.",
    features: ["8-Core CPU", "10-Core GPU", "16GB Memory", "512GB SSD"],
    badges: ["Best Seller", "Top Rated"]
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    price: 999.99,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=60",
    discount: 10,
    tag: "Featured",
    description: "Capture life in extraordinary detail with the advanced camera system.",
    features: ["A17 Pro", "48MP Camera", "Titanium", "5G"],
    badges: ["New", "Premium"]
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    price: 399.99,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=60",
    tag: "Premium",
    description: "Immerse yourself in pristine sound with industry-leading noise cancellation.",
    features: ["30h Battery", "Hi-Res Audio", "Multipoint", "LDAC"],
    badges: ["Editor's Choice"]
  }
];

const ProductGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  
  const scaleProgress = useSpring(scrollYProgress, springConfig);
  const opacity = useTransform(scaleProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const scale = useTransform(scaleProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div 
      className="relative py-20"
      style={{ opacity, scale }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#030712,#000000)] opacity-90" />

      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(148, 163, 184, 0.1) 0%, rgba(51, 65, 85, 0) 70%)',
          filter: 'blur(40px)',
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0])
        }}
      />

      <div className="relative container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ translateY }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ rotate }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200">
              Discover Excellence
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore our curated selection of premium technology products designed to elevate your digital lifestyle.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const yRange = [(index * 100), (index * -100)];
            const y = useTransform(scrollYProgress, [0, 1], yRange);
            const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
            const cardRotate = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 5 : -5]);

            return (
              <motion.div
                key={product.id}
                style={{ y, scale: cardScale, rotate: cardRotate }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="relative group"
              >
                <Card className="bg-gradient-to-br from-slate-900 to-slate-950 backdrop-blur-xl border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-500">
                  <CardBody className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.div
                        animate={{
                          scale: hoveredProduct === product.id ? 1.1 : 1,
                          rotate: hoveredProduct === product.id ? 2 : 0
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={product.image}
                          alt={product.title}
                          className="w-full h-80 object-cover"
                          radius="none"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                          initial={false}
                        >
                          <motion.div 
                            className="flex gap-4"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                          >
                            {[
                              { icon: Heart, label: "Wishlist" },
                              { icon: Eye, label: "Quick View" },
                              { icon: ShoppingCart, label: "Add to Cart" }
                            ].map((action, i) => (
                              <motion.button
                                key={i}
                                whileHover={{ 
                                  scale: 1.1, 
                                  y: -5,
                                  rotate: [0, -10, 10, 0]
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-slate-800/80 backdrop-blur-xl p-4 rounded-full text-slate-200 hover:bg-slate-700 transition-all duration-300 group relative"
                              >
                                <action.icon className="w-6 h-6" />
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                  {action.label}
                                </span>
                              </motion.button>
                            ))}
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {product.discount && (
                          <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <Chip
                              className="bg-red-500/90 text-white border-0"
                            >
                              {product.discount}% OFF
                            </Chip>
                          </motion.div>
                        )}
                        {product.badges?.map((badge, i) => (
                          <motion.div
                            key={badge}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: i * 0.1 }}
                          >
                            <Chip
                              className="bg-slate-800/90 text-slate-200 border border-slate-700"
                            >
                              {badge}
                            </Chip>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <h3 className="text-2xl font-bold text-slate-200 group-hover:text-slate-100 transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-slate-400">
                          {product.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                          {product.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center gap-2 text-sm text-slate-400"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Package className="w-4 h-4 text-slate-500" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <span className="text-slate-200 font-semibold">{product.rating}</span>
                          </div>
                          <span className="text-slate-400">({product.reviews} reviews)</span>
                          <div className="flex items-center gap-2 ml-auto">
                            <Shield className="w-4 h-4 text-slate-500" />
                            <Award className="w-4 h-4 text-slate-500" />
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                          <div className="text-3xl font-bold text-slate-200">
                            ${product.price}
                          </div>
                          <Button
                            className="bg-slate-800 text-slate-200 font-semibold px-6 hover:bg-slate-700"
                            endContent={<ShoppingCart className="w-4 h-4" />}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductGrid;
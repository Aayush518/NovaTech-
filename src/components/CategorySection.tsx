import React from 'react';
import { Card, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Laptop, Smartphone, Watch, Headphones, Camera, Gamepad, Speaker, Tv } from 'lucide-react';

const categories = [
  {
    name: "Laptops",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=60",
    count: "154 Products"
  },
  {
    name: "Smartphones",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60",
    count: "287 Products"
  },
  {
    name: "Smartwatches",
    icon: Watch,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60",
    count: "89 Products"
  },
  {
    name: "Headphones",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    count: "126 Products"
  },
  {
    name: "Cameras",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
    count: "94 Products"
  },
  {
    name: "Gaming",
    icon: Gamepad,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=60",
    count: "167 Products"
  },
  {
    name: "Speakers",
    icon: Speaker,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=60",
    count: "73 Products"
  },
  {
    name: "TVs",
    icon: Tv,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=60",
    count: "112 Products"
  }
];

const CategorySection = () => {
  return (
    <div className="mb-16">
      <motion.h2 
        className="text-3xl font-bold text-slate-100 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Shop by Category
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card 
              isPressable
              className="bg-slate-900/30 border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <motion.div 
                className="relative h-48"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full brightness-75"
                  radius="none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <category.icon className="w-6 h-6 text-slate-300" />
                    <h3 className="text-lg font-semibold text-slate-100">{category.name}</h3>
                  </div>
                  <p className="text-sm text-slate-400">{category.count}</p>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
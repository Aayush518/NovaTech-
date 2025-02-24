import React from 'react';
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "The Evolution of Neural Processing",
    excerpt: "Exploring the revolutionary impact of bio-inspired computing architectures in modern devices.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60",
    author: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    date: "Mar 1, 2024",
    readTime: "8 min read",
    likes: 1234,
    comments: 89,
    category: "Innovation"
  },
  {
    id: 2,
    title: "Quantum Security Protocols",
    excerpt: "Understanding the implementation of quantum-resistant encryption in consumer electronics.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    author: "Prof. James Mitchell",
    role: "Security Architect",
    date: "Feb 28, 2024",
    readTime: "12 min read",
    likes: 956,
    comments: 67,
    category: "Security"
  },
  {
    id: 3,
    title: "The Future of Display Technology",
    excerpt: "Breakthrough developments in micro-LED and holographic display systems.",
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=800&auto=format&fit=crop&q=60",
    author: "Dr. Elena Rodriguez",
    role: "Display Technology Lead",
    date: "Feb 27, 2024",
    readTime: "10 min read",
    likes: 1567,
    comments: 123,
    category: "Research"
  }
];

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <Card 
            className="bg-slate-900/30 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500"
          >
            <CardBody className="p-0">
              <div className="relative overflow-hidden cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                    radius="none"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-60"
                    initial={false}
                  />
                </motion.div>

                <motion.div
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-xl">
                    {blog.category}
                  </span>
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    className="bg-slate-900/80 text-slate-200 backdrop-blur-xl"
                    endContent={<ArrowRight className="w-4 h-4" />}
                  >
                    Read Article
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={`https://api.dicebear.com/7.x/personas/svg?seed=${blog.author}`}
                    alt={blog.author}
                    className="w-10 h-10 rounded-full border-2 border-slate-800"
                  />
                  <div>
                    <p className="text-slate-200 font-medium">{blog.author}</p>
                    <p className="text-slate-500 text-sm">{blog.role}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{blog.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </CardBody>

            <CardFooter className="border-t border-slate-800/50 p-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6">
                  <Button
                    isIconOnly
                    variant="light"
                    className="text-slate-400 hover:text-blue-400"
                    size="sm"
                  >
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span>{blog.likes.toLocaleString()}</span>
                    </div>
                  </Button>
                  <Button
                    isIconOnly
                    variant="light"
                    className="text-slate-400 hover:text-blue-400"
                    size="sm"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>{blog.comments}</span>
                    </div>
                  </Button>
                </div>
                <Button
                  isIconOnly
                  variant="light"
                  className="text-slate-400 hover:text-blue-400"
                  size="sm"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogList;
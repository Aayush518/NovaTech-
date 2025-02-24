import React from 'react';
import { Input, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="mb-16">
      <motion.div 
        className="relative overflow-hidden rounded-2xl bg-slate-900 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=60')] bg-cover bg-center"
        />
        <div className="relative mx-auto max-w-3xl text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Stay Ahead of the Tech Curve
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Join our community of tech enthusiasts and get exclusive updates, deals, and insights delivered to your inbox.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                startContent={<Mail className="w-4 h-4 text-slate-400" />}
                className="flex-1"
                classNames={{
                  input: "bg-slate-800/30 text-slate-200",
                  inputWrapper: "bg-slate-800/30 backdrop-blur-xl hover:bg-slate-800/50 border-slate-700"
                }}
              />
              <Button
                className="bg-slate-800 text-slate-200 font-semibold hover:bg-slate-700"
                size="lg"
              >
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
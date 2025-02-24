import React, { useState } from 'react';
import { Button, Input, Badge, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ShoppingCart, Heart, ChevronDown, User, Settings, LogOut, Cpu } from 'lucide-react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { label: "New Arrivals", href: "#" },
    { label: "Laptops", href: "#" },
    { label: "Smartphones", href: "#" },
    { label: "Accessories", href: "#" }
  ];

  return (
    <motion.header 
      className="py-6 sticky top-0 z-50 backdrop-blur-xl bg-slate-950/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav className="flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Dropdown>
            <DropdownTrigger>
              <Button 
                isIconOnly 
                variant="light" 
                className="text-slate-200"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Navigation Menu"
              className="bg-slate-900/90 backdrop-blur-xl border border-slate-800"
            >
              {menuItems.map((item) => (
                <DropdownItem
                  key={item.label}
                  className="text-slate-200 hover:text-slate-100 data-[hover=true]:bg-slate-800"
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <motion.div 
            className="flex items-center gap-2 text-2xl font-bold text-slate-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Cpu className="w-8 h-8" />
            <span>NovaTech</span>
          </motion.div>
        </motion.div>
        
        <div className="flex items-center gap-6">
          <AnimatePresence>
            <motion.div 
              className="hidden md:flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button 
                    variant="light" 
                    className="text-slate-300 hover:text-slate-100 transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "300px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="w-full"
                    startContent={<Search className="w-4 h-4 text-slate-400" />}
                    classNames={{
                      input: "bg-slate-900/30 text-slate-200",
                      inputWrapper: "bg-slate-900/30 backdrop-blur-xl hover:bg-slate-800/50 border-slate-800"
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-slate-300 hover:text-slate-100 transition-colors"
            >
              <Search className="w-6 h-6" />
            </motion.button>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                isIconOnly
                variant="light"
                className="text-slate-300 hover:text-slate-100 transition-colors relative"
              >
                <Heart className="w-6 h-6" />
                <Badge 
                  content="2" 
                  className="bg-slate-800 text-slate-100 border-none"
                  size="sm"
                />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                isIconOnly
                variant="light"
                className="text-slate-300 hover:text-slate-100 transition-colors relative"
              >
                <ShoppingCart className="w-6 h-6" />
                <Badge 
                  content="3" 
                  className="bg-slate-800 text-slate-100 border-none"
                  size="sm"
                />
              </Button>
            </motion.div>
            
            <Dropdown>
              <DropdownTrigger>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    className="bg-slate-900/50 text-slate-200 hover:bg-slate-800"
                    endContent={<ChevronDown className="w-4 h-4" />}
                  >
                    Account
                  </Button>
                </motion.div>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="User menu"
                className="bg-slate-900/90 backdrop-blur-xl border border-slate-800"
              >
                <DropdownItem startContent={<User className="w-4 h-4" />} className="text-slate-200 data-[hover=true]:bg-slate-800">Profile</DropdownItem>
                <DropdownItem startContent={<Settings className="w-4 h-4" />} className="text-slate-200 data-[hover=true]:bg-slate-800">Settings</DropdownItem>
                <DropdownItem 
                  startContent={<LogOut className="w-4 h-4" />}
                  className="text-red-400 data-[hover=true]:bg-slate-800"
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
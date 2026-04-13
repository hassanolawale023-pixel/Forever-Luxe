import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/frontend_assets/assets";


const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity:1}}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src={assets.logo}
        
        alt="logo"
        className="w-24 items-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        
      />
    
    </motion.div>
  );
};

export default Loader;
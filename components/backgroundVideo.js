import React from 'react';
import { motion } from 'framer-motion';

const BackgroundLayout = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <source src="/videos/24715-345209726_medium.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <div className="relative flex z-20">{children}</div>
    </div>
  );
};

export default BackgroundLayout;

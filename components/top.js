import { motion } from 'framer-motion';

export default function Top() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-200 text-gray-800 h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Code:000</h1>
        <p className="text-xl mb-8">Test.</p>
        <a href="/about">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-red-800 px-6 py-2 rounded text-white"
        >
          Start
        </motion.button>
        </a>

      </div>
    </motion.section>
  );
}

import { motion } from 'framer-motion';
import BackgroundLayout from './backgroundVideo';

export default function Top() {
  return (
    <BackgroundLayout>
      <div className="bg-white mx-auto mt-4 px-10 py-5 rounded-md bg-opacity-70 text-center">
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
    </BackgroundLayout>
  );
}

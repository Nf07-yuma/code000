import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const name = "Yuma"
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="bg-white p-10 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <Image
            src="/profile.jpg"
            alt="プロフィール写真"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 mx-auto">こんにちは！</h1>
        <p className="text-gray-700 mb-4">
          私の名前は{name}です。Next.jsを勉強しています。
        </p>
        <a href="/contact">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          もっと知る
        </motion.button>
        </a>
      </motion.div>
    </div>
  );
}

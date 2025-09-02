import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-brand to-accent-purple text-white">
      <motion.h1
        className="text-5xl font-heading mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Interactive Learning Portfolio
      </motion.h1>

      <motion.button
        className="px-6 py-3 bg-white text-brand font-bold rounded-xl shadow-lg hover:bg-gray-100"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        เริ่มเรียนรู้เลย 🚀
      </motion.button>
    </div>
  );
}

export default App;

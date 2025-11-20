import { motion } from "framer-motion";

export default function Button({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-primary-dark transition ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

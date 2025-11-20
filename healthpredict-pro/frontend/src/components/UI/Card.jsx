import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      className={`bg-surface shadow-card rounded-lg p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

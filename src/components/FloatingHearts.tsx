import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 10,
        size: 10 + Math.random() * 14,
        opacity: 0.06 + Math.random() * 0.08,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-accent"
          style={{
            left: `${h.x}%`,
            fontSize: h.size,
            opacity: h.opacity,
          }}
          initial={{ y: "110vh", rotate: 0 }}
          animate={{
            y: "-10vh",
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            y: { duration: h.duration, repeat: Infinity, delay: h.delay, ease: "linear" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;

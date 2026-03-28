import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reasons } from "@/data/reasons";
import FloatingHearts from "@/components/FloatingHearts";

const Index = () => {
  const [index, setIndex] = useState(-1);
  

  const reveal = useCallback(() => {
    setIndex((prev) => {
      const next = (prev + 1) % reasons.length;
      return next;
    });
  }, []);

  const started = index >= 0;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      <FloatingHearts />



      {/* Reason text */}
      <div className="relative flex min-h-[180px] max-w-xl items-center justify-center">
        <AnimatePresence mode="wait">
          {started ? (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center font-serif text-xl leading-relaxed text-foreground sm:text-2xl md:text-3xl"
            >
              "{reasons[index]}"
            </motion.p>
          ) : (
            <motion.p
              key="prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center font-serif text-lg text-muted-foreground italic sm:text-xl"
            >
              Every love has its reasons. Shall we count ours?
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Button */}
      <motion.button
        onClick={reveal}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="mt-12 rounded-full bg-primary px-10 py-4 text-sm font-medium tracking-[0.2em] text-primary-foreground uppercase transition-shadow hover:shadow-lg"
      >
        {started ? "Another reason" : "Show me why"}
      </motion.button>
    </div>
  );
};

export default Index;

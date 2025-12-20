import { motion } from "framer-motion";

export const TitleSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slide-accent to-slide-accent-glow flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">O</span>
          </div>
          <span className="text-4xl font-light text-slide-foreground tracking-wide">nstore</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold text-slide-foreground mb-6"
      >
        Case Study
        <span className="block text-slide-accent mt-2">Analysis</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl text-slide-muted max-w-2xl"
      >
        Strategic Solutions for Retail Media Challenges
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 flex items-center gap-2 text-slide-muted text-sm"
      >
        <span>Press</span>
        <div className="px-2 py-1 rounded bg-slide-card border border-slide-card-border text-xs">
          →
        </div>
        <span>to navigate</span>
      </motion.div>
    </div>
  );
};

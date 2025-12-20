import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoTo,
}: SlideNavigationProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4"
    >
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="p-3 rounded-full bg-slide-card border border-slide-card-border text-slide-foreground hover:bg-slide-accent hover:text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2 px-4 py-2 bg-slide-card/80 backdrop-blur-sm rounded-full border border-slide-card-border">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-slide-accent w-8 animate-glow"
                : "bg-slide-muted hover:bg-slide-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-3 rounded-full bg-slide-card border border-slide-card-border text-slide-foreground hover:bg-slide-accent hover:text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

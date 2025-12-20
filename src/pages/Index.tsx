import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlideNavigation } from "@/components/SlideNavigation";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { AgendaSlide } from "@/components/slides/AgendaSlide";
import { Problem1Slide } from "@/components/slides/Problem1Slide";
import { Problem1DetailSlide } from "@/components/slides/Problem1DetailSlide";
import { Problem2Slide } from "@/components/slides/Problem2Slide";
import { Problem2DetailSlide } from "@/components/slides/Problem2DetailSlide";
import { Problem3Slide } from "@/components/slides/Problem3Slide";
import { Problem3DetailSlide } from "@/components/slides/Problem3DetailSlide";
import { Problem4Slide } from "@/components/slides/Problem4Slide";
import { Problem4DetailSlide } from "@/components/slides/Problem4DetailSlide";
import { SummarySlide } from "@/components/slides/SummarySlide";

const slides = [
  { component: TitleSlide, key: "title" },
  { component: AgendaSlide, key: "agenda" },
  { component: Problem1Slide, key: "problem1" },
  { component: Problem1DetailSlide, key: "problem1-detail" },
  { component: Problem2Slide, key: "problem2" },
  { component: Problem2DetailSlide, key: "problem2-detail" },
  { component: Problem3Slide, key: "problem3" },
  { component: Problem3DetailSlide, key: "problem3-detail" },
  { component: Problem4Slide, key: "problem4" },
  { component: Problem4DetailSlide, key: "problem4-detail" },
  { component: SummarySlide, key: "summary" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const CurrentSlideComponent = slides[currentSlide].component;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-slide overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slide via-slide to-slide-card pointer-events-none" />
      
      {/* Accent glow */}
      <div className="fixed top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-slide-accent/5 to-transparent pointer-events-none" />

      {/* Slide counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-6 right-8 z-50 text-sm text-slide-muted"
      >
        <span className="text-slide-foreground font-medium">{currentSlide + 1}</span>
        <span className="mx-1">/</span>
        <span>{slides.length}</span>
      </motion.div>

      {/* Main slide area */}
      <div className="relative h-screen w-full max-w-7xl mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slides[currentSlide].key}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoTo={goToSlide}
      />
    </div>
  );
};

export default Index;

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Check, X } from "lucide-react";

interface SlideCardProps {
  title: string;
  children: ReactNode;
  variant?: "default" | "pro" | "con" | "recommendation";
  delay?: number;
}

export const SlideCard = ({
  title,
  children,
  variant = "default",
  delay = 0,
}: SlideCardProps) => {
  const variants = {
    default: "border-slide-card-border",
    pro: "border-slide-success/50 bg-slide-success/5",
    con: "border-destructive/50 bg-destructive/5",
    recommendation: "border-slide-accent/50 bg-slide-accent/5",
  };

  const icons = {
    default: null,
    pro: <Check className="w-5 h-5 text-slide-success" />,
    con: <X className="w-5 h-5 text-destructive" />,
    recommendation: null,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`p-6 rounded-xl bg-slide-card/60 backdrop-blur-sm border ${variants[variant]} transition-all duration-300 hover:border-slide-accent/30`}
    >
      <div className="flex items-center gap-2 mb-4">
        {icons[variant]}
        <h3 className="text-lg font-semibold text-slide-foreground">{title}</h3>
      </div>
      <div className="text-slide-foreground/80 text-sm leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

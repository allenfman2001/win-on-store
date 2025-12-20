import { motion } from "framer-motion";
import { Rocket, Target, Zap, Shield, CheckCircle } from "lucide-react";

const ownershipPrinciples = [
  {
    icon: Target,
    title: "Deadline Commitment",
    description: "Deliverables are non-negotiable. I plan ahead and manage my energy to ensure consistent output during critical periods.",
    color: "text-slide-accent",
  },
  {
    icon: Zap,
    title: "Proactive Communication",
    description: "If I'm struggling, I communicate early—not to make excuses, but to find solutions. Surprises damage trust.",
    color: "text-slide-warning",
  },
  {
    icon: Shield,
    title: "Self-Management",
    description: "I optimize sleep, exercise, and nutrition during high-intensity periods. Peak performance requires preparation.",
    color: "text-slide-success",
  },
  {
    icon: Rocket,
    title: "Momentum Builder",
    description: "I understand that startup success is built in these exact moments. My contribution during tough phases compounds over time.",
    color: "text-slide-info",
  },
];

export const Problem4DetailSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <motion.span 
          layoutId="problem4-badge"
          className="text-sm text-slide-accent font-medium mb-2 block"
        >
          Problem 4 - Execution Framework
        </motion.span>
        <motion.h2 
          layoutId="problem4-title"
          className="text-3xl font-bold text-slide-foreground mb-3"
        >
          Ownership Mindset
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {ownershipPrinciples.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="p-6 rounded-xl bg-slide-card/60 border border-slide-card-border hover:border-slide-accent/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`p-3 rounded-lg bg-slide-card border border-slide-card-border ${principle.color}`}
              >
                <principle.icon className="w-6 h-6" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slide-foreground mb-2">{principle.title}</h3>
                <p className="text-sm text-slide-muted leading-relaxed">{principle.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 p-5 rounded-xl bg-slide-accent/10 border border-slide-accent/30"
      >
        <div className="flex items-start gap-4">
          <CheckCircle className="w-8 h-8 text-slide-accent flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slide-foreground mb-2">My Commitment to OnStore</h4>
            <p className="text-sm text-slide-muted">
              I recognize that joining a fast-moving startup means embracing intensity during critical growth phases. 
              I take ownership of my projects and deliverables. When challenges arise, I lean in—not back. 
              This builds the trust and track record that earns future flexibility.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

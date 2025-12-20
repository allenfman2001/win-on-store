import { motion } from "framer-motion";
import { MessageCircle, FileCheck, Shield, RefreshCcw } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Step 1: Pause & Listen",
    description: "Stop all installation activity. Have installer wait at vehicle. Calmly ask the owner to explain their concern without interruption.",
    color: "text-slide-info",
  },
  {
    icon: FileCheck,
    title: "Step 2: Review Documentation",
    description: "Pull up signed agreements on phone/tablet. Show specific clauses about installation dates and consent. Do this privately, not confrontationally.",
    color: "text-slide-success",
  },
  {
    icon: Shield,
    title: "Step 3: Acknowledge & Adapt",
    description: "If miscommunication occurred, own it. Offer to reschedule at their convenience. Prioritize the long-term relationship over today's installation.",
    color: "text-slide-warning",
  },
  {
    icon: RefreshCcw,
    title: "Step 4: Process Improvement",
    description: "Document incident. Implement confirmation calls 48hrs before installation. Create clear sign-off protocols to prevent future disputes.",
    color: "text-slide-accent",
  },
];

export const Problem3DetailSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="text-sm text-slide-accent font-medium mb-2 block">Problem 3 - Resolution Protocol</span>
        <h2 className="text-3xl font-bold text-slide-foreground mb-3">
          On-Site Conflict Resolution
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="p-6 rounded-xl bg-slide-card/60 border border-slide-card-border hover:border-slide-accent/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-slide-card border border-slide-card-border ${step.color}`}>
                <step.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slide-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-slide-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 p-5 rounded-xl bg-destructive/10 border border-destructive/30"
      >
        <h4 className="font-semibold text-slide-foreground mb-2">Key Principle</h4>
        <p className="text-sm text-slide-muted">
          Never force an installation. A hostile store owner will not deliver good campaign results for the advertiser. 
          The relationship and reputation are more valuable than one installation.
        </p>
      </motion.div>
    </div>
  );
};

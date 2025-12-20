import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const summaryItems = [
  {
    problem: "Store Onboarding",
    solution: "Geographic focus: Atlanta → Miami → expand",
    key: "Quality relationships over quantity",
  },
  {
    problem: "Campaign Expiration",
    solution: "Dual-track: extend first, resell as backup",
    key: "Zero idle inventory tolerance",
  },
  {
    problem: "Installation Conflict",
    solution: "De-escalate, document, reschedule if needed",
    key: "Relationships > single installation",
  },
  {
    problem: "Work-Life Balance",
    solution: "Transparent communication, brief reset",
    key: "Sustainable performance > short-term optics",
  },
];

export const SummarySlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-4xl font-bold text-slide-foreground mb-2">Summary</h2>
        <p className="text-slide-muted">Key recommendations at a glance</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {summaryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="p-5 rounded-xl bg-slide-card/60 border border-slide-card-border hover:border-slide-accent/40 transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-slide-success mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slide-foreground mb-1">{item.problem}</h3>
                <p className="text-sm text-slide-muted mb-2">{item.solution}</p>
                <div className="flex items-center gap-2 text-xs text-slide-accent">
                  <ArrowRight className="w-3 h-3" />
                  {item.key}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 text-center"
      >
        <p className="text-slide-muted text-sm">
          Thank you for considering my analysis. I'm excited about the opportunity to contribute to OnStore's mission.
        </p>
      </motion.div>
    </div>
  );
};

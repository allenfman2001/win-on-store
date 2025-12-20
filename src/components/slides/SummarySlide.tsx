import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, MapPin, TrendingUp, Handshake, Rocket } from "lucide-react";

const summaryItems = [
  {
    icon: MapPin,
    problem: "Store Onboarding",
    solution: "Geographic Focus: Atlanta → Miami → expand",
    key: "Quality relationships over quantity",
    color: "text-slide-info",
  },
  {
    icon: TrendingUp,
    problem: "Campaign Expiration",
    solution: "Extend current campaign (aligned with Boxi.co vision)",
    key: "93% retention philosophy",
    color: "text-slide-success",
  },
  {
    icon: Handshake,
    problem: "Installation Conflict",
    solution: "Proceed diplomatically, de-escalate",
    key: "Relationships > single installation",
    color: "text-slide-warning",
  },
  {
    icon: Rocket,
    problem: "Work-Life Balance",
    solution: "Push through, take full ownership",
    key: "Commitment builds trust & future flexibility",
    color: "text-slide-accent",
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
              <div className={`p-2 rounded-lg bg-slide-card border border-slide-card-border ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slide-accent/10 border border-slide-accent/30 mb-4">
          <CheckCircle className="w-4 h-4 text-slide-accent" />
          <span className="text-sm text-slide-accent font-medium">Ready to contribute and grow with OnStore</span>
        </div>
        <p className="text-slide-muted text-sm">
          Thank you for considering my analysis. I'm excited about the opportunity to bring this ownership mindset to your team.
        </p>
      </motion.div>
    </div>
  );
};

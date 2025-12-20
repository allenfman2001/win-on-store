import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

export const Problem2DetailSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="text-sm text-slide-accent font-medium mb-2 block">Problem 2 - Revenue Strategy</span>
        <h2 className="text-3xl font-bold text-slide-foreground mb-3">
          Dual-Track Approach
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl bg-slide-card/60 border border-slide-success/30"
        >
          <h3 className="text-xl font-semibold text-slide-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-slide-success" />
            Track A: Extension Strategy
          </h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slide/50 border border-slide-card-border">
              <h4 className="font-medium text-slide-foreground mb-2">Week 1: Discovery Call</h4>
              <ul className="text-sm text-slide-muted space-y-1">
                <li>• Review campaign performance metrics</li>
                <li>• Identify ROI success stories</li>
                <li>• Present renewal options with incentives</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-slide/50 border border-slide-card-border">
              <h4 className="font-medium text-slide-foreground mb-2">Week 2: Proposal & Close</h4>
              <ul className="text-sm text-slide-muted space-y-1">
                <li>• Offer 10% discount for 6-month extension</li>
                <li>• Bundle additional high-traffic locations</li>
                <li>• Decision deadline: Day 14</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-xl bg-slide-card/60 border border-slide-warning/30"
        >
          <h3 className="text-xl font-semibold text-slide-foreground mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-slide-warning" />
            Track B: Resale Strategy
          </h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slide/50 border border-slide-card-border">
              <h4 className="font-medium text-slide-foreground mb-2">Parallel Prospecting</h4>
              <ul className="text-sm text-slide-muted space-y-1">
                <li>• Activate warm leads from pipeline</li>
                <li>• Target competitors of current client</li>
                <li>• Prepare turnkey campaign packages</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-slide/50 border border-slide-card-border">
              <h4 className="font-medium text-slide-foreground mb-2">Quick-Win Offers</h4>
              <ul className="text-sm text-slide-muted space-y-1">
                <li>• "Takeover" pricing for immediate launch</li>
                <li>• Pre-printed graphics = faster deployment</li>
                <li>• Highlight proven location performance</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-5 rounded-xl bg-slide-accent/10 border border-slide-accent/30"
      >
        <div className="flex items-center gap-4">
          <DollarSign className="w-8 h-8 text-slide-accent" />
          <div>
            <h4 className="font-semibold text-slide-foreground">Revenue Protection Goal</h4>
            <p className="text-sm text-slide-muted">Target: 0% idle inventory by Day 30. Track A conversion = 100% revenue retained. Track B = minimum 80% recovery at market rates.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

import { motion } from "framer-motion";
import { SlideCard } from "../SlideCard";
import { TrendingUp, Users, CheckCircle, AlertTriangle, DollarSign } from "lucide-react";

export const Problem2Slide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <motion.span 
          layoutId="problem2-badge"
          className="text-sm text-slide-accent font-medium mb-2 block"
        >
          Problem 2
        </motion.span>
        <motion.h2 
          layoutId="problem2-title"
          className="text-3xl font-bold text-slide-foreground mb-3"
        >
          Campaign Expiration Dilemma
        </motion.h2>
        <p className="text-slide-muted max-w-3xl">
          Client's campaign ends in 30 days with 30 media assets available. Extend the current campaign or resell to new clients?
        </p>
      </motion.div>

      {/* Extension Strategy Bar Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-32 mb-6 rounded-xl bg-slide-card/40 border border-slide-card-border overflow-hidden"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-4">
          <div className="w-full max-w-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slide-foreground font-medium">Campaign Extension Timeline</span>
              <span className="text-xs text-slide-accent">30 Days Remaining</span>
            </div>
            
            {/* Extension bar with segments */}
            <div className="relative h-12 bg-slide-card-border/50 rounded-xl overflow-hidden">
              {/* Current campaign segment */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-slide-success/40 to-slide-success/20 rounded-l-xl"
              />
              
              {/* Extension segment with glow effect */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "60%", opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                className="absolute left-[100%] top-0 h-full flex items-center"
                style={{ transform: 'translateX(-100%)' }}
              >
                <div className="h-full w-full bg-gradient-to-r from-slide-accent/60 via-slide-accent to-slide-accent-glow relative overflow-hidden rounded-r-xl">
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </div>
              </motion.div>

              {/* Labels inside bar */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-xs text-slide-foreground font-medium z-10"
                >
                  Current: 30 Assets
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-xs text-slide-foreground font-medium z-10 flex items-center gap-1"
                >
                  <TrendingUp className="w-3 h-3" />
                  +6 Month Extension
                </motion.span>
              </div>
            </div>

            {/* Stats below bar */}
            <div className="flex justify-between mt-3">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-slide-success/60" />
                <span className="text-xs text-slide-muted">Guaranteed Revenue</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-slide-accent" />
                <span className="text-xs text-slide-muted">10% Discount Incentive</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="flex items-center gap-2"
              >
                <DollarSign className="w-3 h-3 text-slide-success" />
                <span className="text-xs text-slide-success font-medium">93% Retention</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Boxi.co Vision Reference */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-4 p-3 rounded-lg bg-slide-accent/10 border border-slide-accent/30"
      >
        <p className="text-xs text-slide-muted">
          <span className="text-slide-accent font-medium">Aligned with Boxi.co Vision:</span> "We are trusted partners who prioritize client success" — 93% client retention rate demonstrates commitment to long-term relationships over short-term gains.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Option A - Extend Current Campaign (Recommended) */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <TrendingUp className="w-5 h-5 text-slide-success" />
            <h3 className="text-xl font-bold text-slide-success">Extend Current Campaign</h3>
            <span className="px-2 py-0.5 text-xs font-medium bg-slide-success/20 text-slide-success rounded-full">Recommended</span>
          </motion.div>
          
          <SlideCard title="Pros" variant="pro" delay={0.3}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Aligns with Boxi.co's 93% retention philosophy
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Faster revenue, no new sales cycle needed
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Demonstrates commitment ("real humans who drive business")
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Referral potential from satisfied client
              </li>
            </ul>
          </SlideCard>

          <SlideCard title="Cons" variant="con" delay={0.4}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                May miss opportunity to diversify client base
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Client could negotiate lower rates
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Dependency on single relationship
              </li>
            </ul>
          </SlideCard>
        </div>

        {/* Option B - Resell to New Clients */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Users className="w-5 h-5 text-slide-warning" />
            <h3 className="text-xl font-bold text-slide-warning">Resell to New Clients</h3>
          </motion.div>
          
          <SlideCard title="Pros" variant="pro" delay={0.3}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Higher revenue potential at market rates
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Expands client portfolio diversity
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Tests new market segments
              </li>
            </ul>
          </SlideCard>

          <SlideCard title="Cons" variant="con" delay={0.4}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                30-day sales cycle is very tight
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Relationship-building takes time
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Risk of idle inventory if sale falls through
              </li>
            </ul>
          </SlideCard>
        </div>

        {/* Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="lg:col-span-2 mt-2"
        >
          <SlideCard title="Recommendation" variant="recommendation" delay={0}>
            <div className="flex items-start gap-3">
              <span className="px-3 py-1 rounded-full bg-slide-accent text-primary-foreground text-sm font-medium whitespace-nowrap">
                Extend Campaign
              </span>
              <p className="text-slide-muted">
                Per Boxi.co's vision of being trusted partners, prioritize extension (Week 1-2). Offer 10% discount for 6-month commitment. If declined by Day 14, immediately pivot to resale with warm leads. Zero idle inventory tolerance.
              </p>
            </div>
          </SlideCard>
        </motion.div>
      </div>
    </div>
  );
};

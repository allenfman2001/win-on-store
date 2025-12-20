import { motion } from "framer-motion";
import { SlideCard } from "../SlideCard";
import { Handshake, Scale, CheckCircle, AlertTriangle } from "lucide-react";

export const Problem3Slide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <motion.span 
          layoutId="problem3-badge"
          className="text-sm text-slide-accent font-medium mb-2 block"
        >
          Problem 3
        </motion.span>
        <motion.h2 
          layoutId="problem3-title"
          className="text-3xl font-bold text-slide-foreground mb-3"
        >
          Installation Conflict
        </motion.h2>
        <p className="text-slide-muted max-w-3xl">
          Business owner stops installation, claiming they never agreed. Graphics are printed, installer is on-site and ready.
        </p>
      </motion.div>

      {/* Conflict Resolution Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-24 mb-6 rounded-xl bg-slide-card/40 border border-slide-card-border overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center gap-8 px-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full bg-slide-warning/20 flex items-center justify-center border border-slide-warning/40">
              <span className="text-lg">😤</span>
            </div>
            <span className="text-xs text-slide-muted mt-2">Upset Owner</span>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.4)', '0 0 0 15px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-slide-success/20 flex items-center justify-center border-2 border-slide-success"
            >
              <Handshake className="w-8 h-8 text-slide-success" />
            </motion.div>
            <span className="text-xs text-slide-success mt-2 font-medium">De-escalation</span>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full bg-slide-success/20 flex items-center justify-center border border-slide-success/40">
              <span className="text-lg">🤝</span>
            </div>
            <span className="text-xs text-slide-muted mt-2">Resolution</span>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Option A - Proceed Diplomatically (Recommended) */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Handshake className="w-5 h-5 text-slide-success" />
            <h3 className="text-xl font-bold text-slide-success">Proceed Diplomatically</h3>
            <span className="px-2 py-0.5 text-xs font-medium bg-slide-success/20 text-slide-success rounded-full">Recommended</span>
          </motion.div>
          
          <SlideCard title="Pros" variant="pro" delay={0.3}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Preserves long-term relationship
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                De-escalation prevents negative word-of-mouth
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Opportunity to uncover and fix process gaps
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Maintains brand reputation in local market
              </li>
            </ul>
          </SlideCard>

          <SlideCard title="Cons" variant="con" delay={0.4}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Sunk costs on printed graphics and installer time
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Sets precedent that could be exploited
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                May delay campaign launch
              </li>
            </ul>
          </SlideCard>
        </div>

        {/* Option B - Enforce Contract */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Scale className="w-5 h-5 text-slide-warning" />
            <h3 className="text-xl font-bold text-slide-warning">Enforce Contract</h3>
          </motion.div>
          
          <SlideCard title="Pros" variant="pro" delay={0.3}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Protects company investment
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Sets clear standards and expectations
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Installer time is billable either way
              </li>
            </ul>
          </SlideCard>

          <SlideCard title="Cons" variant="con" delay={0.4}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Damages relationship permanently
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Negative word-of-mouth in tight-knit store community
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Hostile owner = poor campaign results for advertiser
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
                Proceed Diplomatically
              </span>
              <p className="text-slide-muted">
                Relationships &gt; short-term wins. De-escalate, offer to return another day. If miscommunication occurred, own it. Identify communication gaps to prevent future disputes. A hostile store owner will not deliver good campaign results.
              </p>
            </div>
          </SlideCard>
        </motion.div>
      </div>
    </div>
  );
};

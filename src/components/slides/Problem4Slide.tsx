import { motion } from "framer-motion";
import { SlideCard } from "../SlideCard";
import { Rocket, Coffee, CheckCircle, AlertTriangle, Zap } from "lucide-react";

export const Problem4Slide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <motion.span 
          layoutId="problem4-badge"
          className="text-sm text-slide-accent font-medium mb-2 block"
        >
          Problem 4
        </motion.span>
        <motion.h2 
          layoutId="problem4-title"
          className="text-3xl font-bold text-slide-foreground mb-3"
        >
          Work-Life Balance Decision
        </motion.h2>
        <p className="text-slide-muted max-w-3xl">
          Personal stress arises while you're expected to be consistent and reliable for a demanding boss and growing company.
        </p>
      </motion.div>

      {/* Momentum Meter Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-28 mb-6 rounded-xl bg-slide-card/40 border border-slide-card-border overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slide-muted">Startup Momentum</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Rocket className="w-5 h-5 text-slide-accent" />
              </motion.div>
            </div>
            <div className="h-4 bg-slide-card-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-slide-accent to-slide-accent-glow relative"
              >
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/20"
                />
              </motion.div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-slide-muted">Critical Growth Phase</span>
              <span className="text-xs text-slide-accent font-medium">High Intensity</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ownership Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-4 p-3 rounded-lg bg-slide-accent/10 border border-slide-accent/30"
      >
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-slide-accent" />
          <p className="text-xs text-slide-muted">
            <span className="text-slide-accent font-medium">Startup Reality:</span> In fast-moving environments, extraordinary commitment during critical phases builds the foundation for future flexibility and trust.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Option A - Take a Pause */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Coffee className="w-5 h-5 text-slide-info" />
            <h3 className="text-xl font-bold text-slide-info">Take a Pause</h3>
          </motion.div>
          
          <SlideCard title="Pros" variant="pro" delay={0.3}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Mental health enables long-term performance
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Burnout leads to poor decisions
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Brief reset prevents longer absence later
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Transparent communication builds trust
              </li>
            </ul>
          </SlideCard>

          <SlideCard title="Cons" variant="con" delay={0.4}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Critical startup phase may not allow flexibility
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Others depend on your contribution
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Momentum loss during high-growth period
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                May impact reputation during early tenure
              </li>
            </ul>
          </SlideCard>
        </div>

        {/* Option B - Push Through (Recommended) */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Rocket className="w-5 h-5 text-slide-success" />
            <h3 className="text-xl font-bold text-slide-success">Push Through</h3>
            <span className="px-2 py-0.5 text-xs font-medium bg-slide-success/20 text-slide-success rounded-full">Recommended</span>
          </motion.div>
          
          <SlideCard title="Pros" variant="pro" delay={0.3}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Demonstrates commitment and reliability
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Startup phases require extraordinary effort
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Builds trust with demanding leadership
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Shows ownership of projects and outcomes
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Creates foundation for future flexibility
              </li>
            </ul>
          </SlideCard>

          <SlideCard title="Cons" variant="con" delay={0.4}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Risk of diminished quality under stress
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Could lead to resentment if sustained long-term
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
                Push Through
              </span>
              <p className="text-slide-muted">
                <span className="text-slide-foreground font-medium">"I take full ownership of my projects and deliverables."</span> In a startup environment, critical phases require extraordinary commitment. I'll communicate proactively if I need support, but I'm committed to meeting deadlines and delivering results. My reliability is my reputation.
              </p>
            </div>
          </SlideCard>
        </motion.div>
      </div>
    </div>
  );
};

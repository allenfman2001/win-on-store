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

      {/* Rocket Visualization with 4 Floors */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-56 mb-6 rounded-xl bg-slide-card/40 border border-slide-card-border overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center px-4">
          {/* Rocket Container */}
          <div className="relative flex items-end gap-8">
            {/* Rocket */}
            <motion.div 
              className="relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Rocket Nose Cone */}
              <motion.div
                className="w-24 h-12 mx-auto relative"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  <motion.path
                    d="M50 0 L85 50 L15 50 Z"
                    fill="url(#rocketGradient)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  />
                  <defs>
                    <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--slide-accent-glow))" />
                      <stop offset="100%" stopColor="hsl(var(--slide-accent))" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Rocket Body with 4 Floors */}
              <motion.div 
                className="flex flex-col-reverse"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Floor 4 - Momentum Builder (Top) */}
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.3 }}
                  className="w-24 h-10 bg-gradient-to-b from-slide-accent to-slide-accent/80 flex items-center justify-center border-b border-slide-foreground/20 origin-bottom"
                >
                  <span className="text-[9px] font-bold text-slide-foreground text-center leading-tight px-1">Momentum Builder</span>
                </motion.div>

                {/* Floor 3 - Self-Management */}
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className="w-24 h-10 bg-gradient-to-b from-slide-success to-slide-success/80 flex items-center justify-center border-b border-slide-foreground/20 origin-bottom"
                >
                  <span className="text-[9px] font-bold text-slide-foreground text-center leading-tight px-1">Self-Management</span>
                </motion.div>

                {/* Floor 2 - Proactive Communication */}
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="w-24 h-10 bg-gradient-to-b from-slide-info to-slide-info/80 flex items-center justify-center border-b border-slide-foreground/20 origin-bottom"
                >
                  <span className="text-[9px] font-bold text-slide-foreground text-center leading-tight px-1">Proactive Comms</span>
                </motion.div>

                {/* Floor 1 - Deadline Commitment (Base) */}
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="w-24 h-10 bg-gradient-to-b from-slide-warning to-slide-warning/80 flex items-center justify-center rounded-b-lg origin-bottom"
                >
                  <span className="text-[9px] font-bold text-slide-foreground text-center leading-tight px-1">Deadline Commit</span>
                </motion.div>
              </motion.div>

              {/* Rocket Fins */}
              <motion.div 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex justify-between w-32"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-4 h-6 bg-slide-accent/60 skew-x-12 rounded-b" />
                <div className="w-4 h-6 bg-slide-accent/60 -skew-x-12 rounded-b" />
              </motion.div>

              {/* Rocket Flames */}
              <motion.div 
                className="absolute -bottom-10 left-1/2 -translate-x-1/2"
                animate={{ scaleY: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <motion.ellipse
                    cx="20" cy="10" rx="12" ry="18"
                    fill="url(#flameGradient)"
                  />
                  <motion.ellipse
                    cx="20" cy="15" rx="6" ry="12"
                    fill="url(#flameInnerGradient)"
                  />
                  <defs>
                    <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--slide-warning))" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="flameInnerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--slide-foreground))" />
                      <stop offset="100%" stopColor="hsl(var(--slide-warning))" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="space-y-2"
            >
              <div className="text-xs text-slide-muted font-medium mb-2">Ownership Mindset</div>
              {[
                { color: 'bg-slide-warning', label: '1. Deadline Commitment' },
                { color: 'bg-slide-info', label: '2. Proactive Communication' },
                { color: 'bg-slide-success', label: '3. Self-Management' },
                { color: 'bg-slide-accent', label: '4. Momentum Builder' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-3 h-3 rounded ${item.color}`} />
                  <span className="text-xs text-slide-muted">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stars/particles background */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ delay: 0.5 + i * 0.2, duration: 2, repeat: Infinity }}
            className="absolute w-1 h-1 rounded-full bg-slide-foreground/40"
            style={{ 
              left: `${10 + i * 12}%`, 
              top: `${15 + (i % 3) * 25}%` 
            }}
          />
        ))}
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

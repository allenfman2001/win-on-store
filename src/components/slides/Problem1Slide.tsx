import { motion } from "framer-motion";
import { SlideCard } from "../SlideCard";
import { MapPin, Target, AlertTriangle, CheckCircle } from "lucide-react";

const cities = [
  { name: "Atlanta", x: 65, y: 45 },
  { name: "Miami", x: 72, y: 78 },
  { name: "Tampa", x: 68, y: 68 },
  { name: "Raleigh", x: 75, y: 35 },
  { name: "Durham", x: 74, y: 33 },
];

export const Problem1Slide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <motion.span 
          layoutId="problem1-badge"
          className="text-sm text-slide-accent font-medium mb-2 block"
        >
          Problem 1
        </motion.span>
        <motion.h2 
          layoutId="problem1-title"
          className="text-3xl font-bold text-slide-foreground mb-3"
        >
          Store Onboarding Strategy
        </motion.h2>
        <p className="text-slide-muted max-w-3xl">
          Sign up & onboard 150 convenience/liquor stores in Atlanta, Miami, Raleigh, Durham, and Tampa within 30 days.
        </p>
      </motion.div>

      {/* Animated Map Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-32 mb-6 rounded-xl bg-slide-card/40 border border-slide-card-border overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slide-accent/5 via-transparent to-slide-accent/5" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-md">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="absolute flex flex-col items-center"
                style={{ left: `${city.x}%`, top: `${city.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <motion.div
                  animate={{ 
                    boxShadow: ['0 0 0 0 rgba(168, 85, 247, 0.4)', '0 0 0 12px rgba(168, 85, 247, 0)', '0 0 0 0 rgba(168, 85, 247, 0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="w-3 h-3 rounded-full bg-slide-accent"
                />
                <span className="text-[10px] text-slide-muted mt-1 whitespace-nowrap">{city.name}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="absolute inset-0"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <motion.path
                  d="M65 45 L72 78 L68 68"
                  stroke="url(#gradient)"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--slide-accent))" />
                    <stop offset="100%" stopColor="hsl(var(--slide-accent-glow))" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-2 left-4 flex items-center gap-2 text-xs text-slide-muted">
          <MapPin className="w-3 h-3 text-slide-accent" />
          <span>Geographic concentration strategy</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Option A - Geographic Focus (Recommended) */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Target className="w-5 h-5 text-slide-success" />
            <h3 className="text-xl font-bold text-slide-success">Geographic Focus</h3>
            <span className="px-2 py-0.5 text-xs font-medium bg-slide-success/20 text-slide-success rounded-full">Recommended</span>
          </motion.div>
          
          <SlideCard title="Pros" variant="pro" delay={0.3}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Concentrated resources build stronger local reputation
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Word-of-mouth spreads faster in tight communities
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Easier logistics and installer management
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Creates competitive FOMO in market
              </li>
            </ul>
          </SlideCard>

          <SlideCard title="Cons" variant="con" delay={0.4}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Slower market penetration across all 5 cities
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Risk of missing deadline if one market underperforms
              </li>
            </ul>
          </SlideCard>
        </div>

        {/* Option B - Parallel Blitz */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Target className="w-5 h-5 text-slide-warning" />
            <h3 className="text-xl font-bold text-slide-warning">Parallel Blitz</h3>
          </motion.div>
          
          <SlideCard title="Pros" variant="pro" delay={0.3}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Hits all 5 markets simultaneously
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Maximizes coverage within deadline
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-slide-success mt-0.5 flex-shrink-0" />
                Can pivot resources to winning markets
              </li>
            </ul>
          </SlideCard>

          <SlideCard title="Cons" variant="con" delay={0.4}>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Thin resources, lower quality relationships
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Coordination complexity across regions
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-slide-warning mt-0.5 flex-shrink-0" />
                Brand reputation risk from rushed onboarding
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
                Geographic Focus
              </span>
              <p className="text-slide-muted">
                Quality relationships over quantity. Prioritize Atlanta and Miami first (largest markets), then expand with proven playbook to Tampa, Raleigh, and Durham.
              </p>
            </div>
          </SlideCard>
        </motion.div>
      </div>
    </div>
  );
};

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

      {/* US Map Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-48 mb-6 rounded-xl bg-slide-card/40 border border-slide-card-border overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slide-accent/5 via-transparent to-slide-accent/5" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <svg viewBox="0 0 960 600" className="w-full h-full max-w-2xl" style={{ filter: 'drop-shadow(0 0 10px hsl(var(--slide-accent) / 0.3))' }}>
            {/* Simplified US Map outline */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M158 130 L220 125 L295 118 L310 115 L360 115 L400 115 L420 110 L470 105 L520 105 L565 110 L600 115 L640 120 L680 125 L720 130 L760 135 L800 140 L830 155 L850 180 L855 220 L850 260 L840 300 L820 340 L800 370 L780 400 L750 430 L720 455 L680 475 L640 490 L600 495 L560 495 L520 490 L480 480 L440 465 L400 445 L360 420 L320 390 L280 360 L240 330 L200 300 L170 270 L150 240 L140 210 L140 180 L150 150 Z"
              fill="none"
              stroke="hsl(var(--slide-accent))"
              strokeWidth="2"
            />
            {/* Southeast region highlight */}
            <motion.ellipse
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ delay: 1, duration: 0.8 }}
              cx="680"
              cy="380"
              rx="150"
              ry="100"
              fill="hsl(var(--slide-accent))"
            />
            
            {/* City markers with labels */}
            {/* Atlanta */}
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }}>
              <motion.circle
                animate={{ r: [8, 12, 8], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                cx="655"
                cy="340"
                fill="hsl(var(--slide-accent))"
              />
              <circle cx="655" cy="340" r="4" fill="hsl(var(--slide-foreground))" />
              <text x="655" y="320" textAnchor="middle" className="fill-slide-foreground text-xs font-medium">Atlanta</text>
            </motion.g>

            {/* Miami */}
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }}>
              <motion.circle
                animate={{ r: [8, 12, 8], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                cx="720"
                cy="470"
                fill="hsl(var(--slide-accent))"
              />
              <circle cx="720" cy="470" r="4" fill="hsl(var(--slide-foreground))" />
              <text x="720" y="495" textAnchor="middle" className="fill-slide-foreground text-xs font-medium">Miami</text>
            </motion.g>

            {/* Tampa */}
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }}>
              <motion.circle
                animate={{ r: [8, 12, 8], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                cx="680"
                cy="430"
                fill="hsl(var(--slide-accent))"
              />
              <circle cx="680" cy="430" r="4" fill="hsl(var(--slide-foreground))" />
              <text x="650" y="445" textAnchor="middle" className="fill-slide-foreground text-xs font-medium">Tampa</text>
            </motion.g>

            {/* Raleigh */}
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }}>
              <motion.circle
                animate={{ r: [8, 12, 8], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                cx="730"
                cy="300"
                fill="hsl(var(--slide-accent))"
              />
              <circle cx="730" cy="300" r="4" fill="hsl(var(--slide-foreground))" />
              <text x="760" y="290" textAnchor="start" className="fill-slide-foreground text-xs font-medium">Raleigh</text>
            </motion.g>

            {/* Durham */}
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }}>
              <motion.circle
                animate={{ r: [8, 12, 8], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                cx="720"
                cy="285"
                fill="hsl(var(--slide-accent))"
              />
              <circle cx="720" cy="285" r="4" fill="hsl(var(--slide-foreground))" />
              <text x="690" y="275" textAnchor="end" className="fill-slide-foreground text-xs font-medium">Durham</text>
            </motion.g>

            {/* Connecting lines between cities */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              d="M655 340 L680 430 M680 430 L720 470 M655 340 L720 285 M720 285 L730 300"
              stroke="hsl(var(--slide-accent))"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
        <div className="absolute bottom-2 left-4 flex items-center gap-2 text-xs text-slide-muted">
          <MapPin className="w-3 h-3 text-slide-accent" />
          <span>Southeast US Focus: 5 Target Cities</span>
        </div>
        <div className="absolute bottom-2 right-4 text-xs text-slide-accent font-medium">
          150 Stores Target
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

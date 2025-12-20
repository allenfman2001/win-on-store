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

// Animated Handshake Component
const AnimatedHandshake = () => {
  return (
    <motion.div 
      className="relative w-48 h-32 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {/* Left hand */}
      <motion.div
        initial={{ x: -60, rotate: -15 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="absolute left-0 top-1/2 -translate-y-1/2"
      >
        <svg width="80" height="60" viewBox="0 0 80 60" className="drop-shadow-lg">
          {/* Arm */}
          <motion.rect
            x="0" y="22" width="35" height="16" rx="4"
            fill="hsl(var(--slide-accent))"
            opacity="0.8"
          />
          {/* Palm */}
          <motion.ellipse
            cx="45" cy="30" rx="18" ry="14"
            fill="hsl(var(--slide-accent))"
          />
          {/* Fingers */}
          <motion.rect x="58" y="18" width="18" height="6" rx="3" fill="hsl(var(--slide-accent))" />
          <motion.rect x="60" y="26" width="16" height="5" rx="2.5" fill="hsl(var(--slide-accent))" />
          <motion.rect x="58" y="33" width="14" height="5" rx="2.5" fill="hsl(var(--slide-accent))" />
          <motion.rect x="54" y="40" width="10" height="4" rx="2" fill="hsl(var(--slide-accent))" />
        </svg>
      </motion.div>

      {/* Right hand */}
      <motion.div
        initial={{ x: 60, rotate: 15 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2"
        style={{ transform: 'scaleX(-1) translateY(-50%)' }}
      >
        <svg width="80" height="60" viewBox="0 0 80 60" className="drop-shadow-lg">
          {/* Arm */}
          <motion.rect
            x="0" y="22" width="35" height="16" rx="4"
            fill="hsl(var(--slide-success))"
            opacity="0.8"
          />
          {/* Palm */}
          <motion.ellipse
            cx="45" cy="30" rx="18" ry="14"
            fill="hsl(var(--slide-success))"
          />
          {/* Fingers */}
          <motion.rect x="58" y="18" width="18" height="6" rx="3" fill="hsl(var(--slide-success))" />
          <motion.rect x="60" y="26" width="16" height="5" rx="2.5" fill="hsl(var(--slide-success))" />
          <motion.rect x="58" y="33" width="14" height="5" rx="2.5" fill="hsl(var(--slide-success))" />
          <motion.rect x="54" y="40" width="10" height="4" rx="2" fill="hsl(var(--slide-success))" />
        </svg>
      </motion.div>

      {/* Shake effect - pulsing glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slide-accent/30"
      />
      
      {/* Shake motion indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: [0, -3, 0, 3, 0], opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.4, repeat: Infinity, repeatDelay: 1 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-slide-foreground">
          <motion.path
            d="M12 3 L12 7 M12 17 L12 21 M3 12 L7 12 M17 12 L21 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Success sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0], 
            opacity: [0, 1, 0],
            x: Math.cos(i * 60 * Math.PI / 180) * 40,
            y: Math.sin(i * 60 * Math.PI / 180) * 30,
          }}
          transition={{ 
            delay: 1.5 + i * 0.1, 
            duration: 0.8, 
            repeat: Infinity,
            repeatDelay: 2
          }}
          className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-slide-accent"
        />
      ))}
    </motion.div>
  );
};

export const Problem3DetailSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4"
      >
        <span className="text-sm text-slide-accent font-medium mb-2 block">Problem 3 - Resolution Protocol</span>
        <h2 className="text-3xl font-bold text-slide-foreground mb-3">
          On-Site Conflict Resolution
        </h2>
      </motion.div>

      {/* Animated Handshake */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-4 py-4 rounded-xl bg-slide-card/40 border border-slide-card-border"
      >
        <AnimatedHandshake />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center text-xs text-slide-muted mt-2"
        >
          Diplomatic Resolution Builds Lasting Partnerships
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.15 }}
            className="p-4 rounded-xl bg-slide-card/60 border border-slide-card-border hover:border-slide-accent/30 transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg bg-slide-card border border-slide-card-border ${step.color}`}>
                <step.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slide-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-slide-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-4 p-4 rounded-xl bg-destructive/10 border border-destructive/30"
      >
        <h4 className="font-semibold text-slide-foreground mb-1 text-sm">Key Principle</h4>
        <p className="text-xs text-slide-muted">
          Never force an installation. A hostile store owner will not deliver good campaign results for the advertiser. 
          The relationship and reputation are more valuable than one installation.
        </p>
      </motion.div>
    </div>
  );
};

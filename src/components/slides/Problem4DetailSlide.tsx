import { motion } from "framer-motion";
import { MessageSquare, Calendar, Zap, Heart } from "lucide-react";

export const Problem4DetailSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="text-sm text-slide-accent font-medium mb-2 block">Problem 4 - Action Framework</span>
        <h2 className="text-3xl font-bold text-slide-foreground mb-3">
          Balancing Personal & Professional
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl bg-slide-card/60 border border-slide-card-border"
        >
          <h3 className="text-xl font-semibold text-slide-foreground mb-4 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-slide-accent" />
            Communication Script
          </h3>
          <div className="p-4 rounded-lg bg-slide/50 border border-slide-card-border">
            <p className="text-sm text-slide-muted italic leading-relaxed">
              "I'm dealing with a personal matter that requires my attention. I want to be transparent because I respect this team. 
              I've prepared [handoffs/coverage] and will be fully available by [date]. This will help me return at 100% capacity."
            </p>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-slide-muted">
              <span className="w-2 h-2 rounded-full bg-slide-success" />
              Be specific about timeline
            </div>
            <div className="flex items-center gap-2 text-sm text-slide-muted">
              <span className="w-2 h-2 rounded-full bg-slide-success" />
              Show preparation & responsibility
            </div>
            <div className="flex items-center gap-2 text-sm text-slide-muted">
              <span className="w-2 h-2 rounded-full bg-slide-success" />
              Focus on return, not absence
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="p-5 rounded-xl bg-slide-card/60 border border-slide-card-border">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-slide-info" />
              <span className="font-medium text-slide-foreground">Before You Leave</span>
            </div>
            <ul className="text-sm text-slide-muted space-y-2">
              <li>• Document all active projects status</li>
              <li>• Brief a colleague on urgent items</li>
              <li>• Set clear OOO response</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slide-card/60 border border-slide-card-border">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-slide-warning" />
              <span className="font-medium text-slide-foreground">When You Return</span>
            </div>
            <ul className="text-sm text-slide-muted space-y-2">
              <li>• Quick sync with manager first</li>
              <li>• Catch up on priorities only</li>
              <li>• Deliver quick win to rebuild momentum</li>
            </ul>
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
          <Heart className="w-8 h-8 text-slide-accent" />
          <div>
            <h4 className="font-semibold text-slide-foreground">The Bottom Line</h4>
            <p className="text-sm text-slide-muted">
              A demanding boss with high expectations will respect honesty and self-awareness more than silent struggle. 
              Your long-term value to OnStore depends on your wellbeing.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

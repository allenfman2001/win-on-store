import { motion } from "framer-motion";
import { MapPin, Users, Clock, Target } from "lucide-react";

const cities = [
  { name: "Atlanta", priority: 1, stores: 40, rationale: "Largest market, Boxi.co presence" },
  { name: "Miami", priority: 2, stores: 35, rationale: "High density, tourism traffic" },
  { name: "Tampa", priority: 3, stores: 30, rationale: "Growing market, less competition" },
  { name: "Raleigh", priority: 4, stores: 25, rationale: "Tech corridor, younger demo" },
  { name: "Durham", priority: 5, stores: 20, rationale: "Academic area, niche audience" },
];

export const Problem1DetailSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="text-sm text-slide-accent font-medium mb-2 block">Problem 1 - Execution Plan</span>
        <h2 className="text-3xl font-bold text-slide-foreground mb-3">
          30-Day Action Plan
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 p-6 rounded-xl bg-slide-card/60 border border-slide-card-border"
        >
          <h3 className="text-lg font-semibold text-slide-foreground mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-slide-accent" />
            City Prioritization Matrix
          </h3>
          <div className="space-y-3">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-lg bg-slide/50 border border-slide-card-border"
              >
                <span className="w-8 h-8 rounded-full bg-slide-accent/20 text-slide-accent flex items-center justify-center text-sm font-bold">
                  {city.priority}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slide-foreground">{city.name}</span>
                    <span className="text-sm text-slide-muted">{city.stores} stores</span>
                  </div>
                  <p className="text-xs text-slide-muted mt-0.5">{city.rationale}</p>
                </div>
                <div className="w-24 h-2 bg-slide-card-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(city.stores / 40) * 100}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-slide-accent to-slide-accent-glow"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="p-5 rounded-xl bg-slide-card/60 border border-slide-card-border">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-slide-warning" />
              <span className="font-medium text-slide-foreground">Timeline</span>
            </div>
            <div className="space-y-2 text-sm text-slide-muted">
              <p><span className="text-slide-foreground">Week 1-2:</span> Atlanta & Miami</p>
              <p><span className="text-slide-foreground">Week 3:</span> Tampa focus</p>
              <p><span className="text-slide-foreground">Week 4:</span> Raleigh & Durham</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slide-card/60 border border-slide-card-border">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-slide-info" />
              <span className="font-medium text-slide-foreground">Team Structure</span>
            </div>
            <div className="space-y-2 text-sm text-slide-muted">
              <p>2-person sales teams per city</p>
              <p>1 regional coordinator</p>
              <p>Dedicated onboarding specialist</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

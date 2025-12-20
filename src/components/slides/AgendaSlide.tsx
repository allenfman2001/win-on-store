import { motion } from "framer-motion";
import { Store, Calendar, AlertTriangle, Heart } from "lucide-react";

const agendaItems = [
  {
    icon: Store,
    title: "Store Onboarding Strategy",
    description: "Prioritizing 150 stores across 5 cities in 30 days",
  },
  {
    icon: Calendar,
    title: "Campaign Expiration Dilemma",
    description: "Extend vs. resell: maximizing 30 media assets",
  },
  {
    icon: AlertTriangle,
    title: "Installation Conflict Resolution",
    description: "Handling client disputes professionally",
  },
  {
    icon: Heart,
    title: "Work-Life Balance Decision",
    description: "Managing personal stress as a core team member",
  },
];

export const AgendaSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-slide-foreground mb-2">Agenda</h2>
        <p className="text-slide-muted">Four critical challenges, strategic solutions</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {agendaItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="group p-6 rounded-xl bg-slide-card/40 border border-slide-card-border hover:border-slide-accent/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-slide-accent/10 text-slide-accent group-hover:bg-slide-accent group-hover:text-primary-foreground transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slide-muted mb-1 block">
                  Problem {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-slide-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slide-muted">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

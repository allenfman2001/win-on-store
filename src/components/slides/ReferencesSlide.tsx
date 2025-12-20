import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileText, Globe } from "lucide-react";

const references = [
  {
    category: "Company Documents",
    icon: FileText,
    sources: [
      { title: "Boxi.co Business Strategy 2024", description: "Internal strategic planning documents" },
      { title: "Campaign Performance Reports", description: "Historical campaign analytics and metrics" },
      { title: "Customer Retention Analysis", description: "93% retention rate study" },
    ]
  },
  {
    category: "Market Research",
    icon: Globe,
    sources: [
      { title: "Nordic Market Analysis", description: "Geographic expansion feasibility study" },
      { title: "Competitor Landscape Report", description: "Industry benchmarking and positioning" },
      { title: "Customer Segmentation Data", description: "Target audience insights" },
    ]
  },
  {
    category: "Industry Publications",
    icon: BookOpen,
    sources: [
      { title: "SaaS Growth Strategies", description: "Best practices for subscription businesses" },
      { title: "B2B Marketing Trends 2024", description: "Current marketing landscape analysis" },
      { title: "Customer Lifetime Value Research", description: "CLV optimization frameworks" },
    ]
  },
];

export const ReferencesSlide = () => {
  return (
    <div className="h-full flex flex-col px-12 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <BookOpen className="w-8 h-8 text-slide-accent" />
          </motion.div>
          <h1 className="text-4xl font-bold text-slide-foreground">References & Sources</h1>
        </div>
        <p className="text-slide-muted text-lg">Research and documentation supporting this analysis</p>
      </motion.div>

      {/* References Grid */}
      <div className="flex-1 grid grid-cols-3 gap-6">
        {references.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.15 }}
            className="bg-slide-card/50 backdrop-blur-sm rounded-xl p-5 border border-slide-border/30"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slide-border/20">
              <div className="p-2 rounded-lg bg-slide-accent/10">
                <category.icon className="w-5 h-5 text-slide-accent" />
              </div>
              <h3 className="font-semibold text-slide-foreground text-lg">{category.category}</h3>
            </div>

            {/* Sources List */}
            <div className="space-y-3">
              {category.sources.map((source, sourceIndex) => (
                <motion.div
                  key={source.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + categoryIndex * 0.15 + sourceIndex * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-2">
                    <ExternalLink className="w-3.5 h-3.5 text-slide-accent/60 mt-1.5 flex-shrink-0 group-hover:text-slide-accent transition-colors" />
                    <div>
                      <p className="text-slide-foreground font-medium text-sm leading-tight group-hover:text-slide-accent transition-colors">
                        {source.title}
                      </p>
                      <p className="text-slide-muted text-xs mt-0.5">{source.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-6 text-center"
      >
        <p className="text-slide-muted text-sm italic">
          All recommendations are based on comprehensive analysis of available data and industry best practices.
        </p>
      </motion.div>
    </div>
  );
};

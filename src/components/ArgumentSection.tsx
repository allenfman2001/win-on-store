import { motion } from "framer-motion";
import { SlideCard } from "./SlideCard";

interface Argument {
  point: string;
  details: string[];
}

interface ArgumentSectionProps {
  optionA: {
    title: string;
    arguments: Argument[];
  };
  optionB: {
    title: string;
    arguments: Argument[];
  };
  recommendation: {
    choice: "A" | "B";
    reasoning: string;
  };
  showRecommendation?: boolean;
}

export const ArgumentSection = ({
  optionA,
  optionB,
  recommendation,
  showRecommendation = true,
}: ArgumentSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      {/* Option A */}
      <div className="space-y-4">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-slide-info mb-4"
        >
          {optionA.title}
        </motion.h3>
        {optionA.arguments.map((arg, index) => (
          <SlideCard key={index} title={arg.point} variant="pro" delay={0.3 + index * 0.1}>
            <ul className="space-y-1.5">
              {arg.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-slide-success mt-0.5">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </SlideCard>
        ))}
      </div>

      {/* Option B */}
      <div className="space-y-4">
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-slide-warning mb-4"
        >
          {optionB.title}
        </motion.h3>
        {optionB.arguments.map((arg, index) => (
          <SlideCard key={index} title={arg.point} variant="con" delay={0.3 + index * 0.1}>
            <ul className="space-y-1.5">
              {arg.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-slide-warning mt-0.5">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </SlideCard>
        ))}
      </div>

      {/* Recommendation */}
      {showRecommendation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="lg:col-span-2 mt-4"
        >
          <SlideCard title="Recommendation" variant="recommendation" delay={0}>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-slide-accent text-primary-foreground text-sm font-medium">
                {recommendation.choice === "A" ? optionA.title : optionB.title}
              </span>
              <p>{recommendation.reasoning}</p>
            </div>
          </SlideCard>
        </motion.div>
      )}
    </div>
  );
};

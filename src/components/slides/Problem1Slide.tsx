import { motion } from "framer-motion";
import { ArgumentSection } from "../ArgumentSection";

export const Problem1Slide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="text-sm text-slide-accent font-medium mb-2 block">Problem 1</span>
        <h2 className="text-3xl font-bold text-slide-foreground mb-3">
          Store Onboarding Strategy
        </h2>
        <p className="text-slide-muted max-w-3xl">
          Sign up & onboard 150 convenience/liquor stores in Atlanta, Miami, Raleigh, Durham, and Tampa within 30 days.
        </p>
      </motion.div>

      <ArgumentSection
        optionA={{
          title: "Geographic Focus",
          arguments: [
            {
              point: "Concentrated Market Entry",
              details: [
                "Focus 100% resources on 2-3 cities first",
                "Build strong local reputation before expanding",
                "Easier logistics and installer management",
              ],
            },
            {
              point: "Relationship Leverage",
              details: [
                "Word-of-mouth spreads faster locally",
                "One satisfied store owner refers neighbors",
                "Creates competitive FOMO in market",
              ],
            },
          ],
        }}
        optionB={{
          title: "Parallel Blitz",
          arguments: [
            {
              point: "Simultaneous Market Entry",
              details: [
                "Hit all 5 markets at once with smaller teams",
                "Maximize market coverage within deadline",
                "Risk: thin resources, lower quality",
              ],
            },
            {
              point: "Volume Strategy",
              details: [
                "30 stores per city = manageable targets",
                "Can pivot resources to winning markets",
                "Risk: coordination complexity",
              ],
            },
          ],
        }}
        recommendation={{
          choice: "A",
          reasoning:
            "Geographic focus allows for quality relationships and sustainable growth. Prioritize Atlanta and Miami first (largest markets), then expand with proven playbook.",
        }}
      />
    </div>
  );
};

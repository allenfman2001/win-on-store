import { motion } from "framer-motion";
import { ArgumentSection } from "../ArgumentSection";

export const Problem4Slide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="text-sm text-slide-accent font-medium mb-2 block">Problem 4</span>
        <h2 className="text-3xl font-bold text-slide-foreground mb-3">
          Work-Life Balance Decision
        </h2>
        <p className="text-slide-muted max-w-3xl">
          Personal stress arises while you're expected to be consistent and reliable for a demanding boss and growing company.
        </p>
      </motion.div>

      <ArgumentSection
        optionA={{
          title: "Take a Pause",
          arguments: [
            {
              point: "Sustainable Performance",
              details: [
                "Mental health enables long-term success",
                "Burnout leads to poor decisions",
                "Brief reset prevents longer absence later",
              ],
            },
            {
              point: "Human Authenticity",
              details: [
                "Transparent communication builds trust",
                "Leaders who model self-care inspire teams",
                "Quality > quantity in critical moments",
              ],
            },
          ],
        }}
        optionB={{
          title: "Push Through",
          arguments: [
            {
              point: "Demonstrate Commitment",
              details: [
                "Startup phases require extra effort",
                "Builds reputation as reliable team member",
                "Risk: quality suffers under stress",
              ],
            },
            {
              point: "Momentum Matters",
              details: [
                "Critical period for company growth",
                "Others depend on your contribution",
                "Risk: may create resentment long-term",
              ],
            },
          ],
        }}
        recommendation={{
          choice: "A",
          reasoning:
            "Communicate honestly with leadership. Take necessary time (even 1-2 days). Return focused and recharged. Long-term value > short-term optics.",
        }}
      />
    </div>
  );
};

import { motion } from "framer-motion";
import { ArgumentSection } from "../ArgumentSection";

export const Problem2Slide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="text-sm text-slide-accent font-medium mb-2 block">Problem 2</span>
        <h2 className="text-3xl font-bold text-slide-foreground mb-3">
          Campaign Expiration Dilemma
        </h2>
        <p className="text-slide-muted max-w-3xl">
          Client's campaign ends in 30 days with 30 media assets available. Extend the current campaign or resell to new clients?
        </p>
      </motion.div>

      <ArgumentSection
        optionA={{
          title: "Extend Current Campaign",
          arguments: [
            {
              point: "Retain Existing Revenue",
              details: [
                "No sales cycle needed - faster revenue",
                "Client already understands product value",
                "Opportunity to upsell additional locations",
              ],
            },
            {
              point: "Relationship Preservation",
              details: [
                "Demonstrates commitment to client success",
                "Opens door for long-term contract",
                "Referral potential from satisfied client",
              ],
            },
          ],
        }}
        optionB={{
          title: "Resell to New Clients",
          arguments: [
            {
              point: "Higher Revenue Potential",
              details: [
                "New clients may pay premium rates",
                "Expands client portfolio diversity",
                "Tests market demand in new segments",
              ],
            },
            {
              point: "Strategic Positioning",
              details: [
                "Avoid dependency on single client",
                "Fresh creative for new campaigns",
                "Risk: 30-day sales cycle is tight",
              ],
            },
          ],
        }}
        recommendation={{
          choice: "A",
          reasoning:
            "Pursue extension FIRST (week 1-2). If declined, immediately pivot to resale with existing prospect pipeline. Minimizes idle inventory risk.",
        }}
      />
    </div>
  );
};

import { motion } from "framer-motion";
import { ArgumentSection } from "../ArgumentSection";

export const Problem3Slide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-10 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="text-sm text-slide-accent font-medium mb-2 block">Problem 3</span>
        <h2 className="text-3xl font-bold text-slide-foreground mb-3">
          Installation Conflict
        </h2>
        <p className="text-slide-muted max-w-3xl">
          Business owner stops installation, claiming they never agreed. Graphics are printed, installer is on-site and ready.
        </p>
      </motion.div>

      <ArgumentSection
        optionA={{
          title: "Proceed Diplomatically",
          arguments: [
            {
              point: "De-escalation First",
              details: [
                "Step back, listen to owner's concerns",
                "Review signed agreements on-site",
                "Offer to reschedule if tension is high",
              ],
            },
            {
              point: "Find Common Ground",
              details: [
                "Emphasize mutual benefit of partnership",
                "Offer trial period or modified terms",
                "Document everything for protection",
              ],
            },
          ],
        }}
        optionB={{
          title: "Enforce Contract",
          arguments: [
            {
              point: "Protect Company Position",
              details: [
                "Reference signed documentation",
                "Explain sunk costs professionally",
                "Risk: damages relationship permanently",
              ],
            },
            {
              point: "Maintain Standards",
              details: [
                "Sets precedent for future disputes",
                "Installer time is billable either way",
                "Risk: negative word-of-mouth in market",
              ],
            },
          ],
        }}
        recommendation={{
          choice: "A",
          reasoning:
            "Relationships > short-term wins. De-escalate, offer to return another day. If they truly didn't agree, identify the communication gap to prevent future issues.",
        }}
      />
    </div>
  );
};

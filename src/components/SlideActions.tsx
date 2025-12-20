import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const SlideActions = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-6 left-8 z-50"
    >
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="bg-slide-card/80 backdrop-blur-sm border-slide-border/50 text-slide-foreground hover:bg-slide-card hover:border-slide-accent/50 gap-2"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Check className="w-4 h-4 text-slide-success" />
            </motion.div>
          ) : (
            <motion.div
              key="link"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Link className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
        {copied ? "Copied!" : "Share"}
      </Button>
    </motion.div>
  );
};

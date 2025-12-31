import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export const AlertBanner = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-alert-danger via-alert-warning to-alert-danger bg-[length:200%_100%] animate-water-flow"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 py-2 text-primary-foreground">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <AlertTriangle className="h-4 w-4" />
          </motion.div>
          <p className="text-sm font-medium">
            🚨 Flood Alert Active – Follow Safe Routes for Evacuation
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          >
            <AlertTriangle className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

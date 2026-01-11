"use client";

import { motion } from "framer-motion";
import GradientButton from "../GradientButton";
import confetti from "canvas-confetti";
import { RotateCcw } from "lucide-react";
import { useEffect } from "react";

export default function FinalMessageScreen({ onReplay }) {

  // soft confetti once
  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      startVelocity: 25,
      gravity: 0.6,
      scalar: 0.8,
      origin: { y: 0.5 },
    });
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center px-4 overflow-hidden text-center">

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full rounded-2xl
        bg-gradient-to-br from-purple-700/80 via-fuchsia-700/80 to-pink-600/80
        backdrop-blur-xl shadow-2xl p-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-lg font-semibold mb-3"
        >
          Lots of love for you ❤️
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/90 text-sm leading-relaxed mb-6"
        >
          Once again, Happy Birthday.  
          I hope this little surprise made you smile  
          and reminded you how special you are.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <GradientButton onClick={onReplay}>
            <RotateCcw size={18} />
            Replay
          </GradientButton>
        </motion.div>
      </motion.div>
    </div>
  );
}

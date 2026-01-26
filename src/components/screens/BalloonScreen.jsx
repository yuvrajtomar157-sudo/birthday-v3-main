"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "../GradientButton";
import { ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function BalloonScreen({ onNext }) {
  const balloons = [
    { id: 1, x: "15%", text: "You" },
    { id: 2, x: "35%", text: "are" },
    { id: 3, x: "55%", text: "truly" },
    { id: 4, x: "75%", text: "Beautifull!!" },
  ];

  const [popped, setPopped] = useState([]);

  const popBalloon = (id) => {
    if (popped.includes(id)) return;

    confetti({
      particleCount: 25,
      spread: 45,
      scalar: 0.6,
      origin: { y: 0.45 },
    });

    setPopped((prev) => [...prev, id]);
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* TITLE – disappears when all popped */}
      {popped.length < 4 && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-lg mb-6"
        >
          Pop all 4 balloons
        </motion.p>
      )}

      {/* BALLOONS */}
      {balloons.map((b, i) => (
        <AnimatePresence key={b.id}>
          {!popped.includes(b.id) && (
            <motion.img
              src="/images/balloon.png"
              alt="balloon"
              onClick={() => popBalloon(b.id)}
              className="absolute w-20 cursor-pointer select-none"
              style={{ left: b.x, top: "140px" }}
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                y: [0, -18, -8, -22, 0],
                rotate: [-2, 1, -1, 2, 0],
              }}
              transition={{
                duration: 6 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              exit={{
                scale: 0.2,
                opacity: 0,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 0.85 }}
              draggable={false}
            />
          )}
        </AnimatePresence>
      ))}

      {/* TEXT AFTER POP */}
      <div className="absolute top-[260px] flex gap-8 text-pink-400 font-semibold text-lg">
        {balloons.map((b) =>
          popped.includes(b.id) ? (
            <span key={b.id}>{b.text}</span>
          ) : (
            <span key={b.id}>&nbsp;</span>
          )
        )}
      </div>

      {/* NEXT BUTTON */}
      {popped.length === 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-72"
        >
          <GradientButton onClick={onNext}>
            Next <ArrowRight size={18} />
          </GradientButton>
        </motion.div>
      )}
    </div>
  );
}

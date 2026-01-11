"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Confetti from "react-confetti";
import GradientButton from "../GradientButton";
import { ArrowRight, Flame } from "lucide-react";

export default function CakeScreen({ onNext }) {
  const [lit, setLit] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const lightCandle = () => {
    if (lit) return;

    setLit(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 1800); // perfect burst duration
  };

  return (
    <div className="px-4 md:px-6 py-10 text-center relative overflow-hidden">

      {/* CONFETTI */}
      {showConfetti && (
        <Confetti
          numberOfPieces={260}
          gravity={0.35}
          recycle={false}
        />
      )}

      {/* TITLE AFTER CANDLE */}
      {lit && (
    <motion.div
      className="absolute top-20 left-0 w-full text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
>
  Happy Birthday, Simran!
</motion.div>

      )}

      <div className="relative flex flex-col items-center justify-center min-h-screen gap-8">

        <Cake lit={lit} />

        <AnimatePresence mode="wait">
          {!lit ? (
            <motion.div
              key="light"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <GradientButton onClick={lightCandle}>
                <Flame size={20} />
                Light the Candle
              </GradientButton>
            </motion.div>
          ) : (
            <motion.div
              key="next"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <GradientButton onClick={onNext}>
                Next <ArrowRight size={20} />
              </GradientButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Cake({ lit }) {
  return (
    <div className="cake">
      <div className="plate" />
      <div className="layer layer-bottom" />
      <div className="layer layer-middle" />
      <div className="layer layer-top" />
      <div className="icing" />
      <div className="drip drip1" />
      <div className="drip drip2" />
      <div className="drip drip3" />
      <div className="candle">
        {lit && (
          <motion.div
            className="flame"
            initial={{ opacity: 0, scaleY: 0.3, y: 10 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </div>
    </div>
  );
}

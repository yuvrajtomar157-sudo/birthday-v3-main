"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "../GradientButton";
import { ArrowRight, Flame } from "lucide-react";
import confetti from "canvas-confetti";

export default function CakeScreen({ onNext }) {
  const [lit, setLit] = useState(false);

  const lightCandle = () => {
    if (lit) return;
    setLit(true);

    // confetti burst
    setTimeout(() => {
      confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#ff4d8d", "#ffd166", "#c77dff", "#4cc9f0"],
      });
    }, 400);
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* TITLE AFTER CANDLE */}
      {lit && (
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-20 text-4xl md:text-5xl font-bold
          text-transparent bg-clip-text
          bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400"
        >
          Happy Birthday Simran 🎉
        </motion.h2>
      )}

      {/* CAKE */}
      <div className="relative mt-20">
        <Cake lit={lit} />

        {/* SPARKLES */}
        {lit &&
          [...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-2 h-2 bg-pink-400 rounded-full"
              style={{
                top: `${Math.random() * 120}px`,
                left: `${Math.random() * 200}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
      </div>

      {/* BUTTON */}
      <div className="mt-16">
        {!lit ? (
          <GradientButton onClick={lightCandle}>
            <Flame size={20} />
            Light the Candle
          </GradientButton>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <GradientButton onClick={onNext}>
              Next <ArrowRight size={18} />
            </GradientButton>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ---------------- CAKE ---------------- */

function Cake({ lit }) {
  return (
    <div className="cake relative">
      <div className="plate"></div>

      <div className="layer layer-bottom"></div>
      <div className="layer layer-middle"></div>
      <div className="layer layer-top"></div>

      <div className="icing"></div>
      <div className="drip drip1"></div>
      <div className="drip drip2"></div>
      <div className="drip drip3"></div>

      {/* TOPPER */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-pink-400 font-semibold">
        🎀 For You
      </div>

      {/* CANDLE */}
      <div className="candle">
        {lit && (
          <motion.div
            className="flame"
            initial={{ opacity: 0, scaleY: 0.2 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </div>
    </div>
  );
}

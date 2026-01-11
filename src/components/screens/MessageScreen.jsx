"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GradientButton from "../GradientButton";
import { ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

const fullMessage = `
Happy Birthday, Simran! 💖

You deserve all the happiness, love, and smiles in the world today and always.
You have a special way of making everything around you brighter — your smile,
your kindness, and the warmth you bring into people’s lives.

I hope your day is filled with laughter, sweet surprises, and moments that
make your heart feel full. You truly are one of a kind.

Stay amazing. Always. ✨
`;

export default function MessageScreen({ onNext }) {
  const [opened, setOpened] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  /* CONFETTI FUNCTION */
  const fireConfetti = () => {
    confetti({
      particleCount: 140,
      spread: 80,
      startVelocity: 30,
      origin: { y: 0.6 },
    });
  };

  /* TYPEWRITER EFFECT */
  useEffect(() => {
    if (!opened) return;

    if (index < fullMessage.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullMessage[index]);
        setIndex(i => i + 1);
      }, 25);

      return () => clearTimeout(timeout);
    }
  }, [opened, index]);

  return (
    <div className="px-4 py-10 text-center flex flex-col items-center">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text
        bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 mb-8"
      >
        A Special Message
      </motion.h2>

      {/* CARD WRAPPER */}
      <div className="relative w-full max-w-sm [perspective:1200px]">

        {/* CLOSED CARD */}
        {!opened && (
          <motion.div
            whileHover={{ scale: 1.04 }}
            onClick={() => {
              setOpened(true);
              fireConfetti(); // 🎉 CONFETTI ON OPEN
            }}
            className="cursor-pointer rounded-2xl border-4 border-pink-300
            bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600
            shadow-2xl p-5"
          >
            <img
              src="/images/message-card.png"
              alt="Birthday Card"
              className="rounded-xl mx-auto mb-4"
            />
            <p className="text-white text-lg font-medium">
              Tap to Open 💌
            </p>
          </motion.div>
        )}

        {/* OPENED CARD */}
        {opened && (
          <motion.div
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-2xl bg-gradient-to-br
            from-pink-100 via-pink-50 to-white
            p-6 text-left
            shadow-[0_0_35px_rgba(236,72,153,0.6)]
            animate-[pulse_2.5s_ease-in-out_infinite]"
          >
            <p
              className="text-[#301733] text-base leading-relaxed
              max-h-[320px] overflow-y-auto whitespace-pre-line"
            >
              {typedText}
            </p>

            {typedText.length === fullMessage.length && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex justify-center"
              >
                <GradientButton onClick={onNext}>
                  Next <ArrowRight size={18} />
                </GradientButton>
              </motion.div>
            )}
          </motion.div>
        )}

      </div>
    </div>
  );
}

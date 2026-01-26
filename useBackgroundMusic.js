// src/hooks/useBackgroundMusic.js
"use client";
import { useRef } from "react";

export default function useBackgroundMusic() {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/bgm.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.25; // VERY IMPORTANT
    }
    audioRef.current.play().catch(() => {});
  };

  const stopMusic = () => {
    audioRef.current?.pause();
  };

  return { playMusic, stopMusic };
}

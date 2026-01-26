"use client";

import GradientButton from "../GradientButton";

export default function TeasingNoteScreen({ onNext }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-tr from-black via-rose-950 to-black">
      
      {/* Heading */}
      <h1 className="text-pink-400 text-3xl font-semibold mb-6">
        One last thing 😌
      </h1>

      {/* Teasing Message Box */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md text-pink-200 text-lg leading-relaxed shadow-lg">
        <p>
          Aakhari me bas itna hi bolunga ki, agar isme koi cheez achhi nahi lagi ho
          to bata dena ya daant lena 😅
          <br /><br />
          bas ek chooti si request hai ki- 1500 wali juti 👟 aur mobile 📱 se marna mat 😂🙏
          <br /><br />
          Bakii.. Once again — <strong>HAPPY BIRTHDAY DEVI JIII</strong> 🎂✨💖
        </p>
      </div>

      {/* Button */}
      <div className="mt-8">
        <GradientButton onClick={onNext}>
          Okay, now smile and enjoy your day.😏
        </GradientButton>
      </div>
    </div>
  );
}

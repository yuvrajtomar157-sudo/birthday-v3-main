import GradientButton from "../GradientButton";


export default function FinalMessageScreen({ onNext }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-[#1a001a] to-black">

      <h2 className="text-pink-300 text-xl font-semibold">
        Lots of Wishes for you ❤️
      </h2>

      <p className="mt-4 text-sm text-pink-400 max-w-md leading-relaxed">
        Once again, Happy Birthday.
        <br />
        I hope this little surprise made you smile
        <br />
        and reminded you how special you are.
      </p>

      {/* 📝 SPACE FOR YOUR CUSTOM MESSAGE */}
      <div className="mt-6 bg-white/10 backdrop-blur-md rounded-xl px-5 py-4 max-w-md w-full">
        <p className="text-sm text-pink-200 leading-relaxed">
          {/* 
            👇 YAHAN TUM APNA MESSAGE LIKHOGE 
            (teasing / sweet / jo bhi man ho)
          */}
        </p>
      </div>

      {/* ❌ NO replay button here */}

      <div className="mt-7">
        <GradientButton onClick={onNext}>
          One last thing 👀
        </GradientButton>
      </div>

    </div>
  );
}

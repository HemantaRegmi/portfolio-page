import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import heroBg from "figma:asset/e9861ab0dcbac744e06dc9432cc4a9004bcecfee.png";

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={heroBg} 
          alt="Mountain valley road at sunset" 
          className="w-full h-full object-cover object-center" 
          style={{ imageRendering: 'crisp-edges' }}
        />
        
        {/* Static gradient fade at bottom to blend into page */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
        
        {/* Subtle blue glow orbs */}
        <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-[#3B9DD8]/20 to-[#4DA8DA]/10 backdrop-blur-sm border border-white/5 shadow-[0_8px_32px_rgba(59,157,216,0.15)] animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-[25%] right-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-[#4DA8DA]/15 to-[#3B9DD8]/10 backdrop-blur-sm border border-white/5 shadow-[0_8px_32px_rgba(77,168,218,0.15)] animate-[float_8s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-[30%] left-[20%] w-20 h-20 rounded-full bg-gradient-to-br from-[#2d7bb8]/20 to-cyan-400/10 backdrop-blur-sm border border-white/5 shadow-[0_8px_32px_rgba(45,123,184,0.15)] animate-[float_7s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white/95 tracking-tight leading-tight mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] px-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Passionate About Delivering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA8DA] via-[#3B9DD8] to-[#2d7bb8]">
            Solutions
          </span>{" "}
          End-to-End
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 px-4"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 text-white/80 font-bold text-sm md:text-base flex-wrap">
            <span className="text-white/90">Full-Stack Developer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA]"></span>
            <span className="text-white/90">Scalable Systems</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA]"></span>
            <span className="text-white/90">Cloud Infrastructure</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA]"></span>
            <span className="text-white/90">Performance-Driven</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#4DA8DA] hover:bg-[#3B9DD8] text-white font-extrabold text-lg shadow-[0_8px_32px_rgba(77,168,218,0.3)] hover:shadow-[0_12px_40px_rgba(77,168,218,0.5)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            View My Work
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-white/75 hover:text-[#4DA8DA] transition-colors z-10"
        onClick={scrollToAbout}
      >
        <span className="text-sm font-bold tracking-widest uppercase bg-[rgba(255,255,255,0.02)] px-3 py-1.5 rounded-full backdrop-blur-lg border border-[rgba(255,255,255,0.1)] shadow-[0_4px_12px_rgba(0,0,0,0.3)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="bg-[rgba(255,255,255,0.02)] backdrop-blur-lg p-2.5 rounded-full border border-[rgba(255,255,255,0.1)] shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
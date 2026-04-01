import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const phrases = ["purpose and precision", "passion and empathy", "creativity and impact", "scalable design systems"];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let timerID = null;

    const typeCycle = () => {
      setIsTyping(true);
      const fullText = phrases[currentPhraseIndex];

      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      setDisplayText(currentText);

      let typingSpeed = isDeleting ? 40 : 100;

      if (!isDeleting && currentText === fullText) {
        typingSpeed = 2000;
        isDeleting = true;
        setIsTyping(false);
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      timerID = setTimeout(typeCycle, typingSpeed);
    };

    const startDelay = setTimeout(() => {
      typeCycle();
    }, 1000);

    return () => {
      clearTimeout(startDelay);
      if (timerID) clearTimeout(timerID);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden bg-gray-50">
      {/* Ambient background animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B05B2F]/5 rounded-full blur-[100px] animate-pulse -z-10"></div>

      {/* Draggable Floating Elements (Buttery Smooth framer-motion) */}
      <motion.div
        className="hidden md:flex absolute top-1/4 left-[10%] px-6 py-3 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full font-semibold text-gray-700 border border-gray-100 cursor-grab active:cursor-grabbing z-20"
        drag
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
        whileDrag={{ scale: 1.05, boxShadow: "0 20px 40px rgb(0,0,0,0.08)" }}
        animate={{ y: [0, -20, 0], rotate: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        Design Systems
      </motion.div>

      <motion.div
        className="hidden md:flex absolute bottom-1/4 right-[15%] px-6 py-3 bg-[#B05B2F] shadow-[0_8px_30px_rgb(176,91,47,0.2)] rounded-full font-semibold text-white cursor-grab active:cursor-grabbing z-20"
        drag
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileDrag={{ scale: 1.1 }}
        animate={{ y: [0, 15, 0], rotate: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
      >
        User Research
      </motion.div>

      <motion.div
        className="hidden lg:flex absolute top-[30%] right-[20%] px-6 py-3 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full font-semibold text-gray-700 border border-gray-100 cursor-grab active:cursor-grabbing z-20"
        drag
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
        whileDrag={{ scale: 1.05, boxShadow: "0 20px 40px rgb(0,0,0,0.08)" }}
        animate={{ y: [0, -10, 0], rotate: [2, -2, 2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
      >
        User Interface
      </motion.div>

      <div className="max-w-4xl w-full text-center flex flex-col items-center relative z-10 pointer-events-none">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#B05B2F]/10 text-[#B05B2F] font-medium text-sm mb-6 animate-fade-in-up pointer-events-auto">
          Available for new opportunities
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up delay-100 text-gray-900 leading-tight pointer-events-auto">
          Crafting digital experiences with <br className="hidden md:block" />
          <span className="text-gradient relative inline-block min-h-[1.2em]">
            {displayText}
            <span className={`absolute -right-4 md:-right-6 top-0 text-[#B05B2F] font-light ${isTyping ? 'opacity-100' : 'animate-pulse'}`}>
              |
            </span>
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl animate-fade-in-up delay-200 pointer-events-auto">
          I'm a UI/UX Designer specializing in scalable design systems, intuitive user flows, and aesthetic interfaces that drive product growth
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300 pointer-events-auto">
          <a href="#work" className="px-8 py-4 bg-[#B05B2F] text-white font-medium rounded-full shadow-lg hover:bg-[#8D4925] hover:shadow-xl hover:-translate-y-0.5 transition-all">
            View Selected Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 transition-all">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

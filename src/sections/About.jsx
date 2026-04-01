import { useState } from 'react';
import { motion } from 'framer-motion';

import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';

export default function About() {
  const [cards, setCards] = useState([
    photo1,
    photo2,
    photo3,
    photo4,
    photo5
  ]);

  const moveToEnd = () => {
    setCards((prev) => {
      const newArray = [...prev];
      newArray.push(newArray.shift());
      return newArray;
    });
  };

  return (
    <section id="about" className="py-24 px-6 bg-gray-50 scroll-mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Interactive Image Stack (Gallery format) */}
          <div className="relative animate-fade-in-up h-[350px] md:h-[450px] w-full flex items-center justify-center group">
            
            {cards.map((src, index) => {
              const isFront = index === 0;
              return (
                <motion.div
                  key={src}
                  className="absolute w-full max-w-[320px] md:max-w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl cursor-grab active:cursor-grabbing origin-bottom"
                  style={{
                    zIndex: cards.length - index,
                  }}
                  animate={{
                    x: 0, // This explicitly forces the dragged photo to snap back to the center horizontally
                    y: index * 15,
                    scale: 1 - index * 0.06,
                    opacity: 1 - index * 0.15,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  drag={isFront ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000 || swipe > 10000 || Math.abs(offset.x) > 100) {
                      moveToEnd();
                    }
                  }}
                  whileHover={isFront ? { scale: 1.02 } : {}}
                  onClick={isFront ? moveToEnd : undefined}
                >
                  <img src={src} alt="About Me Gallery" className="w-full h-full object-cover pointer-events-none" />
                </motion.div>
              );
            })}
            
            {/* Decorative blocks */}
            <div className="absolute -bottom-10 right-0 w-32 h-32 bg-[#B05B2F]/10 rounded-3xl -z-10 hidden md:block"></div>
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-50 rounded-full -z-10 hidden md:block"></div>
            
            {/* Hint label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Swipe or Click to flip
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-fade-in-up delay-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">About Me</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Hello! I'm Shiyam, a passionate UI/UX Designer driven by the desire to build products that make a real difference. With a background in both design and engineering, I bridge the gap between aesthetics and functionality.
              </p>
              <p>
                My mindset revolves around user-centric problem solving. I believe the best interfaces are invisible—they allow users to accomplish their goals effortlessly. 
              </p>
            </div>
            
            <div className="mt-10">
              <h3 className="font-semibold text-gray-900 mb-4 tracking-wide uppercase text-sm">Toolkit</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'React', 'Tailwind CSS', 'Framer', 'User Research', 'Prototyping'].map((tool, i) => (
                  <span key={i} className="bg-white border text-gray-700 px-4 py-2 rounded-full text-sm shadow-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-gray-900 mb-4 tracking-wide uppercase text-sm">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {['Product Strategy', 'Interaction Design', 'Design Systems', 'Prototyping'].map((skill, i) => (
                  <span key={i} className="bg-white border text-gray-700 px-4 py-2 rounded-full text-sm shadow-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

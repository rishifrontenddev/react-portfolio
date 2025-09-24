import profilePic from "../assets/pfp.png";
import { motion } from "motion/react";

const container = (delay, duration = 0.3) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: duration, delay: delay },
  },
});

export default function HeroSection() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 
            lg:text-8xl"
            >
              Hrishit Prakash
            </motion.h1>
            <motion.span
              variants={container(0.5, 0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
            bg-clip-text text-3xl tracking-tight text-transparent mr-20"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(1, 0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am a passionate front end developer with a knack for crafting
              robust and scalable web applications. I have honed my skills in
              front-end technologies like React and Next.js. My goal is to
              leverage my expertise to create innovative solutions that drive
              business growth and deliver exceptional user experiences.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              src={profilePic}
              alt="Hrishit Prakash"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

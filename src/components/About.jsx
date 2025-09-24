import aboutImg from "../assets/about2.jpeg";
import { motion } from "motion/react";

export default function About() {
  const container = (delay, duration = 0.3) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: duration, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <img
              className="rounded-2xl h-80 w-110"
              src={aboutImg}
              alt="about"
            />
          </motion.div>
        </div>

        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2 lg:mt-20 "
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am a dedicated and versatile front end developer with a passion
              for creating efficient and user-friendly web applications. I have
              worked with a variety of technologies, including React, Next.js,
              MySQL,. My journey in web development began with a deep curiosity
              for how things work, and it has evolved into a career where I
              continuously strive to learn and adapt to new challenges. I thrive
              in collaborative environments and enjoy solving complex problems
              to deliver high-quality solutions. Outside of coding, I enjoy
              staying active, exploring new technologies, and contributing to
              open-source projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "motion/react";
import { FaNodeJs } from "react-icons/fa";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Tech() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center items-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVarients(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-800" />
        </motion.div>

        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNextjsFill className="text-7xl text-grey-400" />
        </motion.div>

        <motion.div
          variants={iconVarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJs className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiMysql className="text-7xl text-blue-900" />
        </motion.div>

        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-7xl text-red-900" />
        </motion.div>
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-900" />
        </motion.div>
      </motion.div>
    </div>
  );
}

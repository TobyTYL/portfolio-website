"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As someone who loves to challenge the unknown and enjoys the journey, with a background that spans data
        science and computer science, I've found my niche in the world of technology and innovation.
        I feel passionate about creating and diving into the unknown. I am rewarded when I can translate my
        thoughts onto a computer and bring them to life through the keyboard's keystrokes.
        By crafting precise algorithms, I enable the computer to simulate human behaviors and automate tasks.
        This transformative process, turning ideas into digital sequences, amazes me.

        <p>My specialties include quickly learning new skills and programming languages. So far, I have
          <span className="font-medium">
            C/C++ 11, Python, Rust, Java, MySQL, TypeScript, HTML 5, CSS, JavaScript under my belt. {""}
          </span>
          I remain eager to learn and incorporate any new programming languages, frameworks, or concepts into my
          growing coding knowledge.</p>

      </p>


    </motion.section>
  );
}

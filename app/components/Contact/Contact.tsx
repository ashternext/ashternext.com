import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "~/components/Button";
import Section from "~/components/Section/Section";
import { containerVariants, itemVariants } from "../Hero/Hero.animations";
import Pulse from "../Pulse/Pulse";
import Telegram from "~/icons/Telegram";
const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <Section id="contact">
      <motion.div
        ref={ref}
        className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="flex flex-col gap-4 lg:gap-6">
          <motion.p
            variants={itemVariants}
            className="text-3xl lg:text-4xl text-neutral-800 dark:text-neutral-400 font-bold"
          >
            Need something awesome built?
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-blue-600 dark:text-blue-400 flex items-center gap-3"
          >
            <Pulse /> Ping us and we'll get you started.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button as="a" href="mailto:malik@ashternext.com" className="w-fit">
              Send a message
            </Button>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 text-2xl">
          <div className="flex flex-col items-center">
            <motion.a
              whileHover={{ translateY: -4, scale: 1.05 }}
              variants={itemVariants}
              className="bg-[#0088cc] text-white rounded-full py-2 px-4 flex justify-center items-center gap-2"
              href="https://t.me/ashterb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram className="size-8" /> <span>ashterb</span>
            </motion.a>
          </div>
          <motion.a
            variants={itemVariants}
            className="text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
            href="mailto:malik@ashternext.com"
          >
            malik@ashternext.com
          </motion.a>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;

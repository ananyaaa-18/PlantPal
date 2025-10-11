"use client";
import { FaAnglesRight, FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import MenuPanel from "../Dashboard/MenuPanel";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.2, ease: "easeOut" },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.2, ease: "easeOut" },
  }),
};

const Landing = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f5f7f2] text-[#1a2b1d]">
      <div className="w-[90vw] mx-auto">
        {/* Top Section */}
        <motion.div className="flex flex-col" initial="hidden" animate="visible">
          {/* Header Row */}
          <motion.div className="flex items-center justify-between" custom={0}>
            <motion.div
              className="text-[2vh] w-[15vw] flex flex-wrap text-[#52624b]"
              variants={fadeRight}
              custom={0.2}
            >
              Nurture your focus, one Pomodoro at a time 🌱
            </motion.div>

            <motion.div className="relative" variants={fadeUp} custom={0.4}>
              <h2 className="text-[18vh] leading-[14vh] font-semibold text-[#84a98c]">
                PLANTPAL
              </h2>
              <h2 className="absolute text-[#cce3d2] scale-[97.5%] rotate-[1deg] top-0 left-0 text-[18vh] leading-[14vh] font-semibold">
                PLANTPAL
              </h2>
            </motion.div>

            <motion.div
              className="w-[15vw] flex flex-col items-start justify-start gap-[1vh]"
              variants={fadeUp}
              custom={0.6}
            >
              <MenuPanel />
            </motion.div>
          </motion.div>

          {/* Subheader Row */}
          <motion.div
            className="flex items-center justify-between mt-[2vh]"
            variants={fadeUp}
            custom={0.6}
          >
            <motion.h2
              variants={fadeRight}
              custom={0.6}
              className="text-[3vh] uppercase text-[#2f3e2e]"
            >
              Grow Focus. Cultivate Calm. Bloom with Balance.
            </motion.h2>

            <div className="flex gap-[1vw]">
              <motion.div
                variants={fadeRight}
                custom={0.75}
                className="border border-[#9ebc9d] rounded-full h-[5vh] w-[5vh] flex items-center justify-center"
              ></motion.div>
              <motion.div
                variants={fadeRight}
                custom={1.75}
                className="border border-[#9ebc9d] bg-[#84a98c] rounded-full h-[5vh] w-[5vh] flex items-center justify-center ml-[-2.5vw]"
              >
                <FaAnglesRight className="text-white text-[2vh]" />
              </motion.div>
              <motion.div className="flex gap-[0.35vw] items-center justify-center">
                {[100, 200, 300, 400, 500].map((n) => (
                  <motion.div
                    variants={fadeLeft}
                    custom={1 + n / 200}
                    key={n}
                    className={`bg-[#a3b18a] rounded-[0.75vh] h-[5vh] w-[5vh]`}
                  ></motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex h-[67.5vh] gap-[1vw] mt-[3vh]"
          initial="hidden"
          animate="visible"
        >
          {/* Left Image */}
          <motion.div className="h-[67.5vh] w-4/10" variants={fadeUp} custom={1}>
            <img
              src="/imgs/plant_focus.jpg"
              className="h-[67.5vh] w-full object-cover rounded-[1vh]"
              alt="Peaceful workspace with plants"
            />
          </motion.div>

          {/* Right Section */}
          <motion.div className="h-[67.5vh] w-6/10 flex flex-col items-center justify-between">
            {/* Text */}
            <motion.div
              className="flex flex-col px-[2vw]"
              variants={fadeUp}
              custom={1.4}
            >
              <motion.h2
                variants={fadeUp}
                custom={0.5}
                className="text-[10vh] leading-[8vh] text-[#52745c] font-semibold"
              >
                Focus. Grow. Repeat.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-[#3f4d3c] text-[2.25vh] mt-[2vh] max-w-[45vw]"
              >
                PlantPal helps you grow mindfulness through focused Pomodoro
                sessions, track your progress, and nurture calm productivity.
                Watch your digital plant thrive as you do 🌿
              </motion.p>

              <div className="flex items-center justify-center gap-[2vw] mt-[2vh]">
                <motion.a
                  href="/dashboard"
                  variants={fadeLeft}
                  custom={1}
                  className="w-full text-center cursor-pointer py-[0.75vh] text-[2vh] rounded-[1vh] border border-[#a3b18a] text-[#2f3e2e] hover:bg-[#dbead5] transition-all"
                >
                  Start Growing
                </motion.a>
                <motion.div
                  variants={fadeLeft}
                  custom={2}
                  className="flex items-center justify-center gap-[1vw]"
                >
                  <p className="text-[1.75vh] leading-[2vh] text-[#52624b]">
                    Scroll <br /> Down
                  </p>
                  <FaAnglesDown className="text-[#84a98c] text-[4vh]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Images Row */}
            <motion.div className="flex gap-[1vw] h-[35vh] w-full">
              <motion.div
                variants={fadeUp}
                custom={1.5}
                className="w-3/5 h-full"
              >
                <img
                  src="/imgs/plant_timer.jpg"
                  className="w-full h-full object-cover rounded-[1vh]"
                  alt="Pomodoro timer with plants"
                />
              </motion.div>
              <motion.div variants={fadeUp} custom={2} className="w-2/5 h-full">
                <img
                  src="/imgs/plant_tasks.jpg"
                  className="w-full h-full object-cover rounded-[1vh]"
                  alt="Task manager with greenery"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;

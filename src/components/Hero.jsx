import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.main
      className="flex flex-col md:flex-row bg-secondary-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col gap-10 p-3 md:p-6 lg:p-10 md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1
          className="pt-10 text-5xl font-bold sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Your Professional{" "}
          <span className="text-tertiary-0">Friendly Laundromat</span>
        </motion.h1>
        <motion.p
          className="font-light leading-snug sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          We handle your garments with the utmost care and attention, ensuring
          through Cleaning, Ironing and Folding.
        </motion.p>
        <motion.div
          className="flex gap-4 pb-[4rem] sm:pb-[6rem] md:pb-[8rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="rounded-3xl bg-primary-0 text-white px-5 py-2 hover:bg-primary-hover sm:px-6 sm:py-3 md:px-8 md:py-4 sm:rounded-full md:rounded-full lg:rounded-full">
            Book Now
          </button>
          <button className="rounded-3xl px-5 py-2 border border-primary-0 hover:bg-primary-0 hover:text-white sm:px-6 sm:py-3 md:px-8 md:py-4 sm:rounded-full md:rounded-full lg:rounded-full">
            Schedule Time
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex justify-center items-center md:w-1/2 bg-secondary-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.img
          src="https://i.imghippo.com/files/5IliV1723112509.png"
          alt="Laundryman"
          className="mb-24"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </motion.div>
    </motion.main>
  );
};

export default Hero;
import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="services"
      className="mt-16 sm:ml-20 sm:mr-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div>
        <h1 className="font-semibold text-3xl text-center">Our Services</h1>
        <p className="font-light p-5 text-center">
          We are one of the fastest laundromats in South Mumbai
        </p>
      </div>
      <motion.div
        className="flex flex-col gap-5 mt-4 md:flex-row md:gap-0"
        variants={containerVariants}
      >
        <motion.div
          className="bg-secondary-0 rounded-lg ml-5 mr-5 p-4 sm:ml-0"
          variants={itemVariants}
        >
          <img
            src="https://i.ibb.co/JrWSNZW/sebastian-herrmann-5ju-Q-l5vm-U-unsplash.jpg"
            alt="Washing Clothes"
            className="rounded-lg sm:h-[300px] object-cover w-full"
          />
          <h1 className="my-2 text-2xl font-semibold">Washing Clothes</h1>
          <p className="font-light leading-snug">
            We offer a wide range of washing services, including dry cleaning
            and wet cleaning, to cater to all your laundry needs.
          </p>
        </motion.div>
        <motion.div
          className="bg-secondary-0 rounded-lg ml-5 mr-5 p-4 sm:m-0"
          variants={itemVariants}
        >
          <img
            src="https://i.ibb.co/hVvkSmG/waldemar-NPPNHZK1-U0s-unsplash.jpg"
            alt="Ironed Clothes"
            className="rounded-lg sm:h-[300px] object-cover w-full"
          />
          <h1 className="my-2 text-2xl font-semibold">Ironing Clothes</h1>
          <p className="font-light leading-snug">
            Our expert staff ensures your clothes are meticulously ironed to
            perfection, leaving them crisp and well-pressed.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

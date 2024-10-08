import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faTruckFast,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Feature = () => {
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
      id="feature"
      className="flex flex-col justify-center items-center mt-16 sm:ml-20 sm:mr-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div>
        <h1 className="font-semibold text-3xl text-center">
          Welcome to <br />
          <span className="text-tertiary-0">The Suresh Laundry!</span>
        </h1>
        <div className="px-5 sm:px-80">
          <p className="mt-3 font-light text-center">
            Since 1980&apos;s, we have been dedicated to providing top-notch
            laundry services in South Mumbai. What started with a small business
            in walkeshwar has now grown into a trusted name providing quality
            and excellence throughout the city.
          </p>
        </div>
      </div>
      <motion.div
        className="flex flex-col gap-5 mt-4 md:flex-row md:gap-0"
        variants={containerVariants}
      >
        <motion.div
          className="bg-secondary-0 rounded-lg ml-5 mr-5 p-4 sm:m-0 "
          variants={itemVariants}
        >
          <div>
            <FontAwesomeIcon icon={faHandshake} size="3x" />
          </div>
          <div className="mt-2 mb-2 h-[1px] w-full bg-tertiary-0"></div>
          <h1 className="text-2xl font-semibold mb-2">Our Commitment</h1>
          <p className="font-light leading-snug">
            At The Suresh Laundry, we not only understand the significance of
            clean and fresh laundry but also prioritize personal hygiene. We
            believe that every customer deserves the highest level of care and
            attention.Thats why we are dedicated to processing each individual
            customers laundry separately, ensuring the utmost commitment to
            personal hygiene.
          </p>
        </motion.div>
        <motion.div
          className="bg-secondary-0 rounded-lg  ml-5 mr-5 p-4"
          variants={itemVariants}
        >
          <div>
            <FontAwesomeIcon icon={faTruckFast} size="3x" />
          </div>
          <div className="mt-2 mb-2 h-[1px] w-full bg-tertiary-0"></div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">
              Pickup and Delivery Service
            </h1>
            <p className="font-light leading-snug">
              To further enhance your convenience, we offer a reliable pickup
              and delivery service.We collect clothes and deliver your laundry
              right to your doorstep. Simply schedule a pickup at a time that
              works best for you, and we will ensure a seamless and timely
              service.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-secondary-0 rounded-lg ml-5 mr-5 p-4 sm:mx-0"
          variants={itemVariants}
        >
          <div>
            <FontAwesomeIcon icon={faUser} size="3x" />
          </div>
          <div className="mt-2 mb-2 h-[1px] w-full bg-tertiary-0"></div>
          <h1 className="text-2xl font-semibold mb-2">Expert Staff</h1>
          <p className="font-light leading-snug">
            Our team consists of skilled professionals who are passionate about
            what they do. They handle your garments with the utmost care and
            attention, ensuring thorough cleaning, ironing, and folding.With
            their expertise, you can trust that your clothes will be handled
            professionally and returned to you in pristine condition.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Feature;

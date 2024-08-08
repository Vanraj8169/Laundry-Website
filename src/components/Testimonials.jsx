import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Testimonials = () => {
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
      className="mt-12 sm:ml-20 sm:mr-20 bg-secondary-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1 className="py-10 font-semibold text-3xl text-center">
        What our <br /> Customer says
      </h1>
      <motion.div
        className="flex flex-col gap-5 sm:flex-row justify-center"
        variants={containerVariants}
      >
        <motion.div
          className="bg-white rounded-lg ml-5 mr-5 p-4 sm:mr-0 sm:w-96"
          variants={itemVariants}
        >
          <div className="flex flex-row gap-3  items-center my-3">
            <img
              src="https://www.zoho.com/inventory/case-study/images/maxime-loiselle.jpg"
              alt="client"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h1 className="text-lg font-semibold">Julita Czyzewska</h1>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  style={{ color: "#FFD43B", marginRight: "4px" }}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quam aliquid nam minima pariatur, deserunt sunt odio atque non
              maxime?
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg ml-5 mr-5 p-4 sm:ml-0 sm:w-96"
          variants={itemVariants}
        >
          <div className="flex flex-row gap-3  items-center my-3">
            <img
              src="https://www.zoho.com/inventory/case-study/images/maxime-loiselle.jpg"
              alt="client"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h1 className="text-lg font-semibold">Julita Czyzewska</h1>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  style={{ color: "#FFD43B", marginRight: "4px" }}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quam aliquid nam minima pariatur, deserunt sunt odio atque non
              maxime?
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
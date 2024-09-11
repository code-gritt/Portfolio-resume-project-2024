import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: "100%",
  },
};

const Testimonials = () => {
  return (
    <>
      <div className="h-full bg-primary/30 py-32 text-center">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="text-[35px] leading-tight md:text-[51px] md:leading-[1.3] font-semibold mb-8 xl:mb-0">
              What clients <span className="text-accent">say.</span>
            </h2>
          </motion.div>
          <div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <TestimonialSlider />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

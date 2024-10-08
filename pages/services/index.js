import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import EarthCanvas from "../../components/Earth";
import ServiceSlider from "../../components/ServiceSlider";
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

const Services = () => {
  return (
    <>
      <div className="h-full overflow-y-auto bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="hidden"
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <h2 className="text-[20px] leading-tight md:text-[51px] absolute top-80 left-28 md:block md:leading-[1.3] mb-4 font-semibold xl:mt-8">
                  My Services <span className="text-accent">.</span>
                </h2>
              </motion.div>
              <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="hidden"
                transition={{ duration: 1, ease: "easeInOut" }}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
              >
                <EarthCanvas />
              </motion.div>
            </div>
            <div className="w-full xl:max-w-[65%]">
              <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="hidden"
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <ServiceSlider />
              </motion.div>
            </div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Services;

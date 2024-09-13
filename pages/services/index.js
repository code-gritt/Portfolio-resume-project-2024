import Bulb from "../../components/Bulb";
import Button from "../../components/Button";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { motion } from "framer-motion";
import Globe from "react-globe.gl";

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
                <h2 className="text-[35px] leading-tight md:text-[51px] md:leading-[1.3] mb-4 font-semibold xl:mt-8">
                  My Services <span className="text-accent">.</span>
                </h2>
              </motion.div>
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  height={500}
                  width={500}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[
                    {
                      lat: 40,
                      lng: -100,
                      text: "India",
                      color: "white",
                      size: 15,
                    },
                  ]}
                />
              </div>
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

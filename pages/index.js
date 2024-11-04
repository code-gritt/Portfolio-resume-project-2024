import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
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

const Home = () => {
  return (
    <>
      <div className="bg-primary/60 h-full">
        <div className="w-full h-full overflow-auto bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center mt-24 flex flex-col justify-center xl:text-left h-full container mx-auto">
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="hidden"
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <h1 className="text-[35px] leading-tight md:text-[57px] md:leading-[1.3] mb-8 font-semibold text-accent">
                Perfecting the Art of Web &nbsp; &nbsp; Development {""}
                <span className="text-white">In the Digital Realm</span>
              </h1>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="hidden"
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <p className="max-w-sm text-xl xl:max-w-4xl mx-auto xl:mx-0 mb-10 xl:mb-16">
                Creating something from bare beginnings has always been my
                passion throughout my life which led me harness the power of
                frontend engineering design and transforming ideas into digital
                reality creating new products.
              </p>
            </motion.div>
            <div className="flex justify-center xl:hidden relative">
              <ProjectBtn />
            </div>

            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="hidden"
              className="hidden xl:flex"
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <ProjectBtn />
            </motion.div>
          </div>
        </div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right right-96 xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 animate-pulse duration-75"></div>
          <ParticlesContainer />
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[-5%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;

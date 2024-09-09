import Avatar from "../components/Avatar";
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
          <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="hidden"
            >
              <h1 className="h1">GOKUL CHANDAN </h1>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="hidden"
            >
              <h1 className="h1 text-accent">
                Perfecting the art of Frontend Engineering {""}
                <span className="text-white">In the Digital Realm</span>
              </h1>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="hidden"
            >
              <p className="max-w-sm text-xl xl:max-w-4xl mx-auto xl:mx-0 mb-10 xl:mb-16">
                Creating something from scratch has always been my passion
                throughout my life which led me harness the power of frontend
                engineering design and transforming ideas into digital reality
                creating new products.
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
            >
              <ProjectBtn />
            </motion.div>
          </div>
        </div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right right-72 xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          <div>Particles</div>
          <div className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[-5%]">
            <Avatar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

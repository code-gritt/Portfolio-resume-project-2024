import { BsArrowRight } from "react-icons/bs";
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

const Contact = () => {
  return (
    <>
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <h2 className="text-[35px] leading-tight md:text-[51px] md:leading-[1.3] font-semibold text-center mb-2">
                Let's <span className="text-accent">connect.</span>
              </h2>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
                <div className="flex gap-x-6 w-full">
                  <input type="text" placeholder="Name" className="input" />
                  <input type="email" placeholder="Email" className="input" />
                </div>

                <textarea placeholder="Message" className="textarea"></textarea>
                <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let's talk
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

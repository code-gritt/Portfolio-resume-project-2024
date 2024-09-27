import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import StarsCanvas from "../components/StarBackground";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Layout>
        <StarsCanvas />
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <video
              autoPlay
              muted
              loop
              className="rotate-180 absolute top-[-340px]  h-full w-full left-0 opacity-15 object-cover "
            >
              <source src="/blackhole.webm" type="video/webm" />
            </video>

            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;

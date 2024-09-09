import { Sora } from "@next/font/google";
import TopLeftImg from "./TopLeftImg";
import Nav from "./Nav";
import Header from "./Header";
import Head from "next/head";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <>
      <div
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}
      font-sora relative`}
      >
        <Head>
          <link rel="icon" href="/portfolio.png" />
          <title>Gokul Portfolio 2024</title>
        </Head>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;

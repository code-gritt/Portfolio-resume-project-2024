import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { GrLinkedin } from "react-icons/gr";
import { CgMail } from "react-icons/cg";

const Socials = () => {
  return (
    <>
      <div className="flex items-center gap-x-5 text-xl">
        <Link
          href={"https://github.com/code-gritt"}
          className="hover:text-accent transition-all duration-300"
        >
          <SiGithub />
        </Link>
        <Link
          href={"https://portfolioresumegokul.netlify.app/"}
          className="hover:text-accent transition-all duration-300"
        >
          <CgWebsite />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/gokul-va-14a304a5/"}
          className="hover:text-accent transition-all duration-300"
        >
          <GrLinkedin />
        </Link>
        <Link
          href={"mailto:gokulchandan24@gmail.com"}
          className="hover:text-accent transition-all duration-300"
        >
          <CgMail />
        </Link>
      </div>
    </>
  );
};

export default Socials;

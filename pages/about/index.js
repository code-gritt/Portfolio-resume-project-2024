// icons
import { useState } from "react";
import Circles from "../../components/Circles";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",

        desc: "HTML5, Javascript (ES6), Typescript",
      },
      {
        title: "Styling frameworks",

        desc: "CSS3, SASS, Bootstrap5, Infima, Tailwind CSS, Material UI, Styled Components, shadcn/ui",
      },
      {
        title: "Frameworks",

        desc: "React.js, Next.js, Angular, Svelte, SvelteKit, Node.js",
      },
      {
        title: "Libraries",

        desc: "Redux, Express.js, Mongoose, ngRx",
      },
      {
        title: "Databases",

        desc: "MongoDB, Firebase, SQL, Hygraph, Supabase",
      },
      {
        title: "Tools/ IDE",

        desc: "VS code, NPM, Git, Github, Postman API, MongoDB Atlas, Excalidraw, Netlify",
      },
      {
        title: "Hands-on experience",

        desc: "OAuth, Clerk, Strapi, Stripe, ASP.NET Core",
      },
      {
        title: "Languages",

        desc: "English (fluent), German (elementary)",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "VIT University, Vellore - B.TECH - EEE (6.74/10 CGPA)",
        stage: "2012 - 2017",
      },
      {
        title: "12th grade - HSC (91.5%)",
        stage: "2010 - 2012",
      },
      {
        title: "10th grade - SSC (92.6%)",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Saaragh Solutions Private Limited",
        role: "Frontend Developer",
        stage: "Jul 2023 - Present",
        compdesc:
          "Worked for Navan.ai company using Docusaurus, React, CSS3 making scalable, mobile responsive web pages. Created components, modules like website intro section, pricing, blogs, events, contact forms, dropdown menus etc. Performed Site Audit for on-page SEO, off-page SEO optimizing the website, thereby increasing site traffic by 3%",
      },
      {
        title: "HReasily (Client company)",
        role: "Frontend Developer",
        stage: "Jul 2023 - Present",
        compdesc:
          "Worked on code migration rewriting entire code base from Angular1 & 2 to React 16 for YUVO & HReasily companies. Worked on modules like Subsidiary companies, Audit logs, Reports, Group directory, Employee calendar etc",
      },
      {
        title: "Freelancer (Remote)",
        role: "React.js, Angular, MEAN, MERN, Next.js Developer",
        stage: "Dec 2022 - Jun 2023",
        compdesc:
          "Developed full-stack web applications, analyzed, and rendered data using Html5, Css3, JS, Angular, React, Next.js. Designed, recorded, created, curated a 8-hour course content on Next.js, Express.js as an online tutor for IIT Madras",
      },
      {
        title: "Photon Interactive Private Limited",
        role: "Node.js Developer",
        stage: "Sep 2022 - Nov 2023",
        compdesc:
          "Hoised data on MongoDB servers, created models, schemas for users & tested the backend API on Postman. Gained knowledge on Node.js, express.js, middleware, Git, deploying container based apps using tools like Docker",
      },
      {
        title: "ISYS Technologies",
        role: "Software Consultant",
        stage: "Sep 2018 - Jul 2022",
        compdesc:
          "Created MEAN, MERN stack projects using Angular, React frameworks, authorization & authentication projects. Created repositories, forked, merged, cloned, transferred projects to Github, learnt Git version control commands",
      },
      ,
      {
        title: "Larsen & Toubro (Client company)",
        role: "Angular Developer",
        stage: "May 2022 - Jul 2022",
        compdesc:
          "Worked on ASSET MANAGEMENT SYSTEM project movement module to move, transport, repair & buy new assets. Worked on modules like Asset Dispatch, Challan Generation, Receipts & Commissioning",
      },
      {
        title: "Energy Tec",
        role: "Control Panel Engineer",
        stage: "Jun 2017 - Sep 2018",
        compdesc:
          "Fitted the electrical components, tested the control panel, with the help of transformer switches & circuit breaker.",
      },
      {
        title: "Larsen & Toubro",
        role: "Student Intern",
        stage: "Dec 2014 - Jan 2015",
        compdesc:
          "Worked on speed testing, designing lighting systems, motor controls used inside merchant & defence ships. Gained additional information about electrical drives, power systems used in commercial & combat ships",
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Regularity Student Award",
        stage: "2010",
      },
      {
        title: "General Proficiency Award",
        stage: "2008",
      },
      {
        title:
          "Trinity’s Electronic Keyboard certificate issued by Trinity College of Music, London",
        stage: "2004",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <>
      <div className="h-full overflow-y-scroll bg-primary/30 py-32 text-center xl:text-left">
        <Circles />
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          <div className="flex-1 flex flex-col justify-center">Text</div>
          <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="bg-pink-400/10 p-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start rounded-lg">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex}>
                    <div className="underline underline-offset-4 mb-2">
                      {item.title}
                    </div>
                    {/* <div className="hidden md:flex">-</div> */}

                    <div className="flex gap-x-4">{item.desc}</div>
                    <div className="flex gap-x-4">{item.role}</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">{item.compdesc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

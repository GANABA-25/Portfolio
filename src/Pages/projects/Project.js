import { Fragment } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { RiHotelFill } from "react-icons/ri";

import ProjectDetail from "./ProjectDetail";

import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    isActive: true,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436347/PORTFOLIO/project_1_kaqaai.png",
    icon: <GrGamepad />,
    tittle: "Gamers Ring",
    description:
      "Gamer's Ring is a game website offering users the opportunity to access and download cracked games for PC, PS4, and PS5 consoles.the website features a streamlined interface designed specifically for effortless game discovery and downloading.",
    techStack1: "React",
    techStack2: "Tailwind",
    code: "code",
    gitIcon: <FaGithub />,
    link1: "https://github.com/Nathaniel-Owusu/Game-website-GAMERS-RING-.git",
    liveDemo: "Live Demo",
    link2: "",
    liveIcon: <AiOutlineDeliveredProcedure />,
  },
  {
    id: 2,
    isActive: false,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436345/PORTFOLIO/project_2_lef2ro.png",
    icon: <GrTechnology />,
    tittle: "Frambeg Tech",
    description:
      "Framebg Tech is a go-to e-commerce website for all things tech. Offering a diverse range of products, from gadgets to accessories, the platform ensures a seamless shopping experience. Explore a user-friendly interface for easy access to the latest in technology.",
    techStack1: "React",
    techStack2: "Tailwind",
    code: "code",
    gitIcon: <FaGithub />,
    link1: "https://github.com/Nathaniel-Owusu/FRAMBEG-TECH.git",
    liveDemo: "Live Demo",
    link2: "https://frambeg-tech.vercel.app/",
    liveIcon: <AiOutlineDeliveredProcedure />,
  },
  {
    id: 3,
    isActive: true,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436348/PORTFOLIO/project_3_i2ncn8.png",
    icon: <RiHotelFill />,
    tittle: "RoyalEmber Hotel",
    description:
      "Royal Ember Hotel redefines convenience with a intuitive hotel booking website. Tailored for effortless reservations,a user-friendly interface ensures a seamless experience from start to finish. Experience luxury at your fingertips – book your next stay with ease.",
    techStack1: "React",
    techStack2: "Tailwind",
    code: "code",
    gitIcon: <FaGithub />,
    link1: "https://github.com/Nathaniel-Owusu/RoyalEmber-Hotel.git",
    liveDemo: "Live Demo",
    link2: "https://royal-ember-hotel.vercel.app/",
    liveIcon: <AiOutlineDeliveredProcedure />,
  },
];

const Project = () => {
  return (
    <Fragment>
      <div
        id="projects"
        className="px-4 w-full m-auto font-serif md:px-10 lg:w-7/12 lg:m-auto lg:px-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="uppercase text-blue-700 font-bold my-2 md:text-2xl md:mb-8 lg:mb-4 lg:text-sm"
        >
          Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex text-xl font-bold md:text-4xl md:mb-8 lg:text-xl"
        >
          Each project is a unique piece of development
          <FaProjectDiagram className="text-red-600 text-3xl relative top-8 right-48 md:text-5xl md:right-100 md:top-11 lg:top-2 lg:left-2 lg:text-3xl" />
        </motion.p>
      </div>

      {projectData.map((project) => (
        <div key={project.id}>
          <ProjectDetail
            isActive={project.isActive}
            image={project.image}
            icon={project.icon}
            tittle={project.tittle}
            description={project.description}
            techStack1={project.techStack1}
            techStack2={project.techStack2}
            code={project.code}
            gitIcon={project.gitIcon}
            link1={project.link1}
            link2={project.link2}
            liveDemo={project.liveDemo}
            liveIcon={project.liveIcon}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default Project;

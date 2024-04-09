import { Fragment } from "react";

import TechStack from "./TechStack";
import About from "../About";
import Project from "../projects/Project";
import Contacts from "../Contacts";
import Footer from "../Footer";
import NavigationBar from "../../Components/navbar/NavigationBar";

import { GrLocationPin } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Fragment>
      <section
        id="home"
        className="w-full m-auto lg:w-7/12 lg:m-auto font-serif"
      >
        <NavigationBar />
        <div className="max-[767px]:mt-[5rem] p-4 md:mt-28 md:mx-4 lg:flex lg:mt-16">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 75 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, type: "spring" }}
              className="w-80 h-80 shadow-xl hover:-translate-y-1 hover:scale-110 duration-300 rounded-full md:w-96 md:h-96 lg:hidden"
              src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436317/PORTFOLIO/Nathaniel_swtamv.jpg"
              alt="profile"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="relative mt-12 text-center lg:text-start lg:mt-0"
          >
            <motion.h1 className="text-4xl font-bold md:text-7xl md:pt-8 lg:text-5xl lg:mt-5 lg:leading-12">
              Front-End React <br /> Developer
              <motion.img
                className="w-12 absolute top-9 right-6 md:w-24 md:top-24 md:right-16 lg:w-2/12 lg:top-29 lg:right-20"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436295/PORTFOLIO/waving_hand_d8ov97.png"
                alt="wavingHand"
              />
            </motion.h1>
            <div className="mt-2 leading-7 tracking-wider">
              <motion.p className="py-3 md:text-2xl md:py-4 lg:py-5 lg:text-sm">
                Hi,I'm <strong>Nathaniel Owusu</strong>.{" "}
                <br className="lg:hidden" />A passionate Front-End React
                <br className="hidden lg:block" /> Developer based in
                Ghana,Kumasi.
                <GrLocationPin className="text-red-600 relative bottom-6 left-65 md:bottom-6 md:left-99 lg:bottom-5 lg:left-64 w-4 h-4" />
              </motion.p>

              <motion.div className="flex justify-center items-center lg:justify-start">
                <a
                  href="https://github.com/Nathaniel-Owusu"
                  className="text-2xl hover:-translate-y-1 hover:scale-110 duration-300"
                  target="blank"
                >
                  <AiFillGithub />
                </a>

                <div className="text-2xl mx-2 hover:shadow-xl active:border-slate-200 hover:-translate-y-1 hover:scale-110 duration-300">
                  <a
                    href="https://www.linkedin.com/in/nathanielowusu01"
                    target="blank"
                  >
                    <BsLinkedin />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="hidden shadow-xl hover:-translate-y-1 hover:scale-110 duration-300 rounded-full w-72 h-72 ml-12 lg:block"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436317/PORTFOLIO/Nathaniel_swtamv.jpg"
            alt="profile"
          />
        </div>
        <TechStack />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <Contacts />
      </section>

      <Footer />
    </Fragment>
  );
};

export default HomePage;

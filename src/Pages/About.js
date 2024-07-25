import { GrLocationPin } from "react-icons/gr";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-4 w-full m-auto font-serif my-44 lg:w-7/12 lg:m-auto lg:my-52"
      >
        <div className="lg:flex">
          <motion.img
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-xl mb-8 md:p-8 md:rounded-2xl lg:w-[20rem] lg:h-[20rem] lg:mt-0 lg:p-0"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712618515/PORTFOLIO/aboutImg_dbjpcr.png"
            alt="laptop"
          />

          <div className="md:ml-9 lg:ml-10">
            <motion.h1
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-xl font-bold  uppercase text-blue-700 md:text-2xl lg:text-sm"
            >
              About Me
            </motion.h1>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-xl font-bold my-3 md:text-4xl lg:text-xl lg:my-1"
              >
                A dedicated Front-End Developer <br /> based in Ghana,Kumasi.
                <div className="text-red-600 w-4 h-4 text-2xl relative bottom-7 left-64 md:bottom-8 md:left-99 lg:bottom-6 lg:left-64 lg:text-xl">
                  <GrLocationPin />
                </div>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                className="leading-7 tracking-wider text-md md:text-2xl opacity-75 lg:text-base"
              >
                As a junior Front-End Developer I'm passionate about crafting
                engaging and
                <strong> responsive web interfaces</strong>. With expertise in
                React, I turn designs into user-friendly experiences. Let's
                bring your web projects to life with style and functionality!
                <strong>🤝 Collaboration is at the heart of my work.</strong> I
                thrive in a dynamic team environment, where I can seamlessly
                bridge the gap between design and functionality. I'm skilled at
                working alongside <strong>designers</strong> and back-end
                <strong>developers</strong> to transform their ideas into a
                tangible,user-friendly reality.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

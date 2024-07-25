import { Fragment } from "react";
import { motion } from "framer-motion";

const ProjectDetail = ({
  isActive,
  image,
  tittle,
  description,
  icon,
  techStack1,
  techStack2,
  code,
  gitIcon,
  link1,
  liveDemo,
  link2,
  liveIcon,
}) => {
  return (
    <Fragment>
      <div className="lg:hidden max-[767px]:my-20 md:my-48 lg:my-16 border-red-600">
        <div className="w-full m-auto font-serif text-center md:px-6 ">
          <div>
            <motion.img
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="px-3"
              src={image}
              alt="project"
            />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex justify-center"
            >
              <h1 className="text-2xl font-extrabold my-4 md:text-4xl md:my-9">
                {tittle}
              </h1>
              <span className="mt-6 mx-3 text-blue-600 text-xl font-bold md:mt-9 md:mx-5 md:text-4xl">
                {icon}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="opacity-80 mx-2 md:text-2xl"
            >
              {description}
            </motion.p>

            <div className="flex justify-center gap-3 font-bold my-4 md:text-2xl md:my-8">
              <motion.h1
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                {techStack1}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                {techStack2}
              </motion.h1>
            </div>

            <div className="flex justify-center gap-7 cursor-pointer text-xl font-extrabold md:text-3xl">
              <motion.a
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                href={link1}
                className="flex gap-1 hover:text-red-600 hover:underline underline-offset-2 active:text-blue-600"
                target="blank"
              >
                {code}
                <span className="mt-1">{gitIcon}</span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                href={link2}
                className="flex gap-1 hover:text-red-600 hover:underline underline-offset-2 active:text-blue-600"
                target="blank"
              >
                {liveDemo}
                <span className="mt-1">{liveIcon}</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden my-16 lg:block">
        <div className="w-7/12 m-auto font-serif text-center  flex gap-14 px-0">
          {isActive ? (
            <div>
              <motion.img
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-98"
                src={image}
                alt="project"
              />
            </div>
          ) : null}

          <div className="w-98">
            <div className="flex justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="font-extrabold text-base"
              >
                {tittle}
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mx-3 text-blue-600 font-bold text-base mt-1"
              >
                {icon}
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="opacity-80 text-sm my-4"
            >
              {description}
            </motion.p>

            <div className="flex justify-center gap-3 font-bold text-sm my-3">
              <motion.h1
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {techStack1}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {techStack2}
              </motion.h1>
            </div>

            <div className="flex justify-center gap-7 cursor-pointer  font-extrabold text-base">
              <motion.a
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                href={link1}
                className="flex gap-1 hover:text-red-600 hover:underline underline-offset-2 active:text-blue-600"
                target="blank"
              >
                {code}
                <span className="mt-1">{gitIcon}</span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                href={link2}
                className="flex gap-1 hover:text-red-600 hover:underline underline-offset-2 active:text-blue-600"
                target="blank"
              >
                {liveDemo}
                <span className="mt-1">{liveIcon}</span>
              </motion.a>
            </div>
          </div>

          {!isActive ? (
            <div>
              <motion.img
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-98"
                src={image}
                alt="project"
              />
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectDetail;

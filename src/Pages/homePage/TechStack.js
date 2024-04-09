import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <motion.section className="flex mx-6 mt-8 text-center md:mt-0 md:px-8 md:pt-20 lg:mx-0 lg:mt-0">
      <div className="flex">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-sm font-bold pt-2 md:pt-3 md:text-2xl lg:text-2xl lg:pt-1"
        >
          Tech Stack
        </motion.h1>
        <div className="pl-4 border-r border-slate-950" />
      </div>

      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.02, duration: 1 }}
        className="w-5 h-5 mt-2 mx-2 md:w-12 md:h-12 md:mt-2 lg:w-7 lg:h-1/6 md:mx-4 lg:mx-5"
        src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436294/PORTFOLIO/html_jowq7b.png"
        alt="html"
      />
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06, duration: 1 }}
        className="w-5 h-5 mt-2 mx-2 md:w-12 md:h-12 md:mt-2 lg:w-7 lg:h-1/6 md:mx-4 lg:mx-5"
        src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436294/PORTFOLIO/css_tunheo.png"
        alt="css"
      />
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 1 }}
        className="w-5 h-5 mt-2 mx-2 md:w-12 md:h-12 md:mt-2 lg:w-7 lg:h-1/6 md:mx-4 lg:mx-5"
        src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436295/PORTFOLIO/Javascript_l9uiwj.png"
        alt="javascript"
      />
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.14, duration: 1 }}
        className="w-5 h-5 mt-2 mx-2 md:w-12 md:h-12 md:mt-2 lg:w-7 lg:h-1/6 md:mx-4 lg:mx-5"
        src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436295/PORTFOLIO/React_xkrlje.png"
        alt="react"
      />
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.18, duration: 1 }}
        className="w-5 h-5 mt-2 mx-2 md:w-12 md:h-12 md:mt-2 lg:w-7 lg:h-1/6 md:mx-4 lg:mx-5"
        src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436296/PORTFOLIO/Tailwind_pmblar.png"
        alt="tailwind"
      />
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
        className="w-5 h-5 mt-2 mx-2 md:w-12 md:h-12 md:mt-2 lg:w-7 lg:h-1/6 md:mx-4 lg:mx-5"
        src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436294/PORTFOLIO/Bootstrap_qsevym.png"
        alt="bootstrap"
      />
    </motion.section>
  );
};

export default TechStack;

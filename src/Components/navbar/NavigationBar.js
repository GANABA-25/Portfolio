import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("section"));
      const scrollPosition = window.scrollY + 100;

      const activeSection = sections.find((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });

      if (activeSection) {
        setActiveLink(activeSection.id);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="max-[767px]:p-2 max-[767px]:bg-whiteGray max-[767px]:backdrop-blur-[100px] text-black fixed w-full top-0 z-50 cursor-pointer md:bg-whiteGray md:backdrop-blur-[100px] md:p-4 md:text-2xl lg:bg-inherit lg:backdrop-blur-0 lg:text-black lg:text-[1rem] lg:flex lg:justify-end">
      <motion.ul className="flex justify-center items-center max-[767px]:gap-8 font-bold md:gap-12 lg:gap-5">
        {navLinks.map(({ id, label }) => (
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, type: "spring" }}
            key={id}
            className={`${
              activeLink === id
                ? "underline underline-offset-2 text-red-600"
                : ""
            }`}
            onClick={() => scrollToSection(id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {label}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default NavigationBar;

import { MdMarkEmailRead } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";

import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div
      id="contact"
      className="p-4 w-full m-auto md:px-10 lg:w-7/12 lg:m-auto font-serif"
    >
      <motion.h1
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.02, duration: 1 }}
        className="max-[767px]:text-xl max-[767px]:my-8 text-center underline underline-offset-4 decoration-blue-600 font-bold md:my-12 md:text-4xl lg:text-xl"
      >
        CONTACT ME
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.04, duration: 1 }}
        className="flex items-center gap-3 max-[767px]:text-2xl font-bold text-blue-600 md:text-3xl lg:text-xl"
      >
        LET CONNECT.
        <PiPhoneDisconnectFill className="max-[767px]:text-3xl text-red-600" />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06, duration: 1 }}
        className="max-[767px]:my-4 md:my-6 md:text-2xl lg:text-xl"
      >
        Thank you for exploring my portfolio! If you'd like to get in touch or
        discuss potential collaborations, feel free to reach out using one of
        the methods below. I'm always excited to connect with fellow creatives
        and professionals.
      </motion.p>

      <div>
        <ul className="grid max-[767px]:gap-4 md:gap-6">
          <motion.li
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 1 }}
            className="flex items-center gap-4 md:text-2xl lg:text-xl"
          >
            <RiContactsFill className="text-blue-600 max-[767px]:text-2xl md:text-4xl lg:text-xl" />
            <strong>Contact :</strong>[ +233 596 498 006,
            <p className="hidden md:block m-0">+233 257 272 627,</p>]
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1 }}
            className="flex items-center gap-4 md:text-2xl lg:text-xl"
          >
            <RiWhatsappFill className="text-blue-600 max-[767px]:text-2xl md:text-4xl lg:text-xl" />
            <strong>WhatsApp :</strong>
            [+233 596 498 006,]
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14, duration: 1 }}
            className="flex items-center gap-4 md:text-2xl lg:text-xl"
          >
            <MdMarkEmailRead className="text-blue-600 max-[767px]:text-2xl md:text-4xl lg:text-xl" />
            <strong>Email :</strong>
            [NathanielOwusu01@gmail.com]
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 1 }}
            className="flex items-center gap-4 md:text-2xl lg:text-xl"
          >
            <FaSquareInstagram className="text-blue-600 max-[767px]:text-2xl md:text-4xl lg:text-xl" />
            <strong> linkedin :</strong> [Nathaniel Owusu]
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22, duration: 1 }}
            className="flex items-center gap-4 md:text-2xl lg:text-xl"
          >
            <GrLinkedin className="text-blue-600 max-[767px]:text-2xl md:text-4xl lg:text-xl" />
            <strong>Instagram :</strong> [Nathaniel Owusu]
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 1 }}
            className="flex items-center gap-4 md:text-2xl lg:text-xl"
          >
            <FaTwitterSquare className="text-blue-600 max-[767px]:text-2xl md:text-4xl lg:text-xl" />
            <strong>Twitter :</strong> [Nathaniel Owusu]
          </motion.li>
        </ul>
      </div>

      <div className="max-[767px]:my-8 grid max-[767px]:gap-8 md:gap-12 md:my-10">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.26, duration: 1 }}
          className="md:text-2xl text-red-600 underline underline-offset-8 lg:text-xl"
        >
          <strong>Location : </strong>
          <strong>[Kumasi, GHANA]</strong>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28, duration: 1 }}
          className="max-[767px]:text-xl text-center md:text-3xl lg:text-2xl"
        >
          Looking Forward to Hearing From You Soon.
        </motion.p>
      </div>
    </div>
  );
};

export default Contacts;

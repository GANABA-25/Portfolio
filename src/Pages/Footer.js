import { FaCopyright } from "react-icons/fa";
import { GiLoveMystery } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="max-[767px]:text-[10px] bg-gray-300 text-xs md:text-2xl lg:text-lg">
      <h1 className="flex justify-center py-4 gap-3 lg:gap-3 lg:font-serif lg:py-3">
        Portfolio copyright <FaCopyright className="mt-1 text-blue-600" /> 2024
        / made with <GiLoveMystery className="mt-1 text-blue-600" /> by
        Nathaniel Owusu.
      </h1>
    </div>
  );
};

export default Footer;

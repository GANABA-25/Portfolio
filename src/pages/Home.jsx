import Navbar from "../components/Navbar";

import {
  GrLocationPin,
  GrGroup,
  GrGamepad,
  GrTechnology,
} from "react-icons/gr";
import { AiFillGithub, AiOutlineDeliveredProcedure } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { RiHotelFill } from "react-icons/ri";

import ImageSlider from "../components/ImageSlider";

const TechStack = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436294/PORTFOLIO/html_jowq7b.png",
    alt: "HTML",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436294/PORTFOLIO/css_tunheo.png",
    alt: "CSS",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1716991964/PORTFOLIO/pngwing.com_1_nykv2n.png",
    alt: "Bootstrap",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436296/PORTFOLIO/Tailwind_pmblar.png",
    alt: "Tailwind",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436294/PORTFOLIO/Bootstrap_qsevym.png",
    alt: "JavaScript",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1767563642/PORTFOLIO/pngwing.com_1_a2vqsm.png",
    alt: "TypeScript",
  },

  {
    id: 7,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436295/PORTFOLIO/Javascript_l9uiwj.png",
    alt: "NodeJS",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436295/PORTFOLIO/React_xkrlje.png",
    alt: "React",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1767563642/PORTFOLIO/pngwing.com_2_d4e1wc.png",
    alt: "Next",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1767563643/PORTFOLIO/pngwing.com_oosn1o.png",
    alt: "React Native",
  },

  {
    id: 11,
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1727802595/PORTFOLIO/pngwing.com_i3bspz.png",
    alt: "MongoDB",
  },
];

const projectData = [
  {
    id: 1,
    isActive: false,
    images: [
      " https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148608/PORTFOLIO/Frambeg%20Tech/Frambeg_Tech-1_pwtfd9.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148606/PORTFOLIO/Frambeg%20Tech/FramBeg_Tech-2_vaxqta.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148607/PORTFOLIO/Frambeg%20Tech/Frambeg_Tech-3_zsozrp.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148608/PORTFOLIO/Frambeg%20Tech/Frambeg_Tech-4_ozcxnt.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148607/PORTFOLIO/Frambeg%20Tech/Frambeg_Tech-5_fsvrzp.png",
    ],
    icon: <GrTechnology />,
    title: "Frambeg Tech",
    description:
      "Framebg Tech is a go-to e-commerce website for all things tech. Offering a diverse range of products, from gadgets to accessories, the platform ensures a seamless shopping experience. Explore a user-friendly interface for easy access to the latest in technology.",
    techStack1: "React",
    techStack2: "Tailwind",
    techStack3: "Node.js",
    techStack4: "MongoDB",
    code: "Code",
    gitIcon: <FaGithub />,
    link1: "https://github.com/GANABA-25/Frambeg-Tech",
    liveDemo: "Live Demo",
    link2: "https://frambeg-tech.vercel.app",
    liveIcon: <AiOutlineDeliveredProcedure />,
  },

  {
    id: 2,
    isActive: true,
    images: [
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148572/PORTFOLIO/GroupBox/GroupBox-1_wa2ype.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148571/PORTFOLIO/GroupBox/GroupBox-2_jmvhar.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148570/PORTFOLIO/GroupBox/GroupBox-3_qzibei.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148571/PORTFOLIO/GroupBox/GroupBox-4_vkv1xx.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148570/PORTFOLIO/GroupBox/GroupBox-5_zxhayd.png",
    ],
    icon: <GrGroup />,
    title: "GroupBox",
    description:
      "GroupBox is an innovative digital platform for academic group assessment, combining project coordination, structured peer reviews, and gamified features. It accurately tracks contributions, ensures fair grading, and boosts student engagement.",
    techStack1: "React",
    techStack2: "Tailwind",
    techStack3: "Node.js",
    techStack4: "MongoDB",
    code: "Code",
    gitIcon: <FaGithub />,
    link1: "https://github.com/GANABA-25/Frambeg-Tech",
    liveDemo: "Live Demo",
    link2: "https://groupbox.vercel.app",
    liveIcon: <AiOutlineDeliveredProcedure />,
  },
  {
    id: 3,
    isActive: false,
    images: [
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771173835/PORTFOLIO/Clear%20Sight/ClearSight-1_bs4bzk.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771173836/PORTFOLIO/Clear%20Sight/ClearSight-2_dz5qrb.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771173835/PORTFOLIO/Clear%20Sight/ClearSight-3_anj6ro.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771173835/PORTFOLIO/Clear%20Sight/ClearSight-4_dzofly.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771173835/PORTFOLIO/Clear%20Sight/ClearSight-5_wtqgsj.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771173836/PORTFOLIO/Clear%20Sight/ClearSight-6_eathb9.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771173835/PORTFOLIO/Clear%20Sight/ClearSight-7_xboazm.png",
    ],
    icon: <RiHotelFill />,
    title: "Clear Sight",
    description:
      "ClearSight is a mobile health application built with React Native (Expo) that helps in the early detection of cataracts by scanning and analyzing eye images. The system uses Azure Custom Vision AI for image classification and a Node.js + MongoDB backend for data processing and user management.",
    techStack1: "React Native",
    techStack2: "CSS",
    techStack3: "Node.js",
    techStack4: "MongoDB",
    code: "Code",
    gitIcon: <FaGithub />,
    link1: "https://github.com/Nathaniel-Owusu/RoyalEmber-Hotel.git",
    liveDemo: "Live Demo",
    link2: "https://royal-ember-hotel.vercel.app/",
    liveIcon: <AiOutlineDeliveredProcedure />,
  },
  {
    id: 4,
    isActive: true,
    images: [
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771250467/PORTFOLIO/Drive%20Elite/DriveElite-1_pwovta.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771250464/PORTFOLIO/Drive%20Elite/DriveElite-2_bncotn.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771250464/PORTFOLIO/Drive%20Elite/DriveElite-3_e1h9lu.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771250463/PORTFOLIO/Drive%20Elite/DriveElite-4_abr8mb.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771250464/PORTFOLIO/Drive%20Elite/DriveElite-5_ju9fkp.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771250465/PORTFOLIO/Drive%20Elite/DriveElite-6_awqc4v.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771250463/PORTFOLIO/Drive%20Elite/DriveElite-7_q6l0vr.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771250464/PORTFOLIO/Drive%20Elite/DriveElite-8_ygfchq.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771250465/PORTFOLIO/Drive%20Elite/DriveElite-9_vzfgba.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771250465/PORTFOLIO/Drive%20Elite/DriveElite-10_cvbpwh.png",
    ],
    icon: <GrGamepad />,
    title: "Drive Elite",
    description:
      "Drive Elite is a modern car rental platform built with Next.js that allows users to browse, book, and manage premium vehicle rentals with ease. The platform provides a seamless experience for customers looking for luxury, economy, and executive vehicles for personal or business travel.",
    techStack1: "React",
    techStack2: "Tailwind",
    techStack3: "Node.js",
    techStack4: "MongoDB",
    code: "Code",
    gitIcon: <FaGithub />,
    link1: "https://github.com/Nathaniel-Owusu/Gamers-Ring.git",
    liveDemo: "Live Demo",
    link2: "https://gamers-ring.vercel.app/",
    liveIcon: <AiOutlineDeliveredProcedure />,
  },
  {
    id: 5,
    isActive: true,
    images: [
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148653/PORTFOLIO/Gamers%20Ring/GamersRing-1_jifjcd.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148654/PORTFOLIO/Gamers%20Ring/GamersRing-2_pkrrei.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148656/PORTFOLIO/Gamers%20Ring/GamersRing-3_qgldxu.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148650/PORTFOLIO/Gamers%20Ring/GamersRing-4_yue9s9.png",
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1771148653/PORTFOLIO/Gamers%20Ring/GamersRing-5_mcp1hs.png",
    ],
    icon: <GrGamepad />,
    title: "Gamers Ring",
    description:
      "Gamer's Ring is a game website offering users the opportunity to access and download cracked games for PC, PS4, and PS5 consoles.the website features a streamlined interface designed specifically for effortless game discovery and downloading.",
    techStack1: "React",
    techStack2: "Tailwind",
    techStack3: "Node.js",
    techStack4: "MongoDB",
    code: "Code",
    gitIcon: <FaGithub />,
    link1: "https://github.com/Nathaniel-Owusu/Gamers-Ring.git",
    liveDemo: "Live Demo",
    link2: "https://gamers-ring.vercel.app/",
    liveIcon: <AiOutlineDeliveredProcedure />,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home" className="max-w-4xl mx-auto mt-20">
        <div className="flex flex-col gap-30">
          <div className="flex justify-between items-stretch h-105">
            <div className="flex flex-col justify-center gap-5 w-1/2 h-full">
              <h1 className="text-6xl font-black leading-tight">
                Mern Stack <br />
                <span className="inline-flex items-center gap-3">
                  Developer
                  <img
                    className="w-20 inline-block"
                    src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436295/PORTFOLIO/waving_hand_d8ov97.png"
                    alt="Waving hand"
                  />
                </span>
              </h1>

              <p className="text-base leading-relaxed">
                Hi, I'm Nathaniel Owusu. A passionate Full Stack <br />
                Developer based in Ghana, Kumasi | Accra
                <span className="inline-flex items-center ml-1">
                  <GrLocationPin className="text-blue-600" />
                </span>
              </p>

              <div className="flex items-center gap-4 text-base">
                <a
                  href="https://github.com/GANABA-25"
                  target="_blank"
                  className="group w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 transition duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-lg"
                >
                  <AiFillGithub className="transition-transform duration-300 group-hover:scale-110" />
                </a>

                <a
                  href="https://linkedin.com/in/nathanielowusu01"
                  target="_blank"
                  className="group w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 transition duration-300 
               hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg"
                >
                  <BsLinkedin className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center w-1/2 h-full">
              <div className="relative w-80 h-80 rounded-full overflow-hidden p-2">
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#ffd240] animate-[spin_20s_linear_infinite]" />
                <img
                  className="w-full h-full rounded-full"
                  src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1727979151/PORTFOLIO/original_picture_rq8bmg.jpg"
                  alt="profile"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h1 className="text-base font-black tracking-wide">Tech Stack</h1>

              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 lg:ml-26">
              {TechStack.map((stack) => (
                <div
                  key={stack.id}
                  className="group w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white"
                >
                  <img
                    className="w-6 h-6 transition duration-300 group-hover:scale-110"
                    src={stack.src}
                    alt={stack.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-4xl mx-auto mt-42">
        <div className="flex items-start justify-between gap-10">
          <div className="w-1/2 h-full">
            <img
              className="w-full h-full rounded-lg object-cover bg-black/5"
              src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712618515/PORTFOLIO/aboutImg_dbjpcr.png"
              alt="About illustration"
            />
          </div>

          <div className="w-1/2 h-full flex flex-col gap-2">
            <h1 className="text-base font-black text-blue-600 uppercase tracking-wide">
              About Me
            </h1>

            <p className="text-base font-black leading-snug">
              A dedicated Full Stack Developer <br />
              based in Ghana, Kumasi.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              I'm a passionate <strong>Full Stack Developer </strong>
              experienced <br /> in building responsive web and mobile
              applications <br /> using HTML, CSS, Bootstrap, Tailwind CSS,
              JavaScript, TypeScript, React, Next.js, and React Native .With
              Node.js and MongoDB on the back end, I turn ideas into scalable,
              high-performing digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-4xl mx-auto mt-42">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text-base font-black uppercase text-blue-600 tracking-wider">
              Portfolio
            </h1>

            <p className="text-xl font-black">
              Each project is a unique piece of development
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {projectData.map((project, index) => (
              <div
                key={project.id}
                className={`flex items-stretch gap-10 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 h-full rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <ImageSlider images={project.images} id={project.id} />
                </div>

                <div className="w-1/2 h-full flex flex-col justify-center gap-4">
                  <h1 className="font-black text-base flex justify-center items-center gap-2">
                    {project.title} {project.icon}
                  </h1>

                  <p className="text-sm leading-relaxed text-gray-700">
                    {project.description}
                  </p>

                  <ul className="flex justify-center items-center gap-4 text-sm font-black text-gray-700">
                    <li>{project.techStack1}</li>
                    <li>{project.techStack2}</li>
                    <li>{project.techStack3}</li>
                    <li>{project.techStack4}</li>
                  </ul>

                  <div className="flex justify-center items-center gap-6">
                    <a
                      href={project.link1}
                      target="_blank"
                      className="group relative flex justify-center items-center gap-2 text-sm font-semibold text-blue-600 px-4 py-2 rounded-md transition duration-300 hover:bg-blue-50 hover:-translate-y-1"
                    >
                      <span className="relative">
                        Code
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <FaGithub
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>

                    <a
                      href={project.link2}
                      target="_blank"
                      className="group relative flex justify-center items-center gap-2 text-sm font-semibold text-blue-600 px-4 py-2 rounded-md transition duration-300 hover:bg-blue-50 hover:-translate-y-1"
                    >
                      <span className="relative">
                        Live Demo
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <AiOutlineDeliveredProcedure
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto my-42">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-base font-black uppercase text-blue-600 tracking-wider">
              Contact
            </h1>

            <p className="text-xl font-black">Let’s work together</p>

            <p className="text-base text-gray-600">
              I'm open to freelance projects, collaborations, and full-time
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://wa.me/233596498006"
              target="_blank"
              className="group p-6 rounded-xl border border-gray-200 flex items-center gap-5 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition">
                📱
              </div>
              <div>
                <h2 className="font-black">WhatsApp</h2>
                <p className="text-gray-600 text-sm">Chat with me directly</p>
              </div>
            </a>

            <a
              href="mailto:nathanielOwusu01@gmail.com"
              className="group p-6 rounded-xl border border-gray-200 flex items-center gap-5 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition">
                ✉️
              </div>
              <div>
                <h2 className="font-black">Email</h2>
                <p className="text-gray-600 text-sm">
                  nathanielOwusu01@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+233596498006"
              className="group p-6 rounded-xl border border-gray-200 flex items-center gap-5 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 group-hover:bg-yellow-200 transition">
                ☎️
              </div>
              <div>
                <h2 className="font-black">Phone</h2>
                <p className="text-gray-600 text-sm">+233 596 698 006</p>
              </div>
            </a>

            <a
              href="https://github.com/GANABA-25"
              target="_blank"
              className="group p-6 rounded-xl border border-gray-200 flex items-center gap-5 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition">
                💻
              </div>
              <div>
                <h2 className="font-black">GitHub</h2>
                <p className="text-gray-600 text-sm">View my repositories</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

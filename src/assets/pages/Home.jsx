import Navbar from "../components/Navbar";

import { GrLocationPin } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const TechStack = [
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436294/PORTFOLIO/html_jowq7b.png",
    alt: "HTML",
  },
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436294/PORTFOLIO/css_tunheo.png",
    alt: "CSS",
  },
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436294/PORTFOLIO/Bootstrap_qsevym.png",
    alt: "JavaScript",
  },
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1767563642/PORTFOLIO/pngwing.com_1_a2vqsm.png",
    alt: "TypeScript",
  },
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436296/PORTFOLIO/Tailwind_pmblar.png",
    alt: "Tailwind",
  },
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436295/PORTFOLIO/Javascript_l9uiwj.png",
    alt: "NodeJS",
  },
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436295/PORTFOLIO/React_xkrlje.png",
    alt: "React",
  },
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1767563642/PORTFOLIO/pngwing.com_2_d4e1wc.png",
    alt: "Next",
  },
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1767563643/PORTFOLIO/pngwing.com_oosn1o.png",
    alt: "React Native",
  },
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1716991964/PORTFOLIO/pngwing.com_1_nykv2n.png",
    alt: "Bootstrap",
  },
  {
    src: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1727802595/PORTFOLIO/pngwing.com_i3bspz.png",
    alt: "MongoDB",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-30">
      <Navbar />
      <div className="">
        <section className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-30">
            <div className="flex justify-between">
              <div className="flex flex-col gap-5">
                <h1 className="text-6xl font-black leading-tight">
                  Full Stack <br />
                  <span className="inline-flex items-center gap-3">
                    Developer
                    <img
                      className="w-20 inline-block"
                      src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712436295/PORTFOLIO/waving_hand_d8ov97.png"
                      alt="Waving hand"
                    />
                  </span>
                </h1>

                <p className="text-[16px] leading-relaxed">
                  Hi, I'm Nathaniel Owusu. A passionate Full Stack <br />
                  Developer based in Ghana, Kumasi | Accra
                  <span className="inline-flex items-center ml-1">
                    <GrLocationPin className="text-blue-600" />
                  </span>
                </p>

                <div className="flex items-center gap-2 text-[16px]">
                  <AiFillGithub />
                  <BsLinkedin />
                </div>
              </div>

              <div className="w-80 h-80 rounded-full overflow-hidden">
                <img
                  className="w-full h-full"
                  src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1727979151/PORTFOLIO/original_picture_rq8bmg.jpg"
                  alt="profile"
                />
              </div>
            </div>

            <div className="flex justify-start items-center gap-5">
              <h1 className="text-[16px] font-black">Tech Stack</h1>
              <div className="flex items-center gap-5">
                {TechStack.map((stack, index) => (
                  <img
                    className="w-5 h-5"
                    key={stack.index}
                    src={stack.src}
                    alt={stack.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mt-30">
          <div className="flex items-start justify-between gap-10">
            <div className="w-1/2 h-full">
              <img
                className="w-full h-full object-cover bg-black/5"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712618515/PORTFOLIO/aboutImg_dbjpcr.png"
                alt="About illustration"
              />
            </div>

            <div className="w-1/2 h-full flex flex-col gap-2">
              <h1 className="text-[16px] font-black text-blue-600 uppercase tracking-wide">
                About Me
              </h1>

              <p className="text-[16px] font-black leading-snug">
                A dedicated Full Stack Developer <br />
                based in Ghana, Kumasi.
              </p>

              <p className="text-[16px] leading-relaxed text-gray-700">
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

        <section className="max-w-4xl mx-auto mt-30">
          <div className="flex flex-col gap-5">
            <h1 className="text-[16px] font-black uppercase text-blue-600">
              Portfolio
            </h1>
            <p className="text-[16px] font-black">
              Each project is a unique piece of development
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

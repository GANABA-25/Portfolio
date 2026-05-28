export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center md:justify-between items-center px-4 py-4 z-50 max-[767px]:bg-white max-[767px]:shadow-md">
      <h1 className="hidden md:block font-bold text-base">
        NathanielOwusu.dev
      </h1>

      <ul className="flex items-center gap-5 font-bold text-sm">
        <li>
          <a href="#home" className="relative group transition duration-300">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>

        <li>
          <a href="#about" className="relative group transition duration-300">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="relative group transition duration-300"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>

        <li>
          <a href="#contact" className="relative group transition duration-300">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>
    </div>
  );
}

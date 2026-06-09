import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-indigo-500/10 backdrop-blur-md bg-[#071225]/80">
      <div className="max-w-350 mx-auto px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
           <a href="#hero">
            <img 
              src={logo}
              alt="QuickTube Logo"
              className="h-42 w-auto object-contain"
            />
            </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10 nav-font">
            <a
              href="#hero"
              className="text-slate-400 hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-slate-400 hover:text-white transition"
            >
              About Project
            </a>

            <a
              href="#features"
              className="text-slate-400 hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#demo"
              className="text-slate-400 hover:text-white transition"
            >
              Demo
            </a>

             <a
              href="#workflow"
              className="text-slate-400 hover:text-white transition"
            >
              Workflow
            </a>

            <a
              href="#contact"
              className="text-slate-400 hover:text-white transition"
            >
              Contact
            </a>
          </nav>

          {/* Button */}
          <a href="#demo">
          <button
            className="
            px-8
            py-3
            rounded-2xl
            bg-linear-to-r
            from-violet-500
            to-blue-500
            text-white
            font-semibold
            shadow-lg
            shadow-violet-500/30
            hover:scale-105
            transition-all
            duration-300
            "
          >
            <FontAwesomeIcon icon={faBolt} /> Try Now
          </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
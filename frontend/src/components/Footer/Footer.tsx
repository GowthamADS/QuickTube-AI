import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons/faMapMarker";
import logo1 from "../../assets/images/logo.png";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
const Footer = () => {
  return (
    <footer
      id="contact"
      className="
      relative
      border-t
      border-violet-500/20
      bg-[#071225]
      py-20
      px-6
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-12
          "
        >
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex flex-col items-start">
              <img
                src={logo1}
                alt="QuickTube Logo"
                className="h-50 w-auto object-contain block -mb-10"
              />

              <p
                className="
                  -mt-4
                  text-slate-400
                  leading-8
                "
              >
                Transform YouTube videos into smart summaries
                using Artificial Intelligence and Natural
                Language Processing.
              </p>
            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/GowthamADS"
                className="
                px-3
                py-2
                rounded-xl
                bg-[#09142d]
                border
                border-violet-500/20
                hover:border-violet-500
                transition
                text-2xl
              "
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/gowthamads/"
                className="
                px-3
                py-2
                rounded-xl
                bg-[#09142d]
                border
                border-violet-500/20
                hover:border-violet-500
                transition
                text-2xl
                "
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <a href="#hero" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#demo" className="hover:text-white">
                  Demo
                </a>
              </li>

            </ul>

          </div>

          {/* Features */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Features
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>Smart Summarization</li>
              <li>Key Insights</li>
              <li>Timestamp Extraction</li>
              <li>Multi-Language Support</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gowthamads1216@gmail.com" className="hover:text-white">
                  <FontAwesomeIcon icon={faAt} /> gowthamads1216@gmail.com
                </a>
              </li>

              <li>
                <a href="https://gowtham-online.netlify.app/" className="hover:text-white">
                  <FontAwesomeIcon icon={faUser} /> Portfolio 
                </a>
              </li>

              <li>
                <FontAwesomeIcon icon={faPhone} /> +91 73388 33544
              </li>

              <li>
                
                  <FontAwesomeIcon icon={faMapMarker} /> Chennai, India
                
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Line */}
        <div
          className="
          mt-16
          pt-8
          border-t
          border-violet-500/10
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          "
        >
          <p className="text-slate-500">
            © 2026 QuickTube. All rights reserved.
          </p>

          <p className="text-slate-500">
            Built with <FontAwesomeIcon icon={faHeart} /> using React, TypeScript & FastAPI
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
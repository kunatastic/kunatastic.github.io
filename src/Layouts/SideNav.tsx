import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
function SideNav() {
  return (
    <>
      <nav className="nav__bar flex nav__flex">
        <NavigationLogo />
        <NavigationLinks />
        <SocialLogoSection />
      </nav>
    </>
  );
}
export default SideNav;

// =====================
const NavigationLogo: React.FC = () => {
  return <h1 className="logo">KKJ</h1>;
};

// =====================
const NavigationLinks: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <ul className="nav__links flex">
        <Link
          className={`animated ${
            location.pathname === "/" ? "selected selected__home" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`animated ${
            location.pathname === "/about" ? "selected selected__about" : ""
          }`}
          to="/about"
        >
          About Me
        </Link>
        <Link
          className={`animated ${
            location.pathname === "/education"
              ? "selected selected__education"
              : "none"
          }`}
          to="/education"
        >
          Education
        </Link>
        <Link
          className={`animated ${
            location.pathname === "/skills"
              ? "selected selected__skills"
              : "none"
          }`}
          to="/skills"
        >
          Skills
        </Link>
        <Link
          className={`animated ${
            location.pathname === "/projects"
              ? "selected selected__project"
              : "none"
          }`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`animated ${
            location.pathname === "/achievements"
              ? "selected selected__achievement"
              : "none"
          }`}
          to="/achievements"
        >
          Achievements
        </Link>
      </ul>
    </>
  );
};

// =====================
const SocialLogoSection: React.FC = () => {
  return (
    <>
      <div className="flex logo__flex">
        <a href="https://github.com/kunatastic">
          <div className="github flex">
            <SiGithub />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/kunal-kumar-jha/">
          <div className="linkedin flex">
            <FaLinkedinIn />
          </div>
        </a>
        <a href="mailto:kunatastic@gmail.com">
          <div className="gmail flex">
            <SiGmail />
          </div>
        </a>
        <a href="https://instagram.com/kunatastic">
          <div className="instagram flex">
            <SiInstagram />
          </div>
        </a>
      </div>
    </>
  );
};

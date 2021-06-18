import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function SideNav() {
  return (
    <>
      <nav className="nav__bar flex nav__flex">
        <NavigationLogo />
        <NavigationLinks />
        <SocialLogoSection />
        <HamBurger />
      </nav>
    </>
  );
}
export default SideNav;

// ====================
const HamBurger: React.FC = () => {
  return (
    <>
      <div className="hamburger">
        <GiHamburgerMenu />
      </div>
    </>
  );
};

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
              : ""
          }`}
          to="/education"
        >
          Education
        </Link>
        <Link
          className={`animated ${
            location.pathname === "/skills" ? "selected selected__skills" : ""
          }`}
          to="/skills"
        >
          Skills
        </Link>
        <Link
          className={`animated ${
            location.pathname === "/projects"
              ? "selected selected__project"
              : ""
          }`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`animated ${
            location.pathname === "/achievements"
              ? "selected selected__achievement"
              : ""
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
      <div className="nav__social flex logo__flex">
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

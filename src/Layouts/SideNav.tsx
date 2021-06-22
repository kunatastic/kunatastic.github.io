import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function SideNav() {
  const [openNav, setOpenNav] = useState<Boolean>(false);

  return (
    <>
      <div className={openNav === true ? "open" : "close"}>
        <nav className="nav__bar flex nav__flex">
          {openNav}
          <NavigationLogo />
          <NavigationLinks setOpenNav={setOpenNav} />
          <SocialLogoSection />
          <div className="hamburger" onClick={() => setOpenNav(!openNav)}>
            <GiHamburgerMenu />
          </div>
        </nav>
      </div>
    </>
  );
}
export default SideNav;

// ====================

// =====================
const NavigationLogo: React.FC = () => {
  return (
    <h1 className="logo logo__animation">
      <Link to="/">KKJ</Link>
    </h1>
  );
};

// =====================
const NavigationLinks = ({
  setOpenNav,
}: {
  setOpenNav: (value: Boolean) => void;
}) => {
  const location = useLocation();

  return (
    <>
      <ul className="nav__links flex">
        <Link
          className={`link__animation ${
            location.pathname === "/" ? "selected selected__home" : ""
          }`}
          onClick={() => setOpenNav(false)}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`link__animation ${
            location.pathname === "/skills" ? "selected selected__skills" : ""
          }`}
          onClick={() => setOpenNav(false)}
          to="/skills"
        >
          My Skillset
        </Link>

        <Link
          className={`link__animation ${
            location.pathname === "/education"
              ? "selected selected__education"
              : ""
          }`}
          onClick={() => setOpenNav(false)}
          to="/education"
        >
          Education
        </Link>

        <Link
          className={`link__animation ${
            location.pathname === "/projects"
              ? "selected selected__project"
              : ""
          }`}
          onClick={() => setOpenNav(false)}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`link__animation ${
            location.pathname === "/about" ? "selected selected__about" : ""
          }`}
          onClick={() => setOpenNav(false)}
          to="/about"
        >
          About Me
        </Link>
        <Link
          className={`link__animation ${
            location.pathname === "/achievements"
              ? "selected selected__achievement"
              : ""
          }`}
          onClick={() => setOpenNav(false)}
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
          <div className="github social__animation flex">
            <SiGithub />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/kunal-kumar-jha/">
          <div className="linkedin social__animation flex">
            <FaLinkedinIn />
          </div>
        </a>
        <a href="mailto:kunatastic@gmail.com">
          <div className="gmail social__animation flex">
            <SiGmail />
          </div>
        </a>
        <a href="https://instagram.com/kunatastic">
          <div className="instagram social__animation flex">
            <SiInstagram />
          </div>
        </a>
      </div>
    </>
  );
};

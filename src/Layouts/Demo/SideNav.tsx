import React from "react";
import { Link } from "react-router-dom";
import { SiDiscord, SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
function SideNav() {
  return (
    <>
      <nav className="nav__bar flex nav__flex">
        <div className="logo">KKJ</div>
        <ul className="nav__links flex">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/education">Education</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/achievements">Achievements</Link>
        </ul>
        <div className="flex logo__flex">
          <div className="github">
            <SiGithub />
          </div>
          <div className="linkedIN">
            <FaLinkedinIn />
          </div>
          <div className="discord">
            <SiDiscord />
          </div>
          <div className="mail">
            <SiGmail />
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideNav;

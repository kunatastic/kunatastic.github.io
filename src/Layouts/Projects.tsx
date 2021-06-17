import React from "react";
import SideNav from "./SideNav";

function Projects() {
  document.title =
    "My Projects | Portfolio Web Developer, AI/ML enthusiast and Competitive Programme";
  return (
    <>
      <div className="main__container container__project grid main__grid">
        <div>
          <SideNav />
        </div>
        <div className="content__container">
          <div className="content">
            <h1 className="me">Projects</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              odio ratione suscipit quidem, voluptate similique? Dicta quas,
              eaque facilis iure libero culpa repudiandae accusantium tenetur
              commodi eligendi vero blanditiis. Earum.Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Eligendi odio ratione suscipit
              quidem, voluptate similique? Dicta quas, eaque facilis iure libero
              culpa repudiandae accusantium tenetur commodi eligendi vero
              blanditiis. Earum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
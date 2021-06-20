import React from "react";

function Welcome() {
  document.title =
    "Kunal👋 | Portfolio Web Developer, AI/ML enthusiast and Competitive Programme";
  return (
    <>
      <div className="content__container container__home">
        <div className="content">
          <h1 className="me">Kunal Kumar Jha</h1>
          <p>
            I'm a <span className="imp">Full Stack Web Devloper</span>,
            <span className="imp"> AI ML Enthusiasts</span> and
            <span className="imp"> Competitive Programmer</span>. Student at{" "}
            <i>Vellore Institute of Technology, India</i>. I like and enjoy in
            research related learning. I have published 2 papers in the field of
            Artifical intelligence and computer vision.
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;

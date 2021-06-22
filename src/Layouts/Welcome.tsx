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
            Hey there👋, I'm Kunal Kumar Jha a 2nd year Computer Science
            graduate at Vellore Institute of Technology (VIT), India and I'm
            extremly enjoying the joy of learing and developing in react.js
            applications, with node.js and express powered backends using
            typescript. My main area of interest is research type learning
            recently, as on May 5th, 2021 I have submitted a paper on "Sentiment
            Analysis using Amazon Web Services and Artificial Intelligence /
            Machine Learning" to get publish in the Institute of Electrical and
            Electronics Engineers (IEEE) journal and I'm working on my 2nd paper
            now. I also have a keen interest in designing websites, posters or
            editing a video. As this website my portfolio is designed by me from
            scratch in react and react-router.
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;

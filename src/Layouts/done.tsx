import React from "react";

function done() {
  return (
    <div className="ct" id="t1">
      <div className="ct" id="t2">
        <div className="ct" id="t3">
          <div className="ct" id="t4">
            <div className="ct" id="t5">
              <ul id="menu">
                <a href="#t1">
                  <li className="icon fa fa-bolt" id="uno"></li>
                  Kunal
                </a>
                <a href="#t2">
                  <li className="icon fa fa-keyboard-o" id="dos"></li>
                  Kunal
                </a>
                <a href="#t3">
                  <li className="icon fa fa-rocket" id="tres"></li>
                  Kunal
                </a>
                <a href="#t4">
                  <li className="icon fa fa-dribbble" id="cuatro"></li>
                  Kunal
                </a>
                <a href="#t5">
                  <li className="icon fa fa-plus-circle" id="cinco"></li>
                  Kunal
                </a>
              </ul>

              <div className="page" id="p1">
                <section className="icon fa fa-bolt">
                  <span className="title">Bolt</span>
                  <span className="hint">
                    Like this pen to see the magic!...
                    <br /> Just kidding, it won't happen anything but I'll be
                    really happy If you do so.
                  </span>
                </section>
              </div>
              <div className="page" id="p2">
                <section className="icon fa fa-keyboard-o">
                  <span className="title">Type</span>
                </section>
              </div>
              <div className="page" id="p3">
                <section className="icon fa fa-rocket">
                  <span className="title">Rocket</span>
                </section>
              </div>
              <div className="page" id="p4">
                <section className="icon fa fa-dribbble">
                  <span className="title">Dribbble</span>
                  <p className="hint">
                    <a
                      href="https://dribbble.com/albertohartzet"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Im ready to play,{" "}
                      <span className="hint line-trough">invite me </span> find
                      me
                    </a>
                  </p>
                  <p className="hint">
                    Already invited by{" "}
                    <a
                      rel="noreferrer"
                      href="http://www.dribbble.com/mrpeters"
                      target="_blank"
                    >
                      Stan Peters
                    </a>
                  </p>
                </section>
              </div>
              <div className="page" id="p5">
                <section className="icon fa fa-plus-circle">
                  <span className="title">More</span>
                  <p className="hint">
                    <span>You love one page & CSS only stuff? </span>
                    <br />
                    <a
                      rel="noreferrer"
                      href="https://codepen.io/hrtzt/details/pgXMYb/"
                      target="_blank"
                    >
                      check this pen "Pure CSS One page vertical navigation"
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default done;

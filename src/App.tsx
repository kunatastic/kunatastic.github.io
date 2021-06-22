import { HashRouter, Route, Switch } from "react-router-dom";
import Welcome from "./Layouts/Welcome";
import About from "./Layouts/About";
import Education from "./Layouts/Education";
import Skills from "./Layouts/Skills";
import Achievements from "./Layouts/Achievements";
import Projects from "./Layouts/Projects";
import SideNav from "./Layouts/SideNav";

function App() {
  return (
    <>
      <HashRouter>
        <div className="parent">
          <SideNav />
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/about" exact component={About} />
            <Route path="/education" exact component={Education} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/achievements" exact component={Achievements} />
          </Switch>
        </div>
      </HashRouter>
    </>
  );
}

export default App;

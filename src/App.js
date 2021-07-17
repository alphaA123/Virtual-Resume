import "./App.css";
import Navbar from "./components/Navbar/navbar"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Html from "./components/Html";
import Javascript from "./components/Javascript";
import Mongodb from "./components/Mongodb";
import Node from "./components/Node";
import Reactjs from "./components/Reactjs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";

function App(){
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Html" component={Html} />
        <Route exact path="/Javascript" component={Javascript} />
        <Route exact path="/Mongodb" component={Mongodb} />
        <Route exact path="/Node" component={Node} />
        <Route exact path="/Reactjs" component={Reactjs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

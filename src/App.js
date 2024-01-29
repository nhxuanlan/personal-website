import "./commonStyles/App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import GroceryApp from "./components/GroceryApp/GroceryApp";
import BokachaWebsite from "./components/BokachaWebsite/BokachaWebsite";
import Illustration from "./components/Illustration/Illustration";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Renotech from "./components/Renotech/Renotech";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <ScrollToTop />
        <div className="main-content-wrapper">
          <Switch>
            <Route exact path="/works">
              <Works />
            </Route>
            <Route path="/works/grocery-list-app">
              <GroceryApp />
            </Route>
            <Route path="/works/bokacha-website">
              <BokachaWebsite />
            </Route>
            <Route path="/works/renotech">
              <Renotech />
            </Route>
            <Route path="/works/illustration">
              <Illustration />
            </Route>
            <Route exact path="/about-me">
              <About />
            </Route>
            <Route path="*">
              <Redirect to="/works" />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;

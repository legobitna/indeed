import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Candidates from "./pages/Candidates";
import Company from "./pages/Company";
import EditCandidatePage from "./pages/EditCandidatePage";
import CreateNewCandidate from "./pages/CreateNewCandidate";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const email = useSelector(state => state.email);

  const GrandChildren = () => {
    const dispatch = useDispatch();
    return (
      <div>
        <button onClick={() => dispatch({ type: "SIGNIN" })}>signin</button>
      </div>
    );
  };

  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Indeed
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link active">
              Home <span class="sr-only">(current)</span>
            </Link>
            <Link to="/homepage" class="nav-item nav-link">
              Homepage
            </Link>
            <Link to="/Company" class="nav-item nav-link">
              Company
            </Link>
            <Link to="/Candidates" class="nav-item nav-link">
              Candidates
            </Link>
          </div>
        </div>
      </nav>
      <Route path="/" exact component={Login} />
      <Route path="/homepage" exact component={HomePage} />
      <Route path="/Candidates" exact component={Candidates} />
      <Route path="/Company" exact component={Company} />
      <Route path="/candidates/:id" exact component={EditCandidatePage} />
      <Route path="/CreateNewCandidate" exact component={CreateNewCandidate} />
    </Router>
  );
}

export default App;

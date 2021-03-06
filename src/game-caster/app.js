import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import GoogleAuth from "../GoogleAuth";
import StreamCreate from "../components/stream/StreamCreate";
import StreamList from "../components/stream/StreamList";
import StreamEdit from "../components/stream/StreamEdit";
import StreamDelete from "../components/stream/StreamDelete";
import StreamShow from '../components/stream/StreamShow';
import "./App.css";
import routerHistroy from "../routerHistroy";


const PageOne = () => {
  return (
    <div>
      Page One
      <Link to="/pagetwo">Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <Link to="/">One</Link>
      Page Two
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        All Streams
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <GoogleAuth />
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Router history={routerHistroy}>
        <Switch>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" component={StreamCreate}></Route>
          <Route exact path="/streams/:id" component={StreamShow}></Route>
          <Route path="/streams/edit/:id" component={StreamEdit}></Route>
          <Route path="/streams/delete" component={StreamDelete}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

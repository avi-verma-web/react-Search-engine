import React from "react";
// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  console.log("object")
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/search" component={SearchPage}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

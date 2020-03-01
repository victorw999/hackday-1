import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LeaderBoard from "./component/LeaderBoard";
import Navbar from "./component/Navbar";
import UserDetail from "./component/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={LeaderBoard} />
          <Route path="/user/:id" component={UserDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

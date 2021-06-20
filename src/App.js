import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './viewLayer/components/NavBar';
import Universes from '../src/viewLayer/components/Universes';
import Stars from '../src/viewLayer/components/Stars';
import Imprint from '../src/viewLayer/components/Imprint';

export default function App() {
  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route path="/universes" component={Universes}/>
          <Route path="/stars" component={Stars}/>
          <Route path="/imprint" component={Imprint}/>
        </Switch>
    </Router>
  );
}

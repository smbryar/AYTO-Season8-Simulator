import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Season1 from './Season1/Season1';
import Season5 from './Season5/Season5';
import Season8 from './Season 8/Season8';
import NavBar from './NavBar/NavBar';

import './App.css';
import HomePage from './HomePage/HomePage';

function App() {
  const seasons = [1,2,3,4,5,6,7,8];
  const activeSeasons = [1,5,8];

  return (
    <Router>
      <div className="App">
        <NavBar seasons={seasons} activeSeasons={activeSeasons}/>
        <Switch>
          <Route path="/AYTO-Season8-Simulator/season1">
            <Container fluid>
              <Season1/>
            </Container>
          </Route>
          <Route path="/AYTO-Season8-Simulator/season5">
            <Container fluid>
              <Season5/>
            </Container>
          </Route>
          <Route path="/AYTO-Season8-Simulator/season8">
            <Container fluid>
              <Season8/>
            </Container>
          </Route>
          <Route exact path="/AYTO-Season8-Simulator">
            <Container fluid>
              <HomePage seasons={seasons} activeSeasons={activeSeasons}/>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

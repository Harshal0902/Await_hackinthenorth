import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="./login" component={LogIn} />
          <Route path="/signup" component={SignUp} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

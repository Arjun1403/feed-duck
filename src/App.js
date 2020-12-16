import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar'

import './App.css';

import Home from './components/MainSection/Home';
import DashBoard from './components/DashBoard/DashBoard';
import { useEffect } from 'react';

// function hashHandler() {
//   const id = window.location.hash.slice(1) // remove leading '#'
//   const el = document.getElementById(id)
//   if (el) {
//     el.scrollIntoView()
//   }
// }
// window.addEventListener('hashchange', hashHandler, false)

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/dashBoard' exact component={DashBoard} /> 
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/MainSection/Home';
import DashBoard from './components/DashBoard/DashBoard';

function App() {

  return (
    <Router>
      <Switch>
        <Route path={['/home', '/']} exact component={Home} />
        <Route path='/dashBoard' exact component={DashBoard} />
      </Switch>
    </Router>
  );
}

export default App;

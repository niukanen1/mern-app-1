import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import About from './Components/About'; 
import Main from './Components/Main';
import Vote from './Components/Vote';
import ResultList from './Components/ResultList';

function App() {
  return (
    <Router>
      {/* <div className="container"> */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Voting App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/vote" className="nav-link">Vote</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/resultlist" className="nav-link">Results</Link>
                </li>
              </ul>
              
            </div>
            
        </nav>
      {/* </div> */}
      <br/>
      <Route path="/" exact component={Main}/>
      <Route path="/vote" component={Vote}/>
      <Route path="/about" exact component={About}/>
      <Route path="/resultlist" component={ResultList}/>
    </Router>
  );
}

export default App;

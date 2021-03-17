import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import HomePage from './Components/HomePage';
import Header from './Components/partials/Header.jsx'
import './App.css';
import Gabe from './Components/Gabe'

function App() {
  return (
    <Router>
    <div>
        <Header/>
        <Route exact path='/Gabe' component={Gabe} /> 
      <h1>
        Homepage
      </h1>
        <HomePage/>
    </div>
    </Router>
  );
}
export default App;

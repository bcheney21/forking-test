import {BrowserRouter as Router} from 'react-router-dom'
import HomePage from './Components/HomePage';
import Header from './Components/partials/Header.jsx'
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <h1>
        Homepage
      </h1>
        <HomePage/>
        <Header/>
    </div>
    </Router>
  );
}
export default App;

import {BrowserRouter as Router} from 'react-router-dom'
import HomePage from './Components/HomePage';
import Header from './Components/partials/Header.jsx'
import './App.css';
import Nakisha from './Components/Nakisha'

function App() {
  return (
    <Router>
    <div>
      <h1>
        Homepage
      </h1>
        <HomePage/>
        <Header/>
        <Nakisha/>
    </div>
    </Router>
  );
}
export default App;

import './App.css';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import index from "./components/index/index";
import Navbar from "./components/navbar/navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path="/" exact component={index}></Route>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import index from "./components/index/index";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={index}></Route>
      </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Block from './code/Block'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
      <Router>
        <Block />
      </Router>
  );
}

export default App;

import{BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';
import About from "./components/about";
import Home from "./components/home";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Learn React
        </p>
      </header>
      <BrowserRouter>
        <Switch>
        
        <Route path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/contact-info" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

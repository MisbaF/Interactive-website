import{BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';
import About from "./components/about";
import Home from "./components/home";
import Contact from "./components/contact";
import AppHeader from "./components/AppHeader";
import Posts from "./components/posts";

function App() {
  return (
    <div className="App">
     

     
      <BrowserRouter>
      <AppHeader/>
      <div id="card">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/contact-info" component={Contact} />
        </Switch>
      </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

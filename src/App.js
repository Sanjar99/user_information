import "./App.css";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import Person from "./components/Person/Person";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Home}  />
        <Route path="/person" component={Person} />
        <Route path="/" component={Login} exact/>
      </Switch>
    </div>
  );
}

export default App;

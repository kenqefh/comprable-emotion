import Home from "./pages/Home";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      {" "}
      {/* HOC */}
      <div className="App">
        <Switch>
          <Route path="/products/:category" component={Main} />
          <Route path="/products" component={Main} />
          <Route path="/sign-up" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

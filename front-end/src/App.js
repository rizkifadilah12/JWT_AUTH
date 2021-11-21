import Login from "./component/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./component/Register";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
     <Login/>
      </Route>
      <Route path="/register">
     <Register/>
      </Route>
      <Route path="/dashboard">
     <Navbar/>
     <Dashboard/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

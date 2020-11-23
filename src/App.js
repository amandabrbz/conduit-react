import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/login">
          <Auth register={false} />
        </Route>
        <Route path="/register">
          <Auth register={true} />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

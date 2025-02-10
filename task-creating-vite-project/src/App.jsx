import "./App.css";
import BlogDetails from "./blogDetails";
import Nav from "./components/nav";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Create from "./pages/create";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
